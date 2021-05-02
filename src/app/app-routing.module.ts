import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {UpdateComponent} from './update/update.component';
import {RegisterComponent} from './register/register.component';
import {NewDiscussionComponent} from './new-discussion/new-discussion.component';
import {DeleteComponent} from './delete/delete.component';
import {DetailComponent} from './detail/detail.component';
import {PostListComponent} from './post-list/post-list.component';
import {LogoutComponent} from './logout/logout.component';
import {PostListUserComponent} from './post-list-user/post-list-user.component'


const routes: Routes = [
  { path: '', redirectTo: '/gamezonehome', pathMatch: 'full' },
  { path: 'main', component: PostListComponent },
  { path: 'my-post', component: PostListUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'update/:object_id', component: UpdateComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'new-discussion', component: NewDiscussionComponent },
  { path: 'delete/:object_id', component: DeleteComponent},
  { path: 'detail/:object_id', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
