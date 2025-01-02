document.addEventListener("DOMContentLoaded", function() {
    var coll = document.getElementsByClassName("collapsible");
    var updateCollapsible = function() {
        if (window.innerWidth > 768) {
            for (var i = 0; i < coll.length; i++) {
                coll[i].classList.remove("active");
                coll[i].nextElementSibling.style.display = "block";
                coll[i].style.display = "none";
            }
        } else {
            for (var i = 0; i < coll.length; i++) {
                coll[i].style.display = "block";
                coll[i].nextElementSibling.style.display = "none";
            }
        }
    };

    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            for (var j = 0; j < coll.length; j++) {
                if (coll[j] !== this) {
                    coll[j].classList.remove("active");
                    coll[j].nextElementSibling.style.display = "none";
                }
            }
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }

    window.addEventListener("resize", updateCollapsible);
    updateCollapsible();
});
