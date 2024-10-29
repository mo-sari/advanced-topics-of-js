// new Section: Intersection Observer

// if we wanted to do something like tracking ad's viewtime:

let addViewTimes = []
let addVisibleStartTime;

const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            addVisibleStartTime = Date.now();
        }
        else if(addVisibleStartTime){
            let addVisibilityDuration = Date.now() - addVisibleStartTime
            addViewTimes.push(addVisibilityDuration);
            console.log(addViewTimes);
        }
    })
}, {threshold: 0.5});

const box = document.querySelector('.box');
observer.observe(box);
