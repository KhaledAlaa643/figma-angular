import { Component, OnInit } from '@angular/core';
import { UiService } from '../../ui.service';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'card',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  translations: any = {};
  selectedLanguage!: string;
  direction!: string;
  languageSubscription!: Subscription;
  data: any = {};

  constructor(private uiService: UiService) {}
  ngOnInit(): void {
        // 1.subscribe on method to get the language and file from service
        this.languageSubscription = this.uiService.selectedLanguage$.subscribe((language: string) => {
          this.selectedLanguage = language;
          this.translations = this.uiService.getLanguageFile()
          this.data = this.translations[this.selectedLanguage]["card"]

          // 2.save the new direction value
          this.selectedLanguage == "ar" ? this.direction = "rtl" : this.direction = "ltr"          
      });
  }
  isRtl(): boolean {
    return this.direction === 'rtl';
  }
}
