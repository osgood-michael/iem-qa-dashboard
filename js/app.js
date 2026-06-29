const CATEGORIES = {
  "Project Management & QA": { color: "#2563eb", colorDim: "rgba(37,99,235,0.08)" },
  "OptiEMize Environments":  { color: "#16a34a", colorDim: "rgba(22,163,74,0.08)" },
  "Salesforce Environments": { color: "#c41230", colorDim: "rgba(196,18,48,0.08)" },
  "Development & Testing":   { color: "#0891b2", colorDim: "rgba(8,145,178,0.08)" },
  "AI Tools":                { color: "#7c3aed", colorDim: "rgba(124,58,237,0.08)" },
  "HR & Payroll":            { color: "#ea580c", colorDim: "rgba(234,88,12,0.08)" },
  "Training & Compliance":   { color: "#db2777", colorDim: "rgba(219,39,119,0.08)" },
  "Security & IT":           { color: "#c41230", colorDim: "rgba(196,18,48,0.08)" },
  "Productivity & Communication": { color: "#0e7490", colorDim: "rgba(14,116,144,0.08)" },
  "Finance & Expenses":      { color: "#65a30d", colorDim: "rgba(101,163,13,0.08)" }
};

const BOOKMARKS = [
  { title: "Outlook Mail", url: "https://outlook.office365.com/mail/", category: "Productivity & Communication", favicon: "https://www.google.com/s2/favicons?domain=outlook.office365.com&sz=64" },
  { title: "Microsoft Teams", url: "https://teams.cloud.microsoft/", category: "Productivity & Communication", favicon: "https://www.google.com/s2/favicons?domain=teams.cloud.microsoft&sz=64" },
  { title: "Jira – OPTTEST Board", url: "https://iemfg.atlassian.net/jira/software/c/projects/OPTTEST/boards/149", category: "Project Management & QA", favicon: "https://www.google.com/s2/favicons?domain=atlassian.net&sz=64" },
  { title: "Jira – OPT2 Board", url: "https://iemfg.atlassian.net/jira/software/c/projects/OPT2/boards/81", category: "Project Management & QA", favicon: "https://www.google.com/s2/favicons?domain=atlassian.net&sz=64" },
  { title: "Confluence – QA Overview", url: "https://iemfg.atlassian.net/wiki/spaces/QAO/overview?homepageId=380502272", category: "Project Management & QA", favicon: "https://www.google.com/s2/favicons?domain=atlassian.net&sz=64" },
  { title: "AIO Test Management", url: "https://iemfg.atlassian.net/plugins/servlet/ac/com.kaanha.jira.tcms/aio-tcms-app-overview?project.key=OPTTEST&project.id=10277", category: "Project Management & QA", favicon: "https://www.google.com/s2/favicons?domain=atlassian.net&sz=64" },
  { title: "ADP Dashboard", url: "https://my.adp.com/#/dashboard/main?npcr=true", category: "HR & Payroll", favicon: "https://www.google.com/s2/favicons?domain=adp.com&sz=64" },
  { title: "ADP Workforce Now", url: "https://workforcenow.adp.com/theme/index.html#/home", category: "HR & Payroll", favicon: "https://www.google.com/s2/favicons?domain=adp.com&sz=64" },
  { title: "UKG (Kronos)", url: "https://g030107p01x.ukg.net/default.aspx", category: "HR & Payroll", favicon: "https://www.google.com/s2/favicons?domain=ukg.net&sz=64" },
  { title: "Eyelation", url: "https://auth.eyelation.com/?lang=en", category: "Productivity & Communication", favicon: "https://www.google.com/s2/favicons?domain=eyelation.com&sz=64" },
  { title: "KnowBe4 Training", url: "https://training.knowbe4.com/learner/index.html?316767872984098352042620379253175097422#/dashboard", category: "Training & Compliance", favicon: "https://www.google.com/s2/favicons?domain=knowbe4.com&sz=64" },
  { title: "Schoox – IEM University", url: "https://app.schoox.com/academy/IEMUniversity/learner/learning-path-experience/217411/course/9321177/step/6302356/lecture", category: "Training & Compliance", favicon: "https://www.google.com/s2/favicons?domain=schoox.com&sz=64" },
  { title: "OptiEMize – Dev", url: "https://iem-dev.iemfg.com/optiemize/login", category: "OptiEMize Environments", favicon: "https://www.google.com/s2/favicons?domain=iemfg.com&sz=64" },
  { title: "OptiEMize – Staging", url: "https://iem-staging.iemfg.com/optiemize/login", category: "OptiEMize Environments", favicon: "https://www.google.com/s2/favicons?domain=iemfg.com&sz=64" },
  { title: "OptiEMize – Hotfix", url: "https://iem-hotfix.iemfg.com/optiemize/ui/OptiemizeDashboard", category: "OptiEMize Environments", favicon: "https://www.google.com/s2/favicons?domain=iemfg.com&sz=64" },
  { title: "OptiEMize – Production", url: "https://work.iemfg.com/optiemize/login", category: "OptiEMize Environments", favicon: "https://www.google.com/s2/favicons?domain=iemfg.com&sz=64" },
  { title: "IEM Work Login", url: "https://work.iemfg.com/login.php", category: "OptiEMize Environments", favicon: "https://www.google.com/s2/favicons?domain=iemfg.com&sz=64" },
  { title: "1Password", url: "https://iemfg.1password.com/signin", category: "Security & IT", favicon: "https://www.google.com/s2/favicons?domain=1password.com&sz=64" },
  { title: "Figma", url: "https://www.figma.com/files/1354558780810855439/recents-and-sharing?fuid=1450961489449160412", category: "Development & Testing", favicon: "https://www.google.com/s2/favicons?domain=figma.com&sz=64" },
  { title: "GitHub – Cypress Testing", url: "https://github.com/IEM-Holdings/optiemize-cypress-testing", category: "Development & Testing", favicon: "https://www.google.com/s2/favicons?domain=github.com&sz=64" },
  { title: "SafetyAmp Training", url: "https://iemfg.safetyamp.com/training/", category: "Training & Compliance", favicon: "https://www.google.com/s2/favicons?domain=safetyamp.com&sz=64" },
  { title: "Cypress Cloud", url: "https://cloud.cypress.io/organizations/03bf41a7-4733-4c08-a59d-afc42038291e/projects", category: "Development & Testing", favicon: "https://www.google.com/s2/favicons?domain=cypress.io&sz=64" },
  { title: "Salesforce – Dev Sandbox", url: "https://iemfg--optdev.sandbox.lightning.force.com/lightning/page/home", category: "Salesforce Environments", favicon: "https://www.google.com/s2/favicons?domain=salesforce.com&sz=64" },
  { title: "Salesforce – UAT Sandbox", url: "https://iemfg--uat.sandbox.my.salesforce.com/?ec=302&startURL=%2Flightning%2Fpage%2Fhome", category: "Salesforce Environments", favicon: "https://www.google.com/s2/favicons?domain=salesforce.com&sz=64" },
  { title: "Salesforce – Production", url: "https://iemfg.my.salesforce.com/?ec=302&startURL=%2Fvisualforce%2Fsession%3Furl%3Dhttps%253A%252F%252Fiemfg.lightning.force.com%252Flightning%252Fpage%252Fhome", category: "Salesforce Environments", favicon: "https://www.google.com/s2/favicons?domain=salesforce.com&sz=64" },
  { title: "UKG Kronos Login", url: "https://dcus21-prd13-ath01.prd.mykronos.com/authn/XUI/?realm=/iem_prd_01#login", category: "HR & Payroll", favicon: "https://www.google.com/s2/favicons?domain=mykronos.com&sz=64" },
  { title: "1Password Vault", url: "https://iemfg.1password.com/app#/wjal56t3qmgecqwfgtdew33vcu/AllItems/wjal56t3qmgecqwfgtdew33vcu7p3gcg2jinx5abjuaav72tvs5q", category: "Security & IT", favicon: "https://www.google.com/s2/favicons?domain=1password.com&sz=64" },
  { title: "Claude AI", url: "https://claude.ai/new", category: "AI Tools", favicon: "https://www.google.com/s2/favicons?domain=claude.ai&sz=64" },
  { title: "Perplexity AI", url: "https://www.perplexity.ai/", category: "AI Tools", favicon: "https://www.google.com/s2/favicons?domain=perplexity.ai&sz=64" },
  { title: "ChatGPT", url: "https://chatgpt.com/", category: "AI Tools", favicon: "https://www.google.com/s2/favicons?domain=chatgpt.com&sz=64" },
  { title: "Postman", url: "https://seanlykken.postman.co/workspace/627d37bd-376d-4de6-816b-a76f0eacd2de/team-quickstart", category: "Development & Testing", favicon: "https://www.google.com/s2/favicons?domain=postman.co&sz=64" },
  { title: "Wiz Security", url: "https://app.wiz.io/", category: "Security & IT", favicon: "https://www.google.com/s2/favicons?domain=wiz.io&sz=64" },
  { title: "SAP Concur", url: "https://www.concursolutions.com/nui/signin?targetURL=%2Fhome", category: "Finance & Expenses", favicon: "https://www.google.com/s2/favicons?domain=concursolutions.com&sz=64" }
];

