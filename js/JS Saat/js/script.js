function saat() {
     
      setInterval( function() {
      var saniye = new Date().getSeconds();
      var sDerece = seconds * 6;
      var sRotate = "rotate(" + sDerece + "deg)";
      
      //$("#sec").css({ "transform": srotate });
      document.getElementById("sec").style="transform :" + sRotate;
      
      setInterval( function() {
      var hours = new Date().getHours();
      var mins = new Date().getMinutes();
      var hDerece = hours * 30 + (mins / 2);
      var hRotate = "rotate(" + hDerece + "deg)";
      
      document.getElementById("hours").style="transform :" + hRotate;

      setInterval( function() {
      var mins = new Date().getMinutes();
      var mDerece = mins * 6;
      var mRotate = "rotate(" + mDerece + "deg)";
      
     document.getElementById("mins").style="transform :" + mRotate;

 
});

saat();