/* ══ DATA ══ */
const DATA = {
  name: "Muchammad Nasrullah Syahbana",
  role: "FULL-STACK DEVELOPER",
  email: "nazrullsyaban@gmail.com",
  phone: "+62 821-3177-5829",
  location: "Surabaya, Indonesia",
  website: "https://MNazrull.github.io",
  social: {
    github: "https://github.com/MNazrull",
    linkedin: "https://linkedin.com/in/mnsyahbana",
    instagram: "https://www.instagram.com/nazrulls_30?igsh=dHdxaG9lMGo0ZXoy",
  },
  typewriterTexts: [
    "Full-Stack Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
    "Open Source Contributor"
  ],
  skills: {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Python", "PostgreSQL",],
    tools: ["Git", "Docker", "Figma",]
  },
  experience: [
    {
      title: "Network Operations Center (NOC)",
      company: "PT. TechInno Solutions",
      date: "Jan 2023 – Sekarang",
      desc: "Mengelola konfigurasi perangkat jaringan (MikroTik dan perangkat akses lainnya), termasuk manajemen bandwidth, alokasi IP, dan optimalisasi rute jaringan guna memastikan stabilitas layanan klien. "
    },
    {
      title: "Admin Gudang",
      company: "PLN ICON PLUS",
      date: "Jun 2024 – Des 2025",
      desc: "Mengolah dan menganalisis data logistik menggunakan Microsoft Excel untuk memangkas waktu pemrosesan data dan mendukung efisiensi operasional tim."
    },
  ],
  projects: [
    {
      tag: "Full-Stack Web, Financial Technology", 
      title: "SmartPay – Smart Financial Dashboard & Predictive Analytics",
      desc: "Mengembangkan aplikasi manajemen keuangan berbasis web menggunakan Django 5 dan PostgreSQL dengan fokus pada keamanan data dan skalabilitas.",
      tech: ["Python", "Django 5", "PostgreSQL", "Pandas", "AES Encryption", "Tailwind CSS"]
    },
    {
      tag: "Mobile Development, Internet of Things (IoT)",
      title: "AgriSense – IoT-Based Greenhouse Weather Monitoring System",
      desc: "Membangun aplikasi mobile cross-platform menggunakan Flutter untuk memantau metrik lingkungan greenhouse secara real-time.",
      tech: ["Dart", "Flutter", "C++ (Arduino/ESP32)", "Firebase"]
    },
    {
      tag: "Front-End Web, Entertainment & Media",
      title: "AniStream – Modern Responsive Video Streaming Platform",
      desc: "Platform streaming video responsif yang menyajikan pengalaman menonton modern dengan navigasi yang mulus.",
      tech: ["JavaScript", "HTML", "CSS"]
    },
    {
      tag: "Data Visualization",
      title: "Admin Dashboard",
      desc: "Panel dashboard admin interaktif yang dirancang untuk menyederhanakan manajemen data internal dan visualisasi metrik bisnis.",
      tech: ["JavaScript", "HTML", "CSS"]
    },
    {
      tag: "Front-End Web, E-Commerce, UI/UX Design",
      title: "Food E-Commerce Platform",
      desc: "Representasi antarmuka platform e-commerce kuliner modern yang berfokus pada pengalaman berbelanja yang responsif di berbagai perangkat.",
      tech: ["JavaScript", "HTML", "CSS"]
    }
  ]
};

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbdbrnrd"; // GANTI INI

