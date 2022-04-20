
var CORRECT_USER='tienmai123@gmail.com';
var CORRECT_PASS='150202'



var inputUsername = document.getElementById('username');
var inputPassword = document.getElementById('password');
var formLogin = document.getElementById('FDN');

if(formLogin.attachEvent)
	{
		formLogin.attachEvent ('submit', onFormsubmit);
	}
else
	{
		formLogin.addEventListener('submit',onFormsubmit);
	}

function onFormsubmit(e){
	if(e.preventDefault) e.preventDefault();
	var username=inputUsername.value;
	var password=inputPassword.value;



if(username == CORRECT_USER && password == CORRECT_PASS)
	{
		window.location='file:///E:\HK2_2021_2022\HTCNWeb\20005501_LeThiNgocMai_Lop_Nhom\Web\46_DeTai46_LeThiNgocMai_HoangThuyTien_DHCNTT16C\deTaiWebBanVatTuYTe\html\doAn2.html';
	}
else
	alert("Tai khoan chua duoc dang ky");
}