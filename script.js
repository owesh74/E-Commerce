fetch("Components/NavBar.html")
            .then(res => res.text())
            .then(data => {
            document.getElementById("NavBar").innerHTML = data;
});

fetch("Components/Footer.html")
            .then(res => res.text())
            .then(data => {
            document.getElementById("Footer").innerHTML = data;
});

document.querySelectorAll(".header").forEach(header => {
    header.addEventListener("click", () => {
        header.parentElement.classList.toggle("active");
    });
});


document.querySelectorAll(".prodSaleSize span").forEach(size => {
    size.addEventListener("click", () => {
        document.querySelectorAll(".prodSaleSize span").forEach(s => s.classList.remove("active"));
        size.classList.add("active");
    });
});

