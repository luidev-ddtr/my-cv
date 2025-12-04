(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))e(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function a(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(n){if(n.ep)return;n.ep=!0;const t=a(n);fetch(n.href,t)}})();const l={name:"Luis Tepetate",email:"luistepetate1@gmail.com",linkedin:"https://www.linkedin.com/in/luis-tepetate",github:"https://github.com/luidev-ddtr/",education:{degree:"Software Engineer Bachelor's Degree",university:"Universidad Tecnológica del Valle del Mezquital (UTVM)",location:"Hidalgo, Mexico",dates:"Aug 2024 – Present"},skills:{languages:[{language:"Spanish",level:"Native"},{language:"English",level:"A2+"}],programming_languages:"Python, SQL, C#, JavaScript",web_development:"Flask, Django, FastAPI",frontend_basics:"React, Astro, Vite",version_control:"Git, GitHub",devops:"Automation, Deployment"},experience:[{company:"Ixmiquilpan Community Organization",role:"Full Stack Developer & Systems Consultant",location:"Ixmiquilpan, Hidalgo, Mexico",dates:"Jan 2025 – Oct 2025",responsibilities:["Designed and deployed a centralized Community Management Web System using Flask and SQLite, reducing record lookup time by 94% and improving decision-making efficiency across departments.","Automated attendance tracking and debt assessment workflows, increasing operational efficiency by over 80% and enabling real-time compliance validation.","Led the migration from physical ledgers to a persistent digital database with automated cloud backups, ensuring long-term data integrity and eliminating the risk of unauthorized deletions."]}],university_projects:[{company:"Mariachi Management System",role:"Project Leader & Full Stack Developer",location:"Ixmiquilpan, Hidalgo, Mexico",dates:"Sep 2025 – Present",responsibilities:["Led the development of a full-stack Web System using Python and MySQL, replacing manual processes and eliminating potential administrative errors in event and resource management.","Implemented an event scheduling algorithm and real-time availability control, achieving a 100% reduction in scheduling conflicts for up to 50 events per day.","Automated the creation of digital contracts in PDF based on client data, raising professional perception and streamlining the legal process.","Architected and delivered a visual reporting panel for income filtered by month and week, designed to execute all database queries efficiently in a maximum of <strong>3 seconds</strong>."]}],awards:[{title:"Praxis Hackathon",place:"6th Place",date:"March 2025",location:"Hidalgo, Mexico"},{title:"Regilete Creativity Contest",place:"2nd Place",date:"November 2025",location:"Hidalgo, Mexico"}],certifications:["Cisco: CCNA Routing and Switching Certification.","Cisco: CCNA Certified Network Associate"]};document.addEventListener("DOMContentLoaded",()=>{r(l)});function r(i){const s=document.getElementById("cv-container"),a=`
    <header>
      <h1>${i.name}</h1>
      <div class="contact">
        <a href="mailto:${i.email}"><i class="fas fa-envelope"></i> ${i.email}</a> |
        <a href="${i.linkedin}" target="_blank"><i class="fab fa-linkedin"></i> ${i.linkedin}</a>  |
        <a href="${i.github}" target="_blank"><i class="fab fa-github"></i> ${i.github}</a>
      </div>
    </header>

    <section class="education">
      <h2>EDUCATION</h2>
      <div class="linea">-</div>
      <div class="item">
        <div class="education-dates"><strong>${i.education.dates}</strong><br>${i.education.location}</div>
        <h3>${i.education.university}</h3>
        <div class="details">${i.education.degree}</div>
      </div>
    </section>

    <section class="skills">
      <h2>SKILLS</h2>
      <div class="linea">-</div>
      <div class="skills-list">
      <strong>Languages:</strong> ${i.skills.languages.map(e=>`${e.language} (${e.level})`).join(", ")}<br>
      <strong>Programming languages:</strong> ${i.skills.programming_languages}<br>
      <strong>Web Development:</strong> ${i.skills.web_development}<br>
      <strong>Version Control:</strong> ${i.skills.version_control}<br>
      <strong>Devops:</strong> ${i.skills.devops}
      </div>
    </section>

    <section class="experience">
      <h2>EXPERIENCE</h2>
      <div class="linea">-</div>
      ${i.experience.map(e=>`
        <div class="job">
          <h3>${e.company}</h3>
          <div class="company">${e.role}</div><br>
          <div class="dates"><strong>${e.dates}</strong><br>${e.location}</div>
          <ul>
            ${e.responsibilities.map(n=>`<li>${n}</li>`).join("")}
          </ul>
        </div>
      `).join("")}
    </section>
    <section class="experience">
      <h2>UNIVERSITY PROJECTS</h2>
      <div class="linea">-</div>
      ${i.university_projects.map(e=>`
        <div class="job">
          <h3>${e.company}</h3>
          <div class="company">${e.role}</div><br>
          <div class="dates"><strong>${e.dates}</strong><br>${e.location}</div>
          <ul>
            ${e.responsibilities.map(n=>`<li>${n}</li>`).join("")}
          </ul>
        </div>
      `).join("")}
    </section>

    <section class="awards">
      <h2>AWARDS</h2>
      <div class="linea">-</div>
      ${i.awards.map(e=>`
        <div class="item">
          <div class="award-entry-line">
            <h3>${e.title} ${e.place}</h3>
            <div class="details"><strong>${e.date}</strong>  - ${e.location}</div>
          </div>
        </div>
      `).join("")}
    </section>
    <br>
    <section class="certifications">
      <h2>CERTIFICATIONS</h2>
      <div class="linea">-</div>
      <ul>
        ${i.certifications.map(e=>`<li>${e}</li>`).join("")}
      </ul>
    </section>
  `;s.innerHTML=a}
