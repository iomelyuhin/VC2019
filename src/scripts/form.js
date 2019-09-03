const myForm = document.querySelector('#form');
const send = document.querySelector('#sendForm');
const overlay = document.querySelector('#formOverlayProj');

send.addEventListener('click', e => {
    e.preventDefault();



    if (validateForm(myForm)) {
        let formData = new FormData();
        let url = "https://webdev-api.loftschool.com/sendmail";

        formData.append("name", myForm.elements.name.value);
        formData.append("phone", myForm.elements.phone.value);
        formData.append("comment", "11");
        formData.append("to", "i.omelyuhin@gmail.com");
        
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open("POST", url);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.send(formData);

        xhr.addEventListener('load', () => {
            console.log(xhr.response.message);

            if (xhr.status >= 400) {
                overlay.textContent = 'Что-то пошло не так';
                overlay.classList.add("active-error")
        
              } else {
                  if (xhr.response.message = 'Письмо успешно отправлено') {
                      overlay.textContent = "Мы свяжемся с Вами в ближайшее время!";
                    
                  }
                  overlay.classList.add("active")
                  clearForm(myForm);
              }
            
        })
    }
});

function clearForm(form) {
    form.elements.name.value = "";
    form.elements.phone.value = "";
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