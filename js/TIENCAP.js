document.getElementById("Loaikhachhang").onchange = function () {
    var Loai = document.getElementById("Loaikhachhang").value;
    var x = document.getElementById("Mydiv");

    if (Loai == "Doanh Nghiệp"){
        x.style.display = "Block";
    } else {
        x.style.display = "None"
    }

}

document.getElementById("btnTiencap").onclick = function () {
    //input
    var Loai = document.getElementById("Loaikhachhang").value;
    var Kenh = Number(document.getElementById("Kenhcaocap").value);
    var Makh = document.getElementById("MaKH").value;
    var soketnoi = document.getElementById("Ketnoi").value;
    
    // Tính số kết nối doanh nghiệp
    var soketnoiDN = 0;
    if (soketnoi <= 10){
        soketnoiDN = 75;
    } else {
        soketnoiDN = 75 + Number(soketnoi) * 5;
    }

    // Tiền cap
    var Tiencap = 0;
    if (Loai == "Nhà Dân"){
        Tiencap = 4.5 + 20.5 + Kenh * 7.5;
    } else {
        Tiencap = 15 + soketnoiDN + Kenh * 50;
    }
 
    document.getElementById("cap").innerHTML = "Mã khách hàng :" + Makh + ";" + "Tiền cáp :" + Tiencap.toLocaleString('it-IT', {style : 'currency', currency : 'USD'});


}



