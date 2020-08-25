import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './Components/main/main.component';
import { ServicesComponent } from './Components/services/services.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MissionComponent } from './Components/mission/mission.component';
import { ContactComponent } from './Components/contact/contact.component';
import { TestimonialsComponent } from './Components/testimonials/testimonials.component';
import { SupportComponent } from './Components/support/support.component';
import { PrayerRequestComponent } from './Components/prayer-request/prayer-request.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ServicesComponent,
    HeaderComponent,
    FooterComponent,
    MissionComponent,
    ContactComponent,
    TestimonialsComponent,
    SupportComponent,
    PrayerRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
