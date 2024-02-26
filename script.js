function togglePag() {
    // alert('Pagination');
    const html = document.documentElement;
    // html.classList.toggle('light');
    const img = document.querySelector("#profile img");
    if (html.classList.contains('light')) {
        html.classList.remove('light');
        img.setAttribute('src', './assets/avatar-vk.png');
    } else {
        img.setAttribute('src', './assets/avatar-vk-light.png');
        html.classList.add('light');
    }
}