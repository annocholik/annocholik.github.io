let Data = {
    projects: [{
        imageSrc: './assets/images/spaceRace.png',
        title: 'SpaceRace',
        internalText: {
            header: 'SpaceRace na AnnoEngine',
            text: `Gry serii SpaceRace powstały w ramach projektu studenckiego. Gra miała swoje dwie odsłony: pierwsza z nich powstała na silniku AnnoEngine One, druga zaś na AnnoEngine Three.
                   Trzecia odsłona miała ciekawe rozwiązanie pozwalające graczowi sterować pojazdem za pomocą kamery kontrolera Kinect.
                   Gracz w grze miał za zadanie pokonać w jak najszybszym tempie tor, składający się z różnej wielkości asteroid. Trasę wyścigu określały bramy, których kolejność wskazywane były za pomocą wskaźnika na statku kosmicznym.`
        },
        internalImages: []
    }, {
        imageSrc: './assets/images/AnnoShader.png',
        title: 'AnnoShader',
        internalText: {
            header: 'AnnoShader - aplikacja do tworzenia shaderów GLSL',
            text: `Aplikacja AnnoShader została napisana aby zaprezentować możliwości silnika AnnoEngine Three.
                   Za pomocą tej aplikacji, użytkownik może napisać shader'y dla wcześniej zdefiniowanego pipeline'u. Do dyspozycji użytkownika jest, shader vertex'ów, shader fragmentów oraz shader fragmentów dla postprocesu. Dodatkowo użytkownik może załadować własny model w formacie '.obj' oraz go skalować go, a następnie wczytać do niego odpowiednie tekstury.`
        },
        internalImages: []
    }, {
        imageSrc: './assets/images/AnnoEngine.png',
        title: 'AnnoEngine THREE',
        internalText: {
            header: 'Silnik do gier AnnoEngine Three',
            text: `Silnik do gier był ambitnym projektem moje pracy inżynierskiej. Silnik miał już swoją pierwszą odsłonę, która została napisana w języku Java z wykorzystaniem biblioteki OpenGL.
                   Praca nad drugą edycją, nie została nigdy zakończona - przez liczne błędy powstałe na etapie planowania i implementacji.
                   Trzecia próba utworzenia silnika do gier, która pozwoli wygenerować grafikę trójwymiarową w czasie rzeczywistym została zakończona sukcesem. Utworzony silnik pozwalał na: 
                   - generowanie grafiki 3D,
                   - tworzenie skryptów do tworzenia gier w wygenerowanym świecie,
                   - możliwość dodawania własnych modeli w formacie '.obj'
                   - wykonywanie niezbędnych operacji matematycznych na wektorach, macierzach i kwaternionach,
                   - pisanie własnych shaderów: vertex, fragment i postprocess,
                   - generowanie mapy cieni dla jednego punktu świetlnego,
                   - możliwość obsługi urządzeń wejścia typu klawiatura i mysz,
                   - zarządzanie danymi w pamięci operacyjnej karty graficznej VRAM,`
        },
        internalImages: []
    }],
    aboutMe: {
        header: "Paweł Sołtysik",
        education: [{
            title: 'Uniwersytet Śląski (2017 - obecnie)',
            text: `Magister inżynier, kierunek informatyka`
        }, {
            title: 'Uniwersytet Śląski (2014 - 2017)',
            text: `Inżynier informatyki, specjalista programista gier komputerowych
                Tytuł pracy dyplomowej: Silnik graficzny 3D`
        }],
        experience: [{
            title: 'DAZN Media Poland (2019 - Obecnie)',
            text: `Stanowisko: Software Engineer Node.JS`
        }, {
            title: 'Incuvo SA (2016 - 2019)',
            text: `Stanowisko: Programista C# Unity / Node.JS
                Projekty:
                - Castle Revenge (Android, IOS, Backend),
                - Super Hero Fight Club (Android, IOS, Nintendo Switch, Backend),
                - Createrria 2 (Backend)
                - GameInn - “Inteligentny system matchmakingu typu użytkownik-zawartość lub
                użytkownik-użytkownik, przeznaczony dla gier online dla wielu graczy” (Backend)`
        }, {
            title: 'The Farm 51 Group SA (2015)',
            text: `Projekt: Get Even (PC, PlayStation 4, Xbox One)`
        }]
    }
};