//exp level 1 strings
let challenge='30 Days Of Javascript'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substr(0,1))
console.log(challenge.substr(3,21))
console.log(challenge.includes('script'))
console.log(challenge.split(','))
let str='30 Days Of javaScript'
console.log(str)
console.log(str.split(' '))
let companies='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split(','))
let str1='30 days of javascript'
console.log(str1.replace('javascript','python'))
console.log(str1.charAt(15))
console.log(str1.charCodeAt('j'))
console.log(str1.indexOf('a'))
console.log(str1.lastIndexOf('a'))
let sen='You cannot end a sentence with because because because is a conjunction'
console.log(sen.indexOf('because'))
console.log(sen.lastIndexOf('because'))
console.log(sen.search('because'))
let word='  iam happy  '
console.log(word)
console.log(word.trim())
let str2='30 days of javascript'
console.log(str2.startsWith(3))
console.log(str2.endsWith("t"))
let arrr=str2.match(/a/gi)
console.log(arrr.length)
let str3=' is perfect'
console.log(str2.concat(str3))
console.log(str2.repeat(2))

//exp level 2
let quote='There is no exercise better for the heart than reaching down and lifting people up. by John Holmes teaches us to help one another.'
console.log(quote)
let mothertheresa="Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(mothertheresa)

let str22='10'
console.log(typeof str22)
let str33=Number(str22)
console.log(str33)
console.log(str22==10)

let a='9.8'
console.log(a===10)
let b=parseFloat('9.8')
console.log(b)
console.log(Math.round(b))

let string1='python'
let string2='jargon'
console.log(string1.includes('on')) && (string2.includes('jargon'))

let sen1='i hope this course is not full of jargon.'
console.log(sen1.includes('jargon'))

const num=Math.floor(Math.random()*100)
console.log(num)

const num1=Math.floor(Math.random() *(100-50)+50)
console.log(num1)

const num2=Math.random()*255
console.log(num2)

const str11='javascript'
const len=str11.length
const random1=Math.floor(Math.random()*len)
console.log(random1)
console.log(str11[random1])

console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125\n')

let sen11='You cannot end a sentence with because because because is a conjunction'
console.log(sen11.search(/because/gi))
console.log(sen11.substr(31,23))

//exp level 3
let love='Love is the best thing in this world. Some found their love and some are still looking for their love.'
let count=love.match(/love/gi)
console.log(count.length)

let sen2='You cannot end a sentence with because because because is a conjunction'
let numm=sen2.match(/because/gi)
console.log(numm.length)

let month=5000
let bonus=10000
let online=15000
let salaryyear=(5000+15000)*12
console.log(`the total annual income is ${salaryyear+bonus}`)


//array exercises level 1
const arr1=Array()
console.log(arr1)

let arr11=[1,'en',2,5,7]
console.log(arr11)
console.log(arr11.length)
let numb=Math.floor((arr11.length-1)/2)
const middleindex=arr11[numb]
console.log(middleindex)

const mixedDataTypes=["pen",1,2,3,4,5,[1,2,3]]
console.log(mixedDataTypes.length)

let itcompanies=["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle ","Amazon"]
console.log(itcompanies)
console.log(itcompanies[0])
let middle=Math.floor((itcompanies.length-1)/2)
const middleind=itcompanies[middle]
console.log(middleind)
let last=Math.floor(itcompanies.length-1)
const lastind=itcompanies[last]
console.log(lastind)

let it=["Facebook" , "Google", "Microsoft", "Apple", "IBM", "Oracle ","Amazon"]
console.log(it)
let itcom=(it.toString())
console.log(itcom.toUpperCase())
let new2='are big It companies'
let new3=itcom.concat(new2)
console.log(new3)

it.includes('hayui')
? console.log('this company exit in the array')
: console.log('this company does not exist in this array');


const companies1=["facebook","google","microsoft","apple","IBM","Oracle","amazon"]
 for(let i=0;i<=companies1.length-1;i++){
     if(companies1[i].toLowerCase().includes('o')){
         let count=companies1[i].match(/o/gi)
         if(count.length>1){
             console.log(companies1[i])
         }
     }
 }


const from = ['facebook','google','microsoft','apple','iBM','oracle','amazon']
from.sort()
console.log(from)

from.reverse()
console.log(from)
const companies2=["facebook","google","microsoft","apple","IBM","Oracle","amazon"]
console.log(companies2.slice(0,3))
console.log(companies2.slice(companies2.length-3,companies2.length))

const companies3=["facebook","google","microsoft","apple","IBM","Oracle","amazon"]
const lenn=companies3.length
if(lenn%2==0){
    let middle=lenn/2
    let next=middle-1
    console.log(companies3[next],companies3[middle])
}else{
    let middle=Math.ceil(lenn/2)
    console.log(companies3[middle-1])
    }

companies3.shift()
console.log(companies3)

companies3.pop()
console.log(companies3)

companies3.splice()
console.log(companies3)