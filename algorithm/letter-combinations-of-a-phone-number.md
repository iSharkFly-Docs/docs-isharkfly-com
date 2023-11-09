# 电话号码的字母组合（Letter Combinations of a Phone Number）

> 🔔 参与讨论：https://www.isharkfly.com/t/letter-combinations-of-a-phone-number/15121

## 描述

给定一个字符串，字符串中不包含 01。返回这个字符串中所有可能的字母组合返回结果。

数字和字母的的映射图片，请参考下面的电话拨号盘。

![](https://cdn.isharkfly.com/com-isharkfly-www/discourse-uploads/original/2X/6/65862d012d17784537d8f697caae99d3b8f49bde.jpeg)

## 样例

给定 `"23"`

返回 `["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]`

## 代码

GitHub 的源代码，请访问下面的链接：

https://github.com/honeymoose/codebank-algorithm/blob/main/src/test/java/com/ossez/codebank/algorithm/tests/lintcode/LintCode0425LetterCombinationsTest.java

## 点评

本题目主要考察你对递归调用的熟练使用程度。

有关递归调用的方法，请自行脑补，或者 Google 查询。

思路主要分 2 部分，第一部分存储使用的数据结构，你可以使用 Map 也可以使用数组，效果都是一样的。