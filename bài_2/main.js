/**
 * đầu vào
 * - họ tên
 * - số điện
 * xử lý
 * - 50kW đầu: 500d/kW
 * - 50kW kế: 650d/kW 
 * - 100kW kế: 850d/kW
 * - 150kW kế: 1100d/kW
 * - còn lại: 1300d/kW
 * - ví dụ: 70 = 50 * 500 + 20 * 650
 * đầu ra
 * - họ tên
 * - tổng tiền
 */

let total=0;

function electricPayment() {
    const name = document.getElementById("name").value;
    const kW = document.getElementById("kW").value*1;
    if (kW === ""||kW===0) {
        alert("Số điện không hợp lệ!!!");
    }else{
        if (kW>=1&&kW<=50) {
            total=kW*500;
        }else if (kW>50&&kW<=100) {
            total=50*500+(kW-50)*650;
        }else if (kW>100&&kW<=200) {
            total=50*500+50*650+(kW-100)*850;
        }else if (kW>200&&kW<=350) {
            total=50*500+50*650+100*850+(kW-200)*1100;
        }else if (kW>350) {
            total=50*500+50*650+100*850+150*1100+(kW-350)*1300;
        }
        console.log(total);
    }
    document.getElementById("result").innerHTML="Họ tên: "+name+"; Số tiền: "+ total;
    
    
}


