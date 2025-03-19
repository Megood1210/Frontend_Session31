let username = "huanrose@gmail.com";
let password = "123456";
document.getElementById("login").addEventListener("click", function(event) {
    event.preventDefault(); 
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "huanrose@gmail.com" && password === "123456") {
        console.log("đăng nhập thành công");
    } else {
        console.log("đăng nhập thất bại");
    }
});