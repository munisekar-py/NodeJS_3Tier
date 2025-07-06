document.getElementById('userForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const email = document.getElementById('email').value;

  const res = await fetch('http://localhost:3000/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, age, email })
  });

  const text = await res.text();
  alert(text);
});
