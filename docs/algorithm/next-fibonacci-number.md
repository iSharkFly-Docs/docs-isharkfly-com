# 下一个斐波拉契数（Next Fibonacci Number）

> 🔔 参与讨论：https://www.isharkfly.com/t/next-fibonacci-number/15116

中文标题【下一个斐波拉契数】

Write a program that takes input of integer N, followed by N more integers.

For each integer, output the next fibonacci number after it.

Fibonacci number: Any number that belongs to the fibonacci series.

Constraints:

Your program should run correctly for the first 69 Fibonacci numbers.

Your output lines should not have any trailing or leading whitespace.

```
Input
3
1
9
22
 
 
Output
2
13
34
```

Explanation: 2 is the next fibonacci number greater than 1, the fibonacci number that comes after 9 is 13. 34 is the
next fibonacci number after 22.

## 英文描述

英文描述请参考下面的图。

![|636x419](https://cdn.isharkfly.com/com-isharkfly-www/discourse-uploads/original/2X/6/650a6f54f89278f70df08874faafbd4a211f4ec6.jpeg)

## 中文描述

根据给定的值，返回这个值后面的下一个斐波拉契数列中的下一个数。

在斐波拉契数列中存储 60 个 斐波拉契数。

例如，给定整数 1，那么应该返回的结果是 2 。因为给定整数 1 后面的下一个斐波拉契数是 2。

如果给定的数值是 9 的话，那么下一个斐波拉契数应该是 13。

斐波拉契数列又译为菲波拿契数列、菲波那西数列、斐波那契数列、黄金分割数列。

用文字来说，就是费波那契数列由0和1开始，之后的费波那契系数就是由之前的两数相加而得出。首几个费波那契系数是：

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233……（OEIS中的数列A000045）

![](https://cdn.isharkfly.com/com-isharkfly-www/discourse-uploads/original/2X/0/0cae62787878d2e5ea7289508c705e9ac47c62f5.jpeg)

## 思路和点评

首先计算斐波拉契数列，然后将数值存储到数组中。

定义一个数组，在这个数组中先存储 60 个从小到大的斐波拉契数。

然后将给定的数值与数值中存储的斐波拉契数进行对比，这个时候你需要对数组中的斐波拉契数进行遍历。当找到大于当前给定的整数以后，可以
Break 这次比对并且返回（输出）这个值。

## 源代码

源代码和有关代码的更新请访问 GitHub：

https://github.com/cwiki-us/codebank-algorithm/blob/master/src/main/java/com/ossez/codebank/interview/ManNextFibonacciNumber.java

运行建议：

这个方法因为测试平台的问题，我们没有写到测试类中。我们是直接定义了一个可以运行的类。

你可以在你的 Eclipse 平台上，直接运行这个类。

在你运行类以后的 Console 控制台窗口，你首先需要输入数字 3 ，这个数字 3 表示这次运行你需要进行 3 次测试。

然后输入测试数字，例如，你可以输入测试数字 1，那么，程序将会输出 1 Next Fibonacci [2]。

这个与实际题目要求的有所差异，你需要进行调整，而且题目是需要使用 System.out.println 输出的，请注意我们在我们的源程序中注释掉了这个输出。

## 测试结果

上面程序的测试结果如下：

```
3
1
2019/02/07 20:59:25 DEBUG [com.ossez.codebank.interview.ManNextFibonacciNumber] - 1 Next Fibonacci [2]
9
2019/02/07 20:59:46 DEBUG [com.ossez.codebank.interview.ManNextFibonacciNumber] - 9 Next Fibonacci [13]
22
2019/02/07 20:59:49 DEBUG [com.ossez.codebank.interview.ManNextFibonacciNumber] - 22 Next Fibonacci [34]
```