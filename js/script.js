import changer from "./pagechanger.js";

let load = false;
const root = document.getElementById("root");
const lt = document.getElementsByTagName("li");

const loadPage = async (pageName) => {
    const text = changer(pageName.trim());

    if (text) {
        try {
            load = true;
            const response = await fetch(text);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.text();
            root.innerHTML = data;
        } catch (err) {
            alert("Error while loading the page:", err);
        } finally {
            load = false;
        }
    } else {
        alert("No page found");
    }
};

// Header links
window.addEventListener("DOMContentLoaded", () => {
    loadPage("Home");

    Array.from(lt).forEach((data) => {
        data.addEventListener("click", () => {
            loadPage(data.innerText);
        });
    });
});

// Form validation
window.handlesubmit = (event) => {
    event.preventDefault();
    alert("Your form successfully submitted");
};

// Footer links
const info = document.getElementById("Info");
const paragraphs = info.querySelectorAll("p");

Array.from(paragraphs).forEach((data) => {
    data.addEventListener("click", () => {
        loadPage(data.innerText);
    });
});
