document.getElementById('generateResume').addEventListener('click', function() {
    // Collect user input
    const fullName = document.getElementById('fullName').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim()).join(', ');
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
  
    // Create resume content
    const resumeContent = `
      <h1>${fullName}</h1>
      <h2>${jobTitle}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
  
      <h3>Skills</h3>
      <p>${skills}</p>
  
      <h3>Experience</h3>
      <p>${experience}</p>
  
      <h3>Education</h3>
      <p>${education}</p>
    `;
  
    // Display resume preview
    document.getElementById('resumeContent').innerHTML = resumeContent;
    document.getElementById('resumeOutput').style.display = 'block';
  });
  
  // Function to download resume as PDF
  function downloadResume() {
    const doc = new jsPDF();
    const resumeContent = document.getElementById('resumeContent').innerHTML;
    doc.html(resumeContent, {
      callback: function (doc) {
        doc.save('IT_Resume.pdf');
      },
      margin: [20, 20, 20, 20],
      x: 20,
      y: 20
    });
  }document.getElementById('generateResume').addEventListener('click', function() {
    // Collect user input
    const fullName = document.getElementById('fullName').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim()).join(', ');
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
  
    // Create resume content
    const resumeContent = `
      <h1>${fullName}</h1>
      <h2>${jobTitle}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
  
      <h3>Skills</h3>
      <p>${skills}</p>
  
      <h3>Experience</h3>
      <p>${experience}</p>
  
      <h3>Education</h3>
      <p>${education}</p>
    `;
  
    // Display resume preview
    document.getElementById('resumeContent').innerHTML = resumeContent;
    document.getElementById('resumeOutput').style.display = 'block';
  });
  
  // Function to download resume as PDF
  function downloadResume() {
    const doc = new jsPDF();
    const resumeContent = document.getElementById('resumeContent').innerHTML;
    doc.html(resumeContent, {
      callback: function (doc) {
        doc.save('IT_Resume.pdf');
      },
      margin: [20, 20, 20, 20],
      x: 20,
      y: 20
    });
  }document.getElementById('generateResume').addEventListener('click', function() {
    // Collect user input
    const fullName = document.getElementById('fullName').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim()).join(', ');
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
  
    // Create resume content
    const resumeContent = `
      <h1>${fullName}</h1>
      <h2>${jobTitle}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
  
      <h3>Skills</h3>
      <p>${skills}</p>
  
      <h3>Experience</h3>
      <p>${experience}</p>
  
      <h3>Education</h3>
      <p>${education}</p>
    `;
  
    // Display resume preview
    document.getElementById('resumeContent').innerHTML = resumeContent;
    document.getElementById('resumeOutput').style.display = 'block';
  });
  
  // Function to download resume as PDF
  function downloadResume() {
    const doc = new jsPDF();
    const resumeContent = document.getElementById('resumeContent').innerHTML;
    doc.html(resumeContent, {
      callback: function (doc) {
        doc.save('IT_Resume.pdf');
      },
      margin: [20, 20, 20, 20],
      x: 20,
      y: 20
    });
  }v
