const allTabsBody = document.querySelectorAll('.tab-body-s');
const allTabsHead = document.querySelectorAll('.tab-head-s');
const searchForm = document.querySelector('.header-search');
let searchList = document.getElementById('search-list')

let activeTab = 1;

const init = () => {
    showActiveTabBody();
    showActiveTabHead();
}

const showActiveTabHead = () => allTabsHead[activeTab - 1].classList.add('active-tab');

const showActiveTabBody = () => {
    hideAllTabBody();
    allTabsBody[activeTab - 1].classList.add('show-tab');
}

const hideAllTabBody = () => allTabsBody.forEach(singleTabBody => singleTabBody.classList.remove('show-tab'));
const hideAllTabHead = () => allTabsHead.forEach(singleTabHead => singleTabHead.classList.remove('active-tab'));

window.addEventListener('DOMContentLoaded', () => init());

allTabsHead.forEach(singleTabHead => {
    singleTabHead.addEventListener('click', () => {
        hideAllTabHead();
        activeTab = singleTabHead.dataset.id;
        showActiveTabHead();
        showActiveTabBody();
    })
})


const getInputValue = (event) => {
    event.preventDefault();
    let searchText = searchForm.search.value;
    console.log(searchText);
}

searchForm.addEventListener('submit', getInputValue);