function calculateStats() {
  let totalYears = 0;
  DATA.experience.forEach(exp => {
    const dateMatch = exp.date.match(/(\d{4})/g);
    if (dateMatch && dateMatch.length >= 2) {
      const startYear = parseInt(dateMatch[0]);
      const endYear = exp.date.includes("Sekarang") ? new Date().getFullYear() : parseInt(dateMatch[1]);
      totalYears += (endYear - startYear);
    } else {
      totalYears += 1;
    }
  });

  const yearsEl = document.getElementById('stat-years');
  const projectsEl = document.getElementById('stat-projects');
  const clientsEl = document.getElementById('stat-clients');
  const certsEl = document.getElementById('stat-certs');

  if (yearsEl) yearsEl.textContent = Math.max(3, Math.floor(totalYears)) + "+";
  if (projectsEl) projectsEl.textContent = DATA.projects.length + 9;
  if (clientsEl) clientsEl.textContent = Math.floor(DATA.projects.length * 1.5) + 4;
  if (certsEl) certsEl.textContent = "3";
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* ══ RENDER FUNCTIONS ══ */

function renderSkills() {
  const frontendEl = document.getElementById('skills-frontend');
  const backendEl = document.getElementById('skills-backend');
  const toolsEl = document.getElementById('skills-tools');

  if (frontendEl) frontendEl.innerHTML = DATA.skills.frontend.map(s => `<span class="skill-tag">${escapeHtml(s)}</span>`).join('');
  if (backendEl) backendEl.innerHTML = DATA.skills.backend.map(s => `<span class="skill-tag">${escapeHtml(s)}</span>`).join('');
  if (toolsEl) toolsEl.innerHTML = DATA.skills.tools.map(s => `<span class="skill-tag">${escapeHtml(s)}</span>`).join('');
}

function renderTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container) return;

  container.innerHTML = DATA.experience.map(exp => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-date">${escapeHtml(exp.date)}</div>
      <div class="timeline-title">${escapeHtml(exp.title)}</div>
      <div class="timeline-company">${escapeHtml(exp.company)}</div>
      <div class="timeline-desc">${escapeHtml(exp.desc)}</div>
    </div>
  `).join('');
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = DATA.projects.map(proj => `
    <div class="project-card">
      <span class="project-tag">${escapeHtml(proj.tag)}</span>
      <div class="project-title">${escapeHtml(proj.title)}</div>
      <div class="project-desc">${escapeHtml(proj.desc)}</div>
      <div class="project-tech">${proj.tech.map(t => `<span class="tech-badge">${escapeHtml(t)}</span>`).join('')}</div>
    </div>
  `).join('');
}

function renderResumePreview() {
  const allSkills = [...DATA.skills.frontend, ...DATA.skills.backend, ...DATA.skills.tools];
  const previewEl = document.getElementById('resume-preview');
  if (!previewEl) return;

  previewEl.innerHTML = `
    <div class="cv-header">
      <div class="cv-name">${escapeHtml(DATA.name)}</div>
      <div class="cv-contact">${escapeHtml(DATA.role)} &nbsp;·&nbsp; ${escapeHtml(DATA.email)} &nbsp;·&nbsp; ${escapeHtml(DATA.phone)} &nbsp;·&nbsp; ${escapeHtml(DATA.location)}</div>
    </div>
    <div class="cv-section">
      <div class="cv-section-title">Pengalaman Kerja</div>
      ${DATA.experience.map(exp => `
        <div class="cv-item">
          <div class="cv-item-header"><span class="cv-item-title">${escapeHtml(exp.title)}</span><span class="cv-item-date">${escapeHtml(exp.date)}</span></div>
          <div class="cv-item-sub">${escapeHtml(exp.company)}</div>
          <div class="cv-item-desc">${escapeHtml(exp.desc)}</div>
        </div>
      `).join('')}
    </div>
    <div class="cv-section">
      <div class="cv-section-title">Proyek Unggulan</div>
      ${DATA.projects.slice(0, 4).map(proj => `
        <div class="cv-item">
          <div class="cv-item-header"><span class="cv-item-title">${escapeHtml(proj.title)}</span><span class="cv-item-date">${escapeHtml(proj.tag)}</span></div>
          <div class="cv-item-desc">${escapeHtml(proj.desc)}</div>
        </div>
      `).join('')}
    </div>
    <div class="cv-section">
      <div class="cv-section-title">Keahlian Teknis</div>
      <div class="cv-skills-wrap">${allSkills.map(s => `<span class="cv-skill">${escapeHtml(s)}</span>`).join('')}</div>
    </div>
  `;
}

/* ══ NAVIGATION ══ */

function navigate(page) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });

  const targetSection = document.getElementById(page);
  if (targetSection) {
    targetSection.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const activeLink = document.querySelector(`.nav-link[data-page="${page}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }

  if (window.innerWidth <= 768) {
    closeSidebar();
  }

  history.pushState(null, '', `#${page}`);
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  sidebar.classList.toggle('open');
  if (overlay) overlay.classList.toggle('active');

  if (sidebar.classList.contains('open')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

function closeSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  sidebar.classList.remove('open');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function handleHashChange() {
  const hash = window.location.hash.slice(1);
  if (hash && ['home', 'about', 'experience', 'projects', 'resume', 'contact'].includes(hash)) {
    navigate(hash);
  } else {
    navigate('home');
  }
}

// Close sidebar when clicking outside
document.addEventListener('click', function(event) {
  const sidebar = document.getElementById('sidebar');
  const menuBtn = document.getElementById('menuBtn');
  const overlay = document.getElementById('overlay');

  if (window.innerWidth <= 768 && sidebar && sidebar.classList.contains('open')) {
    if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
      closeSidebar();
    }
  }
});

/* ══ TYPEWRITER ══ */

let typewriterTimeout;

function startTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const texts = DATA.typewriterTexts;
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = texts[textIndex];

    if (isDeleting) {
      el.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      el.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      clearTimeout(typewriterTimeout);
      typewriterTimeout = setTimeout(type, 2000);
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      clearTimeout(typewriterTimeout);
      typewriterTimeout = setTimeout(type, 300);
      return;
    }

    const speed = isDeleting ? 50 : 100;
    clearTimeout(typewriterTimeout);
    typewriterTimeout = setTimeout(type, speed);
  }

  type();
}

