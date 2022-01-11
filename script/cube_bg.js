const main_page = translateY('.blockContent.cube-bg', '.cube-bg.dis-none', 200, 0.15)

function translateY(parentClass, childClass, duration, triggerHook) {
    const tween = new TimelineLite();

    tween.add(
        TweenLite.to(childClass, 1,
            {
                css: { transform: 'translateY(0px)' },
                css: { transform: 'translateY(50px)' },
                ease: Power1.easeInOut
            }
        )
    )

    const controller = new ScrollMagic.Controller()

    const scene = new ScrollMagic.Scene({
        triggerElement: parentClass,
        duration: duration,
        triggerHook: triggerHook,
    })
        .setTween(tween)
        .addTo(controller)
}