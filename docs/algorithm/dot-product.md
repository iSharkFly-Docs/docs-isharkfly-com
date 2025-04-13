# 点积（Dot Product）

> 🔔 参与讨论：https://www.isharkfly.com/t/dot-product/15119

### 描述

给出两个数组，求它们的点积。([Wikipedia](https://en.wikipedia.org/wiki/Dot_product))

如果没有点积则返回-1

### 样例

```
Input:A = [1,1,1]
B = [2,2,2]
Output:6
```

### 代码

请单击下面链接在 GitHub 上查看最新的源代码：

https://github.com/honeymoose/codebank-algorithm/blob/main/src/test/java/com/ossez/codebank/algorithm/tests/lintcode/LintCode1480DotProductTest.java

### 点评

这个问题的关键是要了解点积是如何进行计算的。

对输入的数组还需要进行 NULL 的校验和计算。

摘录点积的计算方法如下：

向量是由n个实数组成的一个n行1列（n*1）或一个1行n列（1*n）的有序数组；

向量的点乘,也叫向量的内积、数量积，对两个向量执行点乘运算，就是对这两个向量对应位一一相乘之后求和的操作，点乘的结果是一个标量。

点乘公式

对于向量 a 和向量 b：

![|607x109](https://cdn.isharkfly.com/com-isharkfly-www/discourse-uploads/original/2X/f/f6947f0a87ba1c1f9bce954559a000440bd81bf3.jpeg)

a和b的点积公式为：

![|405x89](https://cdn.isharkfly.com/com-isharkfly-www/discourse-uploads/original/2X/b/b4644663ff6807a7b04ca1e62fbfa5d574e1bf34.jpeg)

要求一维向量 a 和向量 b 的行列数相同。

因为要求向量 a 和 b 的行列数相同，因此在程序中需要先进行判断才可以。