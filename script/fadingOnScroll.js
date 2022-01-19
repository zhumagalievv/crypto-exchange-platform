// // **Private

// Private plan
const basic_page = fadeIn('.basic-page .headers__img', '.basic-page .headers__img img', 450, 0.2)

const plus_page = fadeIn('.plus-page .headers__img', '.plus-page .headers__img img', 450, 0.2)


const premium_page = fadeIn('.premium-page .headers__img', '.premium-page .headers__img img', 450, 0.2)


// Platinum
const platinum_page = fadeIn('.platinum-page .headers__img--anim', '.platinum-page .headers__img--anim img', 1000, 0.2)


const platinum_page2 = fadeIn('.platinum-page .headers__img--anim2', '.platinum-page .headers__img--anim2 img', 350, 0.2)

const platinum_page3 = fadeIn('.platinum-page .headers__img--anim3', '.platinum-page .headers__img--anim3 img', 450, 0.2)


const budgetting = fadeIn('.budgeting-page .headers__img', '.budgeting-page .headers__img img', 400, 0.2)
const account_page = fadeIn('.account_page .headers__img', '.account_page .headers__img img', 400, 0.2)

//crypto-page
const crypto1 = fadeIn('.crypto-page #crypto-img1', '.crypto-page #crypto-img1 img', 100, 0.1)
const crypto2 = fadeIn('.crypto-page #crypto-img2', '.crypto-page #crypto-img2 img', 100, 0.1)
const crypto3 = fadeIn('.crypto-page #crypto-img3', '.crypto-page #crypto-img3 img', 100, 0.1)
const crypto4 = fadeIn('.crypto-page #crypto-img4', '.crypto-page #crypto-img4 img', 100, 0.1)
const crypto5 = fadeIn('.crypto-page #crypto-img5', '.crypto-page #crypto-img5 img', 100, 0.1)
const crypto6 = fadeIn('.crypto-page #crypto-img6', '.crypto-page #crypto-img6 img', 100, 0.1)

//stocks-page
const stokc_token1 = fadeIn('.stocks-page .stock-tokens__item1', '.stocks-page .stock-tokens__item1 img', 100, 0.1)
const stokc_token2 = fadeIn('.stocks-page .stock-tokens__item2', '.stocks-page .stock-tokens__item2 img', 100, 0.1)
const stokc_token3 = fadeIn('.stocks-page .stock-tokens__item3', '.stocks-page .stock-tokens__item3 img', 100, 0.1)
const stokc_token4 = fadeIn('.stocks-page .stock-tokens__item4', '.stocks-page .stock-tokens__item4 img', 100, 0.1)
const stokc_token5 = fadeIn('.stocks-page .stock-tokens__item5', '.stocks-page .stock-tokens__item5 img', 100, 0.1)
const stokc_token6 = fadeIn('.stocks-page .stock-tokens__item6', '.stocks-page .stock-tokens__item6 img', 100, 0.1)

//snl-bonus
const snl_bonus1 = fadeIn('.snl_bonus-page .img__item1', '.snl_bonus-page .img__item1 img', 100, 0.1)
const snl_bonus2 = fadeIn('.snl_bonus-page .img__item2', '.snl_bonus-page .img__item2 img', 100, 0.1)
const snl_bonus3 = fadeIn('.snl_bonus-page .img__item3', '.snl_bonus-page .img__item3 img', 100, 0.1)
const snl_bonus4 = fadeIn('.snl_bonus-page .img__item4', '.snl_bonus-page .img__item4 img', 100, 0.1)
const snl_bonus5 = fadeIn('.snl_bonus-page .img__item5', '.snl_bonus-page .img__item5 img', 100, 0.1)
const snl_bonus6 = fadeIn('.snl_bonus-page .img__item6', '.snl_bonus-page .img__item6 img', 100, 0.1)

//commodities 
const commodities = fadeIn('.commodities .commodity-small-text-img', '.commodities .commodity-small-text-img img', 400, 0.2)
// money-box
const money_box = fadeIn('.money-box .commodity-small-text-img', '.money-box .commodity-small-text-img img', 400, 0.2)
// market-place
const marketplace = fadeIn('.marketplace .commodity-small-text-img', '.marketplace .commodity-small-text-img img', 450, 0.3)

// const snl_bonus = fadeIn('.snl_bonus-page .headers', '.snl_bonus-page .headers__img img', 300, 0.2)

const device_insurance = fadeIn('.device_insurance .headers', '.device_insurance .headers__img img', 400, 0.2)

const split_a_bill = fadeIn('.split-bill-page .headers__img', '.split-bill-page .headers__img img', 500, 0.1)   


const early_salary = fadeIn('.early-salary-page .headers__img', '.early-salary-page .headers__img img', 400, 0.2)


const subscriptions_page = fadeIn('.subscriptions-page .headers__img', '.subscriptions-page .headers__img img', 350, 0.17)


const built_on_stellar = fadeIn('.built-on-stellar-page  .headers__img', '.built-on-stellar-page .headers__img img', 750, 0.1)

// // **Business
// const b__cards = fadeIn('.b_cards_page .image--anim', '.b_cards_page .image--anim img', 450, 0.2)

// const b_request = fadeIn('.request_page .title-img', '.request_page .title-img img', 300, 0.15)

// const b_recurring = fadeIn('.recurring_page .title-img', '.recurring_page .title-img img', 300, 0.15)

// const b_expenses = fadeIn('.b_expenses .title-img', '.b_expenses .title-img img', 300, 0.15)

// const b_fintech_hub = fadeIn('.fintech_page .title-img', '.fintech_page .title-img img', 300, 0.1)

// const b_rewards = fadeIn('.b_rewards_page .title-img', '.b_rewards_page .title-img img', 240, 0.17)

// const b_b_stellar = fadeIn('.b_built_on_stellar .title-img', '.b_built_on_stellar .title-img img', 450, 0.2)


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
        .addIndicators()
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