import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './products/components/product-create/product-create.component';
import { ProductsListComponent } from './products/components/products-list/products-list.component';
import { CreateUserComponent } from './users/components/create-user/create-user.component';
import { ListComponent } from './users/components/list/list.component';
import { NotFoundComponent } from './users/components/not-found/not-found.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: 'create',
        component: CreateUserComponent
      },
      {
        path: 'edit/:id',
        component: CreateUserComponent
      },
      {
        path: '',
        component: ListComponent
      }
    ]
  },
  {
    path: 'products',
    component: UsersComponent,
    children: [
      {
        path: 'create',
        component: ProductCreateComponent
      },
      {
        path: 'edit/:id',
        component: ProductCreateComponent
      },
      {
        path: '',
        component: ProductsListComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
