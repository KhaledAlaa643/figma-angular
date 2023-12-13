import { Component, OnInit, ViewChild } from '@angular/core';
import { UiService } from '../ui.service';
import { MyTableComponent } from './my-table/my-table.component';
import { Subscription } from 'rxjs';
import { CardComponent } from "./card/card.component";
import { ChartComponent } from "./chart/chart.component";

@Component({
    selector: 'dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [CardComponent, ChartComponent, MyTableComponent]
})
export class DashboardComponent implements OnInit{
  translations: any = {};
  selectedLanguage!: string;
  languageSubscription!: Subscription;
  data: any = {};
  direction!: string
  languageOptions: any = {}
  @ViewChild(MyTableComponent) tableComponent!: MyTableComponent;

  constructor(private uiService:UiService) {}
  ngOnInit(): void {
       // 1.subscribe on method to get the language and file from service
        this.languageSubscription = this.uiService.selectedLanguage$.subscribe((language: string) => {
          this.selectedLanguage = language;
          this.translations = this.uiService.getLanguageFile()
          this.data = this.translations[this.selectedLanguage]["dashboard"]

        // 2.save the new direction value
          this.selectedLanguage =="ar" ? this.direction = "rtl" : this.direction = "ltr"
        });

        // get the language from service
        this.languageOptions = this.uiService.getlanguageOptions()  
    
  } // end of ngOninit

  // change the direction based on language
  onLanguageChange(event: any): void {
    const selectedLanguage = event.target.options[event.target.selectedIndex].id;
    this.uiService.updateSelectedLanguage(selectedLanguage);

  }
  
  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
  }
}
