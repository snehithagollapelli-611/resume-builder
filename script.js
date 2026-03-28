function generateResume() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let education = document.getElementById("education").value;
    let skills = document.getElementById("skills").value;
    let projects = document.getElementById("projects").value;
    let experience = document.getElementById("experience").value;

    let resume = `
        <h2>${name}</h2>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Address:</b> ${address}</p>

        <hr>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Skills</h3>
        <p>${skills}</p>

        <h3>Projects</h3>
        <p>${projects}</p>

        <h3>Experience</h3>
        <p>${experience}</p>
    `;

    document.getElementById("output").innerHTML = resume;
}

function downloadPDF() {
    let element = document.getElementById("output");
    html2pdf().from(element).save("My_Resume.pdf");
}