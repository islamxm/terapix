import * as flsFuncs from './modules/functions.js';
import MicroModal from 'micromodal';
import { accountMenu } from './modules/accountMenu.js';
import { uploadPhoto } from './modules/uploadPhoto.js';
import { infoTip } from './modules/infoTip.js';
import { mobileMenu } from './modules/mobileMenu.js';
import { projectMap } from './modules/projectMap.js';
import { dropdown } from './modules/dropdown.js';
import { dropMenu } from './modules/dropMenu.js';
import { headerSubMenu } from './modules/headerSubMenu.js';



document.addEventListener('DOMContentLoaded', () => {
    flsFuncs.isWebp();
    MicroModal.init();
    accountMenu();
    uploadPhoto();
    infoTip();
    mobileMenu();
    projectMap();
    dropdown();
    dropMenu();
    headerSubMenu();
});