const themeSwitch = document.getElementById('theme-switch');
let count = 0;

themeSwitch.addEventListener('click', () => {
    document.body.classList.toggle('darkmode');
    themeSwitch.style.backgroundColor = '#ffb22d';
    
    if (document.body.classList.contains('darkmode')) {
        themeSwitch.textContent = '☀️'; 
        themeSwitch.style.backgroundColor = '#1a1a1a';
    } else {
        themeSwitch.textContent = '🌙'; 
        themeSwitch.style.backgroundColor = 'forestgreen';
    }
});

document.getElementById("clickcount").onclick = function(){
    count += 1;
    document.getElementById("clicklabel").innerHTML = count;
}

function validateForm() {
    let email = document.getElementById("email").value;
    let isValid = true;

    document.getElementById("email-error").textContent = "";

    if (!email.includes("@") || !email.includes(".")) {
    document.getElementById("email-error").textContent = "Enter a valid email.";
    isValid = false;
    }

    return isValid;
}

function toggleAboutMe() {
    const aboutSection = document.getElementById('about-me');
    if (aboutSection.style.display === 'none' || aboutSection.style.display === '') {
        aboutSection.style.display = 'block';
    } else {
        aboutSection.style.display = 'none';
    }
}