import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private router: Router,
    public translateService: TranslateService
  ) {
    translateService.setDefaultLang('fr');
    translateService.addLangs(['en', 'fr']);
    const browserLang = translateService.getBrowserLang();
    translateService.use(browserLang.match(/en|fr/) ? browserLang : 'fr');
  }

  ngOnInit(): void {}
  changeLang(newLang: string) {
    console.log(newLang);
    this.translateService.use(newLang.match(/en|fr/) ? newLang : 'fr');
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
