const images = [
    {
        preview: 'images/preview/Cat1.jpg',
        original: 'images/original/Cat1.jpg',
        description: 'Tiny cute cat №1'
    },
    {
        preview: 'images/preview/Cat2.jpg',
        original: 'images/original/Cat2.jpg',
        description: 'Tiny cute cat №2'
    },
    {
        preview: 'images/preview/Cat3.jpg',
        original: 'images/original/Cat3.jpg',
        description: 'Tiny cute cat №3'
    },
    {
        preview: 'images/preview/Cat4.jpg',
        original: 'images/original/Cat4.jpg',
        description: 'Tiny cute cat №4'
    },
    {
        preview: 'images/preview/Cat5.jpg',
        original: 'images/original/Cat5.jpg',
        description: 'Tiny cute cat №5'
    },
    {
        preview: 'images/preview/Cat6.jpg',
        original: 'images/original/Cat6.jpg',
        description: 'Tiny cute cat №6'
    },
    {
        preview: 'images/preview/Cat7.jpg',
        original: 'images/original/Cat7.jpg',
        description: 'Tiny cute cat №7'
    },
    {
        preview: 'images/preview/Cat8.jpg',
        original: 'images/original/Cat8.jpg',
        description: 'Tiny cute cat №8'
    },
    {
        preview: 'images/preview/Cat9.jpg',
        original: 'images/original/Cat9.jpg',
        description: 'Tiny cute cat №9'
    },
]

document.addEventListener("DOMContentLoaded", function() {
    OutputImages();
});

function OutputImages() {
    const container = document.getElementById('gallery_area');
    images.forEach(image => {
        const img = document.createElement('img');
        img.src = image.preview;
        container.appendChild(img);

        img.addEventListener('click', function(event) {
            console.log(image.original);
            const instance = basicLightbox.create(`
                    <img src="${image.original}" alt="${image.description}">
            `);
            instance.show();
        });
    });
}
