import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-create-products',
  templateUrl: './dialog-create-products.component.html'
})
export class DialogCreateProductsComponent implements OnInit {

  formProduct:FormGroup;

  constructor(
      public dialogRef: MatDialogRef<DialogCreateProductsComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private fb: FormBuilder) { 

        this.formProduct = this.fb.group({
          name:['', Validators.required],
          price:['', Validators.required],
        });
      }

  ngOnInit(): void {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(){
    if (!this.formProduct.valid) return;
    console.log(this.formProduct.value);
    this.dialogRef.close(this.formProduct.value);
  }

}
