const spotify = document.getElementById('spotify');
const applemusic = document.getElementById('applemusic');
const youtube = document.getElementById('youtube');
const pandora = document.getElementById('pandora');
const click = document.getElementById('click');

const userEngagementAreas = document.querySelectorAll('.user-engagement-area');
const iframes = document.getElementsByTagName('iframe')[0];

const touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

const eventProperties = {
    source: window.location.search.split('?src=')[1],
};

for (let i = 0; i < userEngagementAreas.length; i++) {
    userEngagementAreas[i].addEventListener(touchEvent, function(e) {
        gtag('event', 'tap_'+e.originalTarget.id, eventProperties);
    });
}

var monitor = setInterval(function(){
    var elem = document.activeElement;
    if(elem && elem.tagName == 'IFRAME'){
        clearInterval(monitor);
        gtag('event', 'tap_spotify', eventProperties);
    }
}, 100);