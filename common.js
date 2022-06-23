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
                  if(offsetTop <= scrollTop){
                     $('header').addClass('active');
                     $('.visual p').addClass('active');
                  }else{
                     $('header').removeClass('active');
                     $('.visual p').removeClass('active');
                  }
               })
         });


// burgermenu click 
      $('.burger').on('click',function(){
         $('header_menu').addClass('active')
      })