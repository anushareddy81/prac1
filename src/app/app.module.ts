import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Anusha } from './home/hone.component';
import { AboutModule } from './about/about.module';
import { About } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,Anusha,About
  ],
  imports: [
    BrowserModule,AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  title = "my";

}
                                                                                                                                                                                    

