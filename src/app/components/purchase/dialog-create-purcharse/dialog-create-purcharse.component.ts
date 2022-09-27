import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductsService } from '../../products/products.service';
import { PurchaseService } from '../purchase.service';

@Component({
  selector: 'app-dialog-create-purcharse',
  templateUrl: './dialog-create-purcharse.component.html',
  styleUrls: ['./dialog-create-purcharse.component.css']
})
export class DialogCreatePurcharseComponent implements OnInit {

  numberFile:number=0;
  formPurchase:FormGroup;
  listProduct:any = []
  priceList:any=[]
  totalList:any=[]
  constructor(
    public dialogRef: MatDialogRef<DialogCreatePurcharseComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private fb: FormBuilder,
      private productsService:ProductsService,
      private purchaseService:PurchaseService
  ) {
    this.productsService.getProcts()
      .subscribe((res:any)=>{
        this.listProduct=res;
      })
    this.formPurchase = this.fb.group({
      purchaseHeader: [{create_date:new Date().toString()}],
      purchaseDetail:this.fb.array([])
    });
   }

  ngOnInit(): void {  
  }
  get getDetail(){
    return this.formPurchase.get('purchaseDetail') as FormArray;
  }
  save(){
    console.log(this.formPurchase.value);
    this.purchaseService.createPurchaseHeaderDetail(this.formPurchase.value)
      .subscribe((res:any)=>{
        console.log(res);
        this.dialogRef.close(res);
      })
    
  }
  addDetail() {
    const control = <FormArray>this.formPurchase.controls['purchaseDetail'];
    control.push(this.fb.group({
      id_product:[{ value: '', disabled: false }, Validators.required],
      create_date:[{ value:new Date().toString(), disabled: false }],
      amount:[{ value: 0, disabled: false }, Validators.required]
    }))
  }
  selectProduct($value:any,index:number){
    let find:any = this.listProduct.find((prod:any) => prod.id == $value);
    this.priceList[index]= find.price;
  }
  amountChange($value:any,index:number){
    this.totalList[index]= this.priceList[index] * $value; 
  }
}