const NOTES_STORAGE_KEY = "iem-qa-dashboard-notes";
let notes = loadNotes();
let activeFilter = "All";

function loadNotes() {
  try {
    const raw = localStorage.getItem(NOTES_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function persistNotes() {
  try {
    localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
  } catch {
    // Ignore storage failures (for example, blocked storage in private mode).
  }
}

function getHost(url) {
  try { return new URL(url).hostname.replace('www.', ''); } catch { return url; }
}

function renderFilters() {
  const bar = document.getElementById('filterBar');
  const cats = ["All", ...Object.keys(CATEGORIES)];
  bar.innerHTML = cats.map(c => {
    const info = CATEGORIES[c];
    const dot = c !== "All" ? `<span class="filter-dot" style="background:${info.color}"></span>` : '';
    return `<button class="filter-btn ${activeFilter === c ? 'active' : ''}" data-cat="${c}">${dot}${c}</button>`;
  }).join('');
  bar.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.cat;
      render();
    });
  });
}

function render() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const main = document.getElementById('main');

  const filtered = BOOKMARKS.filter(b => {
    const matchCat = activeFilter === "All" || b.category === activeFilter;
    const note = notes[b.url] || '';
    const matchSearch = !query ||
      b.title.toLowerCase().includes(query) ||
      b.url.toLowerCase().includes(query) ||
      b.category.toLowerCase().includes(query) ||
      note.toLowerCase().includes(query);
    return matchCat && matchSearch;
  });

  const grouped = {};
  filtered.forEach(b => {
    if (!grouped[b.category]) grouped[b.category] = [];
    grouped[b.category].push(b);
  });

  const catOrder = Object.keys(CATEGORIES);

  if (filtered.length === 0) {
    main.innerHTML = `<div class="empty-state">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      <p>No bookmarks match your search</p>
    </div>`;
  } else {
    main.innerHTML = catOrder.filter(c => grouped[c]).map(cat => {
      const info = CATEGORIES[cat];
      const items = grouped[cat];
      return `<div class="category" data-category="${cat}">
        <div class="category-header">
          <span class="category-name" style="color:${info.color}">${cat}</span>
          <span class="category-count">${items.length}</span>
        </div>
        <div class="grid">${items.map(b => cardHTML(b, info)).join('')}</div>
      </div>`;
    }).join('');
  }

  document.getElementById('totalCount').textContent = BOOKMARKS.length;
  document.getElementById('catCount').textContent = Object.keys(CATEGORIES).length;
  document.getElementById('visibleCount').textContent = filtered.length;

  renderFilters();
  attachCardListeners();
}

