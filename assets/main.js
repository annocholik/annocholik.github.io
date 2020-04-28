let Web = {
    main() {
        const mainPart = Helper.createClass('mainPart');
        const projects = Helper.createClass('mainPart');
        const about = Helper.createClass('mainPart');

        mainPart.show = true;
        projects.show = false;
        projects.style.height = 0;
        projects.style.width = 0;
        about.show = false;
        about.style.height = 0;
        about.style.width = 0;

        document.body.appendChild(mainPart);
        document.body.appendChild(projects);
        document.body.appendChild(about);

        Web.navBar([mainPart, projects, about]);
        Web.aboutMe(mainPart);
        Web.projects(mainPart);
        Web.projects(projects);
        Web.aboutMe(about);
    },

    navBar(parts) {
        const values = ['Strona główna', 'Projekty', 'O mnie'];
        const navBar = Helper.createClass('navBar');

        const showPart = (index) => {
            for (var part of parts) {
                if (part.show === true) {
                    part.style.width = '0';
                    part.style.height = '0';
                    part.show = false;
                }
            }
            parts[index].style.width = '100%';
            parts[index].style.height = 'calc(100% - 48px)';
            parts[index].show = true;
        };

        for (var index in values) {
            var button = document.createElement('option');
            button.onclick = showPart.bind(null, index);
            button.appendChild(document.createTextNode(values[index]));
            navBar.appendChild(button);
        }


        document.body.appendChild(navBar);
    },

    aboutMe(mainElement) {
        const aboutMe = Helper.createClass('aboutMe');
        const textBlock = Helper.createClass('textBlock');

        const header = Helper.createClass('header');
        header.innerText = Data.aboutMe.header;
        textBlock.appendChild(header);

        var space = Helper.createClass('text');
        space.innerText = '';
        space.style.textAlign = 'left';
        textBlock.appendChild(space);

        var highlight = Helper.createClass('highlight');
        highlight.innerText = 'CURRICULUM VITAE';
        highlight.style.textAlign = 'left';
        textBlock.appendChild(highlight);

        console.log(Data.aboutMe.experience);

        for (var experience of Data.aboutMe.experience) {
            const experienceTitle = Helper.createClass('text');
            experienceTitle.innerText = experience.title;
            experienceTitle.style.textAlign = 'left';
            experienceTitle.style.fontWeight = 'bold';
            textBlock.appendChild(experienceTitle);

            const experienceText = Helper.createClass('text');
            experienceText.innerText = experience.text;
            experienceText.style.textAlign = 'left';
            textBlock.appendChild(experienceText);

            space = Helper.createClass('text');
            space.innerText = '';
            space.style.textAlign = 'left';
            textBlock.appendChild(space);
        }

        highlight = Helper.createClass('highlight');
        highlight.innerText = 'Wykształcenie';
        highlight.style.textAlign = 'right';
        textBlock.appendChild(highlight);

        for (var education of Data.aboutMe.education) {
            const educationTitle = Helper.createClass('text');
            educationTitle.innerText = education.title;
            educationTitle.style.textAlign = 'right';
            educationTitle.style.fontWeight = 'bold';
            textBlock.appendChild(educationTitle);

            const educationText = Helper.createClass('text');
            educationText.innerText = education.text;
            educationText.style.textAlign = 'right';
            textBlock.appendChild(educationText);

            space = Helper.createClass('text');
            space.innerText = '';
            space.style.textAlign = 'right';
            textBlock.appendChild(space);
        }

        aboutMe.appendChild(textBlock);
        mainElement.appendChild(aboutMe);
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