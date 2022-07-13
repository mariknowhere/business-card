const selectData = {
    options: [
        {
            value: 'eng',
            content: 'English',
        },
        {
            value: 'ru',
            content: 'Russian',
        },
    ],
    imageDown: {
        url: 'icons/banner/down.png',
        height: 15,
    },
    imageUp: {
        url: 'icons/banner/up.png',
        height: 15,
    }
};

export const storeEng = {
    asideData: {
        title: 'Social Media',
        socials: [
            {
                href: 'https://t.me/maybebabythink',
                image: {
                    url: 'icons/aside/telegram.png',
                    height: 50,
                },
            },
            {
                href: 'https://www.linkedin.com/in/mariknowhere/',
                image: {
                    url: 'icons/aside/linkedin.png',
                    height: 50,
                },
            },
            {
                href: 'https://github.com/mariknowhere',
                image: {
                    url: 'icons/aside/github.png',
                    height: 50,
                },
            },
        ],

    },
    bannerData: {
        blockId: 'banner',
        items: [
            {
                href: '#main',
                content: 'Hello, world!',
            },
            {
                href: '#about',
                content: 'About me',
            },
            {
                href: '#experience',
                content: 'Experience'
            },
            {
                href: '#skills',
                content: 'Skills'
            },
            {
                href: '#contacts',
                content: 'Contacts'
            },
        ],
        socials: [
            {
                href: 'https://t.me/maybebabythink',
                image: {
                    url: 'icons/banner/telegram.png',
                    height: 40,
                },
            },
            {
                href: 'https://www.linkedin.com/in/mariknowhere/',
                image: {
                    url: 'icons/banner/linkedin.png',
                    height: 40,
                },
            },
            {
                href: 'https://github.com/mariknowhere',
                image: {
                    url: 'icons/banner/github.png',
                    height: 40,
                },
            },
        ],
        image: {
            url: 'icons/banner/close.png',
            height: 40,
        },
        hamburgerMenuImage: {
            url: 'icons/banner/hamburger_up.png',
        },
    },
    mainBlockData: {
        blockId: 'main',
        description: 'Hi, my name is Mark Strancheuski!',
        title: 'I`m a Front-end Web Developer from Belarus',
        buttonText: 'My Skills',
        blockIdToScroll: '#skills',
        secondaryButtonText: 'About me',
        secondaryBlockIdToScroll: '#about',
        select: {...selectData},
    },
    aboutBlockData: {
        blockId: 'about',
        topic: 'About me',
        title: 'My name is Mark',
        description: `
         In 2021, after completing the course, I got a job at Itransition as a Front-end Web Developer (React).
         I am studying to become a “software engineer” in Minsk, BNTU.
         I go to university very rarely and it does not interfere with work. Now I'm looking for a new company to work remotely.`,
        cards: [
            {
                image: {
                    url: `icons/about/devices.png`,
                    width: 35,
                },
                title: 'What do I expect from the company?',
                description: `The main thing is that there are tasks for the development of me as a specialist. 
                Purposeful and well-coordinated team. Possibility of remote work.`,
            },
            {
                image: {
                    url: `icons/about/development.png`,
                    width: 35,
                },
                title: 'Why did I choose Front-end?',
                description: `I met people who were already closely involved in web development and got involved. 
                I like to work on the visual part of the site and see this as a perspective for myself.`,
            },
            {
                image: {
                    url: `icons/about/design.png`,
                    width: 35,
                },
                title: 'Does the university interfere with work?',
                description: `Briefly and clearly - no. I rarely go there, only for sessions. I want to develop in web 
                development, which is not taught there.`,
            },
        ],
        image: {
            url: 'images/me.jpg',
        },
    },
    experienceBlockData: {
        blockId: 'experience',
        topic: 'Experience',
        title: 'How can I be useful',
        items: [
            {
                title: 'Education',
                items: [
                    {
                        icon: {
                            url: `icons/experience/univer.png`,
                            width: 26,
                        },
                        title: 'Belarusian National Technical University',
                        topic: 'Minsk | (2020 - 2024)',
                        description: `I study at the faculty of "Information Technologies and Robotics (FITR)" in the specialty
                          "Information Systems and Technologies (ISIT)".`,
                    },
                    {
                        icon: {
                            url: 'icons/experience/course.png',
                            width: 26,
                        },
                        title: 'Course to work from Itransition',
                        topic: 'Minsk | (Apr - June, 2021)',
                        description: `Performed tasks (web applications by type: tic-tac-toe games, authorization) 
                        and final coursework in React, TypeScript (JavaScript) and ASP.NET Core. After successfully 
                        completing the course, I was hired, where I worked for more than 1 year.`,
                    },
                    {
                        icon: {
                            url: 'icons/experience/english.png',
                            width: 26,
                        },
                        title: 'English course from Itransition',
                        topic: 'Remote work | (Sept - Nov, 2021)',
                        description: `«Grammar Communication 1/2» course, where I spoke with a group of teachers in English.
                         I studied the grammar and subtleties of the language in depth. We studied using a textbook in English (300 pages).`,
                    },
                ],
            },
            {
                title: 'Working experience',
                items: [
                    {
                        icon: {
                            url: 'icons/experience/it_work.png',
                            width: 26,
                        },
                        title: 'Itransition',
                        topic: 'Remote work | (June, 2021 - July, 2022)',
                        description: `Worked as a Front-end web developer for over 1 year.
                         Worked on a banking project. The team was divided into sub-teams, called every day on Slack. We worked according to the Scrum system, performed layout tasks and functional expansion.
                         Unit testing (Jest) was also applied to all code. We used: React/Redux,
                         TypeScript/JavaScript, HTML, CSS, SASS/SCSS/LESS, Git.`,
                    },
                    {
                        icon: {
                            url: 'icons/experience/profolio.png',
                            width: 26,
                        },
                        title: 'Profolio',
                        topic: 'Remote work | (May, 2022 - now)',
                        description: `I also work as a Front-end web developer. At work we use: React,
                         TypeScript/JavaScript, HTML, CSS, Git.`,
                    },
                ],
            },
        ]
    },
    skillsBlockData: {
        blockId: 'skills',
        topic: 'Skills',
        title: 'What do I use at work',
        cards: [
            {
                image: {
                    url: 'images/skills/react.svg',
                    height: 110,
                },
                title: 'React',
                description: `It is an open-source JavaScript library that is used for building user interfaces
            specifically for single-page applications. It's used for handling the view layer for web and mobile apps.
            React also allows us to create reusable UI components.`,
            },
            {
                image: {
                    url: 'images/skills/redux.png',
                    height: 100,
                },
                title: 'Redux',
                description: `It is an open source JavaScript library for managing application state. Contains a 
                number of tools to greatly simplify the transfer of storage data through the context.`,
            },
            {
                image: {
                    url: 'images/skills/javascript.png',
                    height: 110,
                },
                title: 'JavaScript',
                description: `It is a scripting language that enables you to create dynamically updating 
                content, control multimedia, animate images, and pretty much everything else.`,
            },
            {
                image: {
                    url: 'images/skills/typescript.png',
                    height: 110,
                },
                title: 'TypeScript',
                description: `It is a strongly typed programming language that builds on JavaScript, giving you 
                better tooling at any scale.`,
            },
            {
                image: {
                    url: 'images/skills/html.png',
                    height: 110,
                },
                title: 'HTML',
                description: `A standardized document markup language for viewing web pages in a browser.
                 You can embed JavaScript code to control the behavior and content of web pages. 
                 Also including CSS describes the look and layout of the page.`,
            },
            {
                image: {
                    url: 'images/skills/css.png',
                    height: 110,
                },
                title: 'CSS',
                description: `Used by web page developers to specify colors, fonts, styles, positioning of individual 
                blocks, and other aspects of the presentation of the appearance of these web pages.`,
            },
            {
                image: {
                    url: 'images/skills/sass.png',
                    height: 100,
                },
                title: 'SASS/SCSS',
                description: `It is a CSS-based metalanguage designed to simplify cascading style sheet files.
                 It has two syntaxes: Sass does not have curly braces, nesting is implemented using indentation, 
                 and SCSS uses curly braces.`,
            },
            {
                image: {
                    url: 'images/skills/less.png',
                    height: 80,
                },
                title: 'Less',
                description: `It is a backward compatible language extension for CSS. It makes only a few handy 
                additions to the CSS language, which is one of the reasons it can be learned so quickly.`,
            },
            {
                image: {
                    url: 'images/skills/jest.png',
                    height: 100,
                },
                title: 'Jest',
                description: `It is a delightful JavaScript Testing Framework with a focus on simplicity. It works 
                with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!`,
            },
            {
                image: {
                    url: 'images/skills/Git.png',
                    height: 110,
                },
                title: 'Git',
                description: `It is a free and open source distributed version control system designed to handle 
                everything from small to very large projects with speed and efficiency.`,
            },
        ],
    },
    contactsBlockData: {
        blockId: 'contacts',
        topic: 'Contacts',
        buttonText: 'Send a message',
        image: {
            url: 'images/me.jpg',
            height: 533,
        },
        title: 'Contact me',
        description: 'Any option for you could be:',
        subDescription: 'Or leave your details and I will write to you:',
        socials: [
            {
                href: 'https://t.me/maybebabythink',
                image: {
                    url: 'icons/contacts/telegram.png',
                    height: 45,
                },
            },
            {
                href: 'https://www.linkedin.com/in/mariknowhere/',
                image: {
                    url: 'icons/contacts/linkedin.png',
                    height: 45,
                },
            },
            {
                href: 'https://github.com/mariknowhere',
                image: {
                    url: 'icons/contacts/github.png',
                    height: 45,
                },
            },
        ],
        form: {
            id: 'form',
            nameInput: {
                name: 'name',
                id: 'name',
                content: 'Name',
                type: 'text'
            },
            emailInput: {
                name: 'email',
                id: 'email',
                content: 'Email',
                type: 'email',
            },
            text: {
                name: 'text',
                id: 'text',
                content: 'Message',
            },
        },
        emailSentSuccessfully: 'Your message has been delivered!!',
        emailSentUnsuccessfully: 'Your message has not been delivered!',
    },
};

