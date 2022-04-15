import Dropzone from "dropzone";

export const uploadPhoto = () => {

    const place = document.querySelector('.upload-photo__content_img_in');
    const el = document.querySelector('.upload-photo__content_img_text_in');
    const action = document.querySelector('.upload-photo__content_img_action');
    const remove = document.querySelector('.upload-photo__content_img_action_remove');
    const change = document.querySelector('.upload-photo__content_img_action_change');
    const uploadBtn = document.querySelector('#uploadFormWithPhoto');
    

    let field = new Dropzone('#upload-photo', {
        url: el.dataset.url,
        method: el.dataset.method,
        uploadMultiple: false,
        thumbnailWidth: null,
        thumbnailHeight: null,
        autoQueue: false
    });

    field.on('addedfile', () => {
        place.classList.add('active');
        action.classList.add('active');
    });

    field.on('addedfile', function(file) {
        if(remove) {
            remove.addEventListener('click', (e) => {
                field.removeFile(file);

                place.classList.remove('active');
                action.classList.remove('active');
            });
        }

        if(change) {
            change.addEventListener('click', () => {
                field.removeFile(file);

                place.classList.remove('active');
                action.classList.remove('active');
            });
        }

        if(uploadBtn) {
            uploadBtn.addEventListener('click', (e) => {
                field.uploadFile(file);
            });
        }
    });

    

    
}