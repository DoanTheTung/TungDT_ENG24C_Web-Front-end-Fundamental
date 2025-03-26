let initialItems = [
    {
        id: 1,
        name: "Mục 1",
        description: "Mô tả mục 1",
        status: true
    },
    {
        id: 2,
        name: "Mục 2",
        description: "Mô tả mục 2",
        status: false
    }
];

if (!localStorage.getItem('items')) {
    localStorage.setItem('items', JSON.stringify(initialItems));
}

let items = JSON.parse(localStorage.getItem('items')) || [];
let editId = null;

const addItemBtn = document.getElementById('addItemBtn');
const itemModal = document.getElementById('itemModal');
const closeModal = document.getElementById('closeModal');
const cancelBtn = document.getElementById('cancelBtn');
const itemForm = document.getElementById('itemForm');
const itemList = document.getElementById('itemList');
const modalTitle = document.getElementById('modalTitle');
const itemNameInput = document.getElementById('itemName');
const itemDescriptionInput = document.getElementById('itemDescription');
const itemStatusInput = document.getElementById('itemStatus');
const nameError = document.getElementById('nameError');
const descriptionError = document.getElementById('descriptionError');
const searchInput = document.getElementById('searchInput');
const statusFilter = document.getElementById('statusFilter');

displayItems();

searchInput.addEventListener('input', filterAndDisplayItems);
statusFilter.addEventListener('change', filterAndDisplayItems);

addItemBtn.addEventListener('click', () => {
    editId = null;
    modalTitle.textContent = 'Thêm mục lục';
    itemForm.reset();
    clearErrors();
    itemModal.style.display = 'flex';
});

closeModal.addEventListener('click', closeModalHandler);
cancelBtn.addEventListener('click', closeModalHandler);
function closeModalHandler() {
    itemModal.style.display = 'none';
    itemForm.reset();
    clearErrors();
    editId = null;
};

itemForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = itemNameInput.value.trim();
    const description = itemDescriptionInput.value.trim();
    const status = itemStatusInput.checked;
    let isValid = true;
    clearErrors();
    if (!name) {
        nameError.textContent = 'Tên mục lục không được để trống!';
        isValid = false;
    }
    if (!description) {
        descriptionError.textContent = 'Mô tả không được để trống!';
        isValid = false;
    }
    if (isValid) {
        if (editId) {
            const item = items.find(item => item.id === editId);
            item.name = name;
            item.status = status;
        } else {
            const newItem = {
                id: items.length ? items[items.length - 1].id + 1 : 1,
                name: name,
                status: status
            };
            items.push(newItem);
        }
        localStorage.setItem('items', JSON.stringify(items));
        displayItems();
        closeModalHandler();
    }
});

function displayItems(filteredItems = items) {
    itemList.innerHTML = '';
    filteredItems.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td class="${item.status ? 'status-active' : 'status-inactive'}">
                ${item.status ? 'Hoạt động' : 'Không hoạt động'}
            </td>
            <td>
                <button class="action-btn edit-btn" onclick="editItem(${item.id})">Chỉnh sửa</button>
                <button class="action-btn delete-btn" onclick="deleteItem(${item.id})">Xóa</button>
            </td>
        `;
        itemList.appendChild(row);
    });
};

function editItem(id) {
    editId = id;
    const item = items.find(item => item.id === id);
    if (item) {
        modalTitle.textContent = 'Chỉnh sửa mục lục';
        itemNameInput.value = item.name;
        itemStatusInput.checked = item.status;
        clearErrors();
        itemModal.style.display = 'flex';
    }
};

function deleteItem(id) {
    if (confirm('Bạn có chắc chắn muốn xóa mục lục này?')) {
        items = items.filter(item => item.id !== id);
        localStorage.setItem('items', JSON.stringify(items));
        filterAndDisplayItems();
    }
};

function clearErrors() {
    nameError.textContent = '';
    descriptionError.textContent = '';
};