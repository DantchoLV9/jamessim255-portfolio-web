const loadEffect = () => {
    const content = document.querySelector('.page-content');
    content.classList.add('opacity-1');
}
document.addEventListener('readystatechange', event => {
    if (event.target.readyState === "complete") {
        loadEffect();
    }
});
