import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatButtonModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatTabsModule,
  MatDialogModule,
  MatSnackBarModule,
  MatNativeDateModule
} from '@angular/material';

import { TemplateComponent } from './template/template.component';
import { DatatableComponent } from './datatable/datatable.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { QuestionComponent } from './question/question.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './detail/detail.component';
import { ResponseComponent } from './response/response.component';

import { FormstatsService } from './formstats.service';

import 'hammerjs';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';

const appRoutes: Routes = [
  { path: 'detail/:id', component: DetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    DatatableComponent,
    LoginComponent,
    FormComponent,
    QuestionComponent,
    DashboardComponent,
    DetailComponent,
    ResponseComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatTableModule,
    CdkTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatTabsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FormstatsService],
  entryComponents: [FormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
