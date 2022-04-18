export const dropdown = () => {
    const els = document.querySelectorAll('.dropdown');

    let intervalId;

    const heads = document.querySelectorAll('.dropdown__head');

    els.forEach(el => {
        el.addEventListener('click', (event) => {

            if(event.target.classList.contains('dropdown__list_item')) {
                event.target.parentElement.previousElementSibling.innerHTML = event.target.innerHTML;
                event.target.parentElement.previousElementSibling.parentElement.dataset.selected = event.target.dataset.value;
                event.target.parentElement.classList.remove('open');
                event.target.parentElement.classList.remove('active');
                
            }

            if(event.target.classList.contains('dropdown__head')) {
                const menu = event.target.dataset.path;
                const list = document.querySelector(`[data-target=${menu}]`);

                
                document.querySelectorAll('.dropdown__list').forEach(e => {

                    if(!list.classList.contains('open')) {
                        e.classList.remove('open');
                        e.classList.remove('active');
                        e.parentElement.classList.remove('active');

                        list.classList.add('active');
                        list.parentElement.classList.add('active');
                        intervalId = setTimeout(() => {
                            list.classList.add('open');
                            
                        }, 0);
                    }

                    if(list.classList.contains('open')) {
                        clearInterval(intervalId);
                        list.classList.remove('active');
                        list.parentElement.classList.remove('active');
                        intervalId = setTimeout(() => {
                            list.classList.remove('open');
                        }, 0);
                    }
                })

                window.addEventListener('click', (e) => {
                    if(e.target == list || e.target == document.querySelector(`[data-path=${menu}]`)) {
                        return;
                    } else {
                        list.classList.remove('active');
                        list.parentElement.classList.remove('active');
                        list.classList.remove('open');
                    }
                })
            }
        })
    })
}