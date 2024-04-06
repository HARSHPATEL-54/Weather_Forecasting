function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "admin" && password === "admin") {
        window.location.assign("index.html");
        alert("Login Successfully :)");
        return true;
    } else {
        alert("Login Failed");
        return false;
    }
}