# 北美亚特兰大一金融服务公司面试总结

> 🔔 参与讨论：https://www.isharkfly.com/t/topic/13453

这一金融服务公司的总部不在美国，在荷兰的阿姆斯特丹。

公司的主要业务是为中小金融机构提供技术方面的业务扩展，包括 API 的服务和在这个服务上与其他公司建立的数据通道。

## 面试结果

非常不幸的是这家公司在第一轮面试完成后就明确的表示不再进行下一轮的面试的。

但公司面试的同仁还是非常客气的给出了对我这个面试人的总结。整体总结情况就是对本人的评价还是非常不错，有热情也比较符合团队需求，其他经验也比较丰富。

重点是我没有 Spring Reactive 编程的经验，有部分的 Authentication 相关的工作经验。

从后面的总结来看 Spring Reactive 是硬伤，因为没有这个 Spring Reactive 的工作经验可能没有办法适应他们的产品需求。

如果是因为这个原因被拒，那么也是情有可原也不冤枉。

随后也就搜索了下有关 Spring Reactive 的知识。

Reactor 框架是 Pivotal 基于 Reactive Programming 思想实现的。它符合 Reactive Streams 规范 (Reactive Streams 是由
Netflix、TypeSafe、Pivotal 等公司发起的) 的一项技术。其名字有 反应堆 之意，反映了其背后的强大的 性能。

Reactive Programming，中文称 反应式编程。Reactive Programming 是一种 非阻塞、事件驱动数据流 的开发方案，使用 函数式编程
的概念来操作数据流，系统中某部分的数据变动后会自动更新其他部分，而且成本极低。

Spring 框架中包含的原始 Web 框架 Spring Web MVC 是专门为 Servlet API 和 Servlet 容器构建的。Reactive 堆栈 Web 框架 Spring
WebFlux 在更高版本 5.0 中添加。它是完全非阻塞的，支持Reactive Streams背压，并在 Netty，Undertow 和 Servlet 3.1 容器等服务器上运行。

![2021-04-30_1-18-42|647x500](https://cdn.isharkfly.com/com-isharkfly-www/discourse-uploads/original/2X/c/caadcf01e1e85744dea281befbd9a39c6a9d3d3a.png)

简单来说，在 Spring 中可能需要更多的了解 WebFlux 框架。

如何拿 Reactive 和传统的 MVC 框架来进行下对比的话，大致的区别如上图所示，可以认为 Reactive 是相对独立于 MVC
的一种框架和调用栈，需要有时间的时候详细了解下。

## 面试总结

这次面试的整体情况还是良好的。

因为没有 Spring Reactive 的相关知识，因此被拒也在情理之中。这个也不能说明有知识缺陷，可能是在平时工作的项目中没有这方面的需求，因此也没有掌握相关的内容。

唯一需要补充的就是了解相关概念，并且在有空闲的时候进行一些充电即可。

公司面试的过程中没有涉及到算法，在线编程等内容，主要是聊天，聊天的过程还是非常愉快的，整体评价这次面试还是非常轻松和友好的，只是被拒后小郁闷了
3 分钟。