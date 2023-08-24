import type Translation from "./translation";
import locale from "date-fns/locale/en-IE/index";
import {format, formatDistanceStrict, isSameYear} from "date-fns";

const en: Translation = {
    format: {
        distance: ([start, end]) => formatDistanceStrict(start, end, {locale}),
        period: ([start, end]) => isSameYear(start, end)
            ? format(start, "MMMM y", {locale})
            : `${format(start, "MMM y", {locale})} — ${format(end, "MMM y", {locale})}`
    },
    name: "Egor Muzychkin",
    description: "Introvert. In love with coffee and sunrises. Bibliophile. Guitar player. Cat person. Obsessed with traveling and nature.",
    location: {
        title: "Location",
        city: "Gomel",
        country: "Belarus",
    },
    objective: {
        title: "Objective",
        name: "Desired position",
        value: "front-end developer",
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
            info: [{
                name: "Department",
                body: "Mathematics and programming technologies"
            }, {
                name: "Speciality",
                body: "Economic cybernetics"
            },]
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
                {name: "Russian", level: "Native speaker"},
                {name: "Belarussian", level: "Intermediate"},
                {name: "English", level: "Intermediate"}
            ]
        }
    },
    experience: {
        title: "Work experience",
        responsibilities: "Responsibilities",
        list: [{
            position: "Front-end developer",
            description: "Development of software products using modern libraries and frameworks, mobile development.",
            company: "NDA",
            period: [
                new Date(2022, 10, 26),
                new Date(2023, 10, 25)
            ],
            responsibilities: ["Develoment and implementation UI design",
                "Set up projects and architecture",
                "Creating reusable components",
                "Maintaining and extending projects and bug fixes",
                "Writing documentation",
                "Meetings with the customer"],
            technologies: ["React", "React Native", "Redux (RTQ)", "Zustand", "TypeScript", "TailwindCss"],
        }, {
            position: "Front-end developer",
            description: "User interface development, data processing and it’s visualization, bugfix.",
            company: "ITSupportMe",
            period: [
                new Date(2021, 9, 13),
                new Date(2022, 10, 15)
            ],
            responsibilities: ["Creating reusable components\n",
                "Building user interface\n",
                "Data processing and visualisation\n",
                "Implementing new features\n",
                "Maintaining and extending projects \n",
                "Bug fixes"],
            technologies: ["React", "Redux", "TypeScript", "RxJS"],
        }, {
            position: "Trainee",
            description: "I got acquainted with the development of web applications, as well as mobile development. I learned how to write unit and integration tests.",
            company: "ITSupportMe",
            period: [
                new Date(2021, 8, 1),
                new Date(2021, 9, 30)
            ],
            responsibilities: [],
            technologies: ["React", "ReactNative", "Redux", "MobX", "JavaScript", "TypeScript", "Jest", "React testing library", "Cucumber framework"],
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
            icon: "email",
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
    },
    programming: "Programming",
    skills: "Skills",
    others: "Other",
}

export default en
