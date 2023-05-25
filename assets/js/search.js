// Function to perform search
function performSearch() {
    const searchInput = document.getElementById("search-input");
    const query = searchInput.value.trim().toLowerCase();
    const searchResultsContainer = document.getElementById("search-results");

    // Clear previous results
    searchResultsContainer.innerHTML = "";

    const pages = [
        { href: "movies.html", textContent: "Movies" },
        { href: "movies.html", textContent: "kong" },
        { href: "Tvshows.html", textContent: "TV Shows" },
        { href: "Games&Apps.html", textContent: "Games & Apps" },
        { href: "Collections.html", textContent: "Collections" },
        { href: "Feedback.html", textContent: "Feedback" }
    ];

    const matchingPages = pages.filter(page =>
        page.href.toLowerCase().includes(query) || page.textContent.toLowerCase().includes(query)
    );

    if (matchingPages.length === 0) {
        searchResultsContainer.textContent = "No results found.";
    } else {
        matchingPages.forEach(page => {
            const resultElement = document.createElement("p");
            const linkElement = document.createElement("a");
            linkElement.href = page.href;
            linkElement.textContent = page.textContent;
            resultElement.appendChild(linkElement);
            searchResultsContainer.appendChild(resultElement);
        });

        // Automatically navigate to the first matching page
        window.location.href = matchingPages[0].href;
    }
}

// Event listener for search input enter key press
document.getElementById("search-input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        performSearch();
        event.preventDefault(); // Prevent form submission
    }
});
