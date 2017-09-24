function displayBlinkDot(element){
  element.css('transform', 'scale(1.0)');
}
$('.start').click(function(){
  isItValidating = true;
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
  var isItValidating = false;
  var blinkCounter = 0;
  var eyesOpen = true;

  socket.on('eyes open', function(doc){
    console.log('eyes open');


  });

var bruh = true;
  socket.on('challen', function(doc){
   if(doc.text < 950 && !bruh){
      console.log('eyes are open');
      bruh = true;
    }else if(doc.text>950, bruh){
      console.log('eyesare closed');
      bruh = false;
    }

    if(arrayValues.length < 150){
      arrayValues.push(doc.text);
    }else{
      arrayValues.push(doc.text);
      arrayValues.shift();
    }



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
