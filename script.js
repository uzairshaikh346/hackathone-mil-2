document.getElementById('resume-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skill').value;
    var experience = document.getElementById('experience').value;
    var resumeHTML = "\n        <h2>".concat(name, "</h2>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n    ");
    var resumeDiv = document.getElementById('generate-resume');
    resumeDiv.innerHTML = resumeHTML;
    resumeDiv.style.display = 'block';
    var printButton = document.getElementById('print-button');
    printButton.style.display = 'block';
});
document.getElementById('print-button').addEventListener('click', function () {
    var resumeDiv = document.getElementById('generate-resume');
    var originalContent = document.body.innerHTML;
    document.body.innerHTML = resumeDiv.innerHTML;
    window.print();
    document.body.innerHTML = originalContent;
});
