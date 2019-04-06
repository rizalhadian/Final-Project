const button   = document.querySelector('.submit-button'),
      stateMsg = document.querySelector('.pre-state-msg');

const updateButtonMsg = function() {
  button.classList.add('state-1', 'animated');
  button.classList.add('state-2');
};


function validation(){
    button.classList.add('state-1', 'animated');
    setTimeout(updateButtonMsg, 40000);
}