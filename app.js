document.addEventListener('DOMContentLoaded', _ => {
  const list = document.querySelector('#book-list ul');

  // Delete book
  list.addEventListener('click', e => {
    if (e.target.className == 'delete') {
      let li = e.target.parentElement;
      list.removeChild(li);
    }
  })

  //add books
  const addForm = document.forms['add-book'];
  addForm.addEventListener('submit', e => {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;


    if(value.trim() != 0) {
      //Create elements
      const li = document.createElement('li');
      const bookName = document.createElement('span');
      const deleteBtn = document.createElement('span');

      //Add content
      bookName.textContent = value;
      deleteBtn.textContent = 'delete';

      //Add classes
      bookName.classList.add('name');
      deleteBtn.classList.add('delete');

      //append to document
      li.appendChild(bookName);
      li.appendChild(deleteBtn);

      list.appendChild(li);
    } else {
      alert('Please enter book name');
    }
  });

  //hide books
  const hideBox = document.querySelector('#add-book #hide');

  hideBox.addEventListener('change', e => {
    if (hideBox.checked) {
      list.style.display = 'none';
    } else {
      list.style.display = "block";
    }
  });

  //Search filter
  const searchBar = document.forms['search-books'].querySelector('input');

  searchBar.addEventListener('keyup', e => {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');

    Array.from(books).forEach(book => {
      const title = book.firstElementChild.textContent.toLowerCase();
      if (title.indexOf(term) != -1) {
        book.style.display = 'block';
      } else {
        book.style.display = 'none';
      }
    });
  });


  //tabbed content

  const tabs = document.querySelector('.tabs');
  const panels = document.querySelectorAll('.panel');

  tabs.addEventListener('click', e => {
    if (e.target.tagName == 'LI') {
      const targetPanel = document.querySelector(e.target.dataset.target);
      panels.forEach(panel => {
        if (panel == targetPanel) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    }
  });

});

if(true > 3){
  console.log('True');
} else {
  console.log('False');
}