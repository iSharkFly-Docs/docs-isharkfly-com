# FHIR (Fast Health Interoperable Resources)

如果你对上面 2 个单词不熟悉的话，那就需要先脑补下了。

## HL7
HL7 可以认为是一个标准化的组织，这个组织主要对标准进行控制。

如果你希望在医疗系统中对数据进行交换，通常 HL7 现在就是事实上的标准了。

## FHIR
FHIR® – Fast Health Interoperable Resources (Index - FHIR v5.0.0) – 是由 HL7 提出的新一代标准框架。

FHIR 整合了 HL7 V2,V3 和 CDA 的优点,同时利用了最新的Web标准,紧紧围绕着 implementability 开发和实现。

![](https://cdn.isharkfly.com/com-isharkfly-www/discourse-uploads/original/2X/6/6a4e51ecf5c5fa20ab8760a7d80416de34fca415.png ':size=680')

有点绕？FHIR 是 HL7 标准化组织推出的标准，也就是现在医疗系统中使用的数据交换实现。

既然是实现，那么就需要基于 FHIR 标准有不同语言的实现了。

## FHIR Java 实现
FHIR Java 实现 目前应该使用的最多的是： https://hapifhir.io/

![](https://cdn.isharkfly.com/com-isharkfly-www/discourse-uploads/optimized/2X/8/881a65289b6adb93efc89f812ffc92d19bba1c6e_2_690x359.png ':size=680')

这个是一个开源版本的实现，所有的代码都在 GitHub 上能找到，地址为：https://github.com/hapifhir/hapi-fhir

如果你需要在 Java 中使用 FHIR 的话，应该直接使用上面的代码就可以了。

## 总结
HL7 是一个标准化租组织，他们定义了在医疗系统中进行数据传输的标准，FHIR 就是这标准的最新规范。

针对不同语言，有不同语言的实现罢了。