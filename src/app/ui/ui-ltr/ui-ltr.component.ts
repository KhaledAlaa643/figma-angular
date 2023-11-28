import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiService } from '../ui.service';
import { ChartModule } from 'primeng/chart';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ui-ltr',
  standalone: true,
  imports: [CommonModule,ChartModule,FormsModule,MatPaginatorModule,NgbPaginationModule],
  templateUrl: './ui-ltr.component.html',
  styleUrl: './ui-ltr.component.css'
})
export class UiLtrComponent {
  data: any;
  isChecked: boolean = true;
  itemsPerPage = 4;
  page = 1;
  dataItems!: number;
  pageSizeOptions!: any
  options: any;
  selectedData: any[] = [];


  constructor(private renderer: Renderer2, private el: ElementRef, private uiService: UiService) {
    this.pageSizeOptions = [5, 10, 50, 100]
    this.selectedData = this.uiService.getDataEng()
  }



  ngOnInit() {
    this.data = {
      labels: ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ],
      datasets: [
        {
          data: [80, 86, 83, 87, 85, 90, 85, 95, 82, 75, 85, 80],
          fill: false,
          borderColor: '#8A74F9',
          tension: 0.4,
        },
        
      ]
    },
      this.options = {
        plugins: {
          legend: {
            display: false
          }
        }
      }
    this.dataItems = this.itemsPerPage;
  }
  
  
  onPageChange(event: any, resetOption: boolean = true) {
    this.dataItems = event.pageSize;
    this.updateData(resetOption);
  }
  ngAfterViewInit() {

    const element = this.el.nativeElement.querySelector('#mat-paginator-page-size-label-0');
    this.renderer.setProperty(element, 'innerText', `Show`);
    this.renderer.setStyle(element, 'font-family', 'Neo-Sans-Arabic-Medium');
    this.renderer.setStyle(element, 'font-size', '10.5');
    
    const element2 = this.el.nativeElement.querySelector('.mat-mdc-paginator-range-label');
    this.renderer.setProperty(element2, 'innerText', `From ${this.uiService.getDataEng().length}`);
    this.renderer.setStyle(element2, 'font-family', 'Neo-Sans-Arabic-Medium');
    this.renderer.setStyle(element2, 'font-size', '10.5');

  }
  get pagedData() {
    const startIndex = (this.page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.selectedData.slice(startIndex, endIndex);
  }

  updateData(resetOption: boolean = true) {
    if (resetOption) {
      this.selectedData = [];
    }
    for (let i = 0; i < Math.min(this.dataItems, this.uiService.getDataEng().length); i++) {
      this.selectedData.push(this.uiService.getDataEng()[i]);
    }
    return this
  }
}