const bd = document.querySelector('body');
const mobileMenuBtn = document.querySelector('#mmb');
const mobileMenuClose = document.querySelector('#mmc');
const mobileMenuOverlay = document.querySelector('#mmo');
const mobileMenuPanel = document.querySelector('#mmp');

if (mobileMenuBtn != null) {
    mobileMenuBtn.addEventListener('click', mobileOverlayOpen);
}

if (mobileMenuClose != null) {
    mobileMenuClose.addEventListener('click', mobilePanelClose);
}

function mobileOverlayOpen() {
    mobileMenuOverlay.classList.add('d');
    setTimeout(() => {
        mobileMenuOverlay.classList.add('o');
        mobilePanelOpen();
        documentScrollOff();
    }, 250);
}

function mobileOverlayClose() {
    mobileMenuOverlay.classList.remove('o');
    setTimeout(() => {
        mobileMenuOverlay.classList.remove('d');
    }, 200);
}

function mobilePanelOpen() {
    mobileMenuPanel.classList.add('open');
}

function mobilePanelClose() {
    mobileMenuPanel.classList.remove('open');
    setTimeout(() => {
        mobileOverlayClose();
        documentScrollOn();
    }, 200);
}

function documentScrollOff() {
    bd.classList.add('scrolloff');
}

function documentScrollOn() {
    bd.classList.remove('scrolloff');
}