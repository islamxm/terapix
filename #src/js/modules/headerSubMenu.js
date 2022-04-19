export const headerSubMenu = () => {
    const els = document.querySelectorAll('.header__nav_item--sm');
    const menu = document.querySelector('.submenu');
    const back = document.querySelector('.submenu__back');
    
    window.addEventListener('resize', (e) => {
        if(window.innerWidth < 925) {
            if(els.length > 0) {
                els.forEach(el => {
                    el.addEventListener('click', (e) => {
                        e.preventDefault();
                        // menus.forEach(menu => {
                        //     if(menu.dataset.menuhead == el.parentElement.parentElement.dataset.menutarget) {
                        //         menu.classList.add('active');
                        //     }
                        // });
                        // document.querySelector(`[data-menutarget=${el.parentElement.parentElement.dataset.menuhead}]`).classList.add('active');
                        menu.classList.add('active');
                    });
                });

                if(back) {
                    back.addEventListener('click', () => {
                        menu.classList.remove('active');
                    });
                }

                
            }
        } else {
            return;
        }
    });

    if(window.innerWidth < 925) {
        if(els.length > 0) {
            els.forEach(el => {
                el.addEventListener('click', (e) => {
                    e.preventDefault();
                    // menus.forEach(menu => {
                    //     if(menu.dataset.menuhead == el.parentElement.parentElement.dataset.menutarget) {
                    //         menu.classList.add('active');
                    //     }
                    // });
                    // document.querySelector(`[data-menutarget=${el.parentElement.parentElement.dataset.menuhead}]`).classList.add('active');
                    menu.classList.add('active');
                });
            });
            if(back) {
                back.addEventListener('click', () => {
                    menu.classList.remove('active');
                });
            }
        } else {
            return;
        }
    }

    
};