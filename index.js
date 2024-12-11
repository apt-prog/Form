function submitForm() {

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check for empty fields
    
    if (username.trim() === "" || password.trim() === "") {
        alert("Please Fill The Fields.");
        return false; // Prevent further action
    }

    // Display results

    document.getElementById('result1').innerHTML = "Name: " + username;
    document.getElementById('result2').innerHTML = "Password: " + password;
    
}

function resetForm() {

    document.getElementById('username').value = "";
    document.getElementById('password').value = "";
    document.getElementById('result1').innerHTML = "";
    document.getElementById('result2').innerHTML = "";

}
