"use strict";

const userInfo = {
	firstName: 'John',
	lastName: 'Smith',
	age: 35,
	gender: 'male',
	address: 'Київ, а/с 123',
	getProterties: function (){
		for (const key in this) {
			if (typeof this[key] !== 'function') {
				console.log(`${key}: ${this[key]}`);
			}
		}
	},
};

console.log('Info about the current user:');
userInfo.getProterties();