import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, LoginFormModule } from './shared/components';
import { AppRoutingModule } from './app-routing.module';
import { DxButtonModule, DxDataGridModule, DxDateBoxModule, DxFormModule, DxLoadIndicatorModule, DxSelectBoxModule, DxTemplateModule, DxTextAreaModule } from 'devextreme-angular';
import { DxMenuModule } from 'devextreme-angular';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { DialogComponent } from './pages/dialog/dialog.component';
import { FormComponent } from './pages/form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    TasksComponent,
    DialogComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    LoginFormModule,
    AppRoutingModule,
    DxButtonModule,
    DxMenuModule,
    DxDataGridModule,
    DxFormModule,
    DxLoadIndicatorModule,
    DxTemplateModule,
    DxSelectBoxModule,
    DxTextAreaModule,
    DxDateBoxModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
