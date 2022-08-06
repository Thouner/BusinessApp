export class User {

  firstName: string;
  lastName: string;
  birthDate: number;
  street: string;
  city: string;
  postalCode: number;


  constructor(obj?: any) {
    this.firstName = obj ? obj.firstName : '';
    this.lastName = obj ? obj.lastName : '';
    this.birthDate = obj ? obj.birthDate : '';
    this.street = obj ? obj.street : '';
    this.city = obj ? obj.city : '';
    this.postalCode = obj ? obj.postalCode : '';
  }
}
