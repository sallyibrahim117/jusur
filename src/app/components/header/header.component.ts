import { Component, signal } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { key } from '../../core/localStorage';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
language=signal<string>('en')
 constructor(private readonly __LanguageService: LanguageService) { }
 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
      this.language.set(this.__LanguageService.getLanguage());
 }
 changeLanguage(lang: string): void {
   localStorage.setItem(key.language, lang);
    this.__LanguageService.changeLang(lang);
    window.location.reload();


  }
}
