/**
 * đầu vào
 * - họ tên, tổng thu nhập năm = thu nhập tháng * 12, số người phụ thuộc
 * xử lý
 * - thu nhập cá nhân = thu nhập chịu thuế * thuế suất
 * - thu nhập chịu thuế = Tổng thu nhập năm - 4tr- Số người phụ thuộc * 1.6tr
 * - thuế suất:
 *  -<=60tr: 5%
 *  ->60&&<=120: 10%
 *  ->120&&<=210: 15%
 *  ->210&&<=384: 20%
 *  ->384&&<=624: 25%
 *  ->624&&<=960: 30%
 *  ->960: 35%
 * đầu ra
 * - họ tên, tiền thuế thu nhập cá nhân
 */
let totalTax=0;
function calculateTax() {
    const name = document.getElementById("name").value; 
    const income = document.getElementById("income").value*1;
    const memberNumber = document.getElementById("memberNumber").value*1;
    let tax=income-4e+6-memberNumber*16e5;  
    if (income===""||tax<=0) {
        alert("Thu nhập năm không hợp lệ!!!");
    }else{
        if (tax<=60e+6) {
            totalTax=tax*5/100;
        }else if (tax>60e+6&&tax<=120e+6) {
            totalTax=tax*10/100;
        }else if (tax>120e+6&&tax<=210e+6) {
            totalTax=tax*15/100;
        }else if (tax>210e+6&&tax<=384e+6) {
            totalTax=tax*20/100;
        }else if (tax>384e+6&&tax<=624e+6) {
            totalTax=tax*25/100;
        }else if (tax>624e+6&&tax<=960e+6) {
            totalTax=tax*30/100;
        }else{
            totalTax=tax*35/100;
        }
        console.log(totalTax);
    }
    document.getElementById("result").innerHTML = "Họ tên: "+name+"; Tổng thuế thu nhập cá nhân: "+totalTax;
}
