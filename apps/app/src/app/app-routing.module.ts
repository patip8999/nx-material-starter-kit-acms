import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductsComponent} from './components/products/products.component';
import {ProductFormComponent} from './components/product-form/product-form.component';
import {DetailsComponent} from './components/details/details.component';
import {CategoriesComponent} from './components/categories/categories.component';
import {ProductsComponentModule} from './components/products/products.component-module';
import {ProductsServiceModule} from './services/products.service-module';
import {ProductFormComponentModule} from './components/product-form/product-form.component-module';
import {DetailsComponentModule} from './components/details/details.component-module';
import {CategoriesComponentModule} from './components/categories/categories.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'products', component: ProductsComponent}, {
    path: 'add-product', component: ProductFormComponent
  }, {
    path: 'product-details/:id', component: DetailsComponent}, {
    path: 'products/:category', component: CategoriesComponent
  }]), ProductsComponentModule, ProductsServiceModule, ProductFormComponentModule, DetailsComponentModule, CategoriesComponentModule],
  providers: [],
  declarations: [],
  exports: []
})
export class AppRoutingModule {
}
