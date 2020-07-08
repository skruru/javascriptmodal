// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener('DOMContentLoaded', function () {
  const mdlOpen = document.querySelector('.js-modal-open');
  const addBtn = document.querySelector('.addBtn');
  const closeBtn = document.querySelector('.closeBtn');
  const mdl = document.querySelector('.mdl');
  const mdlBg = document.querySelector('.mdl_bg');

  mdlOpen.addEventListener('click', () => {
    mdl.classList.add('show');
    mdlBg.classList.add('show');
    document.body.classList.add('overflow');
  }, false);
  
  closeBtn.addEventListener('click', () => {
    mdl.classList.remove('show');
    mdlBg.classList.remove('show');
    document.body.classList.remove('overflow');
  }, false);
  
  mdlBg.addEventListener('click', () => {
    closeBtn.click();
  }, false);
  
  addBtn.addEventListener('click', () => {
    let inputValue = document.querySelector('.input').value;
    if(inputValue.length === 0 ) {
      alert('何か入力してください');
    } else {
      alert(inputValue);
      closeBtn.click();
      inputValue = '';
    }
  }, false);
}, false);