export const storeRu = {
    asideData: {
        title: 'Связь со мной',
        socials: [
            {
                href: 'https://t.me/maybebabythink',
                image: {
                    url: 'icons/aside/telegram.png',
                    height: 50,
                },
            },
            {
                href: 'https://www.linkedin.com/in/mariknowhere/',
                image: {
                    url: 'icons/aside/linkedin.png',
                    height: 50,
                },
            },
            {
                href: 'https://github.com/mariknowhere',
                image: {
                    url: 'icons/aside/github.png',
                    height: 50,
                },
            },
        ],

    },
    bannerData: {
        blockId: 'banner',
        items: [
            {
                href: '#main',
                content: 'Привет, мир!',
            },
            {
                href: '#about',
                content: 'Кто я?',
            },
            {
                href: '#experience',
                content: 'Опытность'
            },
            {
                href: '#skills',
                content: 'Мои навыки'
            },
            {
                href: '#contacts',
                content: 'Связь со мной'
            },
        ],
        socials: [
            {
                href: 'https://t.me/maybebabythink',
                image: {
                    url: 'icons/banner/telegram.png',
                    height: 40,
                },
            },
            {
                href: 'https://www.linkedin.com/in/mariknowhere/',
                image: {
                    url: 'icons/banner/linkedin.png',
                    height: 40,
                },
            },
            {
                href: 'https://github.com/mariknowhere',
                image: {
                    url: 'icons/banner/github.png',
                    height: 40,
                },
            },
        ],
        image: {
            url: 'icons/banner/close.png',
            height: 40,
        },
        hamburgerMenuImage: {
            url: 'icons/banner/hamburger_up.png',
        },
    },
    mainBlockData: {
        blockId: 'main',
        description: 'Привет, меня зовут Марк Странчевский!',
        title: 'Я Front-end Web Developer из Беларуси',
        buttonText: 'Мои навыки',
        blockIdToScroll: '#skills',
        secondaryButtonText: 'Кто я?',
        secondaryBlockIdToScroll: '#about',
        select: {...selectData},
    },
    aboutBlockData: {
        blockId: 'about',
        topic: 'Информация',
        title: 'Меня зовут Марк',
        description: `Учусь на “инженер-программиста” в Минске, БНТУ.
        В 2021 г. пройдя курсы, я устроился на работу в Itransition на должность Front-end Web Developer (React). Работаю удалённо,
        на учёбе бываю очень редко и работе она не мешает. Сейчас в поисках новой компании для дальнейшего развития себя как специалиста.`,
        cards: [
            {
                image: {
                    url: `icons/about/devices.png`,
                    width: 35,
                },
                title: 'Что жду от компании?',
                description: `Главное чтобы были задачи на развитие меня как специалиста. Целеустремленная и слаженная команда. 
                Возможность удалённой работы.`,
            },
            {
                image: {
                    url: `icons/about/development.png`,
                    width: 35,
                },
                title: 'Почему выбрал Front-end?',
                description: `Познакомился с людьми, которые уже плотно занимались веб-разработкой и втянулся. Нравится 
                работать над визуальной частью сайта и вижу в этом перспективу для себя.`,
            },
            {
                image: {
                    url: `icons/about/design.png`,
                    width: 35,
                },
                title: 'Мешает ли мне университет?',
                description: `Кратко и чётко - нет. Бываю там редко, только на сессиях. Хочу развиваться в веб-разработке,
                которую там не преподают.`,
            },
        ],
        image: {
            url: 'images/me.jpg',
        },
    },
    experienceBlockData: {
        blockId: 'experience',
        topic: 'Опытность',
        title: 'Чем могу быть полезен?',
        items: [
            {
                title: 'Обучение',
                items: [
                    {
                        icon: {
                            url: `icons/experience/univer.png`,
                            width: 26,
                        },
                        title: 'Белорусский национальный технический университет',
                        topic: 'Минск | (2020 — 2024)',
                        description: `Учусь на факультете «Информационных Технологий и Робототехники (ФИТР)» на специальности
                         «Информационные системы и технологии (ИСИТ)».`,
                    },
                    {
                        icon: {
                            url: 'icons/experience/course.png',
                            width: 26,
                        },
                        title: 'Курсы на работу от Itransition',
                        topic: 'Минск | (Апрель — Июнь, 2021)',
                        description: `Выполнял задачи (веб-приложения по типу: игры крестики-нолики, авторизация) и 
                        итоговую курсовую работу на React, TypeScript (JavaScript) и ASP.NET Core. После успешного 
                        прохождения курса меня приняли на работу, где я отработал больше года.`,
                    },
                    {
                        icon: {
                            url: 'icons/experience/english.png',
                            width: 26,
                        },
                        title: 'Курсы английского языка от Itransition',
                        topic: 'Удалённо | (Сентябрь — Ноябрь, 2021)',
                        description: `Курс «Grammar Communication 1/2», где общался группой с преподавателем 
                        на английском языке. Изучил поглубже грамматику и тонкости языка. Обучались по учебнику на 
                        английском языке (300стр.).`,
                    },
                ],
            },
            {
                title: 'Опыт работы',
                items: [
                    {
                        icon: {
                            url: 'icons/experience/it_work.png',
                            width: 26,
                        },
                        title: 'Itransition',
                        topic: 'Удалённая работа | (Июнь, 2021 — Июль, 2022)',
                        description: `Более года работал Front-end веб-разработчиком. 
                        Работал над банковским проектом. Команда была разделена на под-команды, синковались 
                        каждый день в Slack. Работали по системе Scrum, выполнял задачи на вёрстку и на расширение функционала.
                        Также ко всему коду применялось unit-тестирование (Jest). При работе пользовались: React/Redux, 
                        TypeScript/JavaScript, HTML, CSS, SASS/SCSS/LESS, Git.`,
                    },
                    {
                        icon: {
                            url: 'icons/experience/profolio.png',
                            width: 26,
                        },
                        title: 'Profolio',
                        topic: 'Удалённая работа | (Май, 2022 — по наст. время)',
                        description: `Работаю всё также Front-end веб-разработчиком. При работе используем: React, 
                        TypeScript/JavaScript, HTML, CSS, Git.`,
                    },
                ],
            },
        ]
    },
    skillsBlockData: {
        blockId: 'skills',
        topic: 'Навыки',
        title: 'Что использую при работе?',
        cards: [
            {
                image: {
                    url: 'images/skills/react.svg',
                    height: 110,
                },
                title: 'React',
                description: `Это библиотека JavaScript с открытым исходным кодом, которая используется для 
                создания пользовательских интерфейсов к одностраничным приложениям. Используется для веб-приложений 
                и мобильных приложений. Также позволяет нам создавать многократно используемые компоненты.`,
            },
            {
                image: {
                    url: 'images/skills/redux.png',
                    height: 100,
                },
                title: 'Redux',
                description: `Это библиотека JavaScript с открытым исходным кодом для управления состоянием приложения. 
                Содержит ряд инструментов, позволяющих значительно упростить передачу данных хранилища через контекст.`,
            },
            {
                image: {
                    url: 'images/skills/javascript.png',
                    height: 110,
                },
                title: 'JavaScript',
                description: `Это язык программирования, который позволяет создавать динамически обновляемый контент, 
                управлять мультимедиа, анимировать изображения и многое другое.`,
            },
            {
                image: {
                    url: 'images/skills/typescript.png',
                    height: 110,
                },
                title: 'TypeScript',
                description: `Это строго типизированный язык программирования, основанный на JavaScript, предоставляющий лучшие 
                инструменты в любом масштабе.`,
            },
            {
                image: {
                    url: 'images/skills/html.png',
                    height: 110,
                },
                title: 'HTML',
                description: `Стандартизированный язык разметки документов для просмотра веб-страниц в браузере.
                Можно встроить программный код на JavaScript, для управления поведением и 
                содержанием веб-страниц. Также включение CSS описывает внешний вид и макет страницы.`,
            },
            {
                image: {
                    url: 'images/skills/css.png',
                    height: 110,
                },
                title: 'CSS',
                description: `Используется разработчиками веб-страниц для задания цветов, шрифтов, стилей, 
                расположения отдельных блоков и других аспектов представления внешнего вида этих веб-страниц.`,
            },
            {
                image: {
                    url: 'images/skills/sass.png',
                    height: 100,
                },
                title: 'SASS/SCSS',
                description: `Это метаязык на основе CSS, предназначенный для упрощения файлов каскадных таблиц стилей.
                Имеет два синтаксиса: в Sass отсутствуют фигурные скобки, вложенность реализовано с помощью 
                отступов и SCSS который использует фигурные скобки.`,
            },
            {
                image: {
                    url: 'images/skills/less.png',
                    height: 80,
                },
                title: 'LESS',
                description: `Это обратно совместимое языковое расширение для CSS. Он делает лишь несколько удобных 
                дополнений к языку CSS, что является одной из причин, по которой его можно так быстро изучить.`,
            },
            {
                image: {
                    url: 'images/skills/jest.png',
                    height: 100,
                },
                title: 'Jest',
                description: `Это восхитительная платформа для тестирования JavaScript с упором на простоту. 
                Он работает с проектами, использующими: TypeScript, Node, React, Angular, Vue и другие.`,
            },
            {
                image: {
                    url: 'images/skills/Git.png',
                    height: 110,
                },
                title: 'Git',
                description: `Это бесплатная распределенная система управления версиями с открытым исходным кодом, 
                предназначенная для быстрой и эффективной обработки любых проектов, от небольших до очень крупных.`,
            },
        ],
    },
    contactsBlockData: {
        blockId: 'contacts',
        image: {
            url: 'images/me.jpg',
            height: 533,
        },
        topic: 'Связь со мной',
        title: 'Контакты',
        buttonText: 'Отправить сообщение',
        description: 'Любой вариант для связи со мной:',
        subDescription: 'Или оставьте свои данные и я вам напишу:',
        socials: [
            {
                href: 'https://t.me/maybebabythink',
                image: {
                    url: 'icons/contacts/telegram.png',
                    height: 45,
                },
            },
            {
                href: 'https://www.linkedin.com/in/mariknowhere/',
                image: {
                    url: 'icons/contacts/linkedin.png',
                    height: 45,
                },
            },
            {
                href: 'https://github.com/mariknowhere',
                image: {
                    url: 'icons/contacts/github.png',
                    height: 45,
                },
            },
        ],
        form: {
            id: 'form',
            nameInput: {
                name: 'name',
                id: 'name',
                content: 'Ваше имя',
                type: 'text'
            },
            emailInput: {
                name: 'email',
                id: 'email',
                content: 'Электронная почта',
                type: 'email',
            },
            text: {
                name: 'text',
                id: 'text',
                content: 'Сообщение',
            },
        },
        emailSentSuccessfully: 'Ваше сообщение доставлено!',
        emailSentUnsuccessfully: 'Ваше сообщение не доставлено!',
    },
};
