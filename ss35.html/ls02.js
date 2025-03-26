let openFormBtn = document.getElementById('openFormBtn');
let bookmarkModal = document.getElementById('bookmarkModal');
let closeModal = document.getElementById('closeModal');
let bookmarkForm = document.getElementById('bookmarkForm');
let bookmarkList = document.getElementById('bookmarkList');
let websiteNameInput = document.getElementById('websiteName');
let websiteURLInput = document.getElementById('websiteURL');

document.addEventListener('DOMContentLoaded', loadBookmarks);
openFormBtn.addEventListener('click', function () {
    bookmarkModal.style.display = 'flex';
});

closeModal.addEventListener('click', function () {
    bookmarkModal.style.display = 'none'
    bookmarkForm.reset()
})

bookmarkForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = websiteNameInput.value;
    const url = websiteURLInput.value;
    const bookmark = {
        name: name,
        url: url
    };
    addBookmark(bookmark);
    bookmarkModal.style.display = 'none';
    bookmarkForm.reset();
    loadBookmarks();
});

function addBookmark(bookmark) {
    let bookmarks = getBookmarks();
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

function getBookmarks() {
    let bookmarks = localStorage.getItem('bookmarks');
    return bookmarks ? JSON.parse(bookmarks) : [];
}
function loadBookmarks() {
    const bookmarks = getBookmarks();
    bookmarkList.innerHTML = '';
    bookmarks.forEach((bookmark, index) => {
        const bookmarkItem = document.createElement('div');
        bookmarkItem.classList.add('bookmark-item');
        bookmarkItem.innerHTML = `
             <p>${bookmark.name}</p>
             <button class="delete-btn" onclick="deleteBookmark(${index})">×</button>
         `;
        bookmarkItem.addEventListener('click', function (e) {
            if (!e.target.classList.contains('delete-btn')) {
                window.open(bookmark.url, '_blank');
            }
        });
        bookmarkList.appendChild(bookmarkItem);
    });
}

function deleteBookmark(index) {
    let bookmarks = getBookmarks();
    bookmarks.splice(index, 1);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    loadBookmarks()
}