let innerbar = document.querySelector(".innerbar")
let number = document.querySelector(".number")
let count = 0

function progressbar(){
    count++
    innerbar.style.width = `${count}%`
    number.innerHTML = `${count}%`
    if(count == innerbar.dataset.percent){
        clearInterval(stop)
    }
}


let stop = setInterval(function(){
    progressbar()
},10)
