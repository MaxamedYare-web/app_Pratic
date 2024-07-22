// replace waxa lu isticmala in string aad ku badasho stringiya bar timamesato
let titile = document.querySelector(".title")
let textSearch = document.querySelector("#textSearch")
let search2 = document.getElementById("search2")
let newS = document.getElementById("newS")
let btn2 = document.getElementById("btn2")
let btn = document.querySelector("button")

// let repl = text.replace("qali","muhim")

document.addEventListener("DOMContentLoaded",()=>{

    let addArr;
    if(localStorage.getItem("addLocal")===null){
        addArr = []
    }else{
        addArr = JSON.parse(localStorage.getItem("addLocal"))
    }
// console.log(addArr)
   addArr.forEach((rr)=>{
    titile.innerHTML = rr
   })

})


const addLocalStorage = (textLocal)=>{
  
  if(textLocal.length < 0){
    return
  }else{

    let addArr;
    if(localStorage.getItem("addLocal")===null){
        addArr = []
    }else{
        addArr = JSON.parse(localStorage.getItem("addLocal"))
    }

    addArr.push(textLocal)
    localStorage.setItem("addLocal",JSON.stringify(textLocal))

  }
  
  


}





btn.addEventListener("click",(e)=>{
    e.preventDefault()
    let text = textSearch.value
    if(textSearch.value === ""){
let h3 = document.querySelector("h3")
h3.style.display="block"
// console.log(h3)
setTimeout(()=>{
h3.style.display="none"
},3000)
    }else{
        titile.innerHTML = text
        addLocalStorage([text])
        let newChange = document.querySelector(".newChange")
        newChange.style.display="block"
        textSearch.value = ""
    }
   
})


btn2.addEventListener("click",()=>{
    let input2 = search2.value
    let newB = newS.value
    // console.log(input2)
    let desc = titile.textContent
    // console.log("hey"+ desc)
    let repl = desc.replace(`${input2}`,`${newB}`)
    console.log(repl)
    titile.innerHTML=repl
    search2.value = ""
    newS.value=""
})






