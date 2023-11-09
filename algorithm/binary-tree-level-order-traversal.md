# 二叉树的层次遍历（Binary Tree Level Order Traversal）

> 🔔 参与讨论：https://www.isharkfly.com/t/binary-tree-level-order-traversal/15118

## 中文描述

给出一棵二叉树，返回其节点值的层次遍历（逐层从左往右访问）

## 样例

给一棵二叉树 `{3,9,20,#,#,15,7}` ：

```
  3
 / \
9  20
  /  \
 15   7
```

返回他的分层遍历结果：

```
[
  [3],
  [9,20],
  [15,7]
]
```

## 挑战

挑战1：只使用一个队列去实现它

挑战2：用BFS算法来做

## 思路和点评

这个程序可以使用队列的广度优先算法来进行遍历。

需要注意的是，因为在输出结果的时候需要按照层级来进行输出，那么需要考虑的一个算法就是二叉树的层级遍历算法。

这个算法要求在遍历的时候记录树的层级。

## 源代码
GitHub 的源代码，请访问下面的链接：
https://github.com/honeymoose/codebank-algorithm/blob/main/src/test/java/com/ossez/codebank/algorithm/tests/lintcode/LintCode0069LevelOrderTest.java
