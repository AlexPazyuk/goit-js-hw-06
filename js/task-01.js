const listItem = document.querySelectorAll('.item');

console.log(`Number of categories: ${listItem.length}`);

const list = document.getElementById('categories');

const listItemsArr = [...list.children];


listItemsArr.forEach(el => {
    const itemTitle = el.firstElementChild;
    const countItems = itemTitle.nextElementSibling.children;
    console.log(`Category: ${itemTitle.textContent}`);
    console.log(`Elements: ${countItems.length}`);
});
