import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { key } from '../../core/config/localStorage';
import {key} from '../../app/core/localStorage';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private readonly router: Router,
    private readonly __TranslateService: TranslateService) {
  }

  isRtlLanguage(lang: string): boolean {
    const rtlLanguages = ['ar', 'en'];
    return rtlLanguages.includes(lang);
  }

  changeLang(lang: string) {
    this.__TranslateService.use(lang);
    localStorage.setItem(key.language, lang);
    // const dir = this.isRtlLanguage(lang) ? 'rtl' : 'ltr';
    const dir = window.localStorage.getItem(key.language) === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }

  // switchLang(lang: string) {
  //   const segments = this.router.url.split('/');
  //   segments[1] = lang; // Replace the locale segment
  //   const newUrl = segments.join('/');
  //   this.router.navigateByUrl(newUrl);
  // }

  setLanguage(): void {
    // if (lang) {
    //   localStorage.setItem(key.language, lang);
    // } else {
    //   localStorage.setItem(key.language, 'en');
    // }
    const lang = localStorage?.getItem(key.language);
    if (lang) {
      this.__TranslateService.setDefaultLang(lang);
      this.__TranslateService.use(lang);
      this.changeLang(lang)
      // this.__TranslateService.addLangs(lang);

    } else {
      this.__TranslateService.setDefaultLang('en');
      this.__TranslateService.use('en');
      this.changeLang('en')
    }
  }

  getLanguage(): string {
    const segments = this.router.url.split('/');
    return localStorage?.getItem(key.language) || 'en';
  }

  translateText(text: string): string {
    return this.__TranslateService.instant(text);
  }
}
