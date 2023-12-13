import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table'; 
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        RouterModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgxPaginationModule,
        NgScrollbarModule,
        ChartModule,
        TableModule,
        NgbModule,
        FormsModule,
        MatPaginatorModule,
        NgbPaginationModule
        
    ]
})
export class AppModule { }
