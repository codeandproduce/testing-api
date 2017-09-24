var isItValidating = false;

function displayBlinkDot(element){
  element.css('transform', 'scale(1.0)');
}
$(document).on('click','#getStarted', function(){
  isItValidating = true;
  console.log("validated");
});

  var socket = io();
  var arrayValues = [];
  var scrollTopValue = 0;
  var thisID = '';
  $(document).scroll(function(){
    scrollTopValue = $(this).scrollTop();
  });
  socket.on('yourID', function(doc){
    thisID = doc.thisID
  });
  socket.on('new client', function(doc){
  });
  var current = 100;
  var blinkCounter = 0;
  var eyesOpen = true;


  var bruh = true;
  var didItBlink = [];
  socket.on('challen', function(doc){
    if(doc.text < 850 && bruh == true && doc.text>600){
      if(isItValidating == true){
        blinkCounter++;
        if(blinkCounter == 1){
          displayBlinkDot($('#firstBlinkFlash'));
        }else if(blinkCounter == 2){
          displayBlinkDot($('#secondBlinkFlash'));
        }
        else if(blinkCounter == 3){
          displayBlinkDot($('#thirdBlinkFlash'));
          socket.emit('this is a pair', {
            museSocketID:doc.id,
            userSocketID:thisID
          });
          didItBlink[1] = 1;
          setTimeout(function(){
            $.fn.fullpage.moveSectionDown();
            $.fn.fullpage.setAllowScrolling(true);
          },1000);
        }
        bruh = false;
        isItValidating=false;
      }else{
        $.fn.fullpage.moveSectionDown();

        if(didItBlink[0]==1 && didItBlink[1]==1){
          didItBlink = [];
          console.log('blink');
        }
      }

    }else if(doc.text>900 && bruh == false){
      console.log("close");
      console.log(doc.text);
      bruh = true;
      didItBlink[0] = 1;
    }

    if(arrayValues.length < 150){
      arrayValues.push(doc.text);
    }else{
      arrayValues.push(doc.text);
      arrayValues.shift();
    }





  });

  var anxietyValue = 0;

  var shortTermMemoryValue = 0;
  var shortTermAttentionValue = 0;

  socket.on('anxiety to website', function(doc){
    anxietyValue = doc.value;
  });
  socket.on('short term attention to website', function(doc){
    shortTermAttentionValue = doc.value;
  });
  socket.on('short term memory to website', function(doc){
    shortTermMemoryValue = doc.value;
  });

  //
  //
  // if(doc.text > 950 && doc.text<1050 && !bruh){
  //   console.log('my eyes have been closed');
  //   bruh = true;
  // }else if(doc.text < 950 && bruh){
  //   console.log('suposed to be one open');
  //   blinkCounter++;
  //   if(blinkCounter == 1){
  //     displayBlinkDot($('#firstBlinkFlash'));
  //   }else if(blinkCounter == 2){
  //     displayBlinkDot($('#secondBlinkFlash'));
  //   }
  //   else if(blinkCounter == 3){
  //     displayBlinkDot($('#thirdBlinkFlash'));
  //     socket.emit('this is a pair', {
  //       museSocketID:doc.id,
  //       userSocketID:thisID
  //     });
  //   }      bruh = false;
  // }
