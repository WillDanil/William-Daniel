/* =====================================
   DIRECTORY FILTER
===================================== */

function filterStores(category){

    const stores =
    document.querySelectorAll(".tenant-card");

    stores.forEach(store => {

        if(
            category === "all" ||
            store.classList.contains(category)
        ){

            store.style.display = "block";

        } else {

            store.style.display = "none";

        }

    });

}


/* =====================================
   HOME PAGE FEATURED STORES SLIDER
===================================== */

const featuredStores = [

    {
        image:
        "assets/images/gucci.jpg",

        title:
        "Gucci",

        text:
        "Discover timeless luxury and iconic fashion pieces."
    },

    {
        image:
        "assets/images/directory/nike.jpg",

        title:
        "Nike",

        text:
        "Performance and style for every lifestyle."
    },

    {
        image:
        "assets/images/directory/uniqlo.jpg",

        title:
        "Uniqlo",

        text:
        "Simple, modern essentials for everyday living."
    }

];

let currentStore = 0;

const storeImage =
document.getElementById("store-image");

const storeTitle =
document.getElementById("store-title");

const storeText =
document.getElementById("store-text");

function changeStore(){

    if(
        !storeImage ||
        !storeTitle ||
        !storeText
    ) return;

    currentStore++;

    if(currentStore >= featuredStores.length){

        currentStore = 0;

    }

    storeImage.style.opacity = "0";

    setTimeout(() => {

        storeImage.src =
        featuredStores[currentStore].image;

        storeTitle.textContent =
        featuredStores[currentStore].title;

        storeText.textContent =
        featuredStores[currentStore].text;

        storeImage.style.opacity = "1";

    }, 400);

}

if(storeImage){

    setInterval(
        changeStore,
        4000
    );

}


/* =====================================
   HOME PAGE HERO FADE IN
===================================== */

window.addEventListener(
    "load",
    () => {

        const heroContent =
        document.querySelector(".hero-content");

        if(heroContent){

            heroContent.classList.add(
                "show"
            );

        }

    }
);


/* =====================================
   EVENTS FEATURED SLIDER
===================================== */

const events = [

    {

        image:
        "assets/images/events/fashion-show.jpg",

        title:
        "Luxury Fashion Showcase",

        description:
        "Experience the latest designer collections from world-class fashion brands."
    },

    {

        image:
        "assets/images/events/food-festival.jpg",

        title:
        "International Food Festival",

        description:
        "Taste premium cuisine from renowned chefs and restaurants."
    },

    {

        image:
        "assets/images/events/beauty-event.jpg",

        title:
        "Beauty & Wellness Expo",

        description:
        "Explore beauty trends, skincare innovations, and wellness experiences."
    },

    {

        image:
        "assets/images/events/tech-expo.jpg",

        title:
        "Future Lifestyle Tech Expo",

        description:
        "Discover cutting-edge technology shaping modern lifestyles."
    }

];

let currentEvent = 0;

const eventImage =
document.getElementById("event-image");

const eventTitle =
document.getElementById("event-title");

const eventDescription =
document.getElementById("event-description");

function changeEvent(){

    if(
        !eventImage ||
        !eventTitle ||
        !eventDescription
    ) return;

    currentEvent++;

    if(currentEvent >= events.length){

        currentEvent = 0;

    }

    eventImage.style.opacity = "0";

    setTimeout(() => {

        eventImage.src =
        events[currentEvent].image;

        eventTitle.textContent =
        events[currentEvent].title;

        eventDescription.textContent =
        events[currentEvent].description;

        eventImage.style.opacity = "1";

    }, 500);

}

if(eventImage){

    setInterval(
        changeEvent,
        5000
    );

}


/* =====================================
   ABOUT PAGE FADE-IN ANIMATIONS
===================================== */

const aboutSections =
document.querySelectorAll(
    ".story-card, .founder-content, .value-card, .stat-card"
);

