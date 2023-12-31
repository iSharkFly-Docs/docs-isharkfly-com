# Prime numbers from 1 to 100 (打印 100 以内的素数)

> 🔔 参与讨论：https://www.isharkfly.com/t/prime-numbers-from-1-to-100-100/13450

## 问题描述

下面是有关这个问题的描述部分。

### 中文

题目要求非常简单，就是将 100 以内的素数打印出来就可以了。

在做题之前，需要了解的就是有关素数的定义：质数又称素数。一个大于1的自然数，除了1和它自身外，不能被其他自然数整除的数叫做质数；否则称为合数（规定1既不是质数也不是合数）。

质数被利用在密码学上，所谓的公钥就是将想要传递的信息在编码时加入质数，编码之后传送给收信人，任何人收到此信息后，若没有此收信人所拥有的密钥，则解密的过程中（实为寻找素数的过程），将会因为找质数的过程（分解质因数）过久，使即使取得信息也会无意义。

在汽车变速箱齿轮的设计上，相邻的两个大小齿轮齿数设计成质数，以增加两齿轮内两个相同的齿相遇啮合次数的最小公倍数，可增强耐用度减少故障。

质素的用途比较高端，说白了就是在计算机科学中可以被用在密码学上面。比如说 Java 中用的 Hash 算法就用到了质素。

因此很多面试题喜欢考察 100 以内的素数。

100以内的质数有 2，3，5，7，11，13，17，19，23，29，31，37，41，43，47，53，59，61，67，71，73，79，83，89，97，在100内共有25个质数。

## 思路点评和源代码

这个题目的难度并不大。但是如果你没有遇到过或者没有刷过这个题目的话，可能就会被搞懵逼了。

这个题目有几个关键点，首先 1 是一个特殊的素数，因此你的循环需要从 2 开始。这个很多时候和我们使用的循环从 0 开始有不同。

另外这个题目需要 2 个循环来做，因为使用了 2 个循环可能比较容易就把你搞晕了。

为了避免这种情况，建议你使用函数来做。

你可以创建一个函数来判断给定的数字是不是素数。这个函数也非常简单，对于给定的值，从数字 2 开始遍历。假设现在这个函数的输入是
5，那么你的循环要从 2 开始，然后将 5 %2， 这个是取余的运算符。

很显然 5%2 =1, 5%3=2， 5%4 =1。在这个遍历过程中，如果你能发现有数字能够被除尽，那么这个被除数就不是素数，如果你发现遍历完成了也不能被除尽，那么这个数就是素数。

这个函数只返回 T/F 就可以了。

![Prime-numbers-01|690x310](https://cdn.isharkfly.com/com-isharkfly-www/discourse-uploads/optimized/2X/b/bde6c1735e20b29b69877bdea82015ba938ff74b_2_690x310.png)

这个题目能够快速解答的关键就是需要使用定义的**函数来做**，尽量不要在循环里面嵌套循环，因为这样你会很难跳出这个循环，并且循环的起止判断不好判断。

另外还有一点需要注意的是，有些在线测试平台可能不会让你使用 List，这个时候你需要考虑使用数组或者直接输出。

### 代码

https://github.com/cwiki-us-docs/java-tutorials/blob/master/toolkits/codebank/src/test/java/com/ossez/toolkits/codebank/tests/algorithm/PrimeNumbersTest.java