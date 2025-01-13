document.addEventListener("DOMContentLoaded", function() {
    var coll = document.getElementsByClassName("collapsible");

    var applyCollapsible = function() {
        if (window.innerWidth <= 768) {
            for (var i = 0; i < coll.length; i++) {
                coll[i].addEventListener("click", toggleCollapsible);
            }
        } else {
            for (var i = 0; i < coll.length; i++) {
                coll[i].removeEventListener("click", toggleCollapsible);
                coll[i].classList.remove("active");
                coll[i].nextElementSibling.style.display = "block";
            }
        }
    };

    var toggleCollapsible = function() {
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
            this.classList.remove("active");
        } else {
            // Close all other collapsibles
            for (var i = 0; i < coll.length; i++) {
                coll[i].classList.remove("active");
                coll[i].nextElementSibling.style.display = "none";
            }
            content.style.display = "block";
            this.classList.add("active");
        }
    };

    window.addEventListener("resize", applyCollapsible);
    applyCollapsible();
});
