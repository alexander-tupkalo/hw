'use strict'

function customCall (fn, context, ...args) {

  context = context || globalThis;

  const key = Symbol();
  context[key] = fn;

  const result = context[key](...args);

  delete context[key];

  return result;

}

function customApply (fn, context, argsArray) {

  context = context || globalThis;

  const key = Symbol();
  context[key] = fn;

  const args = argsArray || [];

  const result = context[key](...args);

  delete context[key];

  return result;

}

function customBind (fn, context, ...bindArgs) {

  return function (...callArgs) {

    return customApply(
      fn,
      context,
      [...bindArgs, ...callArgs]
    );
  };
}

//=====================================

const user = { 
  name: "Коля" 
};

function sayHello(city, age) {
  return `Привiт, я ${this.name}, з мiста ${city}, менi ${age} рокiв`
}


const callResult = customCall(
  sayHello,
  user,
  "Київ",
  20
);

console.log("Результат Call:", callResult);

//

const customResult = customApply(
  sayHello,
  user,
  ["Львiв", 28]
);

console.log("Результат Apply:", customResult);

//

const speak = customBind(
  sayHello,

  user,
  "Харкiв"
);

const bindResult = speak(25);

console.log("Результат Bind:", bindResult);
