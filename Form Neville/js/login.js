document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;

    const storedUser = JSON.parse(localStorage.getItem(loginEmail))

    if (storedUser && storedUser.loginPassword === loginPassword) {
        alert("Login Berhasil" + storedUser.nama + "!");
    } else {
        alert("email atau password salah")
    }
});