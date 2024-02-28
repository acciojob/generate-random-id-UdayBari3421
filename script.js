function makeid(l) {
	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let len = chars.length;
	let result = '';
	for (let i = 0; i < l; i++) {
		result += chars.charAt(Math.floor(Math.random() * len));
	}
	return result;
} 

// Do not change the code below.

const l = prompt("Enter a number.");
alert(makeid(l));  
