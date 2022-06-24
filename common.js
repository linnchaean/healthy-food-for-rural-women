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

//order
      $('main .order thead tr th img').on('click',function(){
         event.preventDefault()
         $('main .order tbody tr:nth-child(1)').toggleClass('active')
         $('main .order tbody tr:nth-child(2)').toggleClass('active')
         $('main .order tbody tr:last-of-type').toggleClass('active')
      });

//popup
      $('main .order-6 tbody tr:nth-child(2) td a').on('click',function(){
         $('main .shadow').addClass('active')
         $('main .popup').addClass('active')
         $('main .popup h6').on('click',function(){
            $('main .shadow').removeClass('active')
         $('main .popup').removeClass('active')
         });
      });

      $('main .order-6 tbody tr:nth-child(3) td a').on('click',function(){
         $('main .shadow').addClass('active')
         $('main .popup-2').addClass('active')
         $('main .popup-2 h6').on('click',function(){
            $('main .shadow').removeClass('active')
         $('main .popup-2').removeClass('active')
         });
      });

      $('main .order-6 tbody tr:nth-child(4) td a').on('click',function(){
         $('main .shadow').addClass('active')
         $('main .popup-3').addClass('active')
         $('main .popup-3 h6').on('click',function(){
            $('main .shadow').removeClass('active')
         $('main .popup-3').removeClass('active')
         });
      })

