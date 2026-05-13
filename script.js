function markAbsent(button) {
  let row = button.parentElement.parentElement;
  let status = row.querySelector('.status');

  status.innerHTML = 'Absent';
  status.classList.remove('present-status');
  status.classList.add('absent-status');

  button.innerHTML = 'Mark Present';
  button.setAttribute('onclick', 'markPresent(this)');
}

function markPresent(button) {
  let row = button.parentElement.parentElement;
  let status = row.querySelector('.status');

  status.innerHTML = 'Present';
  status.classList.remove('absent-status');
  status.classList.add('present-status');

  button.innerHTML = 'Mark Absent';
  button.setAttribute('onclick', 'markAbsent(this)');
}

function addStudent() {
  let table = document.getElementById('studentTable');

  let row = table.insertRow();

  row.innerHTML = `
    <td>CS00${table.rows.length + 1}</td>
    <td>New Student</td>
    <td><span class="status present-status">Present</span></td>
    <td><button onclick="markAbsent(this)">Mark Absent</button></td>
  `;
}

const search = document.getElementById('search');

search.addEventListener('keyup', function () {
  const filter = search.value.toLowerCase();
  const rows = document.querySelectorAll('#studentTable tr');

  rows.forEach(row => {
    const name = row.cells[1].innerText.toLowerCase();

    if (name.includes(filter)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
});
