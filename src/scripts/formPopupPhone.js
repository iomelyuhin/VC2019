const myForm = document.querySelector('#formPopupPhone');
const overlay = document.querySelector('#formOverlayPopupPhone');
const button = document.querySelector('#sendFormPopupPhone');

button.addEventListener('click', e => {
    e.preventDefault();



    if (validateForm(myForm)) {
        ym(55520197, 'reachGoal', 'Phone')
        let formData = new FormData();
        let url = "./mailPopupPhone.php";

        formData.append("phone", myForm.elements.phone.value);
        
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open("POST", url);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.send(formData);

        xhr.addEventListener('load', () => {

            if (xhr.status >= 400) {
                overlay.textContent = 'Что-то пошло не так';
                overlay.classList.add("active-error")
                button.classList.add("disabled")
                
            } else {
                overlay.textContent = "Мы свяжемся с Вами в ближайшее время!";
                overlay.classList.add("active");
                button.classList.add("disabled");
                clearForm(myForm);
              }
            
        })
    }
});

function clearForm(form) {
    form.elements.phone.value = "";
}

function closeForm(form) {
    form.classList.remove("active");
}

function validateForm(form) {
    let valid = true;

    if (!validateField(form.elements.phone)) {
        valid = false;
    }

    return valid;
}

function validateField(field) {
    field.nextElementSibling.textContent = field.validationMessage;

    return field.checkValidity();
}