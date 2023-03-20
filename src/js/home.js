export default function loadHomePage() {
    const mainContent = document.querySelector('#content');
    const message = document.createElement('div');
    message.textContent = "Here's the content of the home page. "

    mainContent.appendChild(message);
}
