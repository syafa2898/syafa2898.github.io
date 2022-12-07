// Navbar
document.onreadystatechange = function() {
    let lastScrollPosition = 0;
    const navbarDesktop = document.querySelector('#navbarDesktop');
    const about = document.querySelector('#about');
    const work = document.querySelector('#work');
    const media = document.querySelector('#media');
    const lang = document.querySelector('#lang');

    window.addEventListener('scroll', function(e) {
        lastScrollPosition = window.scrollY;

        if (lastScrollPosition > 100) {
            navbarDesktop.classList.add('bg-white');
            navbarDesktop.classList.add('shadow');
            about.classList.remove('text-white');
            media.classList.remove('text-white');
            lang.classList.remove('text-white');
            work.classList.remove('text-white');
            about.classList.add('text-gray');
            media.classList.add('text-gray');
            lang.classList.add('text-gray');
            work.classList.add('text-gray');
        } else {
            navbarDesktop.classList.remove('bg-white');
            navbarDesktop.classList.remove('shadow');
            about.classList.remove('text-gray');
            media.classList.remove('text-gray');
            lang.classList.remove('text-gray');
            work.classList.remove('text-gray');
            about.classList.add('text-white');
            media.classList.add('text-white');
            lang.classList.add('text-white');
            work.classList.add('text-white');
        }
    });
}


// Key Person

const descriptionIis = document.querySelector('#descriptionIis');
const descriptionSundjaya = document.querySelector('#descriptionSundjaya');
const descriptionImam = document.querySelector('#descriptionImam');
const descriptionRian = document.querySelector('#descriptionRian');
const descriptionKhidir = document.querySelector('#descriptionKhidir');
const descriptionDarmawan = document.querySelector('#descriptionDarmawan');

function showIis() {
    descriptionIis.classList.remove("d-none");
    descriptionIis.classList.add("d-block");
    descriptionSundjaya.classList.add("d-none");
    descriptionImam.classList.add("d-none");
    descriptionRian.classList.add("d-none");
    descriptionKhidir.classList.add("d-none");
    descriptionDarmawan.classList.add("d-none");
}

function showSundjaya() {
    descriptionSundjaya.classList.remove("d-none");
    descriptionSundjaya.classList.add("d-block");
    descriptionIis.classList.add("d-none");
    descriptionImam.classList.add("d-none");
    descriptionRian.classList.add("d-none");
    descriptionKhidir.classList.add("d-none");
    descriptionDarmawan.classList.add("d-none");
}

function showImam() {
    descriptionImam.classList.remove("d-none");
    descriptionImam.classList.add("d-block");
    descriptionIis.classList.add("d-none");
    descriptionSundjaya.classList.add("d-none");
    descriptionRian.classList.add("d-none");
    descriptionKhidir.classList.add("d-none");
    descriptionDarmawan.classList.add("d-none");
}

function showRian() {
    descriptionRian.classList.remove("d-none");
    descriptionRian.classList.add("d-block");
    descriptionIis.classList.add("d-none");
    descriptionSundjaya.classList.add("d-none");
    descriptionImam.classList.add("d-none");
    descriptionKhidir.classList.add("d-none");
    descriptionDarmawan.classList.add("d-none");
}

function showKhidir() {
    descriptionKhidir.classList.remove("d-none");
    descriptionKhidir.classList.add("d-block");
    descriptionIis.classList.add("d-none");
    descriptionSundjaya.classList.add("d-none");
    descriptionRian.classList.add("d-none");
    descriptionImam.classList.add("d-none");
    descriptionDarmawan.classList.add("d-none");
}

function showDarmawan() {
    descriptionDarmawan.classList.remove("d-none");
    descriptionDarmawan.classList.add("d-block");
    descriptionIis.classList.add("d-none");
    descriptionSundjaya.classList.add("d-none");
    descriptionRian.classList.add("d-none");
    descriptionKhidir.classList.add("d-none");
    descriptionImam.classList.add("d-none");
}

// services

// const rowResearch = document.querySelector('#rowResearch');
// const rowKnowledge = document.querySelector('#rowKnowledge');
// const rowSosial = document.querySelector('#rowSosial');

// function showResearch() {
//     rowResearch.classList.toggle("d-none");
// }
// function showKnowledge() {
//     rowKnowledge.classList.toggle("d-none");
// }
// function showSosial() {
//     rowSosial.classList.toggle("d-none");
// }



$('a#popup').magnificPopup({
    type: 'image',
    closeBtnInside: false,
    closeOnContentClick: true,
    tLoading: '', // remove text from preloader

    /* don't add this part, it's just to disable cache on image and test loading indicator */
    callbacks: {
        beforeChange: function() {
            this.items[0].src = this.items[0].src + '?=' + Math.random();
        }
    }
});



// Our work

function showClients() {
    var x = document.getElementById("clients");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
}