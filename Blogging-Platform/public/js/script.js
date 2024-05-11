const homeNavEl = document.querySelector('.home-navbar');
const homeNavLinks = document.querySelector('.home-page-ul');

// const blogNavEl = document.querySelector('.blog-navbar');
// const blogNavLinks = document.querySelector('.blog-ul');

const postsNavEl = document.querySelector('.posts-navbar');
const postsNavLinks = document.querySelector('.posts-ul');

const pagesNavEl = document.querySelector('.pages-navbar');
const pagesNavLinks = document.querySelector('.pages-ul');

const menuMobileBtnEl = document.querySelector('.menu-mobile-btn');
const sideNavEl = document.querySelector('.side-navbar');

homeNavEl.addEventListener('click', () => {
    if (homeNavLinks.style.display === 'none') {
        homeNavLinks.style.display = 'block';
    } else {
        homeNavLinks.style.display = 'none';
    }
});

// blogNavEl.addEventListener('click', () => {
//     if (blogNavLinks.style.display === 'none') {
//         blogNavLinks.style.display = 'block';
//     } else {
//         blogNavLinks.style.display = 'none';
//     }
// });

postsNavEl.addEventListener('click', () => {
    if (postsNavLinks.style.display === 'none') {
        postsNavLinks.style.display = 'block';
    } else {
        postsNavLinks.style.display = 'none';
    }
});

pagesNavEl.addEventListener('click', () => {
    if (pagesNavLinks.style.display === 'none') {
        pagesNavLinks.style.display = 'block';
    } else {
        pagesNavLinks.style.display = 'none';
    }
});

menuMobileBtnEl.addEventListener('click', () => {
    if (window.innerWidth < 768) {
        if (sideNavEl.style.display === 'none') {
            sideNavEl.style.display = 'block';
        } else {
            sideNavEl.style.display = 'none';
        }
    } else {
        sideNavEl.style.display = 'block';
    }
});
