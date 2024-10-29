// new Section: Intersection Observer

// for working with multiple targets:

let addViewTimes = []
let addVisibleStartTime;

const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        const {target} = entry;
        if(entry.isIntersecting){
            console.log(`box number ${target.id} is in the viewport`)
        }
    })
}, {threshold: 0});


const boxes = document.querySelectorAll('.box');
boxes.forEach(box => observer.observe(box));