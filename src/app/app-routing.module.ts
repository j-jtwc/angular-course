import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { AccountComponent } from './account/account.component';
import { UnderstandPipeComponent } from './understand-pipe/understand-pipe.component';

const routes: Routes = [
  { path: 'hello-world', component: HelloWorldComponent },
  { path: 'account', component: AccountComponent},
  { path: 'pipe', component: UnderstandPipeComponent},
  { path: 'apple', loadChildren: () => import('./apple/apple.module').then(m => m.AppleModule) },
  { path: 'cat', loadChildren: () => import('./cat/cat.module').then(m => m.CatModule) },
  { path: 'dog', loadChildren: () => import('./dog/dog.module').then(m => m.DogModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
