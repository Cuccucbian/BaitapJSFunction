/**
 * đầu vào 
 * - chọn loại khách: nhà dân và doanh nghiệp
 * - nhập mã khách
 * - nhập số kênh cao cấp
 * - nếu là doanh nghiệp thì hiện thêm ô số kết nối
 * 
 * - nhà dân:
 *  - xử lý hóa đơn: 4.5$
 *  - dịch vụ cơ bản: 20.5$
 *  - thuê kênh cao cấp: 7.5$/kênh
 * 
 * - doanh nghiệp
 *  - xử lý hóa đơn: 15$
 *  - dịch vụ cơ bản: 75$ cho 10 kết nối đầu, mỗi kết nối sau thêm 5$
 *  - thuê kênh cao cấp: 50$/kênh
 *  - số kết nối
 * xử lý
 * - nhà dân:
 *  - tiền cáp = xử lý hóa đơn + dịch vụ cơ bản + thuê kênh cao cấp
 *  
 * - doanh nghiệp:
 *  - tiền cáp = xử lý hóa đơn + dịch vụ cơ bản*số kết nối+ thuê kênh 
 * đầu ra
 * - mã khách hàng, tiền cáp
 */

let connectedCable = document.getElementById("connectedCable");
connectedCable.style.visibility="hidden";
let total=0;
let selectedValue = "";
function customer() {
    let x = document.getElementById("mySelect").value;
    selectedValue =x;
    if (x === "2") {
        connectedCable.style.visibility="visible";
    }else{
        connectedCable.style.visibility="hidden";
    }
}
function calculateCable() {
    if(selectedValue==="0"){
        alert("Chọn loại khách hàng!!!");
    }
    const customerID = document.getElementById("customerID").value;
    const preCable = document.getElementById("preCable").value*1;
    const connectedCableValue = document.getElementById("connectedCable").value*1;
    switch (selectedValue) {
        case "1":
            total=4.5+20.5+7.5*preCable;
            break;
        case "2":
            if (connectedCableValue>=1&&connectedCableValue<=10) {
                total=15+75+50*preCable;
            }else{
                total=15+75+(connectedCableValue-10)*5+50*preCable;
            }
            break;
    }
    console.log("total: ", total);
    document.getElementById("result").innerHTML="Mã khách hàng: "+customerID+"; Tiền cáp: $"+total;
}
