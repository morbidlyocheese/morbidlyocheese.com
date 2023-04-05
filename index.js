const modal = document.querySelector('dialog');
const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-modal');
const body = document.querySelector('body');

function onClick(event) {
    if (event.target === modal) modal.close();
}

modal.addEventListener('click', onClick);
openModal.addEventListener('click', () => modal.showModal());


// ------------------------------------------------------


const links = [
    { title: 'twitch', url: 'https://www.twitch.tv/morbidlyocheese', icon: 'https://simpleicons.org/icons/twitch.svg', description: '', label: 'twitch' },
    { title: 'twitter', url: 'https://twitter.com/morbidlyocheese', icon: 'https://simpleicons.org/icons/twitter.svg', description: '', label: 'twitter' },
    { title: 'instagram', url: 'https://www.instagram.com/morbidlyocheese/', icon: 'https://simpleicons.org/icons/instagram.svg', description: '', label: 'instagram' },
    { title: 'discord server', url: 'https://discord.com/invite/8b5dM2hE6N', icon: 'https://simpleicons.org/icons/discord.svg', description: '', label: 'discord invite' },
    // { title: '', url: '', icon: '', description: '', label: 'github' },
]
const linkContainer = document.querySelector('.content-container');

// Loop through links array and generate link elements
links.forEach(link => {
    // Create link element
    const linkElement = document.createElement('a');
    linkElement.href = link.url;
    linkElement.target = '_blank';
    linkElement.rel = 'noopener noreferrer';
    linkElement.classList.add('link');

    // Create icon element
    const iconElement = document.createElement('img');
    iconElement.src = link.icon;
    iconElement.alt = link.label;
    iconElement.width = 16;
    iconElement.height = 16;

    // Create label element
    const labelElement = document.createElement('span');
    labelElement.textContent = link.label;

    // Append icon and label elements to link element
    linkElement.appendChild(iconElement);
    linkElement.appendChild(labelElement);

    // Append link element to link container
    linkContainer.appendChild(linkElement);
});