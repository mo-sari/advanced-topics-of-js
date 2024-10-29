// new Section: Intersection Observer

// we can add other information abou when this callback function should be triggered, like threshold, if we set it to 1, it means that 100 percent of the target must be in our viewport to run the callback function, if we set it to 0, even the tiniest px of target being on the viewport will trigger the function
const Observer = new IntersectionObserver(entries =>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            console.log('Yeah I saw it');
            console.log(entry);
        }
    })
},{threshold: 0});

const box = document.querySelector('.box');
Observer.observe(box);