# 岛屿个数（Number of Islands）

> 🔔 参与讨论：https://www.isharkfly.com/t/number-of-islands/15124

## 描述

给一个01矩阵，求不同的岛屿的个数。

0代表海，1代表岛，如果两个1相邻，那么这两个1属于同一个岛。我们只考虑上下左右为相邻。

## 样例

在矩阵：

```
[
  [1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1]
]
```

中有 `3` 个岛。

## 代码

GitHub 的源代码，请访问下面的链接：
https://github.com/honeymoose/codebank-algorithm/blob/main/src/test/java/com/ossez/codebank/algorithm/tests/lintcode/LintCode0433NumIslandsTest.java

## 点评

本质是求矩阵中连续区域的个数，很容易想到需要用深度优先搜索 DFS 来解，我们需要建立一个 visited 数组用来记录某个位置是否被访问过，对于一个为
true 且未被访问过的位置，我们递归进入其上下左右位置上为 true 的数，将其 visited 对应值赋为
true，继续进入其所有相连的邻位置，这样可以将这个连通区域所有的数找出来，并将其对应的 visited 中的值赋 true，找完次区域后，我们将结果
res 自增 1，然后我们在继续找下一个为 true 且未被访问过的位置，以此类推直至遍历完整个原数组即可得到最终结果。

这里需要有一个递归的调用。在递归调用之前需要进行判断是否超出边际，如果超出边际的话，就要跳出循环。

在一个节点进行遍历的时候，需要在递归调用的时候，同时针对这个节点搜索上下左右 4 个节点，如果找到需要了满足条件的
true，就继续查找，如果没有找到就退出。在这个过程的时候，需要将访问过的节点保存到访问控制的 2 维数组中。以便于在下次查找的时候跳过这个节点。