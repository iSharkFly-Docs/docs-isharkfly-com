# 展平嵌套数组（Flatten Nested Arrays）

> 🔔 参与讨论：https://www.isharkfly.com/t/flatten-nested-arrays/314这个题目是在 

PillPack 现场面谈的时候的一个题目。

## 中文描述

题目要求比较简单：[1,2,[3],[[4]],5,6] -> [1,2,3,4,5,6]

就是数组中嵌套数组，考察一个数组[1,2,[3],[[4]],5,6]。 你怎么能够输出 1,2,3,4,5,6（并不要求按照顺序输出）。

这里是一个嵌套数组，你需要将这个数组中的值全部取出来。

## 思路和点评

不清楚其他语言中这个数据结构怎么存储，我假设的是在 Java 中存储的对象。

可以采用队列的方式来实现，例如，在 Java 中存储了整数，1， 2， 对象，[3] 为一个数组对象。

你可以先遍历一次 List，将所有的 List 的对象都压入队列中，然后进行出队。

在出队时候，判断对象是否为整数对象，如果是整数对象，就输出，如果不是整数对象，然后将数组对象继续进行遍历，然后压入队列，然后再出队。

在这里讨论的问题比较多，还有 [[[2]5]] 这种多层嵌套的问题。

经过网站上的考古，这里有 2 个方法可以更快的实现。1 是递归的方法，2 是 利用 Java 8 的 Stream 特性。

在写测试代码之前，你需要明白下数据结构的定义，要不然你没有办法测试。在 Java 中你可以定义为对象数组，如下：

`Object[] array = { ` `1` `, ` `2` `, ` `new` `Object[] { ` `3` `, ` `4` `, ` `new` `Object[] { ` `5` `, ` `new` `Object[] { ` `new` `Object[] { ` `6` `} } }, ` `7` `}, ` `8` `, ` `9` `, ` `10` `};`

然后可以利用递归，在对对象数组进行遍历的时候，如果你遇到了对象，那么你需要再次调用你的方法，对对象中的内容进行遍历，如果这个时候已经没有对象了，可以返回第二层遍历的结果，并且插入到上层 List 列表中。

如果你使用的 Java 8 的 Stream，你需要对 Stream 的使用和方法比较了解才可以。这里也涉及到了递归，只是写法有点不同罢了。

还有一个更加简单粗暴的方法，当然我不认为这个方法是出题人希望考察的目标，在 Java 中你可以将数组直接转换成 String 字符串进行输出，比如说上面的对象队列，你可以转换为：` [1, 2, [3, 4, [5, [[6]]], 7], 8, 9, 10]` 字符串进行输出，然后使用 Java 的 Split 函数，进行按照逗号拆分后，然后将多余 [ 和 ] 符号去掉，然后再将内容重新放回 List。 这个有点简单粗暴，但是也一样能够达到目的。

## 源代码
源代码和有关代码的更新请访问 GitHub：

https://github.com/cwiki-us/codebank-algorithm/blob/master/src/test/java/com/ossez/codebank/interview/tests/PillPackTest.java

## 测试类请参考：

https://github.com/cwiki-us/codebank-algorithm/blob/master/src/test/java/com/ossez/codebank/interview/tests/PillPackTest.java

## 测试结果
上面程序的测试结果如下：
```
2018/12/27 13:39:22 DEBUG [com.ossez.codebank.interview.tests.PillPackTest] - Test FlattenNestedArrays
2018/12/27 13:39:22 DEBUG [com.ossez.codebank.interview.tests.PillPackTest] - LOOP: [1, 2, [3, 4, [5, [[6]]], 7], 8, 9, 10] - > [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
2018/12/27 13:39:22 DEBUG [com.ossez.codebank.interview.tests.PillPackTest] - Java 8: [1, 2, [3, 4, [5, [[6]]], 7], 8, 9, 10] - > [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```