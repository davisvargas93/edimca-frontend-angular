import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreateProductsComponent } from './dialog-create-products/dialog-create-products.component';
import { ProductsService } from './products.service';

export interface PeriodicElement {

  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'price'];
  dataSource:any = [];

  constructor(
    public dialog: MatDialog,
    private productService:ProductsService) { 
      this.productService.getProcts()
        .subscribe((res:any)=>{
            console.log(res);
            this.dataSource=res;
        })
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogCreateProductsComponent, {
      width: '80%',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productService.createProct(result)
        .subscribe((res:any)=>{
          this.productService.getProcts()
            .subscribe((res:any)=>{
                console.log(res);
                this.dataSource=res;
            })
        })
      }
      console.log('The dialog was closed');
    });
  }

}
