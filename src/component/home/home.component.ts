import { Component } from '@angular/core';
declare var jQuery: any; // Declare jQuery if not typed.
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  {
  ngOnInit() {
    jQuery('.slider-container').slick({
    rtl: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,           // הפעלה אוטומטית
    autoplaySpeed: 3000,      // זמן בין שקופיות
    dots: false,               // נקודות ניווט
    arrows: true,             // הצגת חיצים
    prevArrow: '<button type="button" class="slick-prev"><</button>',
    nextArrow: '<button type="button" class="slick-next">></button>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});
}
}