/* ══ PDF DOWNLOAD ══ */

async function downloadPDF() {
  const { jsPDF } = window.jspdf;
  if (!jsPDF) {
    alert('Mohon tunggu, library sedang dimuat...');
    return;
  }

  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const pageWidth = 210;
  const margin = 20;
  let yPos = 20;

  const addText = (text, x, fontSize = 10, style = 'normal', color = '#1A1814') => {
    doc.setFontSize(fontSize);
    doc.setFont('helvetica', style);
    doc.setTextColor(color);
    doc.text(text, x, yPos);
  };

  const addLine = (color = '#E5DFD5') => {
    doc.setDrawColor(color);
    doc.line(margin, yPos, pageWidth - margin, yPos);
    yPos += 5;
  };

  // Header
  doc.setFillColor(250, 248, 243);
  doc.rect(0, 0, pageWidth, 45, 'F');
  addText(DATA.name, margin, 20, 'bold', '#1A1814');
  yPos += 7;
  addText(DATA.role, margin, 11, 'normal', '#C8893A');
  yPos += 6;
  addText(`${DATA.email}  ·  ${DATA.phone}  ·  ${DATA.location}`, margin, 9, 'normal', '#5C5750');
  yPos += 10;
  addLine('#C8893A');

  // Experience
  addText('PENGALAMAN KERJA', margin, 9, 'bold', '#C8893A');
  yPos += 6;

  for (const exp of DATA.experience) {
    if (yPos > 260) {
      doc.addPage();
      yPos = 20;
    }
    addText(exp.title, margin, 10, 'bold', '#1A1814');
    const dateWidth = doc.getTextWidth(exp.date);
    addText(exp.date, pageWidth - margin - dateWidth, 9, 'normal', '#A09890');
    yPos += 5;
    addText(exp.company, margin, 9, 'normal', '#C8893A');
    yPos += 5;
    const descLines = doc.splitTextToSize(exp.desc, pageWidth - margin * 2);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor('#5C5750');
    doc.text(descLines, margin, yPos);
    yPos += (descLines.length * 5) + 4;
  }

  yPos += 3;
  addLine();

  // Projects
  if (yPos > 230) {
    doc.addPage();
    yPos = 20;
  }
  addText('PROYEK UNGGULAN', margin, 9, 'bold', '#C8893A');
  yPos += 6;

  for (const proj of DATA.projects.slice(0, 5)) {
    if (yPos > 260) {
      doc.addPage();
      yPos = 20;
    }
    addText(`${proj.title} (${proj.tag})`, margin, 10, 'bold', '#1A1814');
    yPos += 5;
    const descLines = doc.splitTextToSize(proj.desc, pageWidth - margin * 2);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor('#5C5750');
    doc.text(descLines, margin, yPos);
    yPos += (descLines.length * 5) + 4;
  }

  yPos += 3;
  addLine();

  // Skills
  if (yPos > 250) {
    doc.addPage();
    yPos = 20;
  }
  addText('KEAHLIAN TEKNIS', margin, 9, 'bold', '#C8893A');
  yPos += 6;

  const allSkills = [...DATA.skills.frontend, ...DATA.skills.backend, ...DATA.skills.tools];
  const skillLine = allSkills.join('  ·  ');
  const skillLines = doc.splitTextToSize(skillLine, pageWidth - margin * 2);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor('#5C5750');
  doc.text(skillLines, margin, yPos);

  doc.save(`CV_${DATA.name.replace(/ /g, '_')}.pdf`);
}

