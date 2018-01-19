import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ViewChild } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule,BsDropdownModule,BsDatepickerModule,AlertModule,SortableModule } from 'ngx-bootstrap';
import { BootstrapSwitchModule } from 'angular2-bootstrap-switch';
import {QuillModule} from 'ngx-quill';
import {CommonModule} from '@angular/common';
import {BreadcrumbsModule} from "ng2-breadcrumbs";
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';



// Import PrimeNG modules
import {AccordionModule} from 'primeng/primeng';
import {AutoCompleteModule} from 'primeng/primeng';
import {BreadcrumbModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/primeng';
import {CarouselModule} from 'primeng/primeng';
import {ChartModule} from 'primeng/primeng';
import {CheckboxModule} from 'primeng/primeng';
import {ChipsModule} from 'primeng/primeng';
import {CodeHighlighterModule} from 'primeng/primeng';
import {ConfirmDialogModule} from 'primeng/primeng';
import {SharedModule} from 'primeng/primeng';
import {ContextMenuModule} from 'primeng/primeng';
import {DataGridModule} from 'primeng/primeng';
import {DataListModule} from 'primeng/primeng';
import {DataScrollerModule} from 'primeng/primeng';
import {DataTableModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {DragDropModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {EditorModule} from 'primeng/primeng';
import {FieldsetModule} from 'primeng/primeng';
import {FileUploadModule} from 'primeng/primeng';
import {GalleriaModule} from 'primeng/primeng';
import {GMapModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {InputMaskModule} from 'primeng/primeng';
import {InputSwitchModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {InputTextareaModule} from 'primeng/primeng';
import {LightboxModule} from 'primeng/primeng';
import {ListboxModule} from 'primeng/primeng';
import {MegaMenuModule} from 'primeng/primeng';
import {MenuModule} from 'primeng/primeng';
import {MenubarModule} from 'primeng/primeng';
import {MessagesModule} from 'primeng/primeng';
import {MultiSelectModule} from 'primeng/primeng';
import {OrderListModule} from 'primeng/primeng';
import {OverlayPanelModule} from 'primeng/primeng';
import {PaginatorModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import {PanelMenuModule} from 'primeng/primeng';
import {PasswordModule} from 'primeng/primeng';
import {PickListModule} from 'primeng/primeng';
import {ProgressBarModule} from 'primeng/primeng';
import {RadioButtonModule} from 'primeng/primeng';
import {RatingModule} from 'primeng/primeng';
import {ScheduleModule} from 'primeng/primeng';
import {SelectButtonModule} from 'primeng/primeng';
import {SlideMenuModule} from 'primeng/primeng';
import {SliderModule} from 'primeng/primeng';
import {SpinnerModule} from 'primeng/primeng';
import {SplitButtonModule} from 'primeng/primeng';
import {StepsModule} from 'primeng/primeng';
import {TabMenuModule} from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import {TerminalModule} from 'primeng/primeng';
import {TieredMenuModule} from 'primeng/primeng';
import {ToggleButtonModule} from 'primeng/primeng';
import {ToolbarModule} from 'primeng/primeng';
import {TooltipModule} from 'primeng/primeng';
import {TreeTableModule} from 'primeng/primeng';
import {TreeModule} from 'primeng/primeng';
import {TreeNode} from 'primeng/primeng';


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
import {MenuItem} from 'primeng/primeng';


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
import { ItemsComponent } from './nomenclature/items/items.component';
import { ItemsDetailsComponent } from './nomenclature/items/items-details/items-details.component';
import { DepartmentsComponent } from './nomenclature/departments/departments.component';
import { DepartmentDetailsComponent } from './nomenclature/departments/department-details/department-details.component';
import { GestiuniComponent } from './nomenclature/gestiuni/gestiuni.component';
import { PropertiesComponent } from './nomenclature/properties/properties.component';
import { PersonComponent } from './nomenclature/person/person.component';
import { UserComponent } from './nomenclature/user/user.component';


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
  { path: 'nomenclature/properties',         component: PropertiesComponent,data: {breadcrumb: 'Nomenclatoare/Proprietati'}   },
  { path: 'nomenclature/departments',         component: DepartmentsComponent,data: {breadcrumb: 'Nomenclatoare/Departamente'}   },
  { path: 'nomenclature/departments/department-details',         component: DepartmentDetailsComponent,data: {breadcrumb: 'Nomenclatoare/Departamente/Detalii'}   },
  { path: 'nomenclature/partners',         component: PartnersComponent,data: {breadcrumb: 'Nomenclatoare/Parteneri'}   },
  { path: 'nomenclature/person',         component: PersonComponent,data: {breadcrumb: 'Nomenclatoare/Persoane'}   },
  { path: 'nomenclature/user',         component: UserComponent,data: {breadcrumb: 'Nomenclatoare/Utilizatori'}   },
  { path: 'nomenclature/items',         component: ItemsComponent,data: {breadcrumb: 'Nomenclatoare/Articole'}   },
  { path: 'nomenclature/items/items-details',         component: ItemsDetailsComponent,data: {breadcrumb: 'Nomenclatoare/Articole/Detalii'}   },
  { path: 'nomenclature/items/items-details/:ItemId',         component: ItemsDetailsComponent,data: {breadcrumb: 'Nomenclatoare/Articole/Detalii'}   },
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
    ItemsComponent,
    DepartmentsComponent,
    DepartmentDetailsComponent,
    GestiuniComponent,
    ItemsDetailsComponent,
    PropertiesComponent,
    PersonComponent,
    UserComponent,

  ],
  imports: [
        BrowserModule, 
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        AccordionModule,
        AutoCompleteModule,
        BreadcrumbModule,
        ButtonModule,
        CalendarModule,
        CarouselModule,
        ChartModule,
        CheckboxModule,
        ChipsModule,
        CodeHighlighterModule,
        ConfirmDialogModule,
        SharedModule,
        ContextMenuModule,
        DataGridModule,
        DataListModule,
        DataScrollerModule,
        DataTableModule,
        DialogModule,
        DragDropModule,
        DropdownModule,
        EditorModule,
        FieldsetModule,
        FileUploadModule,
        GalleriaModule,
        GMapModule,
        GrowlModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        LightboxModule,
        ListboxModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickListModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        ScheduleModule,
        SelectButtonModule,
        SlideMenuModule,
        SliderModule,
        SpinnerModule,
        SplitButtonModule,
        StepsModule,
        TabMenuModule,
        TabViewModule,
        TerminalModule,
        TieredMenuModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        TreeTableModule,       
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
    GrowlModule,
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
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
