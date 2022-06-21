 // common.js
   $('index').load('index.html');

   let idx;

   $('body header').click(function(){
      event.preventDefault();
      let pageUrl = $(this).attr('href');
      

      $('index').load(pageUrl);

      $('body header').eq(idx).removeClass('active');
      $(this).addClass('active');

      idx = $(this).index();
      

   });