const spotify = document.getElementById('spotify');
const applemusic = document.getElementById('applemusic');
const youtube = document.getElementById('youtube');
const pandora = document.getElementById('pandora');
const click = document.getElementById('click');

const userEngagementAreas = document.querySelectorAll('.user-engagement-area');
const iframes = document.getElementsByTagName('iframe')[0];

const touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

for (let i = 0; i < userEngagementAreas.length; i++) {
    userEngagementAreas[i].addEventListener(touchEvent, function(e) {
        console.log(e)
    });
}

for (let i = 0; i < iframes.length; i++) {
    iframes[i].contentDocument.body.addEventListener('mouseup', function(e) {
        console.log(e)
    });
}

var monitor = setInterval(function(){
    var elem = document.activeElement;
    if(elem && elem.tagName == 'IFRAME'){
        clearInterval(monitor);
        console.log("iframe is active");
        gtag('event', 'tap_spotify', {});
    }
}, 100);