document.getElementById('activateHover').addEventListener('mouseover', function() {
    document.querySelector('.card-content').classList.add('hover-active');
});

document.getElementById('activateHover').addEventListener('mouseleave', function() {
    document.querySelector('.card-content').classList.remove('hover-active');
});