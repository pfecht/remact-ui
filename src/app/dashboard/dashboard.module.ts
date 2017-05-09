import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, SettingsComponent],
  exports: [HomeComponent]
})
export class DashboardModule { }
