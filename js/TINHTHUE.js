document.getElementById("btnTienthue").onclick = function (){
    var Ten = document.getElementById("Hoten").value;
    var Tienthunhap = Number(document.getElementById("Thunhap").value);
    var Nguoiphuthuoc = document.getElementById("Songuoi").value;

    var Tienchiuthue = 0;
    Tienchiuthue = Tienthunhap - 4e+6 - Number(Nguoiphuthuoc) * 1.6e+6;
    var Tienthue = 0;

    if (Tienthunhap > 10e+6 && Tienthunhap <= 60e+6){
        Tienthue = Tienchiuthue * 0.05;
    } else if (Tienthunhap > 60e+6 && Tienthunhap <= 120e+6){
        Tienthue = 60e+6 * 0.05 + (Tienchiuthue - 60e+6) * 0.1;
    } else if (Tienthunhap > 120e+6 && Tienthunhap <= 210e+6){
        Tienthue = 60e+6 * 0.05 + 60e+6 * 0.1 + (Tienchiuthue - 120e+6) * 0.15;
    } else if (Tienthunhap > 210e+6 && Tienthunhap <= 384e+6){
        Tienthue =  60e+6 * 0.05 + 60e+6 * 0.1 + 120e+6 * 0.15 + (Tienchiuthue - 210e+6) * 0.2;
    } else if (Tienthunhap > 384e+6 && Tienthunhap <= 624e+6){
        Tienthue = 60e+6 * 0.05 + 60e+6 * 0.1 + 120e+6 * 0.15 + 174e+6 * 0.2 + (Tienchiuthue - 384e+6) * 0.25;
    } else if (Tienthunhap > 624e+6 && Tienthunhap <= 960e+6){
        Tienthue =  60e+6 * 0.05 + 60e+6 * 0.1 + 120e+6 * 0.15 + 174e+6 * 0.2 + 240e+6 * 0.25 + (Tienchiuthue - 624e+6) * 0.3;
    } else {
        Tienthue =  60e+6 * 0.05 + 60e+6 * 0.1 + 120e+6 * 0.15 + 174e+6 * 0.2 + 240e+6 * 0.25 + 336e+6 * 0.3 + (Tienchiuthue - 960e+6) * 0.35;
    }
    
    document.getElementById("Tienthue").innerHTML = "Họ tên :" + Ten + "Tiền thuế thu nhập cá nhân :" + Tienthue.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});



}