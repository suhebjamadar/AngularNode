import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import { UserModel } from './user.model';
import { UserService } from './user.service';

import { Global } from '../../components/shared/global';

@Component({
    templateUrl: './user.html'
})

export class UserComponent implements OnInit {
    users: UserModel[];
    msg: string;
    indLoading: boolean = false;
    userFrm: FormGroup;

    constructor(private fb: FormBuilder, private _userService: UserService) { }

    ngOnInit(): void {

        this.userFrm = this.fb.group({
            Id: [''],
            FirstName: ['', Validators.required],
            LastName: [''],
            Gender: ['']
        });

        this.LoadUsers();
    }

    LoadUsers(): void {
        this.indLoading = true;
        this._userService.get(Global.BASE_USER_ENDPOINT)
            .subscribe(users => { this.users = users; this.indLoading = false; },
            error => this.msg = <any>error);
    }
}