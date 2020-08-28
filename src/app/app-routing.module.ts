import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { ServicesComponent } from './Components/services/services.component';
import { MissionComponent } from './Components/mission/mission.component';
import { ContactComponent } from './Components/contact/contact.component';
import { TestimonialsComponent } from './Components/testimonials/testimonials.component';
import { SupportComponent } from './Components/support/support.component';
import { PrayerRequestComponent } from './Components/prayer-request/prayer-request.component';
import { ViewPrayerRequestsComponent } from './Components/view-prayer-requests/view-prayer-requests.component';
import { AddTestimonialComponent } from './Components/add-testimonial/add-testimonial.component';


const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'mission', component: MissionComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'testimonials', component: TestimonialsComponent},
  { path: 'support', component: SupportComponent},
  { path: 'prayer-request', component: PrayerRequestComponent},
  { path: 'view-prayer-requests', component: ViewPrayerRequestsComponent},
  { path: 'add-testimonial', component: AddTestimonialComponent},

  // if no route, redirect to home
  { path: '**', redirectTo: '' }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
