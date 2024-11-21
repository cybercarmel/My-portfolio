alert('test')
const words = ["Developer", "Designer", "Problem Solver", "Innovator"];
let wordIndex = 0;
let charIndex = 0;
const typingSpeed = 100;  // Typing speed in milliseconds
const erasingSpeed = 50;  // Erasing speed in milliseconds
const delayBetweenWords = 1500;  // Delay before switching words

const animatedTextElement = document.querySelector('.animated-text');

function type() {
    if (charIndex < words[wordIndex].length) {
        animatedTextElement.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenWords);
    }
}

function erase() {
    if (charIndex > 0) {
        animatedTextElement.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, typingSpeed);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, delayBetweenWords);
});


// Simple fade-in effect when scrolling
document.addEventListener('DOMContentLoaded', () => {
    const serviceBoxes = document.querySelectorAll('.service-box');

    // Function to check visibility and add animation class
    const fadeInOnScroll = () => {
        serviceBoxes.forEach(box => {
            const boxPosition = box.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (boxPosition < screenPosition) {
                box.classList.add('fade-in');
            }
        });
    };

    window.addEventListener('scroll', fadeInOnScroll);
});



// Adding smooth hover animation on the items
document.querySelectorAll('.about-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px)';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
    });
});


window.onload = function() {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(function(bar) {
        let width = bar.style.width;
        bar.style.width = '0%'; // Start at 0%
        setTimeout(function() {
            bar.style.width = width;
        }, 100); // Delay to show animation
    });
}


