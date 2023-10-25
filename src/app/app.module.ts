import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { GridComponent } from './grid/grid.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from './form-modal/form-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxButtonGroupModule, IgxGridModule } from 'igniteui-angular';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    GridComponent,
    FormModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskDirective,
    NgxMaskPipe,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    IgxGridModule,
    IgxButtonGroupModule
  ],
  providers: [
    provideNgxMask()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
