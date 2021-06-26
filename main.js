function getStarted() {
    username = document.getElementById("name").value;
    useremail = document.getElementById("email").value;

    if (username, useremail == "") {
        document.getElementById("wrong").innerHTML = "<i class='fa fa-warning'>&nbsp;</i>" + "Plaese give correct details";
    } else {
        localStorage.setItem("username", username);
        localStorage.setItem("username", useremail);
        window.location = "./dashboard/dash.html";
    }
}