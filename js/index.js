//bai 1

document.getElementById('btnTinhLuong').onclick = function() {
    var luong1Ngay = +document.getElementById('luong-1ngay').value;
    var soNgayLam = +document.getElementById('so-ngay-lam').value;
    var luong = luong1Ngay * soNgayLam;
    document.getElementById('ket-qua1').innerHTML = `<i class="fa fa-hand-point-right"></i> ${luong}`;
}   

// bài 2

document.getElementById('btn-tinhtb').onclick = function() {
    var soThu1 = +document.getElementById('so-thu1').value;
    var soThu2 = +document.getElementById('so-thu2').value;
    var soThu3 = +document.getElementById('so-thu3').value;
    var soThu4 = +document.getElementById('so-thu4').value;
    var soThu5 = +document.getElementById('so-thu5').value;
    var soTb = (soThu1+soThu2+soThu3+soThu4+soThu5)/5;
    document.getElementById('ket-qua2').innerHTML = `<i class="fa fa-hand-point-right"></i> ${soTb}`;
}   

// bài 3

document.getElementById('btn-doi-tien').onclick = function(){
    var soTien = +document.getElementById('so-tien').value;
    const motUSDVND = 23500;
    var quyDoiTien = soTien*motUSDVND;
    document.getElementById('ket-qua3').innerHTML =`<i class="fa fa-hand-point-right"></i>${new Intl.NumberFormat('vn-VN').format(quyDoiTien)}`;
}

// bài 4

document.getElementById('btn-tinh-cv-dt').onclick = function(){
    var chieuDai = +document.getElementById('chieu-dai').value;
    var chieuRong = +document.getElementById('chieu-rong').value;
    var chuVi = (chieuDai+chieuRong)*2;
    var dienTich = chieuDai*chieuRong;
    document.getElementById('ket-qua4').innerHTML = `<i class="fa fa-hand-point-right"></i>Chu Vi là :${chuVi} , Diện tích là : ${dienTich}`;
}

// bài 5
document.getElementById('btn-tinh-tong').onclick = function () {
    var soNhap = +document.getElementById('nhap-so').value;
    var hangChuc = Math.floor(soNhap/10);
    var hangDonVi = soNhap%10;
    var tongHaiKySo = hangChuc+hangDonVi;
    document.getElementById('ket-qua5').innerHTML = `<i class="fa fa-hand-point-right"></i> Tổng 2 ký số là : ${tongHaiKySo}`;
}