//
// const companies=["facebook","google","microsoft","apple","IBM","Oracle","amazon"]
// for(let i=0;i<=companies.length-1;i++){
//     if(companies[i].toLowerCase().includes('o')){
//         let count=companies[i].match(/o/gi)
//         if(count.length>1){
//             console.log(companies[i])
//         }
//     }
// }

//slice out the first 3 companies from the array
const companies=["facebook","google","microsoft","apple","IBM","Oracle","amazon"]
console.log(companies.slice(0,3))

//slice out the last 3 companies from the array
const companies1=["facebook","google","microsoft","apple","IBM","Oracle","amazon"]
console.log(companies1.slice(companies1.length-3,companies1.length))

//slice out the middle IT company or companies from the array
const companies2=["facebook","google","microsoft","apple","IBM","Oracle","amazon"]
const len=companies2.length
if(len%2==0){
    let middle=len/2
    let next=middle-1
    console.log(companies2[next],companies2[middle])
}else{
    let middle=Math.ceil(len/2)
    console.log(companies2[middle-1])
    }
