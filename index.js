// function toggleCatalog() {
//     var x = document.querySelector(".catalog-items");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }


document.querySelectorAll('.catalog').forEach(function(dropdown) {
    dropdown.addEventListener('click', function() {
        this.setAttribute('tabindex', 1);
        this.classList.toggle('active');
        var menu = this.querySelector('.dropdown-menu');
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });

    dropdown.addEventListener('focusout', function() {
        this.classList.remove('active');
        this.querySelector('.dropdown-menu').style.display = 'none';
    });

    dropdown.querySelectorAll('.dropdown-menu li').forEach(function(item) {
        item.addEventListener('click', function() {
            var dropdown = this.closest('.catalog');
        });
    });
});



document.querySelectorAll('.shoping-cart').forEach(function(dropdown) {
    dropdown.addEventListener('click', function() {
        this.setAttribute('tabindex', 1);
        this.classList.toggle('active');
        var menu = this.querySelector('.dropdown-child');
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none';
        }
    });

    dropdown.addEventListener('focusout', function() {
        this.classList.remove('active');
        this.querySelector('.dropdown-child').style.display = 'none';
    });
});



const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 5,
    // loop: false,
    speed: 3000,
    spaceBetween: 20,

    autoplay: {delay: 2000, disableOnInteraction: true},
  });


//cookie
document.getElementById('agree-button').onclick = function() {
document.getElementById('cookie-banner').style.display = 'none';
};


//Кнопка вверх


// Когда пользователь прокручивает страницу на 20px или больше, показать кнопку
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}

// При нажатии на кнопку, прокрутить до верха документа
function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}






// const languageButtons = document.querySelectorAll('.language_button');

// languageButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const language = button.dataset.language;
//         // Здесь нужно реализовать смену языка на странице в зависимости от значения атрибута data-language
//         console.log(`Язык страницы изменен на ${language}`);
//     });
// });