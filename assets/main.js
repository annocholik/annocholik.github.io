let Web = {
    main() {
        const mainPart = Helper.createClass('mainPart');
        const projects = Helper.createClass('mainPart');
        const about = Helper.createClass('mainPart');

        mainPart.show = true;
        projects.show = false;
        projects.style.opacity = 0;
        about.show = false;

        document.body.appendChild(mainPart);
        document.body.appendChild(projects);
        document.body.appendChild(about);

        Web.navBar(mainPart, projects, about);
        Web.projects(mainPart);
        Web.projects(projects);
    },

    navBar(parts) {
        const values = ['Strona główna', 'Projekty', 'O mnie'];
        const navBar = Helper.createClass('navBar');

        const showPart = (index) => {
            for (var part of parts) {
                if (part.show === true) {
                    textBlock.style.animationName = 'FadeOut';
                }
            }
        }

        for (var index in values) {
            var button = document.createElement('option');
            button.appendChild(document.createTextNode(values[index]));
            navBar.appendChild(button);
        }


        document.body.appendChild(navBar);
    },

    projects(mainElement) {
        const imageContainer = Helper.createClass('imagesContainer');
        for (var project of Data.projects) {
            const image = Helper.createClass('image');
            const img = document.createElement('img');
            img.setAttribute('src', project.imageSrc);
            image.appendChild(img);
            imageContainer.appendChild(image);

            const textBlock = Helper.createClass('textBlock');
            const text = document.createElement('text');
            text.innerText = project.title;
            textBlock.appendChild(text);
            image.appendChild(textBlock);

            Web.infoBoard(mainElement, image, project.internalText);
        }
        mainElement.appendChild(imageContainer);
    },

    infoBoard(mainElement, showOnClickElement, textData) {
        const infoBoardObject = Helper.createClass('infoBoard');
        infoBoardObject.style.display = 'none';

        const textBlock = Helper.createClass('textBlock');
        const header = Helper.createClass('header');
        header.innerText = textData.header;
        textBlock.appendChild(header);

        const text = Helper.createClass('text');
        text.innerText = textData.text;
        textBlock.appendChild(text);

        infoBoardObject.appendChild(textBlock);

        infoBoardObject.onclick = () => {
            textBlock.style.animationName = 'FadeOut';
            textBlock.show = false;
        };

        textBlock.onanimationend = () => {
            if (textBlock.show === false) {
                infoBoardObject.style.display = 'none';
            }
        };

        showOnClickElement.onclick = () => {
            infoBoardObject.style.display = 'block';
            textBlock.style.animationName = 'FadeIn';
            textBlock.show = true;
        };

        mainElement.appendChild(infoBoardObject);
        return infoBoardObject;
    }
};

window.onload = Web.main;