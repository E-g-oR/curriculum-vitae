import ru from "./ru";
import en from "./en";

interface Translation {
    name: string;
    description: string;
    location: {
        title: string;
        country: string;
        city: string;
    },
    about: {
        title: string
        body: ReadonlyArray<string>,
        languages: {
            title: string,
            speaking: ReadonlyArray<string>, // TODO change type to array of records
            learning: {
                title: string,
                list: ReadonlyArray<string>
            }
        },
        education: {
            title: string,
            university: string,
            department: {
                title: string,
                name: string
            },
            speciality: {
                title: string,
                name: string
            }
        }
    },
    experience: {
        title: string,
        list: ReadonlyArray<{
            company: string,
            position: string,
            description: ReadonlyArray<string>,
            period: [Date, Date],
        }>
    },
    tools: {
        title: string,
        // list: ReadonlyArray<{name: string, image: string, href: string}>
    },
    contacts: {
        title: string,
        list: ReadonlyArray<{
            title: string,
            body: string,
            href: string,
            icon: string // TODO move icons to separated const
        }>
    }
}

export enum Languages {
    en = "en",
    ru = "ru",
    // es = "es",
    // by = "by"
}

// export type Language = Languages

export const dictionary = {
    ru,
    en
}

export default Translation
