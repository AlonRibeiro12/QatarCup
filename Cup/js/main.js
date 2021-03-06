/*=============== CHANGE BACKGROUND HEADER ===============*/
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); 
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalClose = document.querySelectorAll('.services_modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click', () => {
        modal(i)
    })
})

modalClose.forEach((mc) => {
    mc.addEventListener('click', () => {
        modalViews.forEach((mv) => {
            mv.classList.remove('active-modal')
        })
    })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/

let mixerPortifolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});


/* Link active work */ 

const linkWork = document.querySelectorAll('.work_item')

function activeWork(){
    linkWork.forEach( L => l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEarch(L => l.addEventListener('click', activeWork))

/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== LIGHT DARK THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/