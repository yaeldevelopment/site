export default `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/x-icon" href="https://res.cloudinary.com/dv3ucnxsv/image/upload/v1738519455/aufdhkro5av0wjnnodzc.jpg">


  <title>  יעל עג'מי - מפתחת| Full Stack</title>
  

  <!-- Add the slick-theme.css if you want default styling -->
  <link rel="stylesheet" type="text/css" href="assets/lib/slick-master/slick/slick.css">
  <!-- Add the slick-theme.css if you want default styling -->

  <script src="assets/lib/jquery-3.7.1.min.js"></script>
  <script src="assets/lib/slick-master/slick/slick.min.js"></script>
  <script src="assets/lib/jquery.validate.min.js"></script>
  <script src="https://cdn.userway.org/widget.js" data-account="PKWT2JYPKI"></script>
  <script src="assets/js/ready.js"></script>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>אודות | יעל עג'מי - מפתחת Full Stack</title>
  <style>
      :root {
          --color-general: #916666;
          --color_text: #ffffff;
      }
  </style>
<style>html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}img{border:0}@media print{*,:after,:before{color:#000!important;text-shadow:none!important;background:0 0!important;-webkit-box-shadow:none!important;box-shadow:none!important}img{page-break-inside:avoid}img{max-width:100%!important}h3,p{orphans:3;widows:3}h3{page-break-after:avoid}}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}:after,:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}html{font-size:10px;-webkit-tap-highlight-color:rgba(0,0,0,0)}body{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;line-height:1.42857143;color:#333;background-color:#fff}img{vertical-align:middle}h3{font-family:inherit;font-weight:500;line-height:1.1;color:inherit}h3{margin-top:20px;margin-bottom:10px}h3{font-size:24px}p{margin:0 0 10px}@-webkit-keyframes progress-bar-stripes{0%{background-position:40px 0}to{background-position:0 0}}.hide{display:none!important}@-ms-viewport{width:device-width}h3{color:#4caf50}p{margin:.5rem 0}body{font-family:Arial,sans-serif;line-height:1.6;direction:rtl;text-align:right;font-size:21px!important}.windows{border-radius:8px;box-shadow:1px 0 5px 2px;background-color:#fff}#advertising-popup{background-position:center;background-size:cover;align-content:flex-start!important}@media (min-width: 767px){#advertising-popup{left:41%!important;width:18%!important}}div[class*=error]{color:red;font-size:18px!important;min-height:28.8px}#overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:#000000b3;display:flex;justify-content:center;align-items:center;z-index:1000}.popup{position:fixed;top:calc(50% - 200px);height:400px;display:flex;padding:15px 20px;z-index:1111111111;flex-wrap:wrap;justify-content:center;align-items:center;align-content:center}@media (min-width: 767px){.popup{left:35%;width:30%}}@media (max-width: 767px){.popup{left:0;width:100%}}.popup img{height:100px;background-position:center;background-repeat:no-repeat;background-size:cover}.popup p,.popup div{width:100%;display:block;text-align:center}.popup .popup-close,.popup .popup-advertising-close{position:absolute;top:0;left:24px;cursor:pointer;font-size:43px}.popup p{margin:0}</style><link rel="stylesheet" href="styles-62BHHV6P.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-62BHHV6P.css"></noscript></head>


<body ngcm="">
  <div id="overlay" class="hide"></div>
  <div id="success-popup" class="popup success hide windows">
      <span class="popup-close">×</span>
      <img src="https://res.cloudinary.com/dv3ucnxsv/image/upload/v1738519452/kk0ogdastbotoskdszrm.png">
      <div class="rich_text"></div>

  </div>
  <div id="error-popup" class="popup error hide windows">
      <span class="popup-close">×</span>
      <img src="https://res.cloudinary.com/dv3ucnxsv/image/upload/v1738519455/ebfp78r6qraw4z9hylji.png">
      <div class="rich_text"></div>
  </div>

  <div id="advertising-popup" style="background-image:url(https://res.cloudinary.com/dv3ucnxsv/image/upload/v1738519458/kcnxldfobotbxwlnqsyo.jpg)" class="popup advertising hide windows">
      <span class="popup-advertising-close">×</span>
      <h3 style="color: red;">מפתחת בכירה!</h3>
      <p style="color: red;">לא תקח לעסק שלך צרו עוד היום 0556722091</p>
  </div>

 
      <script>
          // הצגת פופאפ אם אין Cookie או אם הוא פג תוקף
          \$(document).ready(function () {

              let id;
              const popupShown = getCookie("promoPopup");
              if (!popupShown) {
                   id=setInterval(() => { showPopup_advertising() }, 8000);
              }
          
              \$('.popup-advertising-close').click(function () {
                  clearInterval(id);
                  \$(this).parent('.popup').fadeOut();
                  \$("#overlay").addClass("hide");
             
              });
            
            

          
                  });
              function showPopup_advertising() {
                          \$("#advertising-popup").removeClass("hide");
                          \$("#overlay").removeClass("hide");
                          setCookie("promoPopup", "true", 24);
                      }

      </script>
      
  
  <app-root></app-root>
<script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-SCSBAGIS.js" type="module"></script></body>`;