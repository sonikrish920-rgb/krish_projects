
  let notes = JSON.parse(localStorage.getItem('notes')) || [];

  function renderNotes() {
    const container = document.getElementById('notesContainer');
    container.innerHTML = '';
    notes.forEach((note, index) => {
      container.innerHTML += `
        <div class="note">
          <h3>${note.title}</h3>
          <p>${note.content}</p>
          <button onclick="deleteNote(${index})">Delete</button>
        </div>`;
    });
  }

  function deleteNote(index) {
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    renderNotes();
  }

  document.getElementById('noteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    notes.push({ title, content });
    localStorage.setItem('notes', JSON.stringify(notes));
    this.reset();
    renderNotes();
  });

  renderNotes();