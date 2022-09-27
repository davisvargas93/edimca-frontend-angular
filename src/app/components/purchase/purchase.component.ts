import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreatePurcharseComponent } from './dialog-create-purcharse/dialog-create-purcharse.component';
import { PurchaseService } from './purchase.service';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: any[] = [
  {id: 1, create_date: 'Hydrogen'},
];

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  displayedColumns: string[] = ['id', 'create_date'];
  dataSource = [];

  constructor(
    public dialog: MatDialog,
    private purchaseService:PurchaseService) { }

  ngOnInit(): void {
    this.purchaseService.getPurchaseHeader()
      .subscribe((res:any)=>{
        console.log(res);
        this.dataSource=res;
      })
  }

  openDialog(){
    const dialogRef = this.dialog.open(DialogCreatePurcharseComponent, {
      width: '80%',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.purchaseService.getPurchaseHeader()
          .subscribe((res:any)=>{
            console.log(res);
            this.dataSource=res;
        })
      }
      console.log('The dialog was closed');
    });
  }


}
