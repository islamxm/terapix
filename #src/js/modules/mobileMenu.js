export const mobileMenu = () => {
    const menu = document.querySelector('.header__nav');
    const btn = document.querySelector('.header__burger');
    const close = document.querySelector('.header__nav_head_close');

    if(btn && menu && close) {
        btn.addEventListener('click', (e) => {
            menu.classList.add('active');
        });

        close.addEventListener('click', (e) => {
            menu.classList.remove('active');
        });
    }
};