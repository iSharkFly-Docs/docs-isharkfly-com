# Binary Gap（二进制空白）

> 🔔 参与讨论：https://www.isharkfly.com/t/binary-gap/311


**英文描述**

A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both
ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary
representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary
representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no
binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

class Solution { public int solution(int N); }

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N
doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its
longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '
100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].

**中文描述**

这里我不按照原文一字一字的翻译，但是尽量按照题目的要求把题目解释清楚。

这里题目的要求是，将 N 为一个整数类型的数据，转换为一个 2 进制的字符串，然后在返回的字符串中返回最大的 0 的间隔数字。

例如 529 转换为 2 进制的字符串为：1000010001，在这里，将会存在以 1 为分割的字符串 0000 和 000，这 2 个字符串的长度分别为 4 和
3。

我们的算法需要返回的值为 4。

### 思路和点评

这个题目的思路其实比较简单，你需要首先将 N 这个整数，转换为 0 和 1 的字符串。然后在转换成功的字符串中返回以 1 分分割的 0
的长度。

这里可能需要考虑下面的几种情况。

| 情况 | 结果                              |
|----|---------------------------------|
| 11 | 这个情况应该返回的长度为 0                  |
| 10 | 这个情况因为没有被 1 这个字符串封闭，因此应该返回长度为 0 |

传统的思路应该是采取字符串分割的方式，进行遍历后获得结果。

我们在这里采取一种相对不是非常常规的方式，例如在 10000010001 字符串中插入 #，将字符串变为 #1#00000#1#000#1#。

然后将字符串按照 1 进行分割，那么分割后的数组应该分别存储的数据为：#，#0000#，#000#，#

这里我们只需要找到 #...# 中值最大的连续 0 字符串就可以了。基本上可以使用 1 个字符串替换函数和一个字符串分割函数就可以了，并不需要多次存储和遍历。

**源代码**

源代码和有关代码的更新请访问 GitHub：

https://github.com/cwiki-us/java-tutorial/blob/master/src/test/java/com/ossez/lang/tutorial/tests/codility/CodilityBinaryGapTest.java

代码思路请参考：

```java
package com.ossez.lang.tutorial.tests.codility;

import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * <p>
 * More details about question see link below
 * <ul>
 * <li>@see <a href= "https://www.cwiki.us/display/ITCLASSIFICATION/Binary+Gap">https://www.cwiki.us/display/ITCLASSIFICATION/Binary+Gap</a>
 * </li>
 * </ul>
 * </p>
 *
 * @author YuCheng
 *
 */
public class CodilityBinaryGapTest {

    private final static Logger logger = LoggerFactory.getLogger(CodilityBinaryGapTest.class);

    /**
     *
     */
    @Test
    public void testMain() {
        logger.debug("BEGIN");

        int N = 529;
        String intStr = Integer.toBinaryString(N);

        intStr = intStr.replace("1", "#1#");

        String[] strArray = intStr.split("1");

        int maxCount = 0;
        for (int i = 0; i < strArray.length; i++) {
            String checkStr = strArray[i];
            int countLength = 0;

            if (checkStr.length() > 2 && checkStr.startsWith("#") && checkStr.endsWith("#")) {
                checkStr = checkStr.replace("#", "");
                countLength = checkStr.length();

                if (maxCount < countLength) {
                    maxCount = countLength;
                }

            }
        }

        logger.debug("MAX COUNT: [{}]", maxCount);
    }

}
```