function revealAboutSections(){

    aboutSections.forEach(section => {

        const top =
        section.getBoundingClientRect().top;

        const trigger =
        window.innerHeight - 100;

        if(top < trigger){

            section.classList.add(
                "show-section"
            );

        }

    });

}

window.addEventListener(
    "scroll",
    revealAboutSections
);

window.addEventListener(
    "load",
    revealAboutSections
);


/* =====================================
   ABOUT PAGE STAT COUNTER
===================================== */

const statNumbers =
document.querySelectorAll(
    ".stat-card h2"
);

let statsPlayed = false;

function animateStats(){

    if(statsPlayed) return;

    const statsSection =
    document.querySelector(
        ".stats-section"
    );

    if(!statsSection) return;

    const top =
    statsSection.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){

        statsPlayed = true;

        statNumbers.forEach(number => {

            const finalText =
            number.innerText;

            const target =
            parseInt(finalText);

            let current = 0;

            const increment =
            Math.ceil(target / 80);

            function update(){

                current += increment;

                if(current >= target){

                    number.innerText =
                    finalText;

                } else {

                    number.innerText =
                    current + "+";

                    requestAnimationFrame(
                        update
                    );

                }

            }

            update();

        });

    }

}

window.addEventListener(
    "scroll",
    animateStats
);

window.addEventListener(
    "load",
    animateStats
);
/* =====================================
   NEWSLETTER INTEREST BUTTONS
===================================== */

const interestButtons =
document.querySelectorAll(".interest-btn");

interestButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("selected");

    });

});


/* =====================================
   NEWSLETTER FORM
===================================== */

const newsletterForm =
document.getElementById("newsletter-form");

if(newsletterForm){

    newsletterForm.addEventListener(
        "submit",
        function(event){

            event.preventDefault();

            const name =
            document.getElementById("name")
            .value
            .trim();

            const email =
            document.getElementById("email")
            .value
            .trim();

            const phone =
            document.getElementById("phone")
            .value
            .trim();

            const error =
            document.getElementById("form-error");

            error.textContent = "";

            /* =====================
               NAME VALIDATION
            ===================== */

            if(name.length < 3){

                error.textContent =
                "Please enter a valid full name.";

                return;
            }

            /* =====================
               EMAIL VALIDATION
            ===================== */

            const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if(!emailPattern.test(email)){

                error.textContent =
                "Please enter a valid email address.";

                return;
            }

            /* =====================
               PHONE VALIDATION
            ===================== */

            const phonePattern =
            /^[0-9]{8,15}$/;

            if(!phonePattern.test(phone)){

                error.textContent =
                "Phone number must contain 8 to 15 digits.";

                return;
            }

            /* =====================
               INTEREST VALIDATION
            ===================== */

            const selectedInterests =
            document.querySelectorAll(
                ".interest-btn.selected"
            );

            if(selectedInterests.length === 0){

                error.textContent =
                "Please choose at least one interest.";

                return;
            }

            /* =====================
               SECTION VALIDATION
            ===================== */

            const section =
            document.querySelector(
                'input[name="section"]:checked'
            );

            if(!section){

                error.textContent =
                "Please choose a preferred section.";

                return;
            }

            /* =====================
               FREQUENCY VALIDATION
            ===================== */

            const frequency =
            document.querySelector(
                'input[name="frequency"]:checked'
            );

            if(!frequency){

                error.textContent =
                "Please choose a newsletter frequency.";

                return;
            }

            /* =====================
               SUCCESS POPUP
            ===================== */

            const popup =
            document.createElement("div");

            popup.classList.add(
                "success-popup"
            );

            popup.innerHTML = `

                <h2>✓ Subscription Successful!</h2>

                <p>
                    Thank you for subscribing
                    to the FontDale Newsletter.
                </p>

            `;

            document.body.appendChild(
                popup
            );

            /* =====================
               RESET FORM
            ===================== */

            newsletterForm.reset();

            interestButtons.forEach(btn => {

                btn.classList.remove(
                    "selected"
                );

            });

            error.textContent = "";

            setTimeout(() => {

                popup.remove();

            }, 3000);

        }
    );

}