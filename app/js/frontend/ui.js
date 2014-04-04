jQuery(function ($) {

  // Maximize, minimize
  $('.btn-os.max').on('click', function () {
    if(win.isFullscreen){
      win.toggleFullscreen();
    }else{
      if (screen.availHeight <= win.height) {
        win.unmaximize();
      }
      else {
          win.maximize();
      }
    }
  });

  $('.btn-os.min').on('click', function () {
    win.minimize();
  });

  $('.btn-os.close').on('click', function () {
    win.close();
  });

  $('.btn-os.fullscreen').on('click', function () {
    win.toggleFullscreen();
    $('.btn-os.fullscreen').toggleClass('active');
  });

});