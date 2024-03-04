const bd = document.querySelector('body');
const mobileMenuBtn = document.querySelector('#mmb');
const mobileMenuOverlay = document.querySelector('#mmo');
const mobileMenuPanel = document.querySelector('#mmp');

mobileMenuBtn.addEventListener('click', mobileOverlayOpen);

function mobileOverlayOpen() {
    mobileMenuOverlay.classList.add('d');
    setTimeout(() => {
        mobileMenuOverlay.classList.add('o');
        mobilePanelOpen();
        documentScrollOff();
    }, 250);
}

function mobilePanelOpen() {
    mobileMenuPanel.classList.add('open');
}

function documentScrollOff() {
    bd.classList.add('scrolloff');
}

function documentScrollOn() {
    bd.classList.remove('scrolloff');
}