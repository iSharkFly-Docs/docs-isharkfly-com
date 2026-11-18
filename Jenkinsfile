pipeline {
    agent any

    options {
        ansiColor('xterm')
        disableConcurrentBuilds()
        timeout(time: 30, unit: 'MINUTES')
        buildDiscarder(logRotator(numToKeepStr: '30'))
    }

    tools {
        nodejs 'NodeJS 22.14.0'
    }

    environment {
        PRJ_NAME = 'docs-isharkfly-com'

        // 使用仓库内提交的 Yarn 4（.yarn/releases），无需在 Jenkins 节点上安装 yarn / corepack
        YARN = 'node .yarn/releases/yarn-4.9.1.cjs'
        // wrangler 不在 devDependencies 中，固定主版本，避免 npx 拉到不兼容的新版本
        WRANGLER = 'npx --yes wrangler@4'

        // Cloudflare API Token（Jenkins Secret text 凭据，需要 Workers Scripts:Edit 权限）
        CLOUDFLARE_API_TOKEN = credentials('sharkdat-cloudflare-api-token')
        // Cloudflare Account ID（Secret text 凭据），避免 wrangler 调用 /memberships 查询账号
        CLOUDFLARE_ACCOUNT_ID = credentials('sharkdat-cloudflare-account-id')

        // 不让 wrangler 发送使用统计、不弹交互提示
        WRANGLER_SEND_METRICS = 'false'
        CI = 'true'
        // VitePress 文档较多，构建时适当放宽 Node 堆内存
        NODE_OPTIONS = '--max-old-space-size=4096'
    }

    stages {
        stage('Configure') {
            steps {
                sh 'git config --global url."https://github.com/".insteadOf git://github.com/'
                sh 'node --version && npm --version && ${YARN} --version'
            }
        }

        stage('Install') {
            steps {
                // 等价于 npm ci：lockfile 有变化时直接失败
                sh '${YARN} install --immutable'
            }
        }

        stage('Build') {
            steps {
                echo 'Build VitePress docs ...'
                sh '${YARN} docs:build'
            }
        }

        stage('Deploy - CF') {
            steps {
                script {
                    withEnv([
                        'LANG=C.UTF-8',
                        'LC_ALL=C.UTF-8',
                        'NO_COLOR=1',
                        'TERM=dumb'
                    ]) {
                        // 部署消息：显示在 Cloudflare 控制台 → Worker → Deployments
                        def shortSha = env.GIT_COMMIT ? env.GIT_COMMIT.take(7) : 'unknown'
                        def deployMsg = "Jenkins ${env.JOB_NAME} #${env.BUILD_NUMBER} (${shortSha})"

                        // Tag 构建：部署到 production 环境（wrangler.jsonc 中的 env.production）
                        if (env.TAG_NAME?.trim()) {
                            sh """
                                \${WRANGLER} deploy --env production \\
                                  --message '${deployMsg}' \\
                                  --tag '${env.TAG_NAME}'
                            """
                            return
                        }

                        // main 分支：部署默认 Worker
                        if (env.BRANCH_NAME == 'main') {
                            sh """
                                \${WRANGLER} deploy --env="" \\
                                  --message '${deployMsg}' \\
                                  --tag '${shortSha}'
                            """
                            return
                        }

                        // PR 或其他分支：上传 Preview Version，不影响线上流量
                        def branchArg = env.CHANGE_ID
                            ? "pr-${env.CHANGE_ID}"
                            : env.BRANCH_NAME
                        def previewAlias = branchArg
                            .toLowerCase()
                            .replaceAll(/[^a-z0-9-]+/, '-')
                            .replaceAll(/^-+|-+$/, '')

                        // 打印当前 token 所属账号，便于排查 "Worker does not yet exist"（通常是账号不对，
                        // 或默认 Worker 还没有通过 main 分支部署过一次）
                        sh '${WRANGLER} whoami'
                        sh """
                            \${WRANGLER} versions upload --env="" \\
                              --preview-alias '${previewAlias}' \\
                              --message '${deployMsg}'
                        """
                    }
                }
            }
        }
    }

    post {
        always {
            script {
                env.BUILD_STARTED_AT = new Date(currentBuild.startTimeInMillis)
                    .format('yyyy-MM-dd HH:mm:ss z', TimeZone.getTimeZone('America/New_York'))
                env.BUILD_DURATION_TEXT = currentBuild.durationString

                emailext (
                    mimeType: 'text/html; charset=UTF-8',
                    subject: "Build ${currentBuild.currentResult}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
                    body: '${DEFAULT_CONTENT}',
                    from: 'postmaster@mail.sharkdat.com',
                    to: 'dev@sharkdat.com'
                )
            }
        }
    }
}
