/**
 * Copyright © 2017 KingTopWare Corporation. All rights reserved.
 *
 * @title: apply和call基本使用的对比
 * @prject:
 * @description: 说明文件的功能--请后续修改
 * @author: ChiRong
 * @date: 2017/8/2
 * @version: v1.0
 * @modify: 说明对该文件的修改内容、修改原因以及修改日期--请后续修改
 */

/**
 * apply()
 * apply方法传入2个参数：1.函数上下文的对象;2.函数参数所组成的数组
 */
var obj = {
	name : 'crmhf'
};
function func(firstName, lastName){
	console.log(firstName + ' ' + this.name + ' ' + lastName);
}

/**
 * obj是作为函数上下文的对象，函数func中this指向了obj这个对象
 * 参数A和B是放在数组中传入func函数，分别对应func参数的列表元素
 */
func.apply(obj,['A','B']); // A crmhf B



/**
 * call()
 * call方法第1个参数作为函数上下文的对象，后面传入是1个参数列表，而不是单个数组
 */
var obj = {
	name : 'crmhf'
};
function func(firstName, lastName){
	console.log(firstName + ' ' + this.name + ' ' + lastName);
}

/**
 * C和D是作为单独的参数传给func函数，而不是放在数组中
 */
func.call(obj,'C','D'); // C crmhf D

/**
 * 对于什么时候该用什么方法，其实不用纠结。
 * 如果你的参数本来就存在一个数组中，自然用apply,如果参数比较散乱相互之间没什么关联，就用call
 */
