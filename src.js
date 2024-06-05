// Function to set a cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Check if the images have been shown before
if (!getCookie('imagesShown')) {
    document.addEventListener("DOMContentLoaded", function() {
        let desktopImage = document.getElementById('desktopImage');
        let mobileImage = document.getElementById('mobileImage');

        setTimeout(function() {
            if (window.innerWidth >= 768) { // Desktop
                desktopImage.classList.add('show');
                setTimeout(function() {
                    desktopImage.classList.remove('show');
                }, 6000); // 6 seconds
            } else { // Mobile
                mobileImage.classList.add('show');
                setTimeout(function() {
                    mobileImage.classList.remove('show');
                }, 6000); // 6 seconds
            }
        }, 4000); // 4 seconds delay before showing the image

        // Set the cookie to indicate that the images have been shown
        setCookie('imagesShown', 'true', 7); // The cookie will expire in 7 days
    });
}