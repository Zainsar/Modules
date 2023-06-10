import { msg, arr, Studentdata } from "./work.js"
console.log(msg)

import { add , Studentdata as std } from "./demo.js"
add()

let student = new std()
student.carinfo()
std.greets()

function arrSort(a) {
    let sortedarr = a.sort(function (a, b) {
        return (b - a)
    })
    console.log(sortedarr)
}
arrSort(arr)


let students = new Studentdata()
students.msg()
Studentdata.greet()