import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ViewChild } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ButtonsModule,BsDropdownModule,BsDatepickerModule,AlertModule,SortableModule } from 'ngx-bootstrap';
import { BootstrapSwitchModule } from 'angular2-bootstrap-switch';
import {EditorModule} from 'primeng/primeng';
import {SharedModule} from "primeng/components/common/shared";
import {QuillModule} from 'ngx-quill';
import {CalendarModule} from 'primeng/primeng';
import {FileUploadModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {CommonModule} from '@angular/common';
import {DataTableModule} from 'primeng/primeng';
import {SliderModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {InputSwitchModule} from 'primeng/primeng';
import {SelectButtonModule} from 'primeng/primeng';
import {SpinnerModule} from 'primeng/primeng';
import {CheckboxModule} from 'primeng/primeng';
import {BreadcrumbModule} from 'primeng/primeng';
import {BreadcrumbsModule} from "ng2-breadcrumbs";

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';


import * as $ from 'jquery';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PanelMenuModule,MenuItem,TabViewModule} from 'primeng/primeng';
import {SidebarModule} from 'primeng/primeng';
import {MultiSelectModule} from 'primeng/primeng'

import { ContractModuleComponent } from './contract-module/contract-module.component';
import { GeneralComponent } from './contract-module/general/general.component';
import { FinancialComponent } from './contract-module/financial/financial.component';
import { DocumentsComponent } from './contract-module/documents/documents.component';
import { HistoryComponent } from './contract-module/history/history.component';
import { AlertsComponent } from './contract-module/alerts/alerts.component';
import { TasksComponent } from './contract-module/tasks/tasks.component';
import { ListComponent } from './contract-module/list/list.component';
import { StatisticComponent } from './contract-module/statistic/statistic.component';
import { InvoiceModuleComponent } from './invoice-module/invoice-module.component';
import { SalesListComponent } from './invoice-module/sales-list/sales-list.component';
import { PurchaseListComponent } from './invoice-module/purchase-list/purchase-list.component';
import { SalesInvoiceComponent } from './invoice-module/sales-invoice/sales-invoice.component';
import { PurchaseInvoiceComponent } from './invoice-module/purchase-invoice/purchase-invoice.component';
import { NomenclatureComponent } from './nomenclature/nomenclature.component';
import { PartnersDetailsComponent } from './nomenclature/partners/partners-details/partners-details.component';
import { PartnersComponent } from './nomenclature/partners/partners.component';


export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'list', component: ListComponent, data: {breadcrumb: 'Contracte'} },
  { path: 'list/contract-general',      component: GeneralComponent, data: {breadcrumb: 'Contracte/General'}  },
  { path: 'list/contract-financial',      component: FinancialComponent,data: {breadcrumb: 'Contracte/Financiar'}    },
  { path: 'list/contract-documents',      component: DocumentsComponent,data: {breadcrumb: 'Contracte/Documente'}   },
  { path: 'list/contract-tasks',          component: TasksComponent,data: {breadcrumb: 'Contracte/Task'}   },
  { path: 'list/contract-history',        component: HistoryComponent,data: {breadcrumb: 'Contracte/Istoric'}    },
  { path: 'list/contract-alerts',         component: AlertsComponent,data: {breadcrumb: 'Contracte/Alerte'}   },
  { path: 'nomenclature',         component: NomenclatureComponent,data: {breadcrumb: 'Nomenclatoare'}   },
  { path: 'nomenclature/partners',         component: PartnersComponent,data: {breadcrumb: 'Nomenclatoare/Parteneri'}   },
  { path: 'nomenclature/partners/partners-details',         component: PartnersDetailsComponent,data: {breadcrumb: 'Nomenclatoare/Parteneri/Detalii'}   },
  { path: 'nomenclature/partners/partners-details/:PartnerId',         component: PartnersDetailsComponent,data: {breadcrumb: 'Nomenclatoare/Parteneri/Detalii'}   },
  { path: 'invoice-module/list/purchase-invoice',component: PurchaseInvoiceComponent },
  { path: 'list/contract-statistic',component: StatisticComponent },
  ]


@NgModule({
  declarations: [
    AppComponent,
    ContractModuleComponent,
    GeneralComponent,
    FinancialComponent,
    DocumentsComponent,
    HistoryComponent,
    AlertsComponent,
    TasksComponent,
    ListComponent,
    StatisticComponent,
    InvoiceModuleComponent,
    SalesListComponent,
    PurchaseListComponent,
    SalesInvoiceComponent,
    PurchaseInvoiceComponent,
    NomenclatureComponent,
    PartnersDetailsComponent,
    PartnersComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    AlertModule.forRoot(),
    SortableModule.forRoot(),
    BootstrapSwitchModule.forRoot(),
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    EditorModule,
    SharedModule,
    QuillModule,
    CalendarModule,
    FileUploadModule,
    DialogModule,
    PanelMenuModule,
    TabViewModule,
    SidebarModule,
    DataTableModule,
    SliderModule,
    DropdownModule,
    MultiSelectModule,
    MatAutocompleteModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    InputSwitchModule,
    SelectButtonModule,
    SpinnerModule,
    CheckboxModule,
    BreadcrumbsModule,
    BreadcrumbModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
