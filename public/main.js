var app;
var height = $(window).height();
$(window).resize(function () {
  height = $(window).height();
});

$(window).scroll(function () {

  var pos = $(this).scrollTop();
  console.log(pos);
  $('.face').css({
    'opacity': pos / 800.00
  });

  if (pos > 5) {
    $('.wrapper').addClass('anim-bg');
  }
  // name	
  if (pos > height / 2) {
    $('#name .title-1 h1').removeClass('hidden');
    $('#name .title-1 h3').removeClass('hidden');
    $('#name .title-1 h5').removeClass('hidden');
  }
  // bear
  if (pos > height * 1) {
    var offset = Math.min(0, pos - $('#bear').offset().top + $(window).height() - 900).toFixed();

    $('#bear .bg-t').css({ 'transform': 'translate(0px, ' + Math.abs(offset * 0.3) + 'px)' });

    $('#bear .title-1').css({
      'transform': 'translate(0px, ' + Math.abs((pos - $('#bear').offset().top) / 15) + '%)'
    });

    $('#bear .title-1 h1').removeClass('hidden');
    $('#bear .title-1 h3').removeClass('hidden');
    $('#bear .title-1 h5').removeClass('hidden');
  }
  // dev
  if (pos > height * 2.5) {

    $('#developer .title-1').css({
      'transform': 'translate(0px, ' + Math.abs((pos - $('#developer').offset().top) / 15) + '%)'
    });

    $('#developer .face img').css({
      'transform': 'translate(0px, ' + Math.abs((pos - $('#developer').offset().top) / 15) + '%)'
    });

    $('#developer .iam').removeClass('hidden');
    $('#developer .title-1').removeClass('hidden');
    $('#developer .title-1 h1').removeClass('hidden');
    $('#developer .title-1 h3').removeClass('hidden');
    $('#developer .title-1 h5').removeClass('hidden');
  }
  //designer
  if (pos > height * 3.5) {
    $('#designer .iam').removeClass('hidden');
    $('#designer .title-1 h1').removeClass('hidden');
    $('#designer .title-1 h3').removeClass('hidden');
    $('#designer .title-1 h5').removeClass('hidden');
  }
  //producer
  if (pos > height * 4.5) {
    $('#producer .iam').removeClass('hidden');
    $('#producer .title-1 h1').removeClass('hidden');
    $('#producer .title-1 h3').removeClass('hidden');
    $('#producer .title-1 h5').removeClass('hidden');
  }
  //musician
  if (pos > height * 5.5) {
    $('#musician .iam').removeClass('hidden');
    $('#musician .title-1 h1').removeClass('hidden');
    $('#musician .title-1 h3').removeClass('hidden');
    $('#musician .title-1 h5').removeClass('hidden');
  }
  //me
  if (pos > height * 6.5) {
    $('#me .iam').removeClass('hidden');
    $('#me .title-1 h1').removeClass('hidden');
    $('#me .title-1 h3').removeClass('hidden');
    $('#me .title-1 h5').removeClass('hidden');
  }

  //   $('.logo').css({
  //     'transform' : 'translate(0px, '+ wScroll /2 +'%)'
  //   });

  //   $('.back-bird').css({
  //     'transform' : 'translate(0px, '+ wScroll /4 +'%)'
  //   });

  //   $('.fore-bird').css({
  //     'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
  //   });

  // }

  // // Landing Elements
  // if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {

  //   $('.clothes-pics figure').each(function(i){

  //     setTimeout(function(){
  //       $('.clothes-pics figure').eq(i).addClass('is-showing');
  //     }, (700 * (Math.exp(i * 0.14))) - 700);
  //   });

  // }

  // // Promoscope
  // if(wScroll > $('.large-window').offset().top - $(window).height()){

  //   $('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'});

  //   var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5);

  //   $('.window-tint').css({'opacity': opacity});

  // }

  // // Floating Elements

  // if(wScroll > $('.blog-posts').offset().top - $(window).height()){

  //   var offset = (Math.min(0, wScroll - $('.blog-posts').offset().top +$(window).height() - 350)).toFixed();

  //   $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

  //   $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

  // }
});