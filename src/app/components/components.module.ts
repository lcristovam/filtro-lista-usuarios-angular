import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import { FilterComponent } from './filter/filter.component';
import { CommonModule } from "@angular/common";
import { UserlistComponent } from './userlist/userlist.component';
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { UserDetailsComponent } from './user-details/user-details.component';

import { PipesModule } from "../pipes/pipes.module";


@NgModule({
    declarations: [
    UserDetailsComponent,
    FilterComponent,
    UserlistComponent,
      
    
  ],
    imports: [
        AngularMaterialModule,
        FormsModule,
        CommonModule,
        PipesModule

      
        


    ],
    exports: [
        UserDetailsComponent,
        FilterComponent,
        UserlistComponent,
        PipesModule
      
      
    ]


})

export class ComponentsModule {



}