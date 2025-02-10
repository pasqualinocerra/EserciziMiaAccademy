import { utilities } from "./utilities.mjs";

const API_URL = "https://jsonplaceholder.typicode.com/comments";

const $tableData = document.querySelector("#data");
const $prev = document.querySelector("#prev");
const $next = document.querySelector("#next");
const $currentPage = document.querySelector("#current-page");
const $totalPages = document.querySelector("#total-pages");

const state = {
    data: null, 
    _data: null,
    paginationInfo: {
        page: 1,
        limit: 25,
        totalPages: 1,
        hasPrevPage: false,
        hasNextPage: false,
    },
}

const fetchData = async () => {
    try {
        const response = await fetch(API_URL, {
            method: "GET", 
        });

        state._data = await response.json();
    } catch(error) {
        console.log(error);
    }
}

const render = () => {
    const HTML = state.data.map(item => utilities.generateTableTrHTML(item)).join("");

    $tableData.innerHTML = HTML;
}

const renderPagination = () => {
    $currentPage.innerHTML = state.paginationInfo.page;
    $totalPages.innerHTML = state.paginationInfo.totalPages;

    if (state.paginationInfo.hasPrevPage) {
        $prev.removeAttribute("disabled");
    } else {
        $prev.setAttribute("disabled", true);
    }

    if (state.paginationInfo.hasNextPage) {
        $next.removeAttribute("disabled");
    } else {
        $next.setAttribute("disabled", true);
    }
}

const paginateData = () => {
    const startIndex = state.paginationInfo.limit * (state.paginationInfo.page - 1);
    
    state.data = [...state._data].splice(startIndex, state.paginationInfo.limit);
    state.paginationInfo.totalPages = Math.ceil(state._data.length / state.paginationInfo.limit);
    state.paginationInfo.hasPrevPage = state.paginationInfo.page > 1;
    state.paginationInfo.hasNextPage = state.paginationInfo.page < state.paginationInfo.totalPages;

    renderPagination();
}

const manageListeners = () => {
    $prev.addEventListener("click", () => {
        state.paginationInfo.page -= 1;
        paginateData();
        renderPagination();
        render();
    });

    $next.addEventListener("click", () => {
        state.paginationInfo.page += 1;
        paginateData();
        renderPagination();
        render();
    });
}

const mount = async () => {
    await fetchData();
    paginateData();
    renderPagination();
    render();
}

const init = async () => {
    await mount();
    manageListeners();
}

init();