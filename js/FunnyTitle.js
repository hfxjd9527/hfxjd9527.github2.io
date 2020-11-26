<!--浏览器搞笑标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "https://pic.downk.cc/item/5fbd2ad6b18d6271135414f9.png");
         document.title = '我相信你还会回来的!';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "https://pic.downk.cc/item/5fbd2ad6b18d6271135414f9.png");
         document.title = '哈哈,我就知道！' ;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });