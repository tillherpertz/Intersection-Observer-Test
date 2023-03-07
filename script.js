// Select the two elements you want to observe
const element1 = document.querySelector('#element1');
const element2 = document.querySelector('#element2');
const element3 = document.querySelector('#element3');
const element4 = document.querySelector('#element4');

// Create a new Intersection Observer instance
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log(`Element ${entry.target.id} is intersecting!`);
            entry.target.classList.remove('hidden');
            entry.target.classList.add('visible');
        } else {
            console.log(`Element ${entry.target.id} is NOT intersecting!`);
            // Do something when the element stops intersecting
        }
    });
});

// Observe the two elements
observer.observe(element1);
observer.observe(element2);
observer.observe(element3);
observer.observe(element4);