function baitap2(){
    var ketQua = 0
    var i =1 ;
    var soxEl = + document.getElementById("sox").value
    var sonEl = + document.getElementById("son").value
    while(i <= sonEl){
        ketQua += soxEl ** i;
        i++;
    }
    document.getElementById("result").innerHTML = `👉 Tổng: ${ketQua}`
}