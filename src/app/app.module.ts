import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccordionComponent } from './accordion/accordion.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FieldsComponent } from './fields/fields.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    FormBuilderComponent,
    FieldsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
