import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {myObject } from '../ui/i18n/language'
@Injectable({
  providedIn: 'root'
})
export class UiService {
  data: any = {};
  language!:string
  languageOptionsAr = [
    { id: 'ar', name: 'عربي' },
    { id: 'en', name: 'English' },
  ];
  languageOptionsEn = [
    { id: 'en', name: 'English' },
    { id: 'ar', name: 'عربي' },
  ];
constructor() {
  this.data = myObject;
}
  selectedLanguageSubject = new BehaviorSubject<string>('ar');
  selectedLanguage$ = this.selectedLanguageSubject.asObservable();
  
  updateSelectedLanguage(language: string): any {
    this.selectedLanguageSubject.next(language);
    return this.data[language]
  }
  getLanguageFile() {
    return myObject
  }
  getlanguageOptions() {
    this.language = this.selectedLanguageSubject.getValue()
    if (this.language == "ar") {
      return this.languageOptionsAr
    } else return this.languageOptionsEn
    }
}
