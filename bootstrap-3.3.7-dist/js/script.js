// even pada saat link di klik
$('.page-scroll').on('click', function(e){

    // ambil isi href
         var tujuan = $(this).attr('href');

    // tangkap elemen yang bersangkutan
         var elemenTujuan = $(tujuan);

     // pindahkan scroll
     // keliuar dari tutor 
     window.scrollTo(window.scrollX, elemenTujuan.offset().top -50)
    
          e.preventDefault();
});


// PARALAX
// ABOUT
$(window).on('load', function() {
     $('.pkiri').addClass('pmuncul');
     $('.pkanan').addClass('pmuncul');
});

window.onscroll = function() {
     var wScroll = window.scrollY

// JUMBOTRON
     $('.jumbotron img').css({
          'transform' : 'translate(0px, '+ wScroll/4 +'%)'
     })

     $('.jumbotron h1').css({
          'transform' : 'translate(0px, '+ wScroll/2 +'%)'
     })

     $('.jumbotron p').css({
          'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
     })


// PORTFOLIO
     
     if( wScroll > $('.portfolio').offset().top -200 ) {
     
     $('.portfolio .thumbnail').each(function(i) {
          setTimeout(function(){
               $('.portfolio .thumbnail').eq(i).addClass('muncul');
          }, 300 * i+1)

     })
     }

};




