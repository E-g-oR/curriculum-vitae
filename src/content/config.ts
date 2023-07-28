import {defineCollection, z} from "astro:content";

const links = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        body: z.string(),
        href: z.string(),
    })
})
export const LINKS = [{
    title: "Documentation",
    body: "Learn how Astro works and explore the official API docs.",
    href: "https://docs.astro.build",
},{
    title: "Integrations",
    body: "Supercharge your project with new frameworks and libraries.",
    href: "https://astro.build/integrations",
},{
    title: "Themes",
    body: "Explore a galaxy of community-built starter themes.",
    href: "https://docs.astro.build",
},{
    title: "Community",
    body: "Come say hi to our amazing Discord community. ❤️",
    href: "https://docs.astro.build",
},]
export const collections = {
    links
}
