console.log("hello")
let js='javascript'
console.log(js.length)
let string='Javascript'
console.log(string.toUpperCase())
console.log(string.toLowerCase())
console.log(string.substr(3,4))
console.log(string.substring(3,6))

let str='30 days of javascript'
console.log(str.split(''))
console.log(str.trim(''))
console.log(str.includes('i'))
console.log(str.includes('b'))
console.log(str.replace('javascript','python'))

let str1=' i love goa goa \n'
console.log(str1.charAt('5'))
console.log(str1.charCodeAt('5'))
console.log(str1.indexOf('l'))
console.log(str1.lastIndexOf('a'))
console.log(str1.concat(' and', ' kashmir'))
console.log(str1.startsWith('j'))
console.log(str1.endsWith('b'))
console.log(str1.search('god'))
console.log(str1.match(/goa/gi))
console.log(str1.repeat('3'))

let str2='10'
console.log(typeof str2)
let str3=Number(str2)
console.log(str3)
console.log(str2===10)

let a='9.8'
console.log(a===10)
let b=parseFloat('9.8')
console.log(b)
console.log(Math.round(b))

let string1='python'
let string2='jargon'
console.log(string1.includes('on')) && (string2.includes('jargon'))


let sen='i hope this course is not full of jargon.'
console.log(sen.includes('jargon'))


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


const now=new Date()
const year=now.getFullYear()
const month=now.getMonth()
const day=now.getDay()
const date=now.getDate()
const hour=now.getHours()
const minutes=now.getMinutes()
console.log(`${year}/${month}/${day} ${date} ${hour}:${minutes}`)


