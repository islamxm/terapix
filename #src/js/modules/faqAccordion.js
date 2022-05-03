export const faqAccordion = () => {
    const els = document.querySelectorAll('.faq__body_list_item');

    if(els.length > 0) {
        els.forEach(el => {
            el.addEventListener('click', (e) => {
                
                if(e.target.classList.contains('faq__body_list_item_head')) {
                    el.classList.toggle('active');
                    if(el.classList.contains('active')) {
                        e.target.nextElementSibling.style.cssText = `height: ${e.target.nextElementSibling.scrollHeight}px`;
                    }
                    if(!el.classList.contains('active')) {
                        e.target.nextElementSibling.style.cssText = `height: ${0}px`;
                    }
                }
            });
        });
    }
};