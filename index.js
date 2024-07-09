import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

const getAll = (selector) => document.querySelectorAll(selector)

window.onload = () => {
    let markdownSections = [...getAll(".md")]
    // Get all elements with the class of md

    markdownSections.map(section => {
        section.classList.remove("md")

        section.innerHTML = marked.parse(
            section.innerHTML
                .split("\n")
                .map(str => str.replaceAll("\t",""))
                .join("\n"))
    })
}