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
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    };

    window.addEventListener("resize", applyCollapsible);
    applyCollapsible();
});
