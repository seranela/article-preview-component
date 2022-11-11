let socialBar = document.getElementById('social-bar');
let socialPopup = document.getElementById('social-popup');

function resizeUpdate() {
   if (document.body.offsetWidth < 576)
      socialPopup.classList.remove('visible');
   else
      socialBar.classList.remove('visible');
}

function toggleSocial() {
   if (document.body.offsetWidth < 576)
      socialBar.classList.toggle('visible');
   else {
      resizeUpdate();
      socialPopup.classList.toggle('visible');
   }
}

window.onresize = resizeUpdate;