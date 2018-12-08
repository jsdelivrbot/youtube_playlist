(function() {
  var url = "https://cdn.jsdelivr.net/gh/zaius/youtube_playlist/youtube_playlist.min.js";
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  var head = document.getElementsByTagName('head')[0];
  head.appendChild(script);
})();
