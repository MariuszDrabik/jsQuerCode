const qrcode = new QRCode(document.getElementById("qrcode"), {
	width : 500,
	height : 500
});

const inputField = document.getElementById("text")

inputField.addEventListener("input", function () {
    qrcode.makeCode(this.value);
    console.log(this.value);

});
