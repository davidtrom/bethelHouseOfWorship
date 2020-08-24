export class Contact {

    id:number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNum: string;
    city: string;
    state: string;
    country: string;
    reasonForContact: string;

    constructor(id: number, firstName: string, lastName: string, email: string, phoneNum: string, city: string, state: string, country: string, reasonForContact: string){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNum = phoneNum;
        this.city = city;
        this.state = state;
        this.country = country;
        this.reasonForContact = reasonForContact;
    }
}
