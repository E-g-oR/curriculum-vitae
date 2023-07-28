export const LINKS = [{
    title: "Documentation",
    body: "Learn how Astro works and explore the official API docs.",
    href: "https://docs.astro.build",
}, {
    title: "Integrations",
    body: "Supercharge your project with new frameworks and libraries.",
    href: "https://astro.build/integrations",
}, {
    title: "Themes",
    body: "Explore a galaxy of community-built starter themes.",
    href: "https://docs.astro.build",
}, {
    title: "Community",
    body: "Come say hi to our amazing Discord community. ❤️",
    href: "https://docs.astro.build",
},]

export interface Contact {
    icon: string,
    title: string,
    body: string
    href: string
}

export const CONTACTS: ReadonlyArray<Contact> = [{
    title: "Email",
    body: "emuzych@gmail.com",
    href: "mailto:emuzych@gmail.com",
    icon: "email"
}, {
    title: "Phone number",
    body: "+375 (29) 168 92 58",
    href: "tel:+375291689258",
    icon: "phone"
}, {
    title: "Skype",
    body: "emuzych@gmail.com",
    href: "#",
    icon: "skype"
}, {
    title: "Telegram",
    body: "@egor_muzychkin",
    href: "https://t.me/egor_muzychkin",
    icon: "telegram"
}, {
    title: "GitHub",
    body: "https://github.com/E-g-oR",
    href: "https://github.com/E-g-oR",
    icon: "github"
},]
