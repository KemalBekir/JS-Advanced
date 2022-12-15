function addItem() {
    const menu = document.getElementById('menu');
    const newItem = document.getElementById('newItemText');
    const newValue = document.getElementById('newItemValue');
    const option = document.createElement('option');
    option.textContent = newItem.value;
    option.value = newValue.value;

    menu.appendChild(option);
    newItem.value = '';
    newValue.value = '';
}