const heroBtn = document.querySelector('.button--hero');
const form = document.querySelector('.form-wrap');
const wrapper = document.querySelector('.form__wrap-container');
const closeBtn = document.querySelector('.form__btn-close');
const formBtn = document.querySelector('#sendFormPopup');
const formOverlay = document.querySelector('#formOverlayPopup');

const formCond = document.querySelector('#formCond');
const wrapperCond = document.querySelector('#condWrap');
const closeBtnPhone = document.querySelector('#closePhone');
const formOverlayPhone = document.querySelector('#formOverlayPopupPhone');
const condBtn = document.querySelector('.button--conditioners')

const phoneBtn = document.querySelector('.phone__callback');
const phoneBtnFooter = document.querySelector('.phone__callback--footer');
const formPhone = document.querySelector('#formPhone');
const wrapperPhone = document.querySelector('#phoneWrap');
const closeBtnCond = document.querySelector('#closeCond');
const formOverlayCond = document.querySelector('#formOverlayPopupCond');

const imgBtn = document.querySelector('.imgPopup-proj');
const imgBtnProj = document.querySelector('.imgPopup-project');
const imgWrapper = document.querySelector('.imgPopup__container');
const closeImgBtn = document.querySelector('.imgPopup__btn-close');



function hideForm() {
    form.classList.remove('active');
    wrapper.classList.remove('active');
    formBtn.classList.remove('disabled');
    formOverlay.classList.remove('active');
}    
function hideFormCond() {
    formCond.classList.remove('active');
    wrapperCond.classList.remove('active');
    formBtn.classList.remove('disabled');
    formOverlayCond.classList.remove('active');
}    
function hideFormPhone() {
    formPhone.classList.remove('active');
    wrapperPhone.classList.remove('active');
    formBtn.classList.remove('disabled');
    formOverlayPhone.classList.remove('active');
}    


function showForm() {
    formBtn.classList.remove('disabled');
    formOverlay.classList.remove('active');
    form.classList.add('active');
    wrapper.classList.add('active');

}
function showFormPhone() {
    formBtn.classList.remove('disabled');
    formOverlayPhone.classList.remove('active');
    formPhone.classList.add('active');
    wrapperPhone.classList.add('active');

}
function showFormCond() {
    formBtn.classList.remove('disabled');
    formOverlayCond.classList.remove('active');
    formCond.classList.add('active');
    wrapperCond.classList.add('active');

}

function showImg() {

    imgWrapper.classList.add('active');
}


function hideImg() {
    imgWrapper.classList.remove('active');
}   


document.addEventListener('click', e => {
    const target = e.target;
    
    target === heroBtn ? showForm() : target === wrapper ? hideForm() : false;
    target === closeBtn ? hideForm() && hideFormCond()  : target === wrapper || target === wrapperCond ? hideForm() && hideFormCond() : false;
    
    target === condBtn ? showFormCond() : target === wrapperCond ?  hideFormCond() : false;
    target === closeBtnCond ? hideFormCond()  :  target === wrapperCond ? hideFormCond() : false;
    
    target === phoneBtn ? showFormPhone() : target === wrapperPhone ?  hideFormPhone() : false;
    target === phoneBtnFooter ? showFormPhone() : target === wrapperPhone ?  hideFormPhone() : false;
    target === closeBtnPhone ? hideFormPhone()  :  target === wrapperPhone ? hideFormPhone() : false;

    target === closeImgBtn ? hideImg() : target === imgWrapper ? hideImg() : false;
    target === imgBtn ? showImg() : target === imgWrapper ? hideImg() : false;
    target === imgBtnProj ? showImg() : target === imgWrapper ? hideImg() : false;
  });