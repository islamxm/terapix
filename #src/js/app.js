import * as flsFuncs from './modules/functions.js';
import MicroModal from 'micromodal';
import { accountMenu } from './modules/accountMenu.js';
import { uploadPhoto } from './modules/uploadPhoto.js';



document.addEventListener('DOMContentLoaded', () => {
    flsFuncs.isWebp();
    MicroModal.init();
    accountMenu();
    uploadPhoto();
});