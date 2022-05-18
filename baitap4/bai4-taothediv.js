function baitap4(){
    var soleEl = document.getElementById("sole")
    var sochanEl =document.getElementById("sochan")
    var indivEl = document.getElementById("indi")
    var i =1
    while( i <=10){
        if (i % 2 == 0){
            indivEl.innerHTML += `<div id="sochan" style="background: red;"> div chẵn</div>`
            
        }else{
            indivEl.innerHTML += `<div id="sole" style="background: blue;"> div lẽ</div>` 
            
        }
        i++
    }
}