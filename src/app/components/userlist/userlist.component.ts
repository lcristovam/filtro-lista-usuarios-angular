import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersList } from '../../data/users-list';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
            selector: 'app-userlist',
            templateUrl: './userlist.component.html',
            styleUrl: './userlist.component.scss'
})
export class UserlistComponent {
         
          displayedColumns : string[]  = ['name', 'date', 'status'];

          @Input({required: true}) usersList : IUser[] = [];

          @Output('userSelected')userSelectedEmitt = new EventEmitter<IUser>();
          
          onUserSelected( user:IUser){
              this.userSelectedEmitt.emit(user);
          }

}