function cardHTML(b) {
  const host = getHost(b.url);
  const letter = b.title.charAt(0);
  const note = notes[b.url] || '';
  return `<div class="card" data-url="${b.url}">
    <div class="card-top">
      <div class="card-favicon">
        <img src="${b.favicon}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" alt="">
        <span class="fallback" style="display:none;align-items:center;justify-content:center;width:100%;height:100%">${letter}</span>
      </div>
      <div class="card-info">
        <div class="card-title">${b.title}</div>
        <div class="card-url">${host}</div>
      </div>
      <div class="card-actions">
        <button class="card-btn note-btn" title="Add note" onclick="event.stopPropagation();toggleNote(this)">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>
        </button>
        <button class="card-btn" title="Copy URL" onclick="event.stopPropagation();copyUrl('${b.url}',this)">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
        </button>
      </div>
    </div>
    ${note ? `<div class="card-note visible">📝 ${note}</div>` : '<div class="card-note"></div>'}
    <textarea class="note-input" placeholder="Add a note..." rows="2" data-url="${b.url}" onblur="saveNote(this)" onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();saveNote(this)}">${note}</textarea>
  </div>`;
}

function attachCardListeners() {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => window.open(card.dataset.url, '_blank'));
  });
}

function toggleNote(btn) {
  const card = btn.closest('.card');
  const input = card.querySelector('.note-input');
  input.classList.toggle('visible');
  if (input.classList.contains('visible')) input.focus();
}

function saveNote(textarea) {
  const url = textarea.dataset.url;
  const val = textarea.value.trim();
  if (val) { notes[url] = val; } else { delete notes[url]; }
  persistNotes();
  textarea.classList.remove('visible');
  render();
}

function copyUrl(url, btn) {
  navigator.clipboard.writeText(url).then(() => {
    btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>';
    setTimeout(() => {
      btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>';
    }, 1500);
  });
}

document.getElementById('searchInput').addEventListener('input', render);
render();
