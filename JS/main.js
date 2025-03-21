

const posts = document.querySelectorAll(".lookbook-post");
const expandedView = document.querySelector(".expanded-view");
const expandedImg = document.getElementById("expanded-img");
const linksList = document.getElementById("links-list");
const closeBtn = document.querySelector(".close-btn");


// Function to toggle filter dropdown and shift results down
function toggleFilters() {
    const filterSection = document.getElementById("filter-section");
    filterSection.classList.toggle("show");

    // Change button text when toggled on and off 
    const button = document.querySelector(".filter-toggle");
    button.textContent = filterSection.classList.contains("show") ? "Filters ▲" : "Filters ▼"; 
}



// Underlines the current page
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");
    let currentPage = window.location.pathname.split("/").pop() || "index.html"; // Handle root page

    links.forEach(link => {
        // Normalize the href by removing query/hash parameters
        let linkHref = link.getAttribute("href").split("?")[0].split("#")[0];

        console.log(`Checking link: ${linkHref} against ${currentPage}`);

        // Handle root URL (/) case
        if (currentPage === "" && linkHref === "index.html") {
            console.log(`Match found: ${linkHref} (root page)`);
            link.classList.add("active");
        } else if (linkHref === currentPage) {
            console.log(`Match found: ${linkHref}`);
            link.classList.add("active");
        }
    });
});







// lookbook functionality 
const lookbookData = {
    1: {
        img: "img/outfit1.jpg",
        links: [
            { name: "Shirt", url: "https://example.com/shirt", price: "$25" },
            { name: "Jeans", url: "https://example.com/jeans", price: "$40" }
        ]
    },
    2: {
        img: "img/outfit2.jpg",
        links: [
            { name: "Jacket", url: "https://example.com/jacket", price: "$60" },
            { name: "Shoes", url: "https://example.com/shoes", price: "$80" }
        ]
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const titleElement = document.createElement("h3");
    titleElement.textContent = "Links to Outfit Items:";  // Static title
    document.getElementById("item-details").prepend(titleElement);
});

posts.forEach(post => {
    post.addEventListener("click", () => {
        const postId = post.getAttribute("data-post");
        const data = lookbookData[postId];

        if (data) {
            expandedImg.src = data.img;

            // Clear existing links
            linksList.innerHTML = "";

            // Add links for the current outfit
            data.links.forEach(link => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `<a href="${link.url}" target="_blank">${link.name} - ${link.price}</a>`;
                linksList.appendChild(listItem);
            });

            expandedView.classList.add("show");
            expandedView.style.display = "flex";
        }
    });
});

closeBtn.addEventListener("click", () => {
    expandedView.style.display = "none";
    expandedView.classList.remove("show");
});
