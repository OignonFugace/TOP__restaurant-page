function createContactForm() {
    const form = document.createElement('form');

    // Name input
    const nameRow = document.createElement('div');
    nameRow.className = 'form-row';

    const nameCell = document.createElement('div');
    nameCell.className = 'form-cell';
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name:';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameCell.appendChild(nameLabel);
    nameCell.appendChild(nameInput);
    nameRow.appendChild(nameCell);

    // Email input
    const emailCell = document.createElement('div');
    emailCell.className = 'form-cell';
    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email:';
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailCell.appendChild(emailLabel);
    emailCell.appendChild(emailInput);
    nameRow.appendChild(emailCell);

    form.appendChild(nameRow);

    // Message input
    const messageRow = document.createElement('div');
    messageRow.className = 'form-row';

    const messageCell = document.createElement('div');
    messageCell.className = 'form-cell';
    const messageLabel = document.createElement('label');
    messageLabel.textContent = 'Message:';
    const messageInput = document.createElement('textarea');
    messageInput.name = 'message';
    messageInput.setAttribute('rows', '11');
    messageCell.appendChild(messageLabel);
    messageCell.appendChild(messageInput);
    messageRow.appendChild(messageCell);

    form.appendChild(messageRow);

    // Submit button
    const submitRow = document.createElement('div');
    submitRow.className = 'form-row';

    const submitCell = document.createElement('div');
    submitCell.className = 'form-cell';
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    submitCell.appendChild(submitButton);
    submitRow.appendChild(submitCell);

    form.appendChild(submitRow);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Form submitted');
        // Handle form submission (e.g., send data to a server)
    });

    return form;
}

export default function loadContactPage() {
    const mainContent = document.querySelector('#content');
    mainContent.className = 'contact-page';
    mainContent.innerHTML = ''; // Clear the mainContent before appending new elements

    // Contact Page Title
    const contactPageTitle = document.createElement('h1');
    contactPageTitle.textContent = 'Get in Touch';
    mainContent.appendChild(contactPageTitle);

    // Contact Page Form
    const contactForm = createContactForm();
    mainContent.appendChild(contactForm);
}

