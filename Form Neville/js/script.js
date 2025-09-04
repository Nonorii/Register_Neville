document.getElementById("registerForm").addEventListener("submit", function(e) {
            e.preventDefault(); 

            const nama = document.getElementById("nama").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const nomorhandphone = document.getElementById("nomorhandphone").value;
            const date = document.getElementById("date").value;

            const tableBody = document.getElementById("datatable").getElementsByTagName("tbody")[0];

            const user = {
                nama: nama,
                email: email,
                password: password,
                nomorhandphone: nomorhandphone,
                date: date

            };
            localStorage.setItem(email, JSON.stringify(user));

            alert("Sukses enak isi dua bikin kenyang");

            const newRow = tableBody.insertRow();
            newRow.insertCell(0).textContent = nama;
            newRow.insertCell(1).textContent = email;
            newRow.insertCell(2).textContent = password;
            newRow.insertCell(3).textContent = nomorhandphone;
            newRow.insertCell(4).textContent = date;

            document.getElementById("registerForm").reset();
        });