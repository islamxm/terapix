export const accountMenu = () => {
    const el = document.querySelector('.header__action');
    let intervalId;
    const heads = document.querySelectorAll('.header__action_btn ');


    el.addEventListener('click', (event) => {

        if(event.target.classList.contains('header__action_btn')) {
            const menu = event.target.dataset.path;
            const list = document.querySelector(`[data-target=${menu}]`);

            let actionList = document.querySelector('.header__action_menu');

            if(!list.classList.contains('open')) {
                actionList.classList.remove('open');
                actionList.classList.remove('active');

                list.classList.add('active');
                list.parentElement.classList.add('active');
                intervalId = setTimeout(() => {
                    list.classList.add('open');
                    
                }, 0);
            }

            if(list.classList.contains('open')) {
                clearInterval(intervalId);
                list.classList.remove('active');
                intervalId = setTimeout(() => {
                    list.classList.remove('open');
                }, 0);
            }

            window.addEventListener('click', (e) => {
                if(e.target == list || e.target == document.querySelector(`[data-path=${menu}]`)) {
                    return;
                } else {
                    list.classList.remove('active');
                    list.classList.remove('open');
                }
            });
        }
    });

};