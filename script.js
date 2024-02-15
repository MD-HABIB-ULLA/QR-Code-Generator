const generator = document.getElementById('generator');
generator.addEventListener('click', function () {
    const inputText = document.getElementById('inputText').value; // Get the value of the input
    const qrImg = document.getElementById('rqimg');
    if (inputText.length > 0) {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputText;
        document.getElementById('inputText').value = ''; // Clear the input field
    } else {
        alert("Please Enter An Input");
    }
});
