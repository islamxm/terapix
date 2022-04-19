export const mobileMenu = () => {
    const menu = document.querySelector('.header__nav');
    const btn = document.querySelector('.header__burger');
    const close = document.querySelector('.header__nav_head_close');
    const submenu = document.querySelector('.submenu');
    if(btn && menu && close) {
        btn.addEventListener('click', (e) => {
            menu.classList.add('active');
        });

        close.addEventListener('click', (e) => {
            menu.classList.remove('active');
            if(submenu.classList.contains('active')) {
                submenu.classList.remove('active');
            }
        });

        
    }
};