import { NgModule } from '@angular/core';
import { MatListModule}  from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter}  from '@angular/material/core';


@NgModule({
			imports: [
				MatListModule,
				MatDividerModule,
				MatInputModule,
				MatFormFieldModule,
				MatSelectModule,
				MatDatepickerModule,
				MatButtonModule,
				MatTableModule
				

			],
			exports: [
				MatListModule,
				MatDividerModule,
				MatInputModule,
				MatFormFieldModule,
				MatSelectModule,
				MatDatepickerModule ,
				MatButtonModule,
				MatTableModule
		
			],
			providers:[provideNativeDateAdapter()],


})

export class AngularMaterialModule { 



}