/* ══ CONTACT FORM ══ */

async function sendEmail(formData) {
  // Demo mode jika endpoint belum diisi
  if (FORMSPREE_ENDPOINT === "https://formspree.io/f/YOUR_FORM_ID") {
    console.log("Demo mode - pesan tidak dikirim");
    console.log("Data:", formData);
    if (!window.demoAlertShown) {
      alert("📧 DEMO MODE\n\nPesan tidak dikirim. Setup Formspree di script.js untuk mengirim email nyata.\n\n1. Buka formspree.io\n2. Daftar gratis\n3. Buat form baru\n4. Copy endpoint URL\n5. Ganti FORMSPREE_ENDPOINT");
      window.demoAlertShown = true;
    }
    return { success: true };
  }

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    });

    return { success: response.ok };
  } catch (error) {
    console.error("Error:", error);
    return { success: false, error };
  }
}

async function handleContact(event) {
  event.preventDefault();

  const submitBtn = document.getElementById('submitBtn');
  const btnText = document.getElementById('btnText');
  const btnLoader = document.getElementById('btnLoader');
  const successDiv = document.getElementById('form-success');
  const errorDiv = document.getElementById('form-error');

  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const subject = document.getElementById('contactSubject')?.value.trim() || "Pesan dari Portfolio";
  const message = document.getElementById('contactMessage').value.trim();

  if (!name || !email || !message) {
    alert('Harap isi semua field (Nama, Email, dan Pesan)!');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Harap masukkan email yang valid!');
    return;
  }

  // Show loading
  btnText.style.display = 'none';
  btnLoader.style.display = 'inline';
  submitBtn.disabled = true;
  successDiv.style.display = 'none';
  errorDiv.style.display = 'none';

  const formData = {
    name: name,
    email: email,
    subject: subject,
    message: message,
    _subject: `[Portfolio] ${subject} dari ${name}`,
    _replyto: email
  };

  const result = await sendEmail(formData);

  btnText.style.display = 'inline';
  btnLoader.style.display = 'none';
  submitBtn.disabled = false;

  if (result.success) {
    successDiv.style.display = 'block';
    document.getElementById('contactForm').reset();
    setTimeout(() => { successDiv.style.display = 'none'; }, 5000);
  } else {
    errorDiv.style.display = 'block';
    setTimeout(() => { errorDiv.style.display = 'none'; }, 5000);
  }
}

/* ══ INITIALIZATION ══ */

function init() {
  const nameEl = document.getElementById('sb-name');
  const roleEl = document.getElementById('sb-role');
  const emailEl = document.getElementById('cv-email');
  const locationEl = document.getElementById('cv-location');
  const phoneEl = document.getElementById('cv-phone');

  if (nameEl) nameEl.textContent = DATA.name;
  if (roleEl) roleEl.textContent = DATA.role;
  if (emailEl) emailEl.textContent = DATA.email;
  if (locationEl) locationEl.textContent = DATA.location;
  if (phoneEl) phoneEl.textContent = DATA.phone;

  const githubLink = document.getElementById('link-github');
  const linkedinLink = document.getElementById('link-linkedin');
  const instagramLink = document.getElementById('link-instagram');
  const emailLink = document.getElementById('link-email');

  if (githubLink && DATA.social.github) githubLink.href = DATA.social.github;
  if (linkedinLink && DATA.social.linkedin) linkedinLink.href = DATA.social.linkedin;
  if (instagramLink && DATA.social.instagram) instagramLink.href = DATA.social.instagram;
  if (emailLink) emailLink.href = `mailto:${DATA.email}`;

  renderSkills();
  renderTimeline();
  renderProjects();
  renderResumePreview();
  calculateStats();
  startTypewriter();
  handleHashChange();
}

// Event listeners
document.addEventListener('DOMContentLoaded', init);
window.addEventListener('hashchange', handleHashChange);

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const page = this.getAttribute('data-page');
    if (page) navigate(page);
  });
});
