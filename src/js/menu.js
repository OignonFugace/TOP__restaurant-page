import menuData from '../json/menu.json';

function createMenuItem(item) {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';

    const itemNamePrice = document.createElement('div');
    itemNamePrice.className = 'item-name-price';
    itemNamePrice.textContent = `${item.name} - $${item.price}`;
    menuItem.appendChild(itemNamePrice);

    const itemDetails = document.createElement('div');
    itemDetails.className = 'item-details';
    itemDetails.style.display = 'none';

    const itemDescription = document.createElement('p');
    itemDescription.className = 'item-description';
    itemDescription.textContent = item.description;
    itemDetails.appendChild(itemDescription);

    const itemIngredients = document.createElement('ul');
    itemIngredients.className = 'item-ingredients';
    item.ingredients.forEach(ingredient => {
        const ingredientItem = document.createElement('li');
        ingredientItem.textContent = ingredient;
        itemIngredients.appendChild(ingredientItem);
    });
    itemDetails.appendChild(itemIngredients);

    menuItem.appendChild(itemDetails);

    itemNamePrice.addEventListener('click', () => {
        itemDetails.style.display = itemDetails.style.display === 'none' ? 'block' : 'none';
    });

    return menuItem;
}

export default async function loadMenuPage() {
    const mainContent = document.querySelector('#content');
    const menu = document.createElement('div');
    menu.className = 'menu';

    menuData.forEach(item => {
        menu.appendChild(createMenuItem(item));
    });

    mainContent.appendChild(menu);
}
