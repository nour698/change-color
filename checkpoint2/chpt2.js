let button =document.querySelector('#bt')
function getrandomnumb (){
    let x =Math.round((Math.random()*255))
    return x
}
let bd = document.querySelector("body")
button.addEventListener ('click',function(){
    let rgbcl = `rgb(${getrandomnumb()},${getrandomnumb()},${getrandomnumb()})`
    bd.setAttribute("style",`background-color : ${rgbcl}`)
})
