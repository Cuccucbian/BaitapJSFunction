/**
 * đầu vào
 * - điểm chuẩn
 * - điểm 3 môn
 * - khu vực (A,B,C) là X nếu ko thuộc khu vực ưu tiên
 * - đối tượng (1,2,3) là 0 nếu ko thuộc diện ưu tiên
 * xử lý
 * - điểm chuẩn max là 30
 * - điểm tổng kết = tổng điểm 3 môn + điểm ưu tiên
 * - điểm ưu tiên = điểm ưu tiên khu vực + ưu tiên đối tượng
 * - khu vực A = 2, B = 1, C = 0.5
 * - đối tượng 1 = 2.5, 2 = 1.5, 3 = 1
 * - đạt nếu điểm >= điểm chuẩn or ko môn nào điểm 0
 * đầu ra
 * - đậu hay rớt và tổng số điểm đạt được
 */

function calculateScore() {
    const passingScore = document.getElementById("passingScore").value * 1;
    const score_1 = document.getElementById("score_1").value * 1;
    const score_2 = document.getElementById("score_2").value * 1;
    const score_3 = document.getElementById("score_3").value * 1;
    const area = document.getElementById("area").value;
    const participant = document.getElementById("participant").value;
    let totalScore = 0;
    let result = "";
    if (passingScore > 30 || passingScore < 3) {
        alert("Nhập lại điểm chuẩn!");
    } else if (passingScore === "") {
        alert("Nhập giá trị!");
    } else if (score_1 === 0 || score_2 === 0 || score_3 === 0) {
        result = "Xin chúc mừng, bạn đã TRƯỢT!!!";
    } else {
        totalScore = score_1 + score_2 + score_3;
        switch (area) {
            case "A":
                totalScore = totalScore + 2;
                break;
            case "B":
                totalScore = totalScore + 1;
                break;
            case "C":
                totalScore = totalScore + 0.5;
                break;
            default:
                break;
        }
        switch (participant) {
            case "1":
                totalScore = totalScore + 2.5;
                break;
            case "2":
                totalScore = totalScore + 1.5;
                break;
            case "3":
                totalScore = totalScore + 1;
                break;
            default:
                break;
        }
        if (totalScore<passingScore) {
            result = "Xin chúc mừng, bạn đã TRƯỢT với số điểm là "+ totalScore+ " !!!";
        }else{
            result = "Xin chúc mừng, bạn đã ĐẬU với tổng điểm là " + totalScore+ " !!!";
        }
    }
    document.getElementById("result").innerHTML = result;


}