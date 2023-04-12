import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-portofolio';

  ngOnInit() {
    // header
    window.onscroll = () => {
      const header = document.querySelector('header');

      if (header) {
        const fixedNav = header?.offsetTop;

        if (window.pageYOffset > fixedNav) {
          header.classList.add('navbar-fixed');
        } else {
          header.classList.remove('navbar-fixed');
        }
      }
    };

    // hamburger menu
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');

    hamburger?.addEventListener('click', () => {
    hamburger?.classList.toggle('hamburger-active');
    navMenu?.classList.toggle('hidden')
    });
  }
}
