import type Translation from "./translation";

const ru: Translation = {
    name: "Егор Музычкин",
    description: "Интроверт. Влюблён в кофе и рассветы. Библиофил. Гитарист. Люблю котов. Одержим путешествиями и природой.",
    location: {
        title: "Место",
        city: "Гомель",
        country: "Беларусь",
    },
    about: {
        title: "Обо мне",
        body: [
            "Я начал изучать фронтенд разработку, когда был на третьем курсе университета. Помню, как зашёл на сайт Apple и изумился красотой и решениями, которые они использовали, и решил непременно научиться делать так же.",
            "И вот я уже два года занимаюсь веб разработкой, делаю сайты и веб-приложения, и с удовольствием изучаю новые инструменты и технологии."
        ],
        education: {
            title: "Образование",
            university: "ГГУ им. Франциска Скорины",
            department: {
                title: "Факультет",
                name: "Математики и технологий программирования",
            },
            speciality: {
                title: "Специальность",
                name: "Экономическая киберненика",
            },
        },
        languages: {
            title: "Я говорю на",
            learning: {
                title: "А так же сейчас изучаю",
                list: [
                    "Испанский",
                ]
            },
            speaking: [
                "Русский",
                "Белорусский",
                "Английский"
            ]
        }
    },
    experience: {
        title: "Опыт работы",
        list: [{
            position: "Стажировка",
            description: ["Познакомился с разработкой веб-приложений, а так же мобильной разработкой. Научился писать юнит-тесты и интеграционные тесты."],
            company: "ITSupportMe",
            period: [
                new Date(2021, 8, 1),
                new Date(2021, 9, 30)
            ]
        }, {
            position: "Фронтенд разработчик",
            description: ["Разработка пользовательского интерфейса, обработкой и визуализацией данных, багфиксом."],
            company: "ITSupportMe",
            period: [
                new Date(2021, 9, 13),
                new Date(2022, 10, 15)
            ]
        }, {
            position: "Фронтенд разработчик",
            description: ["Разработка программных продуктов."],
            company: "Военная академия Республики Беларусь",
            period: [
                new Date(2021, 10, 26),
                new Date(2022, 10, 26)
            ]
        },]
    },
    tools: {
        title: "Инструменты",
    },
    contacts: {
        title: "Контакты",
        list: [{
            title: "Электронная почта",
            body: "emuzych@gmail.com",
            icon: "email",
            href: "mailto:emuzych@gmail.com"
        }, {
            title: "Телефон",
            body: "+375  (29) 168 92 58",
            icon: "phone",
            href: "tel:+375291689258"
        }, {
            title: "Skype",
            body: "emuzych@gmail.com",
            icon: "skype",
            href: "skype:emuzych@gmail.com"
        }, {
            title: "Telegram",
            body: "@egor_muzychkin",
            icon: "telegram",
            href: "https://t.me/egor_muzychkin"
        }, {
            title: "GitHub",
            body: "https://github.com/E-g-oR",
            icon: "github",
            href: "https://github.com/E-g-oR"
        },]
    }
}

export default ru
