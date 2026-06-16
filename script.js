function cari() {
    var input = document.getElementById("search").value.toLowerCase();

    if (input == "arthur") {
        window.location.href = "Arthur.html";
    } 
    else if (input == "john") {
        window.location.href = "John.html";
    } 
    else if (input == "hosea") {
        window.location.href = "Hosea.html";
    }
    else if (input == "dutch") {
        window.location.href = "Dutch.html";
    }

    else {
        alert("Karakter tidak ditemukan");
    }
}

function tekanEnter(event) {
    if (event.key === "Enter") {
        cari();
    }
}

var indexSlide = 0;
tampilSlide(indexSlide);

function gantiSlide(n) {
    tampilSlide(indexSlide += n);
}

function tampilSlide(n) {
    var slide = document.getElementsByClassName("slide");

    if (n >= slide.length) {
        indexSlide = 0;
    }

    if (n < 0) {
        indexSlide = slide.length - 1;
    }

    for (var i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    slide[indexSlide].style.display = "block";
}

setInterval(function() {
    gantiSlide(1);
}, 3000);