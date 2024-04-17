
document.addEventListener("DOMContentLoaded", function() {
    if (khachhangJSON) {
        var khachhang = JSON.parse(khachhangJSON);
        document.getElementById("login-tendangnhap").value = khachhang.tenDangNhap;
        document.getElementById("login-matkhau").value = khachhang.matKhau;
    }
});

var khachhangJSON = localStorage.getItem("khachhang");
var khachhang = JSON.parse(khachhangJSON);
function kiemTraLoginTDN() {
    var login_tendangnhap = document.getElementById("login-tendangnhap").value;
    if (login_tendangnhap == ""){
        document.getElementById("error-message-tdn").innerHTML = "Tên đăng nhập không được để trống";
        return false;
    }else{
        document.getElementById("error-message-tdn").innerHTML = "";
    }
    if (login_tendangnhap !==  khachhang.tenDangNhap) {
        document.getElementById("error-message-tdn").innerHTML = "Tên đăng nhập không tồn tại";
        return false;
    }
    return true;
}

function kiemTraLoginMK() {
    var login_matkhau = document.getElementById("login-matkhau").value;
   
    if(login_matkhau ==""){
        document.getElementById("error-message-mk").innerHTML = "Mật khẩu không được để trống";
        return false;
    }else{
        document.getElementById("error-message-mk").innerHTML = "";
    }
    if(kiemTraLoginTDN()){
        if(login_matkhau !== khachhang.matKhau){
            document.getElementById("error-message-mk").innerHTML = "Mật khẩu không chính xác";
            return false;
        }
    }
    return true;
}

function kiemTraFormDN(){
    if(kiemTraLoginTDN() && kiemTraLoginMK()){
        window.location.href = "../html/index.html";
        return true;
    }
    return false;
}
