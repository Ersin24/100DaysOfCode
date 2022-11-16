const imageElement = document.querySelector('#parallax-area img');
new simpleParallax(imageElement, {
    overflow: true,
    orientation: 'right',
    scale: 1.5,
    delay: .6,
});