# 构建城堡（Build Castles）

> 🔔 参与讨论：https://www.isharkfly.com/t/build-castles/315

中文标题【构建城堡】

Charlemagne, the King of Frankie,

## 英文描述

请参考图片中的说明。

![](https://cdn.isharkfly.com/com-isharkfly-www/discourse-uploads/optimized/2X/a/a264461addc3a7f7ac216c90e958eb906c45b1e6_2_443x500.png)

## 中文描述

根据给出的数组确定能够盖多少城堡。

## 思路和点评

我不能确定我的思路是正确的，也欢迎大家参与讨论。

根据给出的数组，因为有重复的值，我首先想到的是将给出的数组进行一次过滤和处理，去掉重复的值。

例如，给出的数组为：int[] A = { 2, 2, 3, 4, 3, 3, 2, 2, 1, 1, 2, 5 };，那么我希望处理为：int[] A = { 2, 3, 4, 3, 2, 1, 2,
5 }; 去掉重复的值，因为重复的值在这里没有意义。

![](https://com-ossez-www-discourse.s3.dualstack.us-east-2.amazonaws.com/discourse-uploads/original/1X/9cd25f567b772c20aacfc6e6ebdc018d16f5e3a1.jpeg)

然后根据新的数组进行判断，需要判断的是 2 个端点，你需要将 2 个端点考虑为 0。

那么根据上面已经处理过的数组，你在进行遍历的时候，针对第一个值 2 ，你需要判读左侧的值和右侧的值，因为默认左侧的值一直为 0
，那么右侧的值为 3 的话，那么这里需要 v 需要 +1；

第 2 个值，因为第二个值的左侧，3 > 2, 但右侧 3 < 4。因此这个值不适合。

第 3 个值，左侧：4 > 3, 右侧 4 >3 这个值是合适的。

从这里我们找到的规律是，进行一次遍历，找到，如果只的左侧和右侧同时小于这值，或者左侧和右侧都同时大于这个值，那么这个值是合适的取值。

需要注意一个情况就是 {-3, -3}，你初始化数组的时候，这个值为 {-3}，那么这个地方是最少有一个合适的值。

## 源代码

源代码和有关代码的更新请访问 GitHub：

https://github.com/cwiki-us/codebank-algorithm/blob/master/src/test/java/com/ossez/codebank/interview/tests/WayfairTest.java

测试类请参考：

https://github.com/cwiki-us/codebank-algorithm/blob/master/src/test/java/com/ossez/codebank/interview/tests/WayfairTest.java

## 测试结果

上面程序的测试结果如下：

```
2018/12/29 00:43:16 DEBUG [com.ossez.codebank.interview.tests.WayfairTest] - V - [2]
2018/12/29 00:43:16 DEBUG [com.ossez.codebank.interview.tests.WayfairTest] - H - [2]
2018/12/29 00:43:16 DEBUG [com.ossez.codebank.interview.tests.WayfairTest] - H + V - [4]
```