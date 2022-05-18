function baitap3(){
    var ketQua = 1
    var i =1
    var sonEl =document.getElementById("son").value
    while (i <= sonEl){
        ketQua *= i
        i++
    }
    document.getElementById("result").innerHTML = `👉 Giai thừa: ${ketQua}`
}