const button = document.querySelector('.theme');
button.addEventListener('click', () => {
    const content = document.querySelector('.content');
    content.classList.toggle('dark'); // if it has dark, remove dark; it doesn't has dar, add dark
});