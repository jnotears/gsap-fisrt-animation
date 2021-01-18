import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FadeInAnimationDirective } from './directives/gsap/fade-in-animation.directive';
import { NgIfAnimatedDirective } from './directives/structural-directives/ngIf-animated.directive';

@NgModule({
  declarations: [
    AppComponent,
    FadeInAnimationDirective,
    NgIfAnimatedDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
