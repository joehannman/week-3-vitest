import { tokenToString } from "typescript";

export function fizzBuzz(n: number): string {
    let ret_str = "";
    if(n % 3 === 0) ret_str += "Fizz";
    if(n % 5 === 0) ret_str += "Buzz";

    return ret_str ? ret_str : n.toString();
}