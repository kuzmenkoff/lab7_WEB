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
]

document.addEventListener("DOMContentLoaded", function() {
    OutputImages();

    const gallery = document.getElementById('gallery_area');
    gallery.addEventListener('click', function(event) {
        const target = event.target;
        if (target.tagName === 'IMG') {
            // Витягуємо ім'я файлу з URL
            const previewFileName = target.src.split('/').pop();
            const image = images.find(image => image.preview.split('/').pop() === previewFileName);
            if (image) {
                console.log(image.original);
                const instance = basicLightbox.create(`
                    <img src="${image.original}" alt="${image.description}">
                `);
                instance.show();
            }
        }
    });
});

function OutputImages() {
    const container = document.getElementById('gallery_area');
    images.forEach(image => {
        const img = document.createElement('img');
        img.src = image.preview;
        container.appendChild(img);
    });
}
