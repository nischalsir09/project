import productchanger from "./productpages.js";

let root = document.getElementById('root');

const changess = async ( index ) => {
    const pageUrl = productchanger( index );

     
    if (!pageUrl) {
        console.error("No page found for the given index:", index);
        return null;
    }

    try {
        const response = await fetch(pageUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }


        const content = await response.text();
        root.innerHTML = content;


    } catch (err) {
        console.error("Failed to fetch data:", err);
    }


};

const aTag = document.getElementsByTagName("a");
const arrayatag = Array.from(aTag);

arrayatag.forEach((data, index) => {
    data.addEventListener("click", changess(index));
});

