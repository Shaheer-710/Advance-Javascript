let name1 = "shaheer"
var name2 = "ali"

var name2 = name1;

name1 = "ahmed"

console.log(name1);
console.log(name2);


let arr1 = [1 , 2, 3, 4,5]
let arr2 =  [...arr1]

arr2.push("twenty 1")

console.log(arr2);
console.log(arr1);

let obj1 ={
    email:"shaheer7w@gmail.com",
    password:12346578,
    extradetails:{
        id : 12345,
        status:false
    }
}



let obj2 = {...obj1 , education:{
    ...obj1.extradetails
}}

obj2.password= 123456
obj2.extradetails.id =23456

console.log(obj1);
console.log(obj2);

