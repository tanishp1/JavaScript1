// let h1 = document.querySelector("h1");

// window.addEventListener("keydown", function(e){
//     if(e.key === " "){
//         h1.textContent = "SPC";
//     }
//     else {
//         h1.textContent = e.key;
//     }
// })

// let btn = document.querySelector("#btn")
// let fileinp = document.querySelector("#fileinp")

// btn.addEventListener("click", function(){
//     fileinp.click()
// })

// fileinp.addEventListener("change", function(e){
//     const file = e.target.files[0];
//     if(file){
//         btn.textContent = file.name;
//     }
// })

let form = document.querySelector("form")
form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("form submit")
})