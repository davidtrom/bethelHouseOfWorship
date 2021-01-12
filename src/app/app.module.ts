import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
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
import { PrayerRequestComponent } from './Components/add-prayer-request/prayer-request.component';
import { AddTestimonialComponent } from './Components/add-testimonial/add-testimonial.component';
import { ViewPrayerRequestsComponent } from './Components/view-prayer-requests/view-prayer-requests.component';
import { LoginComponent } from './Components/login/login.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { PrayerRequestReviewComponent } from './Components/prayer-request-review/prayer-request-review.component';
import { TestimonialReviewComponent } from './Components/testimonial-review/testimonial-review.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { JwtInterceptor } from './Helpers/JwtInterceptor';
//import { JwtModule } from '@auth0/angular-jwt';


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
    PrayerRequestComponent,
    AddTestimonialComponent,
    ViewPrayerRequestsComponent,
    LoginComponent,
    AdminDashboardComponent,
    PrayerRequestReviewComponent,
    TestimonialReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
