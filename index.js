// Historical markers data
function getHistoricalMarkers() {
    return [
        {
            number: 1,
            date: "WELCOME",
            title: "HOW IT ALL STARTED",
            description: "A city that never planned to be great — and then suddenly became important.",
            id: 1
        },
        {
            number: 2,
            date: "1823",
            title: "FOREST, SILENCE, AND SURVIVAL",
            description: "The beginning — just forest, families, and survival.",
            id: 2
        },
        {
            number: 3,
            date: "1854",
            title: "LITTLETON BECOMES BRADFORD",
            description: "From a modest name to something more serious.",
            id: 3
        },
        {
            number: 4,
            date: "1858",
            title: "THE FIRST NEWSPAPER: THE CITY STARTS TALKING",
            description: "March 12, 1858 — The Bradford Miner begins publishing.",
            id: 4
        },
        {
            number: 5,
            date: "1865",
            title: "THE WELL THAT'S STILL WORKING",
            description: "Cline Well No. 1 — still pumping after 150+ years.",
            id: 5
        },
        {
            number: 6,
            date: "1871",
            title: "OIL. THE THING THAT CHANGED EVERYTHING",
            description: "The Bradford Oil Field opens — one of the richest in the world.",
            id: 6
        },
        {
            number: 7,
            date: "1879",
            title: "THE \"PEG LEG\" MONORAIL: A LESSON FOR THE FUTURE",
            description: "January 28, 1879 — Bradford becomes a city, learns a hard lesson.",
            id: 7
        },
        {
            number: 8,
            date: "LATE 1800S",
            title: "WHEN MONEY COMES TOO FAST",
            description: "The oil boom era — rapid growth, chaos, and fortunes.",
            id: 8
        },
        {
            number: 9,
            date: "LATE 1800S",
            title: "BRICK THAT SPEAKS ABOUT MONEY",
            description: "Bradford's architecture — oil frozen into buildings.",
            id: 9
        },
        {
            number: 10,
            date: "1920S-1937",
            title: "WHEN BRADFORD DECIDED TO TAKE OFF",
            description: "Aviation comes to Bradford — the birth of Piper Aircraft.",
            id: 10
        },
        {
            number: 11,
            date: "1932-1933",
            title: "ZIPPO: SIMPLE, RELIABLE, FOREVER",
            description: "The iconic lighter is born in Bradford.",
            id: 11
        },
        {
            number: 12,
            date: "1934",
            title: "WHEN BRADFORD SANG",
            description: "January 16, 1934 — Marilyn Horne is born.",
            id: 12
        },
        {
            number: 13,
            date: "1938",
            title: "THE MARJORIE WEST DISAPPEARANCE",
            description: "May 8, 1938 — A Mother's Day mystery that haunts Bradford.",
            id: 13
        },
        {
            number: 14,
            date: "1963-1967",
            title: "THE UNIVERSITY: A SECOND BREATH",
            description: "Campus on the site of an airport — where ideas now take off.",
            id: 14
        },
        {
            number: 15,
            date: "1997",
            title: "A REFINERY FOR ONE DOLLAR",
            description: "An act of trust that saved an industry.",
            id: 15
        },
        {
            number: 16,
            date: "2000",
            title: "OFFICIALLY HISTORIC",
            description: "August 31, 2000 — Downtown Bradford joins the National Register.",
            id: 16
        },
        {
            number: 17,
            date: "2003-2017",
            title: "KINZUA: WHEN NATURE WINS",
            description: "From tornado destruction to one of the world's most beautiful skywalks.",
            id: 17
        },
        {
            number: 18,
            date: "NOW",
            title: "A CITY WITH CHARACTER",
            description: "Bradford today — real, resilient, and authentic.",
            id: 18
        }
    ];
}

// Legacy function for backward compatibility
function getSignsData() {
    return getHistoricalMarkers().map(marker => ({
        id: marker.id,
        title: marker.title,
        description: marker.description,
        hasImage: true,
        transcript: marker.description,
        gallery: []
    }));
}

// Navigation active state management
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav .nav-link, .nav-menu a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Header scroll effect - add blur when scrolled
    const header = document.querySelector('.main-header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Hamburger menu functionality
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mainNav = document.querySelector('.main-nav');
    
    if (hamburgerBtn && mainNav) {
        function toggleMenu() {
            hamburgerBtn.classList.toggle('active');
            mainNav.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        }
        
        hamburgerBtn.addEventListener('click', toggleMenu);

        // Close menu when clicking on a nav link
        const navLinks = mainNav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburgerBtn.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });

        // Close menu when clicking on overlay
        document.addEventListener('click', function(event) {
            const isClickInsideNav = mainNav.contains(event.target);
            const isClickOnHamburger = hamburgerBtn.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnHamburger && mainNav.classList.contains('active')) {
                hamburgerBtn.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }
});
