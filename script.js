/* =============================================
   CODINGLAB DASHBOARD — app.js
   ============================================= */

/* ---------- 1. USER DATA ---------- */
const users = [
  { name: 'Prem Shahi',    email: 'premshahi@gmail.com',    joined: '2022-02-12', type: 'new',    status: 'liked'  },
  { name: 'Deepa Chand',   email: 'deepachand@gmail.com',   joined: '2022-02-12', type: 'member', status: 'shared' },
  { name: 'Prakash Shahi', email: 'prakashshahi@gmail.com', joined: '2022-02-13', type: 'new',    status: 'liked'  },
  { name: 'Manisha Chand', email: 'manishachan@gmail.com',  joined: '2022-02-13', type: 'member', status: 'shared' },
  { name: 'Riya Patel',    email: 'riyapatel@gmail.com',    joined: '2022-02-14', type: 'new',    status: 'liked'  },
  { name: 'Arjun Das',     email: 'arjundas@gmail.com',     joined: '2022-02-14', type: 'member', status: 'shared' },
];

/* ---------- 2. RENDER TABLE ---------- */
function renderTable() {
  const tbody = document.getElementById('activityBody');
  tbody.innerHTML = '';

  users.forEach(u => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="name-cell">${u.name}</td>
      <td class="email-cell">${u.email}</td>
      <td>${u.joined}</td>
      <td><span class="type-badge type-${u.type}">${capitalise(u.type)}</span></td>
      <td><span class="status-badge status-${u.status}">${capitalise(u.status)}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

function capitalise(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/* ---------- 3. COUNTER ANIMATION ---------- */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  if (!target) return;

  const duration = 1400;
  const steps    = 60;
  const increment = target / steps;
  let current = 0, count = 0;

  const interval = setInterval(() => {
    current += increment;
    count++;
    const display = Math.min(Math.round(current), target);
    el.textContent = display.toLocaleString();

    if (count >= steps) {
      clearInterval(interval);
      el.textContent = target.toLocaleString(); // ensure exact final value
    }
  }, duration / steps);
}

/* ---------- 4. ACTIVE NAV ITEM ---------- */
function setActive(el, title) {
  // Remove active from all nav items
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  // Set active on clicked item
  el.classList.add('active');
  // Update page title
  document.getElementById('pageTitle').textContent = title;
}

/* ---------- 5. DARK MODE TOGGLE ---------- */
function toggleDark() {
  document.body.classList.toggle('dark');
  document.getElementById('darkToggle').classList.toggle('on');
}

/* ---------- 6. INIT ON PAGE LOAD ---------- */
window.addEventListener('load', () => {
  renderTable();
  document.querySelectorAll('[data-target]').forEach(animateCounter);
});