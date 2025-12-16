// Task1

const reverseArray = <T>(arr:T[]):T[] => {
        return [...arr.reverse()]
}
console.log(reverseArray<string>(["v","a","h","e"]))
console.log(reverseArray<number>([1,2,3,4]))
// Task2
interface User {
    id:number,
    name:string,
    email:string,
}

type user = Pick<User,"id"|"name">

let u:user = {
    id:0,
    name:"VAhe"
}

console.log(u)
//task3