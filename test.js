var labelTK = document.querySelector("#label-tk")
var labelMK = document.querySelector("#label-mk")
var divTong = document.querySelector("#form")
var taiKhoan = document.querySelector(".tai-khoan")
var matKhau = document.querySelector(".mat-khau")
var divTK = document.querySelector("#tk-ne")

labelTK.style.color = "red";
labelTK.style.fontSize = "20px"
labelMK.style.color = "blue"

// divTong.style.border = "2px solid black"
// divTong.style.padding = "30px 10px 20px 10px"
// divTong.style.width = "500px"
// divTong.style.backgroundColor = "beige"

divTK.style.padding = "10px"

var valueTaiKhoan = "Test333"
var valueMatKhau = "hoilamgi"

taiKhoan.value = valueTaiKhoan
taiKhoan.style.width = "150px"
taiKhoan.style.height = "30px"
taiKhoan.style.border = "1px solid blue"


matKhau.value = valueMatKhau

divTong.classList.add("div-tong" , "div-tong-bg")
console.log(divTong)



