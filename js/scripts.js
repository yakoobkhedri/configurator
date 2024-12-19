// mobile menu

let mobileConfigButton = document.querySelector('.mobile-config-button');

mobileConfigButton.addEventListener('click', function () {
    document.querySelector('.settings').classList.toggle('open'); 
    document.querySelector('.hamburg').classList.toggle('active'); 
})