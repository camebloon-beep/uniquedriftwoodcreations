/* ============================================
   Admin Dashboard - JavaScript Logic
   Handles login, inquiry management, and
   sculpture inventory status toggling.
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ===== SCULPTURE DATABASE (mirrors main site script.js) =====
  const allSculptures = [
    { id: 'mammal-1', title: 'Horse', category: 'mammals', imgUrl: 'https://static.wixstatic.com/media/09295b_1d3dcbd2ac8441abba7c4ac35bc23098~mv2.jpg' },
    { id: 'mammal-2', title: 'Horse', category: 'mammals', imgUrl: 'https://static.wixstatic.com/media/09295b_e41ad6590bc74c2a9a4a103de2e0e821~mv2.jpg' },
    { id: 'mammal-3', title: 'Elephant', category: 'mammals', imgUrl: 'https://static.wixstatic.com/media/09295b_f0143f8769a443a1b3e2927f6048c620~mv2.jpg' },
    { id: 'mammal-4', title: 'Head', category: 'mammals', imgUrl: 'https://static.wixstatic.com/media/09295b_c88d1c6675f14d27a808ff542e1fce90~mv2.jpg' },
    { id: 'mammal-5', title: 'Elephant', category: 'mammals', imgUrl: 'https://static.wixstatic.com/media/09295b_4ebb0c70acf84d5ebf9099a2d24ed462~mv2.jpg' },
    { id: 'mammal-6', title: 'Head', category: 'mammals', imgUrl: 'https://static.wixstatic.com/media/09295b_744fc01f64bd4fcba019542ed3bf5c92~mv2.jpg' },
    { id: 'mammal-7', title: 'Rhino', category: 'mammals', imgUrl: 'https://static.wixstatic.com/media/09295b_65dfee23df394e58b750b3d80043692c~mv2.jpg' },
    { id: 'mammal-8', title: 'Hippo', category: 'mammals', imgUrl: 'https://static.wixstatic.com/media/09295b_2dca4e9a9c3e4153bbc6cad7740d5dfb~mv2.jpg' },
    { id: 'mammal-9', title: 'Hippo', category: 'mammals', imgUrl: 'https://static.wixstatic.com/media/09295b_795bdb52b2c7474bad44943f8aa231e8~mv2.jpg' },
    { id: 'mammal-10', title: 'Bull', category: 'mammals', imgUrl: 'https://static.wixstatic.com/media/09295b_f8044d95332640cd9fb58762fcd40694~mv2.jpeg' },
    { id: 'mammal-11', title: 'Ox', category: 'mammals', imgUrl: 'https://static.wixstatic.com/media/09295b_79dd115189374a5cbf9dbbd5a6472d3a~mv2_d_3494_4900_s_4_2.jpg' },
    { id: 'mammal-12', title: 'Elephant', category: 'mammals', imgUrl: 'https://static.wixstatic.com/media/09295b_852a849dd8e04afbbf06482075eed45e~mv2_d_3675_5600_s_4_2.jpg' },
    { id: 'mammal-13', title: 'Giraffe', category: 'mammals', imgUrl: 'https://static.wixstatic.com/media/09295b_6a5f84c4d8324a08a4ed39199b5da985~mv2_d_2890_5240_s_4_2.jpg' },
    { id: 'mammal-14', title: 'Buck', category: 'mammals', imgUrl: 'https://static.wixstatic.com/media/09295b_89abc6bc734e4e9897b44a584f5e082e~mv2_d_2890_4713_s_4_2.jpg' },
    { id: 'mammal-15', title: 'Hippo', category: 'mammals', imgUrl: 'https://static.wixstatic.com/media/09295b_52a646b01e9f4c608dc00b2096c6ce82~mv2_d_4333_2992_s_4_2.png' },
    { id: 'mammal-16', title: 'Buffalo', category: 'mammals', imgUrl: 'https://static.wixstatic.com/media/09295b_6cf63f6c9a0044cea95684107bbc7b73~mv2_d_1280_1280_s_2.jpg' },
    { id: 'mammal-17', title: 'Buck', category: 'mammals', imgUrl: 'https://static.wixstatic.com/media/09295b_c84891203cad467fb56d9ce94a379811~mv2_d_1280_1280_s_2.jpg' },
    { id: 'mammal-18', title: 'Giraffe', category: 'mammals', imgUrl: 'https://static.wixstatic.com/media/09295b_f234164643724fb9905b84b00fe6f20f~mv2_d_1280_1280_s_2.jpg' },
    { id: 'marine-1', title: 'Whale Tail', category: 'marine', imgUrl: 'https://static.wixstatic.com/media/09295b_b827bb067dab43ecba7ab16d15b3caa5~mv2.jpg' },
    { id: 'marine-2', title: 'Fish', category: 'marine', imgUrl: 'https://static.wixstatic.com/media/09295b_b142b0171f7049879e6830103a103a4a~mv2.jpg' },
    { id: 'marine-3', title: 'Whale Tail', category: 'marine', imgUrl: 'https://static.wixstatic.com/media/09295b_9e282399df9541939ce214a9f7f4fc16~mv2.jpg' },
    { id: 'marine-4', title: 'Turtle', category: 'marine', imgUrl: 'https://static.wixstatic.com/media/09295b_1e9bcd1ffa534d9ba770c5d0427ba6fc~mv2.jpg' },
    { id: 'marine-5', title: 'Whale Tail', category: 'marine', imgUrl: 'https://static.wixstatic.com/media/09295b_f687e7a1f0c741e38d1e685f23c066a5~mv2_d_2835_3235_s_4_2.jpg' },
    { id: 'marine-6', title: 'Fish', category: 'marine', imgUrl: 'https://static.wixstatic.com/media/09295b_dfe08ba0323743699cad0f7f0565292c~mv2.png' },
    { id: 'marine-7', title: 'Shark', category: 'marine', imgUrl: 'https://static.wixstatic.com/media/09295b_d4261b3987194bd3ae5bc7e09d273ae4~mv2_d_2166_2385_s_2.png' },
    { id: 'marine-8', title: 'Marine Abstract', category: 'marine', imgUrl: 'https://static.wixstatic.com/media/09295b_0bc930bf149748a0ab38390a7f4471ed~mv2_d_4054_3556_s_4_2.jpg' },
    { id: 'marine-9', title: 'Whale Tail', category: 'marine', imgUrl: 'https://static.wixstatic.com/media/09295b_201cf75ba74f41aeaf5b74874e03be8d~mv2.jpg' },
    { id: 'bird-1', title: 'Avian Sculpture', category: 'birds', imgUrl: 'https://static.wixstatic.com/media/09295b_3acb5c521b9a4b34b3988ce6106ba427~mv2.jpg' },
    { id: 'bird-2', title: 'Shorebird', category: 'birds', imgUrl: 'https://static.wixstatic.com/media/09295b_e22dc713e0c54cfea427d13a01fb84db~mv2.jpg' },
    { id: 'bird-3', title: 'Perched Bird', category: 'birds', imgUrl: 'https://static.wixstatic.com/media/09295b_8b0e0f18d8c34f168d43ef442a6edfb9~mv2.jpg' },
    { id: 'bird-4', title: 'Giant Owl', category: 'birds', imgUrl: 'https://static.wixstatic.com/media/09295b_aa43d3121e5f42d682d19e6fe496e276~mv2.jpg' },
    { id: 'bird-5', title: 'Owl', category: 'birds', imgUrl: 'https://static.wixstatic.com/media/09295b_d94497208d394ab5bd4ce47a65c75601~mv2.jpg' },
    { id: 'bird-6', title: 'Bird', category: 'birds', imgUrl: 'https://static.wixstatic.com/media/09295b_d943ef5c4f8f4a22a521cea404ddc45c~mv2.jpg' },
    { id: 'bird-7', title: 'Bird', category: 'birds', imgUrl: 'https://static.wixstatic.com/media/09295b_250178181f3c4221b16fc7584e4970e6~mv2.jpg' },
    { id: 'bird-8', title: 'Crane', category: 'birds', imgUrl: 'https://static.wixstatic.com/media/09295b_a831f316a1df45dba8321d608993402a~mv2_d_1741_3426_s_2.png' },
    { id: 'bird-9', title: 'Heron', category: 'birds', imgUrl: 'https://static.wixstatic.com/media/09295b_f08103c558fc46658f37b0db60d89d4e~mv2_d_2557_4908_s_4_2.png' },
    { id: 'bird-10', title: 'Darter', category: 'birds', imgUrl: 'https://static.wixstatic.com/media/09295b_08669736e40e44f6a83316c79fd13738~mv2.jpg' },
    { id: 'human-1', title: 'Human Abstract', category: 'human', imgUrl: 'https://static.wixstatic.com/media/09295b_5f2f43f7e6c944aa99aa06bd4f11b882~mv2.jpg' },
    { id: 'human-2', title: 'Nude Study', category: 'human', imgUrl: 'https://static.wixstatic.com/media/09295b_4a9f132c654c4f0cab8917e8ed42a2cd~mv2.jpg' },
    { id: 'human-3', title: 'Bust', category: 'human', imgUrl: 'https://static.wixstatic.com/media/09295b_9fa306ab086b4ddf97864795926d28d6~mv2.jpg' },
    { id: 'human-4', title: 'Face', category: 'human', imgUrl: 'https://static.wixstatic.com/media/09295b_ef024d1bff364c878d9c23e15e11bad9~mv2_d_3000_4000_s_4_2.jpg' },
    { id: 'human-5', title: 'Torso', category: 'human', imgUrl: 'https://static.wixstatic.com/media/09295b_5b1e02ef2d324560bc132bcb40eecb18~mv2.jpg' },
    { id: 'human-6', title: 'African Figure', category: 'human', imgUrl: 'https://static.wixstatic.com/media/09295b_9aa925f5635d475694b575fd6a1c62d4~mv2.png' },
    { id: 'human-7', title: 'Traveller', category: 'human', imgUrl: 'https://static.wixstatic.com/media/09295b_6ebc2f86a6894487ba82192ca23f461b~mv2_d_2000_2992_s_2.jpg' },
    { id: 'human-8', title: 'The African Matriarch', category: 'human', imgUrl: 'https://static.wixstatic.com/media/09295b_0c7acd241d9240e4947547f08109d580~mv2_d_2000_2992_s_2.jpg' },
  ];

  // ===== STATE =====
  let authToken = localStorage.getItem('udc_admin_token') || null;
  let sculptureStatuses = {}; // { id: 'available' | 'sold' }

  // ===== DOM REFERENCES =====
  const loginScreen = document.getElementById('login-screen');
  const dashboard = document.getElementById('dashboard');
  const loginForm = document.getElementById('login-form');
  const loginError = document.getElementById('login-error');
  const loginBtn = document.getElementById('login-btn');
  const logoutBtn = document.getElementById('logout-btn');
  const tabBtns = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.panel');
  const refreshInquiriesBtn = document.getElementById('refresh-inquiries-btn');

  // ===== AUTH =====
  function showDashboard() {
    loginScreen.style.display = 'none';
    dashboard.style.display = 'block';
    loadInquiries();
    loadInventory();
  }

  function showLogin() {
    loginScreen.style.display = 'flex';
    dashboard.style.display = 'none';
    authToken = null;
    localStorage.removeItem('udc_admin_token');
  }

  // Check if already logged in
  if (authToken) {
    showDashboard();
  }

  // Login form submit
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    loginError.textContent = '';
    loginBtn.disabled = true;
    loginBtn.textContent = 'Authenticating...';

    const password = document.getElementById('login-password').value;

    // Local host bypass for previewing
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      setTimeout(() => {
        authToken = 'mock_local_token';
        localStorage.setItem('udc_admin_token', authToken);
        showDashboard();
        loginBtn.disabled = false;
        loginBtn.textContent = 'Enter Dashboard';
      }, 500);
      return;
    }

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (!res.ok) {
        loginError.textContent = data.error || 'Invalid password';
        loginBtn.disabled = false;
        loginBtn.textContent = 'Enter Dashboard';
        return;
      }

      authToken = data.token;
      localStorage.setItem('udc_admin_token', authToken);
      showDashboard();
    } catch (err) {
      loginError.textContent = 'Connection failed. Please try again.';
    }

    loginBtn.disabled = false;
    loginBtn.textContent = 'Enter Dashboard';
  });

  // Logout
  logoutBtn.addEventListener('click', showLogin);

  // ===== TAB NAVIGATION =====
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tabName = btn.getAttribute('data-tab');
      panels.forEach(p => {
        p.classList.toggle('active', p.id === `panel-${tabName}`);
      });
    });
  });

  // ===== INQUIRIES =====
  async function loadInquiries() {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      const localInquiries = localStorage.getItem('udc_inquiries') || '[]';
      renderInquiries(JSON.parse(localInquiries));
      return;
    }

    try {
      const res = await fetch('/api/admin/inquiries', {
        headers: { 'Authorization': `Bearer ${authToken}` },
      });

      if (res.status === 401) { showLogin(); return; }

      const inquiries = await res.json();
      renderInquiries(inquiries);
    } catch (err) {
      console.error('Failed to load inquiries:', err);
    }
  }

  function renderInquiries(inquiries) {
    const tbody = document.getElementById('inquiries-tbody');
    const table = document.getElementById('inquiries-table');
    const emptyState = document.getElementById('inquiries-empty');

    if (inquiries.length === 0) {
      table.style.display = 'none';
      emptyState.style.display = 'block';
      updateStats(0, 0);
      return;
    }

    emptyState.style.display = 'none';
    table.style.display = 'table';

    const unreadCount = inquiries.filter(i => !i.is_read).length;
    updateStats(inquiries.length, unreadCount);

    tbody.innerHTML = inquiries.map(inq => {
      const date = new Date(inq.created_at);
      const dateStr = date.toLocaleDateString('en-ZA', { year: 'numeric', month: 'short', day: 'numeric' });
      const timeStr = date.toLocaleTimeString('en-ZA', { hour: '2-digit', minute: '2-digit' });
      const rowClass = inq.is_read ? '' : 'unread';
      const btnClass = inq.is_read ? 'is-read' : 'is-unread';
      const btnText = inq.is_read ? 'Read' : 'Unread';

      return `
        <tr class="${rowClass}">
          <td class="td-date">${dateStr}<br><small>${timeStr}</small></td>
          <td>${escapeHtml(inq.name)}</td>
          <td class="td-email"><a href="mailto:${escapeHtml(inq.email)}">${escapeHtml(inq.email)}</a></td>
          <td>${escapeHtml(inq.subject)}</td>
          <td class="td-message">${escapeHtml(inq.message)}</td>
          <td>
            <button class="read-toggle-btn ${btnClass}" data-id="${inq.id}" data-read="${inq.is_read}">
              ${btnText}
            </button>
          </td>
        </tr>
      `;
    }).join('');

    // Bind toggle buttons
    tbody.querySelectorAll('.read-toggle-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = parseInt(btn.getAttribute('data-id'));
        const currentlyRead = btn.getAttribute('data-read') === 'true';
        const newStatus = !currentlyRead;

        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
          const localInquiries = JSON.parse(localStorage.getItem('udc_inquiries') || '[]');
          const inq = localInquiries.find(i => i.id === id);
          if (inq) inq.is_read = newStatus;
          localStorage.setItem('udc_inquiries', JSON.stringify(localInquiries));
          loadInquiries();
          return;
        }

        try {
          await fetch('/api/admin/inquiries', {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${authToken}`,
            },
            body: JSON.stringify({ id, is_read: newStatus }),
          });
          loadInquiries(); // Refresh
        } catch (err) {
          console.error('Failed to toggle read status:', err);
        }
      });
    });
  }

  function updateStats(totalInquiries, unreadCount) {
    document.getElementById('stat-total-inquiries').textContent = totalInquiries;
    document.getElementById('stat-unread').textContent = unreadCount;
  }

  refreshInquiriesBtn.addEventListener('click', loadInquiries);

  // ===== INVENTORY =====
  async function loadInventory() {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      const localStatuses = localStorage.getItem('udc_sculpture_statuses');
      sculptureStatuses = {};
      if (localStatuses) {
        JSON.parse(localStatuses).forEach(s => { sculptureStatuses[s.id] = s.status; });
      }
      renderInventory('all');
      updateInventoryStats();
      return;
    }

    // Fetch current statuses from API
    try {
      const res = await fetch('/api/sculptures');
      const statuses = await res.json();
      sculptureStatuses = {};
      statuses.forEach(s => { sculptureStatuses[s.id] = s.status; });
    } catch (err) {
      console.error('Failed to fetch sculpture statuses:', err);
    }

    renderInventory('all');
    updateInventoryStats();
  }

  function renderInventory(filterCategory) {
    const grid = document.getElementById('inventory-grid');

    const filtered = filterCategory === 'all'
      ? allSculptures
      : allSculptures.filter(s => s.category === filterCategory);

    grid.innerHTML = filtered.map(s => {
      const status = sculptureStatuses[s.id] || 'available';
      const isSold = status === 'sold';
      const cardClass = isSold ? 'inv-card is-sold' : 'inv-card';
      const labelClass = isSold ? 'toggle-label label-sold' : 'toggle-label label-available';
      const labelText = isSold ? 'Sold' : 'Available';

      return `
        <div class="${cardClass}" data-id="${s.id}">
          <img class="inv-card-thumb" src="${s.imgUrl}" alt="${s.title}" loading="lazy">
          <div class="inv-card-info">
            <div class="inv-card-title">${s.title}</div>
            <div class="inv-card-category">${s.category}</div>
          </div>
          <div class="toggle-wrapper">
            <span class="${labelClass}">${labelText}</span>
            <label class="toggle-switch">
              <input type="checkbox" ${isSold ? 'checked' : ''} data-sculpture-id="${s.id}">
              <span class="toggle-slider"></span>
            </label>
          </div>
        </div>
      `;
    }).join('');

    // Bind toggle switches
    grid.querySelectorAll('.toggle-switch input').forEach(input => {
      input.addEventListener('change', async () => {
        const sculptureId = input.getAttribute('data-sculpture-id');
        const newStatus = input.checked ? 'sold' : 'available';

        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
          sculptureStatuses[sculptureId] = newStatus;
          
          // Save list to localStorage
          const list = Object.keys(sculptureStatuses).map(key => ({ id: key, status: sculptureStatuses[key] }));
          localStorage.setItem('udc_sculpture_statuses', JSON.stringify(list));

          // Update the card visually
          const card = input.closest('.inv-card');
          const label = card.querySelector('.toggle-label');
          if (newStatus === 'sold') {
            card.classList.add('is-sold');
            label.className = 'toggle-label label-sold';
            label.textContent = 'Sold';
          } else {
            card.classList.remove('is-sold');
            label.className = 'toggle-label label-available';
            label.textContent = 'Available';
          }
          updateInventoryStats();
          return;
        }

        try {
          await fetch('/api/admin/sculptures', {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${authToken}`,
            },
            body: JSON.stringify({ id: sculptureId, status: newStatus }),
          });

          sculptureStatuses[sculptureId] = newStatus;

          // Update the card visually
          const card = input.closest('.inv-card');
          const label = card.querySelector('.toggle-label');

          if (newStatus === 'sold') {
            card.classList.add('is-sold');
            label.className = 'toggle-label label-sold';
            label.textContent = 'Sold';
          } else {
            card.classList.remove('is-sold');
            label.className = 'toggle-label label-available';
            label.textContent = 'Available';
          }

          updateInventoryStats();
        } catch (err) {
          console.error('Failed to update sculpture status:', err);
          // Revert toggle on failure
          input.checked = !input.checked;
        }
      });
    });
  }

  function updateInventoryStats() {
    const soldCount = Object.values(sculptureStatuses).filter(s => s === 'sold').length;
    const availableCount = allSculptures.length - soldCount;
    document.getElementById('stat-available').textContent = availableCount;
    document.getElementById('stat-sold').textContent = soldCount;
  }

  // Inventory filter buttons
  document.querySelectorAll('.inv-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.inv-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderInventory(btn.getAttribute('data-inv-filter'));
    });
  });

  // ===== UTILS =====
  function escapeHtml(str) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

});
