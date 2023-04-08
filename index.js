const modal = document.querySelector('dialog');
const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-modal');
const body = document.querySelector('body');

function onClick(event) {
    if (event.target === modal) modal.close();
}

modal.addEventListener('click', onClick);
openModal.addEventListener('click', () => modal.showModal());