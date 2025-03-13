let first = true
document.querySelectorAll('.sway').forEach(function(element) {
    
    if (first) {
        first = false

        setTimeout(function() {
            element.classList.add('show');
        }, 0)
    }

    else {
        var animDelay = Math.random() * (4 - 2) + 2;
        var swaySpeed = Math.random() * (8 - 6) + 6;
        element.style.animationDelay = animDelay + 's';
        element.style.animationDuration = swaySpeed + 's';

        setTimeout(function() {
            element.classList.add('show');
        }, animDelay * 1000);
    }
});

const navbar_small = document.querySelector(".navbar_small.button")

navbar_small.addEventListener("click", function() {
    
    const navbar_container = document.querySelector(".navbar_small.container")
    const navbar_content = document.querySelector(".navbar_small.list")

    if (navbar_container.style.opacity === "1") {
        // Close the navbar
        navbar_container.style.opacity = "0"
        navbar_container.style.visibility = "hidden"
        navbar_small.style.marginRight = "0"
        navbar_small.style.transform = "scaleX(1)"
        navbar_container.style.height = "0"
        navbar_content.style.display = "none"
        
    }
    else {

        navbar_small.style.transform = "scaleX(7)"
        navbar_small.style.marginRight = "66px"

        setTimeout (function() {
            navbar_container.style.border = "2px solid white"
            navbar_container.style.borderBottomLeftRadius = "12px"
            navbar_container.style.borderBottomRightRadius = "12px"
            navbar_container.style.position = "absolute"
            navbar_container.style.top = "58px"
            navbar_container.style.right = "0"
            navbar_container.style.height = "160px"
            navbar_container.style.width = "200px"
            navbar_container.style.backgroundColor = "rgba(14, 17, 19, 0.95)"
            navbar_container.style.zIndex = "1"
            navbar_container.style.opacity = "1"
            navbar_container.style.visibility = "visible"

            navbar_content.style.display = "flex"
            navbar_content.style.flexDirection = "column"

            if(navbar_container.style.display === "none") {
                navbar_container.style.display = "flex"
            }
 
        }, 300)
    }
})

window.addEventListener("resize", function () {
    const navbar_container = document.querySelector(".navbar_small.container")
    const navbar_content = document.querySelector(".navbar_small.list")

    if (window.innerWidth > 900) {
        navbar_container.style.display = "none"
        navbar_container.style.opacity = "0"
        navbar_container.style.height = "0px"
        navbar_container.style.visibility = "hidden"
        navbar_content.style.display = "none"
        navbar_small.style.marginRight = "0"
        navbar_small.style.transform = "scaleX(1)"
    }
    else if (this.window.innerWidth < 900) {
        navbar_container.style.display = "flex"
    }
});

function clickEvent(box) {

    const reviewContents = box.querySelector(".accordion-content")
    const close_button = reviewContents.querySelector(".close_button")

    if(!box.classList.contains("clicked")) {
        reviewContents.classList.toggle("expanded")
        close_button.classList.toggle("active")
        box.classList.toggle("clicked")
        box.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    window.location.hash = ""
    
}

function closeWindow(button) {
    const box = button.closest(".review")
    const reviewContents = box.querySelector(".accordion-content")

    reviewContents.classList.toggle("expanded")
    button.classList.toggle("active")
    box.classList.toggle("clicked")
    box.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const hash = window.location.hash;

if (hash === '#eldenring_review') {
    const clickedReview = document.getElementById('eldenring_review');
    clickEvent(clickedReview)
} else if (hash === '#balatro_review') {
    const clickedReview = document.getElementById('balatro_review');
    clickEvent(clickedReview)
} 

document.querySelectorAll('.review').forEach(box => {
    box.addEventListener('click', () => {
        clickEvent(box) 
    });
    
});

document.querySelectorAll('.close_button').forEach(button => {
    button.addEventListener('click', (event) => {
        event.stopPropagation()
        closeWindow(button)
    });
    
});

document.querySelectorAll('.img_container img').forEach(image => {
    image.addEventListener('click', () => {
        const imageSrc = image.src

        const overlayImg = document.getElementById("overlay-img")
        overlayImg.src = imageSrc;

        const overlay = document.getElementById("overlay")
        overlay.style.display = "flex"
    });
});

function closeOverlay() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
}