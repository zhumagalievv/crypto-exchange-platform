const flightPath = {
    curviness: 1.25,
    values: [
        { x: -50, y: -25, rotation: 16 },
        { x: -100, y: -45, rotation: 15 },
        { x: -150, y: -70, rotation: 14 },
        { x: -200, y: -87, rotation: 9 },
        { x: -250, y: -107, rotation: 4 },
        { x: -300, y: -126, rotation: 0 },
        { x: -400, y: -135, rotation: -6 },
        { x: -500, y: -145, rotation: -12 },
        { x: -600, y: -140, rotation: -15 },
        { x: -800, y: -127, rotation: -20 },
    ]
}

const tween = new TimelineLite();

tween.add(
    TweenLite.to("#plane", 1, {
        bezier: flightPath,
        ease: Power1.easeInOut,
    })
)


const controller = new ScrollMagic.Controller();


const scene = new ScrollMagic.Scene({
    triggerElement: ".headers__img",
    duration: 500,
    triggerHook: 0.6,
})
    .setTween(tween)
    .addTo(controller) 