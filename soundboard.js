var buttonA = document.getElementById('a');
var buttonB = document.getElementById('b');
var buttonC = document.getElementById('c');

buttonA.addEventListener('click', function() {
    console.log('A')
    var audio = document.getElementById("audioA");
    audio.play();
})

buttonB.addEventListener('click', function() {
    var audio = document.getElementById("audioB");
    audio.play();
})

buttonC.addEventListener('click', function() {
    var audio = document.getElementById("audioC");
    audio.play();
})