# 二叉树的序列化和反序列化（Serialize and Deserialize Binary Tree）

> 🔔 参与讨论：https://www.isharkfly.com/t/serialize-and-deserialize-binary-tree/15125/1

中文标题【二叉树的序列化和反序列化】

## 描述

设计一个算法，并编写代码来序列化和反序列化二叉树。将树写入一个文件被称为“序列化”，读取文件后重建同样的二叉树被称为“反序列化”。

如何反序列化或序列化二叉树是没有限制的，你只需要确保可以将二叉树序列化为一个字符串，并且可以将字符串反序列化为原来的树结构。

对二进制树进行反序列化或序列化的方式没有限制，LintCode将您的`serialize`输出作为`deserialize`的输入，它不会检查序列化的结果。

## 样例

给出一个测试数据样例， 二叉树`{3,9,20,#,#,15,7}`，表示如下的树结构：

```
  3
 / \
9  20
  /  \
 15   7
```

我们的数据是进行 BFS 遍历得到的。当你测试结果 wrong answer时，你可以作为输入调试你的代码。

你可以采用其他的方法进行序列化和反序列化。

## 代码

GitHub 的源代码，请访问下面的链接：

https://github.com/honeymoose/codebank-algorithm/blob/main/src/test/java/com/ossez/codebank/algorithm/tests/lintcode/LintCode0007SerializeAndDeserializeTest.java

## 点评

本题目主要需要你对二叉树的遍历方法有所了解。

遍历二叉树主要有 2 类方法，分别为深度优先（DFS）和广度优先（BFS）。

在深度优先中，你有又可以使用前序，中序和后序搜索方法，你可以使用递归或者非递归算法实现。对于广度优先算法，一般都会采用非递归的实现方法进行实现。