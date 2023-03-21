import menuData from '../json/menu.json';

function createMenuItem(item) {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';

    const itemNamePrice = document.createElement('div');
    itemNamePrice.className = 'item-name-price';

    // Create div for the item name
    const itemName = document.createElement('div');
    itemName.textContent = item.name;
    itemNamePrice.appendChild(itemName);

    // Create div for the item price
    const itemPrice = document.createElement('div');
    itemPrice.textContent = `$${item.price}`;
    itemNamePrice.appendChild(itemPrice);

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
        menuItem.classList.toggle('open');
    });

    return menuItem;
}

export default function loadMenuPage() {
    const mainContent = document.querySelector('#content');
    mainContent.className = 'menu-page';

    // Menu Page Title
    const menuPageTitle = document.createElement('h1');
    menuPageTitle.textContent = 'Our Delicious Croque-Monsieur Variations:';


    // Menu Page Content
    mainContent.appendChild(menuPageTitle);

    const menu = document.createElement('div');
    menu.className = 'menu';

    menuData.forEach(item => {
        menu.appendChild(createMenuItem(item));
    });

    mainContent.appendChild(menu);
}
