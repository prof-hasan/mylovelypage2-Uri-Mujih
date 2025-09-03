 document.addEventListener('DOMContentLoaded', function() {
        const element = document.getElementById('EasterEgg');

        
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        
        const elementWidth = element.offsetWidth;
        const elementHeight = element.offsetHeight;

       
        const randomLeft = Math.floor(Math.random() * (windowWidth - elementWidth));
        const randomTop = Math.floor(Math.random() * (windowHeight - elementHeight));

        
        element.style.left = randomLeft + 'px';
        element.style.top = randomTop + 'px';
    });
//Aleatorizar Local de Aparecimento

        function playAudioAndHideButton() {
            var audio = document.getElementById('myAudio');
            var button = document.getElementById('EasterEgg');

            audio.play();
            button.style.display = 'none'; 
        }

        
        document.getElementById('EasterEgg').onclick = playAudioAndHideButton;
//Tocar Audio e Sumir (It was all inside your head)
const Survivalist = document.querySelectorAll('.Survivalist');
const Support = document.querySelectorAll('.Support');
const Sentinel = document.querySelectorAll('.Sentinels');

Support.style.display = 'none';
Sentinel.style.display = 'none';

var button = document.getElementById('SurvivalistB');
var button = document.getElementById('SupportB');
var button = document.getElementById('SentinelB');

function Changing_ButtonsSent() {
            Support.style.display = 'none';
            Survivalist.style.display = 'none';

        }
function Changing_ButtonsSurv() {
            Support.style.display = 'none';
            Sentinels.style.display = 'none';

        }
function Changing_ButtonsSupp() {
            Sentinels.style.display = 'none';
            Survivalist.style.display = 'none';

        }
document.getElementById('SurvivalistB').onclick = Changing_ButtonsSurv;
document.getElementById('SupportB').onclick = Changing_ButtonsSupp;
document.getElementById('SentinelB').onclick = Changing_ButtonsSent;

    
    