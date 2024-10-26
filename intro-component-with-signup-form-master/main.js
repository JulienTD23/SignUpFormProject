const errors = document.querySelectorAll(".error-hide");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const validEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const pw = document.getElementById("pw");
const button = document.getElementById("claim");

button.addEventListener('click', (submission) => {
    submission.preventDefault();
    
    function errorToggle(field, val) {
        const e = field.nextElementSibling;
        const f = e.nextElementSibling;

        if (val) {
            e.classList.remove("error-hide");
            f.classList.remove("error-hide");
            field.style.border = "solid red";
        } else {
            e.classList.add("error-hide");
            f.classList.add("error-hide");
            field.style.border = 'solid grey';
        }
    }

    if (fname.value.trim() === "") {
        errorToggle(fname, true);
    } else {
        errorToggle(fname, false);
    }
    
    if (lname.value.trim() === "") {
        errorToggle(lname, true);
    } else {
        errorToggle(lname, false);
    }

    if (pw.value.trim() === "") {
        errorToggle(pw, true);
    } else {
        errorToggle(pw, false);
    }

    if (!(email.value.match(validEmail))) {
        errorToggle(email, true);
    } else {
        errorToggle(email, false);
    }
});



