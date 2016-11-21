import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main.component';
import { CustomerService } from '../shared/customer/index';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [MainComponent],
  exports: [MainComponent],
  providers: [CustomerService]
})
export class MainModule { }
