import cvData from './data/cv-data.js';
document.addEventListener('DOMContentLoaded', () => {
  //console.log(cvData);
  renderCV(cvData);
});


function renderCV(data) {
  const container = document.getElementById('cv-container');

  const html = `
    <header>
      <h1>${data.name}</h1>
      <div class="contact">
        <a href="mailto:${data.email}"><i class="fas fa-envelope"></i> ${data.email}</a> |
        <a href="${data.linkedin}" target="_blank"><i class="fab fa-linkedin"></i> ${data.linkedin}</a>
      </div>
    </header>

    <section class="education">
      <h2>EDUCATION</h2>
      <div class="linea">-</div>
      <div class="item">
        <div class="education-dates"><strong>${data.education.dates}</strong><br>${data.education.location}</div>
        <h3>${data.education.university}</h3>
        <div class="details">${data.education.degree}</div>
      </div>
    </section>

    <section class="skills">
      <h2>SKILLS</h2>
      <div class="linea">-</div>
      <div class="skills-list">
      <strong>Programming languages:</strong> ${data.skills.programming_languages}<br>
      <strong>Web Development:</strong> ${data.skills.web_development}<br>
      <strong>Version Control:</strong> ${data.skills.version_control}<br>
      <strong>Devops:</strong> ${data.skills.devops}
      </div>
    </section>

    <section class="experience">
      <h2>EXPERIENCE</h2>
      <div class="linea">-</div>
      ${data.experience.map(job => `
        <div class="job">
          <h3>${job.company}</h3>
          <div class="company">${job.role}</div><br>
          <div class="dates"><strong>${job.dates}</strong><br>${job.location}</div>
          <ul>
            ${job.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    </section>

    <section class="awards">
      <h2>AWARDS</h2>
      <div class="linea">-</div>
      ${data.awards.map(award => `
        <div class="item">
          <div class="award-entry-line">
            <h3>${award.title} ${award.place}</h3>
            <div class="details"><strong>${award.date}</strong>  - ${award.location}</div>
          </div>
        </div>
      `).join('')}
    </section>
    <br>
    <section class="certifications">
      <h2>CERTIFICATIONS</h2>
      <div class="linea">-</div>
      <ul>
        ${data.certifications.map(cert => `<li>${cert}</li>`).join('')}
      </ul>
    </section>
  `;

  container.innerHTML = html;
}