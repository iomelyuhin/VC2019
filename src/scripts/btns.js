const heroBtn = document.querySelector('.button--hero');
const form = document.querySelector('.form-wrap');
const wrapper = document.querySelector('.form__wrap-container');
const condBtn = document.querySelector('.button--conditioners');
const closeBtn = document.querySelector('.form__btn-close');
const formBtn = document.querySelector('#sendFormPopup');
const formOverlay = document.querySelector('#formOverlayPopup');

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


function showForm() {
    formBtn.classList.remove('disabled');
    formOverlay.classList.remove('active');
    form.classList.add('active');
    wrapper.classList.add('active');

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
    target === condBtn ? showForm() : target === wrapper ? hideForm() : false;
    target === closeBtn ? hideForm() : target === wrapper ? hideForm() : false;
    target === closeImgBtn ? hideImg() : target === imgWrapper ? hideImg() : false;
    target === imgBtn ? showImg() : target === imgWrapper ? hideImg() : false;
    target === imgBtnProj ? showImg() : target === imgWrapper ? hideImg() : false;
  });