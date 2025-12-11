const contactForm = document.querySelector('form');

if (contactForm) {
    contactForm.addEventListener('submit', () => {
        let count = parseInt(localStorage.getItem('number_of_contact_messages')) || 0;
        count++;
        localStorage.setItem('number_of_contact_messages', count);
    });
}

const numberOfContactMessages = document.getElementById('number_of_contact_messages');
if (numberOfContactMessages) {
    numberOfContactMessages.textContent = localStorage.getItem('number_of_contact_messages') || 0;
}

