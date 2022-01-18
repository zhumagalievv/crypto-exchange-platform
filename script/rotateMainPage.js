window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    const container = document.querySelector('.animated__coins');
    const images = document.querySelectorAll('.animated__coins .coins')

    const checkpoint = 850
    const currentScroll = window.pageYOffset
    console.log(currentScroll)

    container.style.transform = "rotate(" + currentScroll / 5 + "deg)"
    images.forEach(el => {
        el.style.transform = "rotate(-" + currentScroll / 5 + "deg)"
    })

    if (currentScroll <= checkpoint) {
        opacity = 1 - currentScroll / checkpoint;
    } else {
        opacity = 0;
    }
    container.style.opacity = opacity;
}