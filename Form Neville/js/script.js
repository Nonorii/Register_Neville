document.getElementById("registerForm").addEventListener("submit", function(e) {
            e.preventDefault(); 

            const nama = document.getElementById("nama").value;
            const email = document.getElementById("email").value;
            const nomorhandphone = document.getElementById("nomorhandphone").value;
            const date = document.getElementById("date").value;

            const tableBody = document.getElementById("datatable").getElementsByTagName("tbody")[0];

            const newRow = tableBody.insertRow();
            newRow.insertCell(0).textContent = nama;
            newRow.insertCell(1).textContent = email;
            newRow.insertCell(2).textContent = nomorhandphone;
            newRow.insertCell(3).textContent = date;

            document.getElementById("registerForm").reset();
        });