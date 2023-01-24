// promise.allSettled()

const promise1 = new Promise(resolve => resolve('🍔'));
const promise2 = new Promise((_, reject) => reject('🍎'));
const promise3 = new Promise(resolve => resolve('🍕'));

/*
// run 3 promise at once as array
Promise.all([promise1, promise2, promise3])
    .then(response => console.log(response))
    .catch(error => console.log(error));
*/

// ES11:
Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));
// it will run, either get error or not