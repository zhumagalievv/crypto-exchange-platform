// const basic_anim = fadeIn('.headers__img', '.headers__img img', 420, 0.2)
const budgetting = fadeIn('.budgeting-page .headers__img', '.headers__img img', 200, 0.25)


function fadeIn(parentClass, childClass, duration, triggerHook) {
    const tween = new TimelineLite();

    tween.add(
        TweenLite.to(childClass, 2,
             {
                css: { transform: 'translateY(0px)' },
                css: { transform: 'translateY(-100px)', opacity: '0' },
                ease: Power1.easeInOut
            }
        )
    )

    const controller = new ScrollMagic.Controller()

    // add libraries in *.html 
    // add property transition: .3s; on observing element in css      
    // Below .setTween() add .addIndicators() to navigate
    
    // duration:    Area of activating animation 
    // triggerHook: starting point when animation activate from 0-1
    const scene = new ScrollMagic.Scene({
        triggerElement: parentClass,
        duration: duration,
        triggerHook: triggerHook,
    })
        .setTween(tween)
        // .addIndicators()
        .addTo(controller)
}

// function fadeIn(str, scrollHeight) {
//     const div = document.querySelector(str)

//     const y = window.scrollY;

//     const options = {
//         root: null,
//         rootMargin: '0px 0px 0px 0px',
//         threshold: 0
//     }

//     const observer = new IntersectionObserver(entries => {
//         const obj = entries[0]
//         console.log(obj.isIntersecting)

//         window.addEventListener('scroll', () => {
//             const currentY = window.scrollY
//             console.log(currentY)
//             console.log(obj.isIntersecting)


//             if (obj.isIntersecting && currentY > scrollHeight) {
//                 obj.target.classList.add('hide')
//                 obj.target.classList.remove('show')
//             }
//             if (obj.isIntersecting && currentY < scrollHeight+150) {
//                 obj.target.classList.remove('hide')
//                 obj.target.classList.add('show')
//             }
//         })

//     }, options)

//     observer.observe(div)
// }