new WOW().init();

const images = document.querySelectorAll('.box-img img');
const imgMain = document.getElementById('img-main');

images.forEach(item => {
    item.onclick = () => {
        const srcImage = item.getAttribute('src');
        imgMain.src = srcImage;
        document.querySelector('.box-img .active').classList.remove('active');
        item.classList.add('active');
    }
});

function countdown() {    
    const endDate = new Date('2024-04-07T00:00:00');
    
    const now = new Date();
    
    const timeLeft = endDate - now;
    
    if (timeLeft < 0) {
        return "Đã qua thời hạn.";
    }
    
    // Tính số ngày, giờ, phút và giây còn lại
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    document.querySelector('.days').innerText = days;
    document.querySelector('.hours').innerText = hours;
    document.querySelector('.minutes').innerText = minutes;
    document.querySelector('.seconds').innerText = seconds;
    setTimeout(countdown, 1000);
}

countdown();


window.addEventListener('scroll', () => {
    if (window.scrollY >= 400) {
        document.querySelector('.return').classList.add('active');
    }else if (window.scrollY < 300) {
        document.querySelector('.return').classList.remove('active');
    }
});