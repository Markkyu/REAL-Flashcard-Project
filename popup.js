const container = document.querySelector('.container')

document.querySelector('#open-popup').addEventListener('click', function (){
    document.body.classList.add('active-popup');
    // document.main.classList.add('noClick');
});

document.querySelector('.popup .close-btn').addEventListener('click', function (){
    document.body.classList.remove('active-popup');
    container.classList.remove('noClick');
});