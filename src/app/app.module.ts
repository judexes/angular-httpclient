import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; // import the ReactiveFormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    PostDetailsComponent,
    PostsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
