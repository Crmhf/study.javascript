/**
 * Copyright © 2017 KingTopWare Corporation. All rights reserved.
 *
 * @title: apply和call的用法
 * @prject:
 * @description: 说明文件的功能--请后续修改
 * @author: ChiRong
 * @date: 2017/8/2
 * @version: v1.0
 * @modify: 说明对该文件的修改内容、修改原因以及修改日期--请后续修改
 */

/**
 * 1.改变this指向
 */
var obj = {
	name : 'crmhf';
}
function func(){
	console.log(this.name);
}
func.call(obj);
// call方法的第1个参数作为函数上下文的对象，这里obj作为参数传给了func
// 此时函数里的this指向了obj对象，此处func函数相当于
function func(){
	console.log(obj.name);
}

/**
 * 2.借用别的对象的方法
 */
var Person1 = {
	this.name = 'crmhf';
};
var Person2 = function(){
	this.getname = function(){
		console.log(this.name);
	}
	Person1.call(this);
};
var person = new Person2();
person.getname(); // crmhf
// Person2实例化出来的对象person通过getname方法拿到了Person1中的name
// 在Person2，Person1.call(this)作用是使用Person1对象代替this
// Person2就有了Person的所有属性和方法，相当于Person2继承了Person1的属性和方法

/**
 * 3.调用函数
 * apply、call方法都会使函数立即执行，因此可以用来调用函数
 */
function func(){
	console.log('crmhf');
}
func.call();
