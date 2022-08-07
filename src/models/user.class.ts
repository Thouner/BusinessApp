export class User {

  firstName: string;
  lastName: string;
  birthDate: any;
  email: string;
  street: string;
  city: string;
  postalCode: any;


  constructor(obj?: any) {
    this.firstName = obj ? obj.firstName : '';
    this.lastName = obj ? obj.lastName : '';
    this.birthDate = obj ? obj.birthDate : '';
    this.email = obj ? obj.email : '';
    this.street = obj ? obj.street : '';
    this.city = obj ? obj.city : '';
    this.postalCode = obj ? obj.postalCode : '';
  }

  public toJson() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      birthDate: this.birthDate,
      email: this.email,
      street: this.street,
      city: this.city,
      postalCode: this.postalCode,
    }
  }


}
