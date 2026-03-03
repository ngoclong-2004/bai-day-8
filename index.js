//const provinces = ["Lâm Đồng" , "Nghệ An" , "Cao Bằng" ,"Gia Lai","Tây Ninh","Cà Mau"]
//provinces.forEach((province , index)=>{
//    console.log(`${province}-${index}`)
//})


//const positiveInteger =[1,2,3,4,5,6,7,8,9,10]
//const filteredNumber= positiveInteger.filter((positiveInteger , index)=>{
//    return positiveInteger%2===0
//}
//)
// console.log(filteredNumber)



//const hasEvenNumber=numbers.some((number)=>{
 //   console.log(number)
  // return number%2===0
//})
//console.log(hasEvenNumber)
//const isAllOddNumber=numbers.every((number , index)=>{
  //  console.log(number)
    //return number%2!==0
    

//})
//console.log(isAllOddNumber)


const points = [5,8,4,6,9,3,7,6,8,2]
const filteredPoints= points.filter((point,index)=>{
    return point<5
})
console.log(filteredPoints)
const isAllPoints=points.every((point)=>{
return point<=5
})
console.log(isAllPoints)
