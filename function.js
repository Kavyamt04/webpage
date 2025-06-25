const swapvalue=(num1,num2)=>{
    let temp=num1
    num1=num2
    num2=temp
    console.log("x:",num1)
    console.log("y:",num2)
}
swapvalue(3,4)


const reverseArr=(arr)=>{
    let rev=[]
    for(let i=arr.length-1;i>=0;i--){
        rev.push([i])
    }
    console.log(rev)
}
reverseArr([1,2,3,4,5])


const sumOfNumbers=(st,ed)=>{
    let total=0
    for(let i=st;i<=ed;i++){ 
        total+=i
        
     }return total
}
console.log(sumOfNumbers(10,20))

const randomUserIp=()=>{
    let randomArr=[]
    for(let i=0;i<4;i++){
        let randomnum=Math.floor(Math.random()*1000)
        randomArr.push(randomnum)
    }
    return `${randomArr[0]}.${randomArr[1]}.${randomArr[2]}.${randomArr[3]}`

}
console.log(randomUserIp())