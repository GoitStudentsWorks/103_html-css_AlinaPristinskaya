
(() => {
  const refs = {
    openMobmenuBtn: document.querySelector('[data-mobmenu-open]'),
    closeMobmenuBtn: document.querySelector('[data-mobmenu-close]'),
    mobmenu: document.querySelector('[data-mobmenu]'),
    closeMenuLink: document.querySelectorAll('.navigation-link-menu'),


  };

  refs.openMobmenuBtn.addEventListener('click', toggleModal);
  refs.closeMobmenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuLink.forEach(item => item.addEventListener('click', toggleModal));

  function toggleModal() {
    refs.mobmenu.classList.toggle('is-hidden');

  }
})();