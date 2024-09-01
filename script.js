function validateForm() {
    // Validate phone number
    const phone = document.getElementById('phone').value;
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    //Validate Student Number
    const studentno = document.getElementById('studentno').value;
    const studentnoRegex = /^\d{2}[A-Z]{2}\d{3}$/;
    if (!studentnoRegex.test(studentno)) {
        alert("Please enter a valid student number like 20AD001");
        return false;
    }

    // Validate email
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate password and confirm password match
    const password = document.getElementById('password').value;

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }

    // Check if the password contains at least one uppercase letter
    let hasUpperCase = false;
    for (let i = 0; i < password.length; i++) {
        if (password[i] >= 'A' && password[i] <= 'Z') {
            hasUpperCase = true;
            break;
        }
    }
    if (!hasUpperCase) {
        alert("Password must contain at least one uppercase letter.");
        return false;
    }

    // Check if the password contains at least one digit
    let hasNumber = false;
    for (let i = 0; i < password.length; i++) {
        if (password[i] >= '0' && password[i] <= '9') {
            hasNumber = true;
            break;
        }
    }
    if (!hasNumber) {
        alert("Password must contain at least one number.");
        return false;
    }
    
    const confirmPassword = document.getElementById('confirm_password').value;
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // Ensure all other fields are filled out
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const course = document.getElementById('course').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const address = document.getElementById('address').value;
    const profilePic = document.getElementById('profile_pic').files[0];

    if (!firstname || !lastname || !course || !gender || !address || !profilePic) {
        alert("All fields are mandatory.");
        return false;
    }

    // If everything is valid
    alert("Form submitted successfully!");
    return true;
}
