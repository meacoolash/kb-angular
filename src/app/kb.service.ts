import { Injectable } from '@angular/core';

type User = {
  id: string;
  password?: string;
  role: string;
};

// Partial, Required, Omit, Pick, Readonly
type NewUser = Pick<User, "password" | "role">
const newUser: NewUser = { 
  password: "ASdf",  
  role: "Asdf",
}

// UNION TYPES: Exclude, 
type Role = string | number | boolean | "admin";
type NewRole = Exclude<Role, boolean>
const newRole: NewRole = 2

@Injectable({
  providedIn: 'root'
})
export class KbService {

  constructor() { }
}
