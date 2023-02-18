document.getElementById("btnKetqua").onclick = function () {
    //input
    var Diemchuan = document.getElementById("Diemchuan").value;
    var Diem1 = document.getElementById("diemmon1").value;
    var Diem2 = document.getElementById("diemmon2").value;
    var Diem3 = document.getElementById("diemmon3").value;
    var Diemkhuvuc = document.getElementById("diemkhuvuc").value;
    var Diemdoituong = document.getElementById("diemdoituong").value;

    // console.log(Diemdoituong);
    // // //Điểm khu vực
    var Khuvuc = 0;

    if (Diemkhuvuc == "A") {
        Khuvuc = 2;
    } else if (Diemkhuvuc == "B") {
        Khuvuc = 1;
    } else if (Diemkhuvuc == "C") {
        Khuvuc = 0.5;
    } else {
        Khuvuc = 0;

    }
    // console.log(Khuvuc);
    //Điểm đối tượng 
    var doituong = 0;

    if (Diemdoituong == "1") {
        doituong = 2.5;
    } else if (Diemdoituong == "2") {
        doituong = 1.5;
    } else if (Diemdoituong == "3") {
        doituong = 1;
    } else {
        doituong = 0;
    }
    // console.log(doituong);

    var Diemtong = 0;
    Diemtong = Number(Diem1) + Number(Diem2) + Number(Diem3) + Khuvuc + doituong;
    //  console.log(Diemtong);
    if (Diem1 > 0 && Diem2 > 0 && Diem3 > 0 && Diemtong >= Diemchuan
    ) {
        document.getElementById("output").innerHTML = "Bạn đã đậu ." + "Điểm tổng là :" + Diemtong;
    } else {
        document.getElementById("output").innerHTML = "Bạn đã rớt." + "Do có điểm nhỏ hơn 0. ";
    }
}