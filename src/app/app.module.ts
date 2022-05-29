import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeroJobAdComponent } from './components/ads/hero-job-ad.component';
import { AdBannerComponent } from './components/ad-banner.component';
import { HeroProfileComponent } from './components/ads/hero-profile.component';
import { AdDirective } from './directives/ad.directive';
import { AdService } from './services/ad.service';

@NgModule({
  imports: [BrowserModule],
  providers: [AdService],
  declarations: [
    AppComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

