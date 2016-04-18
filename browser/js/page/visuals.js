$( document ).ready(function() {

  var height= $(window).height()
  $( window ).resize(function() {
  	height= $(window).height()
  });


  $('#resumelink').on('click', function(){
    $('#resume').removeClass('hidden')
  })
  $('#closeRes').on('click', function(){
    $('#resume').addClass('hidden')
  })

  $(window).scroll(function(){

    	var pos = $(this).scrollTop();
    	// console.log(pos)
  	$('.face').css({
  		'opacity': pos/800.00
  	});

    	if(pos>5){
  	  	$('.wrapper').addClass('anim-bg')
        $('#welcome .info').removeClass('hidden')
    	}
    // name	
    	if(pos>height/2){
    		$('#name .title-1 h1').removeClass('hidden')
    		$('#name .title-1 h3').removeClass('hidden')
    		$('#name .title-1 h5').removeClass('hidden')
    	}
    // bear
    	if(pos>height*1){
    		var offset = (Math.min(0, pos - $('#bear').offset().top +$(window).height() - 900)).toFixed();

      	$('#bear .bg-t').css({'transform': 'translate(0px, '+ Math.abs(offset * 0.3) +'px)'});

  	    $('#bear .title-1').css({
  	    	'transform' : 'translate(0px, '+ Math.abs((pos-$('#bear').offset().top) /15) +'%)'
  	    });


  	  	$('#bear .title-1 h1').removeClass('hidden')
  	  	$('#bear .title-1 h3').removeClass('hidden')
  	  	$('#bear .title-1 h5').removeClass('hidden')
    	}
    	// dev
  	if(pos>height*2.5){

  	    $('#developer .title-1').css({
  	    	'transform' : 'translate(0px, '+ Math.abs((pos-$('#developer').offset().top) /15) +'%)'
  	    });
   
  	    $('#developer .face img').css({
  	    	'transform' : 'translate(0px, '+ Math.abs((pos-$('#developer').offset().top) /15) +'%)'
  	    });

    		$('#developer .iam').removeClass('hidden')
    		$('#developer .title-1').removeClass('hidden')
    		$('#developer .title-1 h1').removeClass('hidden')
    		$('#developer .title-1 h3').removeClass('hidden')
    		$('#developer .title-1 h5').removeClass('hidden')
  	}	
    	//designer
  	if(pos>height*3.5){
      $('#designer .title-1').css({
      	'transform' : 'translate(0px, '+ Math.abs((pos-$('#designer').offset().top) /8) +'px)'
      });
      $('#designer .web').css({
      	'transform' : 'translate(0px, '+ Math.abs((pos-$('#designer').offset().top) /5) +'px)'
      });	 

      $('.apps span').each(function(i){
        setTimeout(function(){
        	// console.log('hide')
          $('.apps span').eq(i).removeClass('hidden');
        }, i*400);

      });

      $('.apps span').each(function(i){
        setTimeout(function(){
          $('.apps span').eq(i).removeClass('animated');
        }, 2700);
      });
      setTimeout(function(){
          $('.apps').addClass('float');

      }, 2500)

  		$('#designer .iam').removeClass('hidden')
  		$('#designer .title-1 h1').removeClass('hidden')
  		$('#designer .web').removeClass('hidden')
  		$('#designer .iphone').removeClass('hidden')
  	}
    	//producer
    	// if(pos>height*4.5){
    	// 	$('#producer .iam').removeClass('hidden')
    	// 	$('#producer .title-1 h1').removeClass('hidden')
    	// 	$('#producer .title-1 h3').removeClass('hidden')
    	// 	$('#producer .title-1 h5').removeClass('hidden')
    	// }  	
    	//musician
    // 	if(pos>height*5.5){
  		// $('#musician .iam').removeClass('hidden')
    // 		$('#musician .title-1 h1').removeClass('hidden')
    // 		$('#musician .title-1 h3').removeClass('hidden')
    // 		$('#musician .title-1 h5').removeClass('hidden')
    // 	}
    	//me
    	if(pos>height*4.5){
    		$('#me .iam').removeClass('hidden')
    		$('#me .title-1 h1').removeClass('hidden')
    		$('#me .title-1 h3').removeClass('hidden')
    		$('#me .title-1 h5').removeClass('hidden')
    	}

      if(pos>height*5.1){
        var offset5=pos-(height*5.1);

        $('#education .contain').css({
          'transform' : 'translate(0px, '+ Math.abs(offset5 * 0.4) +'px)'
        });
         
      }

      if(pos>height*5){
        var offset6=pos-(height*5);

        $('#links').css({
          'opacity': offset6/(height/2)
        });
        $('footer h1').css({
          'opacity': offset6/(height/2)
        }); 
    	}

  });
});