document.getElementById("btnTiendien").onclick = function () {
    var Hoten = document.getElementById("ten").value;
    var Sokw = Number(document.getElementById("kw").value);

    var Tienphi = 0;
    if (Sokw > 0 && Sokw <= 50) {
        Tienphi = Sokw * 500;
    } else if (Sokw > 50 && Sokw <= 100) {
        Tienphi = 50 * 500 + ((Sokw - 50) * 650);
    } else if (Sokw > 100 && Sokw <= 200) {
        Tienphi = 50 * 500 + 50 * 650 + (Sokw - 100) * 850;
    } else if (Sokw > 200 && Sokw <= 350) {
        Tienphi = 50 * 500 + 50 * 650 + 100 * 850 + (Sokw - 200) * 1100;
    } else {
        Tienphi = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (Sokw - 350) * 1300;
    }
    document.getElementById("Tiendien").innerHTML = "Họ tên là :" + Hoten + ";" + "Tiền điện phải trả :" + Tienphi.toLocaleString() + "VNĐ";
}