// //Question 1:
// var obj1 = {Name:"person1",age:5}
// var obj2 = {age:5,Name:"person2"}
// console.log(JSON.stringify(obj1)===JSON.stringify(obj2)); //false
// console.log(JSON.stringify(obj1)!=JSON.stringify(obj2)); //true

// //Question 2:
// var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all",true)
// request.send();
// request.onload = function(){
//     var data = request.response;
//     console.log(data)
//     var result = JSON.parse(data);
//     console.log(result);
//     for(var i=0;i<result.length;i++)
//     {
//         console.log(result[i].flags.png);
//     }
// }


// //Question 3:
// var request1 = new XMLHttpRequest();
// request1.open("GET","https://restcountries.com/v3.1/all",true);
// request1.send();
// request1.onload = function(){
//     var data1 = request1.response;
//     console.log(data1)
//     var result1 = JSON.parse(data1);
//     console.log(result1);
//     for(var i=0;i<result1.length;i++)
//     {
//         console.log(result1[i].name.common,result1[i].region,result1[i].subregion,result1[i].population);
//     }

        
myobject = {1:one,”11":1,”name”:”arun”}
//your code goes here
console.log(myobject);
//{"1":"one","11":1,"name":"arun","ten":"ten"} // Quotes might not get displayed that fine.

