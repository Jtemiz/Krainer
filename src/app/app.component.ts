import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Krainer';

  ngOnInit() {
    window.addEventListener('scroll', function () {
      navbarScroll();
    });

    function navbarScroll() {
      var y = window.scrollY;
      let headerLogo = document.getElementById('headerLogo');
      if (headerLogo === null) return
      else {
        if (y < 100) {
          headerLogo.style.width = '10%';
        }
        else if (y > 200) {
          headerLogo.style.width = '5%';
        }
        else {
          headerLogo.style.width = String(15 - y/20) + '%'
        }
      }
    }
  }
}
