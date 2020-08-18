import gsap from 'gsap';

export const animateItem = () => {
    const tl = gsap.timeline();
    tl.to(".item", {
        delay: 0.7,
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power4.out",
        stagger: {
            amount: 0.8,
        }
    }
    )
}