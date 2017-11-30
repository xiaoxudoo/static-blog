---
title: 金山云上传
date: 2017-11-30
layout: post
---

1. 关于rpc的应用可以参考[grpc](https://grpc.io/), rpc被称为远程程序调用，适合分布式架构，因此季老师的项目我打算用这种架构。
2. grpc(基本上所有的rpc框架)实现了不同语言间的通信，因此webserver（使用nodejs）充当client调用远程的rpc server（使用python，因为季老师的程序使用python做计算）
3. 其中通信使用proto buffer数据结构，需要定义好client和server之间的request和response的数据结构，季老师这里的计算，输入是一个小分子字符串和置信度小数，返回信息是一个string类型。
4. rpc服务的server像http服务一样监听ip和端口，启动rpc服务。这一部分用python的实现。nodejs的web server部分作为rpc的client连接到该ip和端口，进行远程服务调用。
