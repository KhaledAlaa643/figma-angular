import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiService } from '../ui.service';
import { ChartModule } from 'primeng/chart';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ui-rtl',
  standalone: true,
  imports: [CommonModule,ChartModule,FormsModule,MatPaginatorModule,NgbPaginationModule],
  templateUrl: './ui-rtl.component.html',
  styleUrl: './ui-rtl.component.css'
})
export class UiRtlComponent {
  data: any;
  isChecked: boolean = true;
  itemsPerPage = 4;
  page = 1;
  dataItems!: number;
  pageSizeOptions!:any
  options: any;
  selectedData: any[] = [];

  constructor(private renderer: Renderer2, private el: ElementRef,private uiService: UiService) { 
    this.pageSizeOptions = [5, 10, 50, 100]
    this.selectedData = this.uiService.getData()
  }
  
  ngOnInit() {
    this.data = {
      labels: [
        'ديسمبر', 'نوفمبر', 'اكتوبر', 'سبتمبر', 'اغسطس', 'يوليو',
        'يونيو', 'مايو', 'ابريل', 'مارس', 'فبراير', 'يناير'],
      datasets: [
        {
          data: [80, 85, 75, 82, 95, 85, 90, 85, 87, 83, 86, 80],
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
    this.renderer.setProperty(element, 'innerText', `من أصل ${this.uiService.getData().length}`);
    this.renderer.setStyle(element, 'font-family', 'Neo-Sans-Arabic-Medium');
    this.renderer.setStyle(element, 'font-size', '10.5');
    
    const element2 = this.el.nativeElement.querySelector('.mat-mdc-paginator-range-label');
    this.renderer.setProperty(element2, 'innerText', "عرض");
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
      for (let i = 0; i < Math.min(this.dataItems, this.uiService.getData().length); i++) {
        this.selectedData.push(this.uiService.getData()[i]);
      }
    return this.selectedData;

  }
}
