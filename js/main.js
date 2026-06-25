// Navigation toggle
const navToggle = document.querySelector('.nav-toggle');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
  });
}

// Close nav on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 640) {
      document.querySelector('.nav-links').classList.remove('active');
    }
  });
});

// Set active nav based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

// Content data
const posts = [
  {
    id: 'gadget-review',
    title: '盘点我买过最不会吃灰的电子产品',
    date: '2026-06-25',
    desc: '从手机到充电线，聊聊那些买了之后真的每天都在用的电子产品。',
    tags: ['生活', '数码'],
    category: '生活'
  },
  {
    id: 'first-post',
    title: '我的第一篇博客',
    date: '2026-06-25',
    desc: '记录搭建个人博客的过程和踩过的坑，从零到一搭建一个属于自己的小天地。',
    tags: ['建站', '心得'],
    category: '心得'
  },
  {
    id: 'tech-sharing',
    title: '技术分享：前端开发的一些思考',
    date: '2026-06-20',
    desc: '分享一些在前端开发过程中积累的经验和踩过的坑，希望能对同行有所帮助。',
    tags: ['前端', '技术'],
    category: '技术'
  },
  {
    id: 'design-thinking',
    title: '设计思考：如何提升用户体验',
    date: '2026-06-15',
    desc: '从用户的角度出发，聊聊产品设计中的一些思考和实践。',
    tags: ['设计', 'UX'],
    category: '设计'
  },
];

const works = [
  {
    id: 'portfolio-website',
    title: '个人作品集网站',
    desc: '现代简约风格的个人作品集，展示项目和技术栈。',
    tags: ['前端', 'HTML/CSS', 'JS']
  },
  {
    id: 'mobile-app',
    title: '移动端 App 界面设计',
    desc: '面向年轻用户的社交 App 界面设计，风格活泼清新。',
    tags: ['UI/UX', '移动端']
  },
  {
    id: 'data-dashboard',
    title: '数据可视化看板',
    desc: '基于 ECharts 的企业数据看板，支持多维度数据展示。',
    tags: ['前端', '数据可视化']
  },
  {
    id: 'brand-identity',
    title: '品牌视觉识别设计',
    desc: '为创业公司设计完整的品牌视觉识别系统，包含 Logo、配色、字体等。',
    tags: ['设计', '品牌']
  },
];

// Render latest posts on homepage
const latestPostsContainer = document.getElementById('latest-posts');
if (latestPostsContainer) {
  posts.slice(0, 2).forEach(post => {
    const card = document.createElement('a');
    card.href = `posts/${post.id}.html`;
    card.className = 'card';
    card.innerHTML = `
      <div class="card-date">${post.date}</div>
      <div class="card-title">${post.title}</div>
      <div class="card-desc">${post.desc}</div>
      <div class="card-tags">${post.tags.map(t => `<span>${t}</span>`).join('')}</div>
    `;
    latestPostsContainer.appendChild(card);
  });
}

// Render featured works on homepage
const featuredWorksContainer = document.getElementById('featured-works');
if (featuredWorksContainer) {
  works.slice(0, 2).forEach(work => {
    const card = document.createElement('a');
    card.href = `works/${work.id}.html`;
    card.className = 'work-card';
    card.innerHTML = `
      <div class="work-preview">🎨</div>
      <div class="work-info">
        <div class="card-title">${work.title}</div>
        <div class="card-desc">${work.desc}</div>
        <div class="card-tags">${work.tags.map(t => `<span>${t}</span>`).join('')}</div>
      </div>
    `;
    featuredWorksContainer.appendChild(card);
  });
}
