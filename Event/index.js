// let input = document.querySelector("input")
// input.addEventListener("input", function(e){
//     console.log(e.data)
// })

//  let h1 = document.querySelector("h1")
//  h1.addEventListener("click",function(){
//     h1.style.color = "red"
//  })

// let h1 = document.querySelector("h1")
// h1.addEventListener("dblclick", function(){
//     h1.style.color = "green"
// })

// let h1 = document.querySelector("h1")
// function dblclick(){
//     h1.style.color = "green"
// }
// h1.addEventListener("dblclick", dblclick)
// h1.removeEventListener("dblclick", dblclick)

// let input = document.querySelector("input")
// input.addEventListener("input", function(e){
//     if(e.data !== null){
//         console.log(e.data)
//     }
// })

let select = document.querySelector("select")
let device = document.querySelector("#device")
select.addEventListener("change", function(e){
    // console.log(e.target.value)
    device.textContent = `${e.target.value}`
})
