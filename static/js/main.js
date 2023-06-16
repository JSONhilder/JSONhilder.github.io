document.addEventListener(
    "DOMContentLoaded",
    function() {
        var e = window.location.pathname.split("/").filter((e) => e);
        e.length > 1 && "entries" === e[0] && (document.querySelector("footer").style.cssText = "position:relative;margin-top:25px;margin-bottom:15px;")
    },
    !1
),
    document.getElementById("theme-switch").addEventListener("click", function() {
        document.body.classList.toggle("dark");
        document.body.classList.contains("dark") ?
            (document.getElementById("theme-switch").innerHTML = "Light Mode")
            : (document.getElementById("theme-switch").innerHTML = "Dark Mode");
    });
