document.addEventListener('DOMContentLoaded', (event) => {
    // 1
    let formData = {
        email: "",
        message: ""
    };

    const feedbackForm = document.querySelector('.feedback-form');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // 2
    feedbackForm.addEventListener('input', function(event) {
        if (event.target.name === 'email') {
            formData.email = event.target.value;
        } else if (event.target.name === 'message') {
            formData.message = event.target.value;
        }

        localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    });

    // 3
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        formData = JSON.parse(savedData);
        emailInput.value = formData.email;
        messageInput.value = formData.message;
        console.log("Saved data: " + savedData);
    }

    // 4
    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault();
        if (formData.email.trim() === "" || formData.message.trim() === "") {
            alert("Fill please all fields");
        } else {
            console.log(formData);

            formData.email = "";
            formData.message = "";
            emailInput.value = '';
            messageInput.value = '';
            localStorage.removeItem('feedback-form-state');
        }
    });
});


