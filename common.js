 // common.js
   // $('index').load('index.html');

   // let idx;

   // $('body header').click(function(){
   //    event.preventDefault();
   //    let pageUrl = $(this).attr('href');
      

   //    $('index').load(pageUrl);

   //    $('body header').eq(idx).removeClass('active');
   //    $(this).addClass('active');

   //    idx = $(this).index();
      

   // });

   // $('body footer').click(function(){
   //    event.preventDefault();
   //    let pageUrl = $(this).attr('href');
      

   //    $('index').load(pageUrl);

   //    $('body footer').eq(idx).removeClass('active');
   //    $(this).addClass('active');

   //    idx = $(this).index();
      

   // });

// header 
      let scrollTop;
      let offsetTop = $('header').offset().top;

         $(window).on('scroll',function(){
               scrollTop = $(window).scrollTop();

               $('header').each(function(){
                  if($(window).height()/2 > scrollTop){
                     $('header').addClass('active');
                     $('.visual p').addClass('active');
                  }else{
                     $('header').removeClass('active');
                     $('.visual p').removeClass('active');
                  }
               })
         });

// burgermenu click 
      $('header .header_fix .burger').on('click',function(){
         event.preventDefault()
         $('header .header_menu').toggleClass('active')
      });