import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';
import{AppRoutingModule} from './app-routing/app-routing.module';
import { MaterialModule } from './material/material.module';
import{ FormsModule } from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogOverviewComponent,
    DialogComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule
  ],
  entryComponents: [DialogOverviewComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
