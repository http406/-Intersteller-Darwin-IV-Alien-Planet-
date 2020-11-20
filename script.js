//alert("🧿📣Intersteller || Darwin IV ( Alien Planet )...\n\n👉Darwin IV is a fictional planet 6.5 light years from the Earth, with two suns and 60% gravity. It was depicted in the series ‘Alien Planet’ based on Wayne Barlowe’s book Expedition.\n\n👉Alien Planet word is attached to it, for a 94-minute docufiction, originally airing on the Discovery Channel, about two internationally built robot probes searching for alien life on the fictional planet Darwin IV. It was based on the book Expedition. Wait a little to load the image and script. I add a soft piano tune, don't miss it. Enjoy...");

addEventListener('load', checkJSLoaded)

function checkJSLoaded() {   

var starCount = (Math.random() * (3000 - 800) + 500),

  starField = document.getElementById('starField');

for (var i = 0; i <= starCount; i++) {

  var starSpaceLeft = (Math.random() * (97 - 3) + 3) + '%',

    starSpaceTop = (Math.random() * (97 - 3) + 3) + '%',

    starDistance = "." + (Math.floor(Math.random() * (200 - 100) + 50));

  star = document.createElement('div');

  star.setAttribute('class', 'star');

  star.setAttribute('id', 'star-' + (i + 1));

  star.setAttribute('style', 'top: ' + starSpaceTop + '; left: ' + starSpaceLeft + '; opacity: ' + starDistance);

  starField.appendChild(star);

}

//Animation

var starClass = '.star',

  spawnDelay = (Math.floor(Math.random(100 - 50) + 50));

setInterval(function() {

  travelTime = (Math.floor(Math.random(500 - 100) + 100));

  var travelToX = 0,

    travelToY = 0,

    travelerId = '#star-' + (Math.floor(Math.random() * (starCount - 1) + 1)),

    traveler = $(travelerId + starClass),

    travelerX = traveler.position().left,

    travelerY = traveler.position().top,

    travelOriginX = $(window).width() / 2,

    travelOriginY = $(window).height() / 2;

  if (traveler.position().left > travelOriginX) {

    if (traveler.position().top > ($(window).height() / 2)) {

      travelToX = (travelerX - travelOriginX) + travelerX;

      travelToY = (travelerY - travelOriginY) + travelerY;

    } else {

      travelToX = (travelerX - travelOriginX) + travelerX;

      travelToY = travelerY - (travelOriginY - travelerY);

    }

  } else {

    if (traveler.position().top > ($(window).height() / 2)) {

      travelToX = travelerX - (travelOriginX - travelerX);

      travelToY = (travelerY - travelOriginY) + travelerY;

    } else {

      travelToX = travelerX - (travelOriginX - travelerX);

      travelToY = travelerY - (travelOriginY - travelerY);

    }

  }

  traveler.velocity({

    left: travelToX,

    top: travelToY,

    width: '5px',

    height: '5px',

    opacity: 0

  }, {

    duration: travelTime,

    complete: function() {

      traveler.velocity({

        opacity: 0,

        width: '2px',

        height: '2px'

      }, {

        duration: 1000,

        complete: function() {

          starSpaceLeft = (Math.random() * (97 - 3) + 3) + '%';

          starSpaceTop = (Math.random() * (97 - 3) + 3) + '%';

          starDistance = "." + (Math.floor(Math.random() * (100 - 50) + 50));

          traveler.css('left', starSpaceLeft);

          traveler.css('top', starSpaceTop);

          traveler.velocity({

            opacity: starDistance

          }, {

            duration: travelTime

          });

        }

      });

    }

  });

}, spawnDelay);};

//glittering stars

$(function() {

  var body = $('#starshine'),

      template = $('.template.shine'),

      stars =  200,

      sparkle = 10;

  

    

  var size = 'small';

  var createStar = function() {

    template.clone().removeAttr('id').css({

      top: (Math.random() * 200) + '%',

      left: (Math.random() * 200) + '%',

      webkitAnimationDelay: (Math.random() * sparkle) + 's',

      mozAnimationDelay: (Math.random() * sparkle) + 's'

    }).addClass(size).appendTo(body);

  };

 

  for(var i = 0; i < stars; i++) {

    if(i % 2 === 0) {

      size = 'small';

    } else if(i % 3 === 0) {

      size = 'medium';

    } else {

      size = 'large';

    }

    

    createStar();

  }

});

var sound = new Howl({

  src: ['http://dl.dropbox.com/s/yu5l2480zqu0fyl/Epic-Emotional-Piano-Ambient-Instrumental%20Music-Dark%20Matter%20%28%20128kbps%20%29.mp3']

});

// Clear listener after first call.

sound.once('load', function(){

  sound.play();

});

/*

┈┈┈╲┈┈┈┈╱

 ┈┈╱    ▔╲

┈┈┃┈▇┈┈▇┈┃

╭╮┣━━━━━━┫╭╮

┃┃┃┈┈┈┈┈┈┃┃┃

╰╯┃┈┈┈┈┈┈┃╰╯

┈┈╰┓┏━━┓┏╯

┈┈┈╰╯┈┈╰╯      

😊You r always welcome 😊

The EnD

*/

