function login() {
    email = document.getElementById("email");
    pass = document.getElementById("pass");
    var result = firebase.auth().signInWithEmailAndPassword(email.value, pass.value);
    result.catch(e => alert(e.message));
}
auth.onAuthStateChanged(function(user) {
    if (user) {
        window.location.href = "home.html";
    } else {
        console.log("Enter correct id pass");
    }
});