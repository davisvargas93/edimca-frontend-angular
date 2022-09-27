import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { LayoutComponent } from './layout/layout.component';
import { ProductsComponent } from './products/products.component';
import { DialogCreateProductsComponent } from './products/dialog-create-products/dialog-create-products.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { AppRoutingModule } from '../app-routing.module';
import { DialogCreatePurcharseComponent } from './purchase/dialog-create-purcharse/dialog-create-purcharse.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login/login.service';
import {ProductsService } from './products/products.service';
import { PurchaseService } from './purchase/purchase.service';




@NgModule({
  declarations: [
    LoginComponent,
    LayoutComponent,
    ProductsComponent,
    PurchaseComponent,
    DialogCreateProductsComponent,
    DialogCreatePurcharseComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers:[
    LoginService,
    ProductsService,
    PurchaseService
  ]
})
export class ComponentsModule { }
