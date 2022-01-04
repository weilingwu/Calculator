import React from 'react'
import ReactDom from 'react-dom'
import Big from "big.js";
function isNumber(item) {
    return /[0-9]+/.test(item);
}
function operate(num1, num2, operations){
    if(operations == '/')
        return num1/num2;
    if(operations == '*')
        return num1*num2;
    if(operations == '+'){
        console.log(num1, num2)
        return  parseFloat(num1)+parseFloat(num2);
    }
    if(operations == '-')
        return num1-num2;
}

export default function Calculate(obj, buttonName){
    if (buttonName === "C") {
        return {
            prestate:{
                total:obj.total,
                next:obj.next,
                operation:obj.operation
            },
            total: null,
            next: null,
            operation: null,
        };
    }

    if (isNumber(buttonName)) {
        if (buttonName === "0" && obj.next === "0") {
            return {prestate:{
                    total:obj.total,
                    next:obj.next,
                    operation:obj.operation
                }
            };
        }
        // If there is an operation, update next
        if (obj.operation) {
            if (obj.next) {
                return { next: obj.next + buttonName };
            }
            return {
                prestate:{
                    total:obj.total,
                    next:obj.next,
                    operation:obj.operation
                },
                next: buttonName };
        }
        // If there is no operation, update next and clear the value
        if (obj.next) {
            const next = obj.next === "0" ? buttonName : obj.next + buttonName;
            return {
                prestate:{
                    total:obj.total,
                    next:obj.next,
                    operation:obj.operation
                },
                next:next,
                total: null,
            };
        }
        return {
            prestate:{
                total:obj.total,
                next:obj.next,
                operation:obj.operation
            },
            next: buttonName,
            total: null,
        };
    }

    if (buttonName === "%") {
        if (obj.operation && obj.next) {
            const result = operate(obj.total, obj.next, obj.operation);
            return {
                prestate:{
                    total:obj.total,
                    next:obj.next,
                    operation:obj.operation
                },
                total: Big(result)
                    .div(Big("100"))
                    .toString(),
                next: null,
                operation: null,
            };
        }
        if (obj.next) {
            return {
                prestate:{
                    total:obj.total,
                    next:obj.next,
                    operation:obj.operation
                },
                next: Big(obj.next)
                    .div(Big("100"))
                    .toString(),
            };
        }
        return {};
    }

    if (buttonName === ".") {
        if (obj.next) {
            // ignore a . if the next number already has one
            if (obj.next.includes(".")) {
                return {prestate:{
                        total:obj.total,
                        next:obj.next,
                        operation:obj.operation
                    },};
            }
            return {
                prestate:{
                    total:obj.total,
                    next:obj.next,
                    operation:obj.operation
                },
                next: obj.next + "." };
        }
        return { prestate:{
                total:obj.total,
                next:obj.next,
                operation:obj.operation
            },next: "0." };
    }

    if (buttonName === "=") {
        if (obj.next && obj.operation) {
            return {prestate:{
                    total:obj.total,
                    next:obj.next,
                    operation:obj.operation
                },
                total: operate(obj.total, obj.next, obj.operation),
                next: null,
                operation: null,
            };
        } else {
            // '=' with no operation, nothing to do
            return {};
        }
    }
    if(buttonName === 'del'){
        return {
                total:obj.prestate.total,
                next:obj.prestate.next,
                operation:obj.prestate.operation
            }
    }
    // if (buttonName === "+/-") {
    //     if (obj.next) {
    //         return { next: (-1 * parseFloat(obj.next)).toString() };
    //     }
    //     if (obj.total) {
    //         return { total: (-1 * parseFloat(obj.total)).toString() };
    //     }
    //     return {};
    // }

    // Button must be an operation

    // When the user presses an operation button without having entered
    // a number first, do nothing.
    // if (!obj.next && !obj.total) {
    //   return {};
    // }

    // User pressed an operation button and there is an existing operation
    if (obj.operation) {
        return {
            prestate:{
                total:obj.total,
                next:obj.next,
                operation:obj.operation
            },
            total: operate(obj.total, obj.next, obj.operation),
            next: null,
            operation: buttonName,
        };
    }

    // no operation yet, but the user typed one

    // The user hasn't typed a number yet, just save the operation
    if (!obj.next) {
        return {
            prestate:{
                total:obj.total,
                next:obj.next,
                operation:obj.operation
            },operation: buttonName };
    }

    // save the operation and shift 'next' into 'total'
    return {
        prestate:{
            total:obj.total,
            next:obj.next,
            operation:obj.operation
        },
        total: obj.next,
        next: null,
        operation: buttonName,
    };

}