import tippy from "tippy.js";

export const infoTip = () => {
    const rateTipEl = document.querySelector('#rateInfoTip');
    const rateTip = new tippy(rateTipEl, {
        allowHTML: true,
        content: 
            `<div class='tip'><div class='tip__head'>${rateTipEl.previousElementSibling.innerHTML}</div><div class='tip__text'>${rateTipEl.dataset.content}</div></div>`,
        
    });
};