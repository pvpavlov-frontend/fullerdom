document.addEventListener('DOMContentLoaded', function () {
    function toggleBlock() {
        console.log("click");
        var closed = document.querySelector(".learning-program-section__hidden-content");
        console.log(this);
        if (closed.classList.contains('closed')) {
            closed.classList.remove('closed');
            closed.style.height = "auto";
            open.style.display = "none"
        } else {
            closed.classList.add('closed');
            closed.style.height = "0";
            open.style.display = "block"
        }
    }
    let open = document.querySelector(".js-open");
    open.addEventListener("click", toggleBlock, false);

    let close = document.querySelector(".js-close");
    close.addEventListener("click", toggleBlock, false);
});