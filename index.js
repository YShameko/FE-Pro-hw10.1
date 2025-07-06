"use strict";

const userInfo = {
	userName: 'jsmith',
	firstName: 'John',
	lastName: 'Smith',
	age: 35,
	gender: 'male',
	address: { 
		country: 'Україна',
		city: 'Київ',
		postalIndex: '01001',
		street: 'а/с 123',
	},
	accessLevel: 'user',
	getProterties: function (object = this){ 
        for (const key in object) {
			const value = object[key];
			if (typeof value === 'object' && value !== null) {
				console.log(`${key}: `); 
				this.getProterties(value); 
			}
			else if (typeof value !== 'function') {
				console.log(`${key}: ${value}`); 
			}
        }
    },
};

console.log('Info about the current user:');
userInfo.getProterties();