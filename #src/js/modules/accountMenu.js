export const accountMenu = () => {
    const trigger = document.querySelector('.header__action_btn');
    const menu = document.querySelector('.header__action_menu');

    if(trigger && menu) {
        trigger.addEventListener('click', (e) => {
            menu.classList.toggle('active');
        });
    }

}