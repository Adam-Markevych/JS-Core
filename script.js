$(function(){
      let n;
      let sec = 60;
      let min = 3;
      let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
      let check = true;
      let parent = $("#start");
      let divs = parent.children();
      parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);

function time(){
      $('.btn-start-game').attr('disabled', true);
      $('.btn-check-result').removeAttr('disabled');
     clearInterval(n);
      n = setInterval(() => {
            sec--;
            if(sec == 59) min--;
            if(sec > 0){
                  $('.time').html(`${min}:${sec}`);
                  $('span').html(`${min}:${sec}`);
            }
            if (sec < 10){
                  $('.time').html(`${min}:0${sec}`); 
                  $('span').html(`${min}:0${sec}`);
            } 
            if(sec == 0) seс = 60;
            if(min < 10){
                  $('.time').html( `0${min}:${sec}`);
                  $('span').html( `0${min}:${sec}`);
                  if(sec < 10) {
                        $('.time').text(`0${min}:0${sec}`);
                        $('span').text(`0${min}:0${sec}`);
                  }
            }
            if(sec == 0) sec = 60;
            if(min == -1){
                  clearInterval(n);
                  $('.time').text(`00:00`);
                  $('span').text(`00:00`);
                  $('.time-lost').css({
                        display: 'block',
                  })
            }
      }, 1000);

}

 $('.end-puzzle').droppable({
      accept: '.arsenal',
      drop: time,
})
$('.box').sortable({
      connectWith: '.start-puzzle, .end-arsenal',  
})

$('.btn-new-game').on('click',function(){
      clearInterval(n);
      parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
      min = 3;
      sec = 60;
      $('.btn-start-game').removeAttr('disabled');
      $('.btn-check-result').attr('disabled',true);
      $('.time').text(`03:00`);
      $('.arsenal').appendTo($('.start-puzzle'));
      
})

$('.btn-start-game').on('click',function(){
      $('.btn-start-game').attr('disabled', true);
      $('.btn-check-result').removeAttr('disabled');
      $('.time').text(`${min}:00`);
      $('span').text(`${min}:00`);
      time();
      console.log('general')
})

$('.btn-close').on('click',function(){
      $('.time-lost').css({
            display: 'none',
      })
      $('.check-box').css({
            display: 'none',
      })
})
$('.btn-check-result').on('click',function(){
      $('.check-box').css({
            display: 'block',
      })
})
$('.btn-check').on('click', function(){
      for(let i=0; i<$('.arsenal').length; i++){
          if($('.arsenal p').eq(i).text() != numbers[i]){
              check = false;
              break;
          }
      }
      if(check){
      $('.check-box').css({
            display: 'none',
      })
      $('.you-win').css({
            display: 'block',
      })
      clearInterval(n);
      }
      else{
      $('.check-box').css({
            display: 'none',
      })
      $('.you-lost').css({
            display: 'block',
      })
      clearInterval(n);
      }
      check = true;
  })

})


