(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function o(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(i){if(i.ep)return;i.ep=!0;const n=o(i);fetch(i.href,n)}})();const l={name:"Luis Tepetate",email:"luistepetate1@gmail.com",linkedin:"https://www.linkedin.com/in/luis-tepetate",education:{degree:"Software Engineer Bachelor's Degree",university:"Universidad Tecnológica del Valle del Mezquital (UTVM)",location:"Hidalgo, Mexico",dates:"Aug 2024 – Present"},skills:{programming_languages:"Python, SQL, C#, JavaScript",web_development:"Flask, Django, FastAPI",frontend_basics:"React, Astro, Vite",version_control:"Git, GitHub",devops:"Automation, Deployment"},experience:[{company:"Ixmiquilpan Community Organization",role:"Full Stack Developer & Systems Consultant",location:"Ixmiquilpan, Hidalgo, Mexico",dates:"Jan 2025 – Oct 2025",responsibilities:["Designed and deployed a centralized Community Management Web System using Flask and SQLite, reducing record lookup time by 94% and improving decision-making efficiency across departments.","Automated attendance tracking and debt assessment workflows, increasing operational efficiency by over 80% and enabling real-time compliance validation.","Led the migration from physical ledgers to a persistent digital database with automated cloud backups, ensuring long-term data integrity and eliminating the risk of unauthorized deletions."]}],awards:[{title:"Praxis Hackathon",place:"6th Place",date:"March 2025",location:"Hidalgo, Mexico"}],certifications:["Cisco: CCNA Routing and Switching Certification.","Cisco: CCNA Certified Network Associate"]};document.addEventListener("DOMContentLoaded",()=>{r(l)});function r(e){const s=document.getElementById("cv-container"),o=`
    <header>
      <h1>${e.name}</h1>
      <div class="contact">
        <a href="mailto:${e.email}"><i class="fas fa-envelope"></i> ${e.email}</a> |
        <a href="${e.linkedin}" target="_blank"><i class="fab fa-linkedin"></i> ${e.linkedin}</a>
      </div>
    </header>

    <section class="education">
      <h2>EDUCATION</h2>
      <div class="linea">-</div>
      <div class="item">
        <div class="education-dates"><strong>${e.education.dates}</strong><br>${e.education.location}</div>
        <h3>${e.education.university}</h3>
        <div class="details">${e.education.degree}</div>
      </div>
    </section>

    <section class="skills">
      <h2>SKILLS</h2>
      <div class="linea">-</div>
      <div class="skills-list">
      <strong>Programming languages:</strong> ${e.skills.programming_languages}<br>
      <strong>Web Development:</strong> ${e.skills.web_development}<br>
      <strong>Version Control:</strong> ${e.skills.version_control}<br>
      <strong>Devops:</strong> ${e.skills.devops}
      </div>
    </section>

    <section class="experience">
      <h2>EXPERIENCE</h2>
      <div class="linea">-</div>
      ${e.experience.map(t=>`
        <div class="job">
          <h3>${t.company}</h3>
          <div class="company">${t.role}</div><br>
          <div class="dates"><strong>${t.dates}</strong><br>${t.location}</div>
          <ul>
            ${t.responsibilities.map(i=>`<li>${i}</li>`).join("")}
          </ul>
        </div>
      `).join("")}
    </section>

    <section class="awards">
      <h2>AWARDS</h2>
      <div class="linea">-</div>
      ${e.awards.map(t=>`
        <div class="item">
          <div class="award-entry-line">
            <h3>${t.title} ${t.place}</h3>
            <div class="details"><strong>${t.date}</strong>  - ${t.location}</div>
          </div>
        </div>
      `).join("")}
    </section>
    <br>
    <section class="certifications">
      <h2>CERTIFICATIONS</h2>
      <div class="linea">-</div>
      <ul>
        ${e.certifications.map(t=>`<li>${t}</li>`).join("")}
      </ul>
    </section>
  `;s.innerHTML=o}
