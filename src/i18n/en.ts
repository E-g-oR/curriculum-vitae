import type Translation from "./translation";

const en: Translation = {
    name: "Egor Muzychkin",
    description: "Introvert. In love with coffee and sunrises. Bibliophile. Guitar player. Cat person. Obsessed with traveling and nature.",
    location: {
        title: "Location",
        city: "Gomel",
        country: "Belarus",
    },
    about: {
        title: "About me",
        body: [
            "I started studying frontend development when I was in my third year of university. I remember going to Apple's website and being amazed by the beauty and solutions they used, and decided to definitely learn how to do the same.",
            "And now I have been engaged in web development for two years, making websites and web applications, and I am happy to learn new tools and technologies."
        ],
        education: {
            title: "Education",
            university: "Francisk Skorina Gomel state university",
            department: {
                title: "Department",
                name: "Mathematics and Programming Technologies",
            },
            speciality: {
                title: "specialty",
                name: "economic cybernetics",
            },
        },
        languages: {
            title: "I speak",
            learning: {
                title: "Currently learning",
                list: [
                    "Spanish",
                ]
            },
            speaking: [
                "Russian",
                "Belarussian",
                "English"
            ]
        }
    },
    experience: {
        title: "Work experience",
        list: [{
            position: "Trainee",
            description: ["I got acquainted with the development of web applications, as well as mobile development. I learned how to write unit and integration tests."],
            company: "ITSupportMe",
            period: [
                new Date(2021, 8, 1),
                new Date(2021, 9, 30)
            ]
        }, {
            position: "Front-end developer",
            description: ["User interface development, data processing and it’s visualization, bugfix."],
            company: "ITSupportMe",
            period: [
                new Date(2021, 9, 13),
                new Date(2022, 10, 15)
            ]
        }, {
            position: "Front-end developer",
            description: ["Development of software products."],
            company: "Military academy of Belarus",
            period: [
                new Date(2021, 10, 26),
                new Date(2022, 10, 26)
            ]
        },]
    },
    tools: {
        title: "Tools",
    },
    contacts: {
        title: "Contacts",
        list: [{
            title: "Email",
            body: "emuzych@gmail.com",
            icon: "mail",
            href: "mailto:emuzych@gmail.com"
        }, {
            title: "Phone number",
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

export default en
