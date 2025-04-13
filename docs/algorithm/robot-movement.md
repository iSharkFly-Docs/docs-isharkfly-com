# 机器人移动（Robot Movement）

> 🔔 参与讨论：https://www.isharkfly.com/t/robot-movement/312

中文标题【机器人移动】

这个题目是 Kayak 发布的代码挑战题目。

我认为题目本身描述的不是十分清楚，方法需要返回结果，但是结果没有说明是机器人最后的坐标位置，还是最后的坐标位置距离原点的距离。同时，机器人的初始化方向等都没有十分明确的定义。

根据测试数据，机器人应该是从下往上（初始化的方向）。因为如果初始化的方向不确定的话，最后的坐标值可能会不一致。

我这里假设程序应该返回的是机器人的最后坐标位置，并且初始化的位置为 (0,0)，方向为从下往上。

## 英文描述

A robot lands on Mars, which happens to be a cartesian grid; assuming that we hand the robot these instructions, such as
LFFFRFFFRRFFF, where "L" is a "turn 90 degrees left", "R" is a "turn 90 degrees right", and "F" is "go forward one
space。

please write control code for the robot such that it ends up at the appropriate-and-correct destination, and include
unit tests.

Here is an example output with command "FF":

[0, 2]

## 中文描述

这里我不按照原文一字一字的翻译，但是尽量按照题目的要求把题目解释清楚。

这里题目的要求是，假设一个机器人降落到火星上了，我们现在需要给机器人发布指令。指令包括有 L，R，F 3 个。

L 表示的意思是机器人向左转 90 度，R 的意思表示的是机器人向右转 90 度，F 表示的是机器人向前移动一个坐标单位。

题目的表达并是是十分明确也清晰，比如说 LFFFRFFFRRFFF 应该返回是什么没有说清楚。假设 指令 FF ，返回的结果是 [0, 2]
，我默认的是程序需要返回机器人最后的坐标位置，0 表示的是 X 坐标，2 表示的是 Y 坐标。

## 思路和点评

这个问题的思路，首先你需要明白几个点。如果需要进行坐标计算的话，请注意 L 和 F 是不会改变当前机器人的坐标位置的。

只有 F 的操作才会改变机器人的位置。考虑设置一个坐标系，那么这里需要存储 2 个信息，第一个信息为 F 移动时候机器人的位置，另外就是
L 和 F 对机器人方向的控制了。

所以你需要在程序中初始化一个二维数组，这个数组用于存储 F 操作时候的坐标变化。

同时你还需要存储一个 dir 变量，通常这个变量为每一次 L 和 R 操作的时候方向的变化。

F 存储的路径数组为：int[][] move = { { 0, 1 }, { 1, 0 }, { 0, -1 }, { -1, 0 } };

通过这个数组，你就明白为什么我在这个 WIKI 页面前面说的，初始化方向很重要，请参考下面的图（因为不太好用计算机画图，我们用手画了一个图）。

![|517x400](https://cdn.isharkfly.com/com-isharkfly-www/discourse-uploads/optimized/1X/3714e7874d95dafc87ac6d279916944144d779e6_2_517x400.jpeg)

在这个图中比较明确的说明了，我们定义的初始化方向为从下往上，Dir 等于 0 。在 Dir 等于 0 的时候坐标数组为 int[][] move = { {
0, 1 }, { 1, 0 }, { 0, -1 }, { -1, 0 } }; 按照顺时针的方向。

在图中，Dir 有 4 个反向，按照顺时针方向，分别为上，右，下，左，那么方向对应的值就分别为 0,1,2,3 。

当方向为 L 的时候，需要将方向值减 1 ，当方向为 R 的时候，需要将值 +1。

这里有个问题为循环，比如说，方向值为 RR，，dir 的值应该为 2。

如果方向为 RRRRRR，那么值应该也为 2。所以在算法中我们使用了 dir = (dir + 4) % 4;， 对方向进行取 余数。你可以看到 当你旋转
RRRRRR 后，dir 的值还是为 2。

针一次转向 + 移动的操作，不管你转向多少次，调整的方方向无非就是调整 X 或者 Y 的坐标系，在下一次移动的时候应该是 + 还是 -

所以到这里方法就相对简单了。一次移动的时候，都会改变 X 和 Y 坐标的值，前提是你是希望怎么加减而已。

## 源代码

源代码和有关代码的更新请访问 GitHub：

https://github.com/cwiki-us/codebank-algorithm/blob/master/src/main/java/com/ossez/codebank/interview/KayakRobotMovement.java

测试类请参考：

https://github.com/cwiki-us/codebank-algorithm/blob/master/src/test/java/com/ossez/codebank/interview/tests/KayakTest.java

## 测试结果

上面程序的测试结果如下：

```
2018/12/25 15:08:50 DEBUG [com.ossez.codebank.interview.tests.KayakTest] - LFFF - [0,2]
2018/12/25 15:08:50 DEBUG [com.ossez.codebank.interview.tests.KayakTest] - LFFFRFFFRRFFF - [-3,0]
```