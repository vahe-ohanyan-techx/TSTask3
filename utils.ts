export const capitalize = (str:string):string => {
    let res = '';
    res += str.charAt(0).toUpperCase() + str.slice(1)
    return res;
}

export const logMessage = (msg:string):void => {
    console.log(msg)
}
