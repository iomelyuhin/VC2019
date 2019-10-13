const myForm = document.querySelector('#formPopupCond');
const overlay = document.querySelector('#formOverlayPopupCond');
const button = document.querySelector('#sendFormPopupCond');

button.addEventListener('click', e => {
    e.preventDefault();



    if (validateForm(myForm)) {
        ym(55520197, 'reachGoal', 'Condition')
        let formData = new FormData();
        let url = "./mailPopupCond.php";

        formData.append("name", myForm.elements.name.value);
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
    form.elements.name.value = "";
    form.elements.phone.value = "";
}

function closeForm(form) {
    form.classList.remove("active");
}

function validateForm(form) {
    let valid = true;
    if (!validateField(form.elements.name)) {
        valid = false;
    }

    if (!validateField(form.elements.phone)) {
        valid = false;
    }

    return valid;
}

function validateField(field) {
    field.nextElementSibling.textContent = field.validationMessage;

    return field.checkValidity();
}