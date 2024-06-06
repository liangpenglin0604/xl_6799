document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    searchForm.addEventListener("submit", function(event) {
        event.preventDefault(); // 防止表单提交刷新页面

        const searchTerm = searchInput.value.trim(); // 获取搜索关键词

        // 发起 AJAX 请求
        const xhr = new XMLHttpRequest();
        xhr.open("GET", `/search?term=${searchTerm}`, true);
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                const data = JSON.parse(xhr.responseText);
                displaySearchResults(data); // 显示搜索结果
            } else {
                console.error("Failed to fetch search results");
            }
        };
        xhr.send();
    });

    // 在页面上显示搜索结果
    function displaySearchResults(results) {
        searchResults.innerHTML = ""; // 清空之前的搜索结果

        if (results.length === 0) {
            const noResultsMessage = document.createElement("p");
            noResultsMessage.textContent = "未找到匹配的结果";
            searchResults.appendChild(noResultsMessage);
        } else {
            results.forEach(function(result) {
                const resultItem = document.createElement("div");
                resultItem.classList.add("search-result");

                if (result.type === "article") {
                    resultItem.innerHTML = `<h3>${result.title}</h3><p>${result.content}</p>`;
                } else if (result.type === "image") {
                    resultItem.innerHTML = `<img src="${result.imageUrl}" alt="${result.title}">`;
                } else if (result.type === "video") {
                    resultItem.innerHTML = `<video controls><source src="${result.videoUrl}" type="video/mp4"></video>`;
                }

                searchResults.appendChild(resultItem);
            });
        }
    }
});
