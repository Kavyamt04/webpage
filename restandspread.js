//destructuring arrays
const num=[1,2,3]
let[num1,num2,num3]=num
console.log(num1)
console.log(num2)
console.log(num3)

const numbers=[1,2,3,4,5,6,7,8,9,10]
let[numb1,,numb2,numb3,...rest]=numbers //rest or spread operator(...)
console.log(numb1,numb2,numb3)
console.log(rest)

for(items of rest){   //destructuring during iteration (for of)
    console.log(items)
}

//destructuring of objects
const classroom={height:20,width:10,area:10}
let{height,width,area}=classroom
console.log(height,width,area)
const classroom1={height1:20,width1:10,area1:10}
let{height1,...rest1}=classroom1
console.log(rest1)

const evens=[0,2,4,6,8,10]  //spread operator to copy array
const evennumbers=[...evens]
console.log(evennumbers)

let arr=[1,2,3,4,5]   //map
const mappedArray=arr.filter(num=>num**2)
console.log(mappedArray)

let arr1=[1,2,3,4,5]   //filter
const filteredArray=arr1.filter(num=>num%2==0)
console.log(filteredArray)

let arr2=[1,2,3,4,5]   //reduce
const total=arr.reduce((sum,num)=>sum+=num,0)
console.log(total)