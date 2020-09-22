import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestModule} from './main/test/test.module'

const routes: Routes = [
  {
    path      : 'test',
    component : TestModule,
    // redirectTo: 'test'
  }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),


    TestModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
