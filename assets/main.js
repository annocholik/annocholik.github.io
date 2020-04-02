let Web = {
    main: function () {
        const mainPart = document.createElement('div');
        mainPart.className = 'mainPart';
        document.body.appendChild(mainPart);

        Web.navBar();
        Web.imageContainer(mainPart);
    },

    navBar: function () {
        const values = ['HOME', 'PROJECTS', 'ABOUT'];
        const navBar = document.createElement('div');
        navBar.className = 'navBar';

        for (var value in values) {
            const button = document.createElement('option');
            button.appendChild(document.createTextNode(values[value]));
            navBar.appendChild(button);
        }

        document.body.appendChild(navBar);
    },

    imageContainer: function (mainElement) {
        const imageContainer = document.createElement('div');
        imageContainer.className = 'imagesContainer';
        for (var i = 0; i < 6; i++) {
            const image = document.createElement('image');
            const img = document.createElement('img');
            img.setAttribute('src', './assets/images/spaceRace.png');
            image.appendChild(img);
            imageContainer.appendChild(image);
        }
        mainElement.appendChild(imageContainer);
    }
};

window.onload = Web.main;