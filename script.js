async function handleClick(){
    let counter= 0
    if(option==-1){
        let container = document.getElementById("score")
    container.innerHTML = `<h1>Please Choose Any Option `
    return
    }
    while(counter<10){
        console.log(counter)
        await delay(100)
        showAnimation()
        counter++
    }
    if(choose()){
        score++
    }
    console.log(option,'asssssssssssssss')
    let container = document.getElementById("score")
    container.innerHTML = `<h1>score : ${score}</h1> `
}
let score  = 0
function choose(){

    let rand =Math.floor( Math.random()*3)
    let container = document.getElementById("computer")
    container.innerHTML  = ""
    let img = document.createElement('img')
    console.log(rand)
    img.src = arr[rand]
    curr=(curr+1)%3
    container.appendChild(img)
    if(option == 0){
        if(rand==1){
            return true
        }
    }else if(option == 1){
        if(rand==2){
            return true
        }
    }else if(option==2) {
        if(rand==0){
            return true
        }
    }
    return false
}
function delay(time){ 
   return  new Promise((res)=>setTimeout(()=>res("Resolved"),time))
}
let option = -1
let curr = 0
let arr = ['paper.png','rock.png','scissors.png']
function showAnimation(){
    let container = document.getElementById("computer")
    container.innerHTML  = ""
    let img = document.createElement('img')
    img.src = arr[curr]
    curr=(curr+1)%3
    container.appendChild(img)
}
let imgs = document.getElementsByClassName('option')
Array.from(imgs).forEach((ee)=>{
    ee.addEventListener("click",(e)=>{
        Array.from(imgs)[0].classList.remove("active")
        
        Array.from(imgs)[1].classList.remove("active")
        Array.from(imgs)[2].classList.remove("active")
        ee.classList.add("active")
        if(e.target.id==1){
            option= 0
        }else if(e.target.id==2){
            option =1
        }else{
            option = 2
        }
    })
})
function setOption(e){
   
}