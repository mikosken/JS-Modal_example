'use strict';

const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnsCloseModal = document.querySelectorAll('.close-modal');
const overlayElement = document.querySelector('.overlay');

const openModal = (modal, overlay) => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
const closeModal = (modal, overlay) => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
const closeAllModals = () => {
    // Add the class 'hidden' to all elements with class modal.
    const modals = document.querySelectorAll('.modal');
    modals.forEach((modalElement) => {
        modalElement.classList.add('hidden');
    });
    overlayElement.classList.add('hidden');
};

// Attach event handlers to open modal buttons.
btnsOpenModal.forEach((btn) => {
    btn.addEventListener('click', function (e) {
        // Find a modal with same id as clicked button, but without initial 'show-'.
        const btnId = e.target.id;
        const modalId = '#' + btnId.replace('show-', ''); // Remove 'show-'.
        const modal = document.querySelector(modalId);
        openModal(modal, overlayElement);
    });
});

// Attach event handlers to close modal buttons.
btnsCloseModal.forEach((btn) => {
    btn.addEventListener('click', function (e) {
        // Find the closest parent element with class 'modal'.
        const modal = e.target.closest('.modal');
        closeModal(modal, overlayElement);
    });
});

// Attach event handler to Esc key.
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeAllModals();
    }
});

// Attach event handler to click on overlay.
overlayElement.addEventListener('click', function (e) {
    closeAllModals();
});
