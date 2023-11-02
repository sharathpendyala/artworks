import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ArtDisplayComponent } from './art-display/art-display.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:"",
    component:HomePageComponent
  },
  {
    path:"explore/login",
    redirectTo:"login"
  },
  {
    path:"login",
    component:LoginComponent,
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"explore/artwork/:id/redirect",
    redirectTo:'explore'
  },
  {
    path:"explore/artwork/:id",
    component:ArtDisplayComponent,
  },
  {
    path:"explore",
    component:HomeComponent
  },
  {
    path:"wishlist",
    component:WishlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
