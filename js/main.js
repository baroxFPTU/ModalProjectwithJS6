const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close');
const modalToggle = document.querySelector('.modal-toggle');

// Handle Events
btnClose.addEventListener('click', toggleModal);
overlay.addEventListener('click', toggleModal);
modalToggle.addEventListener('click', toggleModal);

// Functions
function toggleModal() {
    const modalContent = document.querySelector('.modal-content');
    modalContent.classList.toggle('show');
    overlay.classList.toggle('show');
}