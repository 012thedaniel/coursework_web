window.addEventListener('scroll', function() {
    let scroll = document.querySelector('.up_to_top_button');
    scroll.classList.toggle('active', window.scrollY > 500);
});

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}