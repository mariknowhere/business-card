const selectData = {
    options: [
        {
            value: 'ru',
            content: 'Russian',
        },
        {
            value: 'eng',
            content: 'English',
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
                href: '#portfolio',
                content: 'Portfolio'
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
         Work experience 1.5 years, extensive commercial experience (15+ commercial projects). There is experience in 
         communicating with the customer, experience in teamwork and mentoring of other developers. All additional 
         information below.`,
        cards: [
            {
                image: {
                    url: `icons/about/devices.png`,
                    width: 35,
                },
                title: 'What do I expect from the company?',
                description: `The main thing is that there are tasks for the development of me as a specialist. 
                Purposeful and well-coordinated team. Ability to work in the office or remotely. Also ready to move 
                to Georgia.`,
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
                        topic: 'Minsk | (March - May, 2021)',
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
                        topic: 'Remote work | (March, 2021 - July, 2022)',
                        info: {
                            title: 'Banking project.',
                            topic: 'My responsibilities:',
                            responsibilities: [
                                {
                                    text: '- Remote and project work in a team.'
                                },
                                {
                                    text: '- Software development according to Agile/Scrum methodology.'
                                },
                                {
                                    text: '- Creation and modification, refinement and optimization of application algorithms on the frontend.'
                                },
                                {
                                    text: '- API integration. Writing logic for receiving, processing, displaying and sending data.'
                                },
                                {
                                    text: '- Design implementation based on Figma layouts.'
                                },
                                {
                                    text: '- Development of unit tests for all new code.'
                                },
                                {
                                    text: '- Conducting code reviews.'
                                },
                                {
                                    text: '- Daily meetings (task planning and reports).'
                                },
                                {
                                    text: '- Evaluation of tasks (hours / story points).'
                                },
                            ],
                            bottom: 'Stack: React/Redux, TypeScript/JavaScript, Jest, HTML, CSS, SASS/SCSS/LESS, Git.',
                        },
                    },
                    {
                        icon: {
                            url: 'icons/experience/freelance.png',
                            width: 26,
                        },
                        title: 'Freelance',
                        topic: 'Remote work | (April, 2022 - now)',
                        info: {
                            title: 'I work in a team with a manager, developers, designers and visualizers. I am the head of the development team.',
                            topic: 'My responsibilities:',
                            responsibilities: [
                                {
                                    text: '- Creation of websites and landing pages from concept to implementation.'
                                },
                                {
                                    text: '- Implementation of complex interactive elements.'
                                },
                                {
                                    text: '- Creation of a house assembler design using an interactive graphic 3D editor.'
                                },
                                {
                                    text: '- Create mobile websites and landing pages optimized for maximum speed.'
                                },
                                {
                                    text: '- Communication with customers personally.'
                                },
                                {
                                    text: '- Assist other developers on the team with project introduction and supervision.'
                                },
                            ],
                        },
                    },
                    {
                        icon: {
                            url: 'icons/experience/profolio.png',
                            width: 26,
                        },
                        title: 'Profolio',
                        topic: 'Remote work | (Octember, 2021 - now)',
                        info: {
                            title: 'I am one of the Front-end developers in the start-up project team (30 people).',
                            topic: 'My responsibilities:',
                            responsibilities: [
                                {
                                    text: '- Remote and project work in a team.'
                                },
                                {
                                    text: '- Software development according to Agile/Scrum methodology.'
                                },
                                {
                                    text: '- Development of high-quality front-end applications with reusable components.'
                                },
                                {
                                    text: '- Creation of landing pages to promote the product.'
                                },
                                {
                                    text: '- Creation of new blocks and components, additional functions and hooks, etc.'
                                },
                                {
                                    text: '- Cooperation with designers to ensure the efficiency and technical correctness of the design.'
                                },
                                {
                                    text: '- Solving problems in Trello.'
                                },
                                {
                                    text: '- Helping junior developers (onboarding and etc.).'
                                },
                            ],
                            bottom: 'Stack: React, TypeScript, CSS, Git.',
                        },
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
    portfolioBlockData: {
        blockId: 'portfolio',
        topic: 'Portfolio',
        title: 'Examples of my work',
        works: [
            {
                href: 'https://profolio.dev',
                image: {
                    url: 'images/portfolio/profolio.jpg',
                },
            },
            {
                href: 'https://plastic-clinic.netlify.app/',
                image: {
                    url: 'images/portfolio/plastic_clinic.jpg',
                },
            },
            {
                href: 'https://imcotech.ru/cryptobox-1000/',
                image: {
                    url: 'images/portfolio/maining.jpg',
                },
            },
            {
                href: 'https://app.xbanking.org/index.html',
                image: {
                    url: 'images/portfolio/xbanking.jpg',
                },
            },
            {
                href: '',
                image: {
                    url: 'images/portfolio/abi.jpg',
                },
            },
            {
                href: 'https://kreo.pro/',
                image: {
                    url: 'images/portfolio/kreo.jpg',
                },
            },
            {
                href: 'https://denco.store/fulfillment',
                image: {
                    url: 'images/portfolio/denco.jpg',
                },
            },
            {
                href: 'https://github.com/mariknowhere/sirpo',
                image: {
                    url: 'images/portfolio/sirpo.jpg',
                },
            },
            {
                href: 'http://obmen.uno/',
                image: {
                    url: 'images/portfolio/currency_exchange.jpg',
                },
            },
            {
                href: 'http://partyquiz.club/',
                image: {
                    url: 'images/portfolio/party-quiz.jpg',
                },
            },
            {
                href: '#',
                image: {
                    url: 'images/portfolio/viking.jpg',
                },
            },
            {
                href: 'https://conomica.ru/',
                image: {
                    url: 'images/portfolio/conomica.jpg',
                },
            },
            {
                href: '#',
                image: {
                    url: 'images/portfolio/fitness.jpg',
                },
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
                href: '#portfolio',
                content: 'Проекты'
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
        description: `Опыт работы полтора года, большой коммерческий опыт (15+ коммерческих проектов). Есть опыт в 
        общении с заказчиком, опыт командной работы и менторство остальных разработчиков. Вся дополнительная информация
        ниже.`,
        cards: [
            {
                image: {
                    url: `icons/about/devices.png`,
                    width: 35,
                },
                title: 'Что жду от компании?',
                description: `Главное чтобы были задачи на развитие меня как специалиста. 
                Целеустремленная и слаженная команда.
                Возможность работы в офисе или удаленно.
                Также готов к перезду в Грузию.
                `,
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
                        topic: 'Минск | (Март — Май, 2021)',
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
                        topic: 'Удалённая работа | (Март, 2021 — Июль, 2022)',
                        info: {
                            title: 'Банковский проект.',
                            topic: 'Мои рабочие обязанности:',
                            responsibilities: [
                                {
                                    text: '- Удаленная и проектная работа в команде.'
                                },
                                {
                                    text: '- Разработка программного обеспечения по методологии Agile/Scrum.'
                                },
                                {
                                    text: '- Создание и изменение, доработка и оптимизация алгоритмов работы приложения ' +
                                      'на фронтенде.'
                                },
                                {
                                    text: '- Интеграция с API. Написание логики приема, обработки, отображения и отправки данных.'
                                },
                                {
                                    text: '- Реализация дизайна на основе макетов Figma.'
                                },
                                {
                                    text: '- Разработка unit-тестов для всего нового кода.'
                                },
                                {
                                    text: '- Проведение код-ревью.'
                                },
                                {
                                    text: '- Ежедневные встречи (планирование задач и отчеты).'
                                },
                                {
                                    text: '- Оценка задач (часы/стори-баллы).'
                                },
                            ],
                            bottom: 'Используемые технологии: React/Redux, TypeScript/JavaScript, Jest, HTML, CSS, ' +
                              'SASS/SCSS/LESS, Git.',
                        },
                    },
                    {
                        icon: {
                            url: 'icons/experience/freelance.png',
                            width: 26,
                        },
                        title: 'Freelance',
                        topic: 'Удалённая работа | (Апрель, 2022 — по наст. время)',
                        info: {
                            title: 'Работаю в команде, где присутствует менеджер, разработчики, дизайнеры и визуализаторы. Являюсь главным в команде разработчиков.',
                            topic: 'Мои рабочие обязанности:',
                            responsibilities: [
                                {
                                    text: '- Создание веб-сайтов и целевых страниц от концепции до реализации.'
                                },
                                {
                                    text: '- Реализация сложных интерактивных элементов.'
                                },
                                {
                                    text: '- Создание дизайна конструктора сборщика дома при помощи интерактивного графического 3D редактора.'
                                },
                                {
                                    text: '- Создание мобильных веб-сайтов и целевых страниц, оптимизированных для максимальной скорости.'
                                },
                                {
                                    text: '- Общение с заказчиками лично.'
                                },
                                {
                                    text: '- Помощь остальным разработчикам в команде при введении проекта и курирование их.'
                                },
                            ],
                        },
                    },
                    {
                        icon: {
                            url: 'icons/experience/profolio.png',
                            width: 26,
                        },
                        title: 'Profolio',
                        topic: 'Удалённая работа | (Октябрь, 2021 — по наст. время)',
                        info: {
                            title: 'Являюсь одним из Front-end разработчиков в команде старт-ап проекта (30 человек).',
                            topic: 'Мои рабочие обязанности:',
                            responsibilities: [
                                {
                                    text: '- Удаленная и проектная работа в команде.'
                                },
                                {
                                    text: '- Разработка программного обеспечения по методологии Agile/Scrum.'
                                },
                                {
                                    text: '- Разработка высококачественных интерфейсных приложений с многократно используемыми компонентами.'
                                },
                                {
                                    text: '- Создание целевых страниц для продвижения продукта.'
                                },
                                {
                                    text: '- Создание новых блоков и компонентов, дополнительных функций и хуков и т.д.'
                                },
                                {
                                    text: '- Сотрудничество с дизайнерами для обеспечения эффективности и технической правильности дизайна.'
                                },
                                {
                                    text: '- Решение задач в Trello.'
                                },
                                {
                                    text: '- Помощь младшим разработчикам (onboarding and etc.).'
                                },
                            ],
                            bottom: 'Используемые технологии: React, TypeScript, CSS, Git.',
                        },
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
    portfolioBlockData: {
      blockId: 'portfolio',
      topic: 'Портфолио',
      title: 'Примеры моих работ',
      works: [
          {
              href: 'https://profolio.dev',
              image: {
                  url: 'images/portfolio/profolio.jpg',
              },
          },
          {
              href: 'https://plastic-clinic.netlify.app/',
              image: {
                  url: 'images/portfolio/plastic_clinic.jpg',
              },
          },
          {
              href: 'https://imcotech.ru/cryptobox-1000/',
              image: {
                  url: 'images/portfolio/maining.jpg',
              },
          },
          {
              href: 'https://app.xbanking.org/index.html',
              image: {
                  url: 'images/portfolio/xbanking.jpg',
              },
          },
          {
              href: '',
              image: {
                  url: 'images/portfolio/abi.jpg',
              },
          },
          {
              href: 'https://kreo.pro/',
              image: {
                  url: 'images/portfolio/kreo.jpg',
              },
          },
          {
              href: 'https://denco.store/fulfillment',
              image: {
                  url: 'images/portfolio/denco.jpg',
              },
          },
          {
              href: 'https://github.com/mariknowhere/sirpo',
              image: {
                  url: 'images/portfolio/sirpo.jpg',
              },
          },
          {
              href: 'http://obmen.uno/',
              image: {
                  url: 'images/portfolio/currency_exchange.jpg',
              },
          },
          {
              href: 'http://partyquiz.club/',
              image: {
                  url: 'images/portfolio/party-quiz.jpg',
              },
          },
          {
              href: '#',
              image: {
                  url: 'images/portfolio/viking.jpg',
              },
          },
          {
              href: 'https://conomica.ru/',
              image: {
                  url: 'images/portfolio/conomica.jpg',
              },
          },
          {
              href: '#',
              image: {
                  url: 'images/portfolio/fitness.jpg',
              },
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
                content: 'Почта',
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
