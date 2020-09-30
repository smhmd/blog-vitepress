---
title: Then, Catch, and Finally in JavaScript
summary: Understand the use of then, catch, and finally in async JavaScript
---

- Fetch returns a pending promise that will resolve at some point:
  ```javascript
  const API_URL = "https://starwars.egghead.training/";

  const responsePromise = fetch(API_URL + "films");
  console.log(responsePromise); // Promise {<pending>}
  ```

- `then` method is called with a callback function that is called once the promise is fulfilled:
  ```javascript
  responsePromise.then(response => {
    console.log(response) // Response {...}
  })
  ```

- Since the end point `films` returns a JSON object, we will use the `json` method to read the body of the response, which is async. `response.json()` should be returned to allow chaining more `then` methods:
  ```javascript
  responsePromise.then(response => {
    return response.json();
  }).then(films => {
    console.log(films) // returns an array of films
  })
  ```

- To handle any errors of a specific `then` method, you must specify a second callback function (`onRejected`) besides the first `onFulfilled` callback function:
  ```javascript
  fetch(endpoint)
    .then(onFulfilled, onRejected)
  ```
  ```javascript
  fetch(API_URL + "films").then(
    // onFulfilled
    response => {
      console.log(response);
    },
    // onRejected
    error => {
      console.warn(error);
    }
  )
  ```

- To handle errors in specific `then` methods, you add a second callback function.

- `Promise.reject("reason")` returns a rejected promise with the `"reason"` as the error.

- To catch all errors in a `then` chain, you can attach a `then` method with the `onFulfilled` callback function set to `undefined` that will handles all rejected promises of previous `then` methods:
  ```javascript
  fetch(endpoint).then(() => {
    return Promise.reject("Invalid Promise")
  }).then(undefined, error => { // this then method receives a rejected promise
    console.warn(error);
  })
  ```

- This last approach is identical to the `catch` method. If there is any rejected promises in a promise chain, the `catch` method will handle the error with its callback function:
  ```javascript
  fetch(endpoint).then(() => {
    return Promise.reject("Invalid Promise")
  }).catch(error => {
    console.warn(error);
  })
  ```

- Promises resolve even if the response status code from a server is unsuccessful (e.g. `404`). If we want to reject the promise if the status code is unsuccessful, we can do the following:
  ```javascript
  fetch(endpoint) // 404
    .then(response => {
      if (!response.ok) {
        throw Error("Unsuccessful Response") // any thrown errors inside an onFulfilled function results in a rejected promise
      }
      return response.json().then(message => console.log(message));
    })
    .catch(error => {
      console.warn(error);
    })
  ```

- Promises can be fulfilled or rejected, but never both.

- If we have a spinner in the DOM, waiting to be replaced by the data of a fulfilled promise, we can't remove the spinner in a `then` chain as it would remain in the DOM if the promise fails. Thus, we need a method that runs whether the promise is fulfilled or rejected. A silly solution is to duplicate the remove function in a `then` method's both onFulfilled and onRejected callback functions:
  ```javascript
    // onFulfilled
  .then(
    () => {
      spinner.remove();
    },
    // onRejected
    () => {
      spinner.remove();
    }
  )
  ```
  but, any `catch` method code will not run. `finally` is a method that will execute whether the promise is fulfilled or rejected: quite useful for clean up code.

- Similar to `catch`, `finally` does not have to be the last method in the chain and further `then` methods can be chained to it, accessing the last fulfilled returned promise.

- Throwing an error inside an onFulfilled callback function renders the promise rejected. We could also explicitly return a rejected promise:
  ```javascript
  fetch(endpoint) // 404
    .then(response => {
      if (!response.ok) { // true
        return Promise.reject(
          new Error("Unsuccessful response"); // will result in a stack trace of the error: recommended
        );
      }
    })
  ```
  ```javascript
  fetch(endpoint) // 404
    .then(response => {
      if (!response.ok) { // true
        return Promise.reject("Unsuccessful response"); // no stack trace
      }
    })
  ```
