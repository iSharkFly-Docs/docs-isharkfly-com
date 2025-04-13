# 上下计数（Count Up Down）

> 🔔 参与讨论：https://www.isharkfly.com/t/count-up-down/313

这个题目是 Kayak 发布的代码挑战题目。

最简单的描述就是不使用循环，输出 0 到 5，然后同样不是会用循环的方式再次输出 5 到 0。

## 英文描述

### Part 1

Write a program that counts in sequential order when given a start and end value - without using any iterative programing loops, i.e. while, for, do, for-each, etc.

You can assume that both the start and end values will always be positive and that the start value will always be less then the end value. There should only be one method with the following signature:

void countUp(int start, int end) {
// All code exercise code should go here
}

Here is example output with start=0 and end=5:

[ 0,1,2,3,4,5]

### Part 2

Continuing with part 1 change the output of the test, so that it now prints out in sequential order to the end value (only once), but then also counts down to the start value.

Again, using no iterative loops, and assuming that both the start and end values will always be positive and that start value will always be less then the end value. There should only be one method with the following signature:

void countUpAndDown(int start, int end) {
// All code exercise code should go here
}

Here is example output with start=0 and end=5:

[0,1,2,3,4,5,4,3,2,1,0]

## 中文描述

这里我不按照原文一字一字的翻译，但是尽量按照题目的要求把题目解释清楚。

最简单的描述就是不使用循环，输出 0 到 5，然后同样不是会用循环的方式再次输出 5 到 0。

本题目分 2 部分，第一部分是不使用循环的方式输出 0 到 5，第二部分是不使用循环的方式输出 0 到 5 以后，再输出 5 到 0。

其中需要注意的是 5 只能输出一次。

## 思路和点评

不使用 For 循环的方式输出 0 到 5 ，我们可以想到有几个方法。

第一个方法可能比较容易想到的就是递归调用，你可以根据输入的值，递归调用需要的次数就可以输出值了。你还可以采用计算机时钟的方式进行输出。

在这里我们采用递归调用的方式进行输出。

## 源代码

源代码和有关代码的更新请访问 GitHub：

https://github.com/cwiki-us/codebank-algorithm/blob/master/src/main/java/com/ossez/codebank/interview/KayakCountUpDown.java

测试类请参考：

https://github.com/cwiki-us/codebank-algorithm/blob/master/src/test/java/com/ossez/codebank/interview/tests/KayakTest.java

## 测试结果

上面程序的测试结果如下：
```
2018/12/25 21:23:54 DEBUG [com.ossez.codebank.interview.tests.KayakTest] - TEST Count Up and Down
2018/12/25 21:23:54 DEBUG [com.ossez.codebank.interview.tests.KayakTest] - [2 -> 5]
2018/12/25 21:23:54 DEBUG [com.ossez.codebank.interview.KayakCountUpDown] - BEGIN
2018/12/25 21:23:54 DEBUG [com.ossez.codebank.interview.tests.KayakTest] - UP - [2, 3, 4, 5]
2018/12/25 21:23:54 DEBUG [com.ossez.codebank.interview.KayakCountUpDown] - BEGIN
2018/12/25 21:23:54 DEBUG [com.ossez.codebank.interview.tests.KayakTest] - UP & DOWN - [2, 3, 4, 5, 4, 3, 2]
2018/12/25 21:23:54 DEBUG [com.ossez.codebank.interview.tests.KayakTest] - [0 -> 5]
2018/12/25 21:23:54 DEBUG [com.ossez.codebank.interview.KayakCountUpDown] - BEGIN
2018/12/25 21:23:54 DEBUG [com.ossez.codebank.interview.tests.KayakTest] - UP - [0, 1, 2, 3, 4, 5]
2018/12/25 21:23:54 DEBUG [com.ossez.codebank.interview.KayakCountUpDown] - BEGIN
2018/12/25 21:23:54 DEBUG [com.ossez.codebank.interview.tests.KayakTest] - UP & DOWN - [0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0]
2018/12/25 21:23:54 DEBUG [com.ossez.codebank.interview.tests.KayakTest] - [-1 -> 5]
2018/12/25 21:23:54 DEBUG [com.ossez.codebank.interview.KayakCountUpDown] - BEGIN
2018/12/25 21:23:54 DEBUG [com.ossez.codebank.interview.tests.KayakTest] - UP - [-1, 0, 1, 2, 3, 4, 5]
2018/12/25 21:23:54 DEBUG [com.ossez.codebank.interview.KayakCountUpDown] - BEGIN
2018/12/25 21:23:54 DEBUG [com.ossez.codebank.interview.tests.KayakTest] - UP & DOWN - [-1, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, -1]
```
