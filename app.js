// new Section: Intersection Observer

const Observer = new IntersectionObserver(entries =>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            console.log('Yeah I saw it');
            console.log(entry);
        }
    })
})

const box = document.querySelector('.box');
Observer.observe(box);