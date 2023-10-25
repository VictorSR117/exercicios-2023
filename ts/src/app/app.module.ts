import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewTopicComponent } from './new-topic/new-topic.component';
import { ComentTopicComponent } from './coment-topic/coment-topic.component';
import { ResponseComentComponent } from './response-coment/response-coment.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTopicComponent,
    ComentTopicComponent,
    ResponseComentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
