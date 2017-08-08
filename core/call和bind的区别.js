/**
 * Copyright © 2017 KingTopWare Corporation. All rights reserved.
 *
 * @title: call和bind的区别
 * @prject:
 * @description: 说明文件的功能--请后续修改
 * @author: ChiRong
 * @date: 2017/8/2
 * @version: v1.0
 * @modify: 说明对该文件的修改内容、修改原因以及修改日期--请后续修改
 */

/**
 * ES5开始扩展了bind的方法，在低版本的IE中不兼容
 * 它和call很相似，接受的参数有两部分
 * 1.作为函数上下文的对象
 * 2.列表，可以接受多个参数
 */

// 主要区别1：bind返回值是函数
var obj = {
	name : 'crmhf'
};
function func(){
	console.log(this.name);
}
var func1 = func.bind(obj);
func1();  // crmhf
// bind方法不会立即执行，而是返回一个改变了上下文this后的函数
// 原函数func重的this并没有改变，依旧指向全局对象window

// 主要区别2：参数的实用
function func(a, b, c){
	console.log(a, b, c);
}
var func1 = func.bind(null, 'crmhf');
func('A', 'B', 'C'); // A B C
func1('A', 'B', 'C'); // crmhf A Bz
func1('B', 'C'); // crmhf B C