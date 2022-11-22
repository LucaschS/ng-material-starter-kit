export interface RegisterModel {
  // readonly email: string;
  // readonly username: string;
  // readonly password: string;
  // readonly firstname: string;
  // readonly lastname: string;
  // readonly city: string;
  // readonly street: string;
  // readonly number: string;
  // readonly zipcode: string;
  // readonly phone: string;

  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly phone: string;
  readonly name:{
    firstname:string,
    lastname:string
  },
  readonly address: {
    city: string,
    street: string,
    number: string,
    zipcode: string,
  }
}

