let msg = "hello"


let arr = [1, 3, 5, 7, 9, 33, 54]


class Studentdata {
    constructor() {
        console.log("Class Construtor Called.....")
    }
    msg() {
        console.log("Method of student class")
    }
    static greet() {
        console.log("Staic method of call")
    }
}

export { msg, arr, Studentdata }