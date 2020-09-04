export class Testimonial {

    id:number;
    firstName: string;
    lastName: string;
    city: string;
    state: string;
    country: string;
    testimonial: string;
    date: Date;

    constructor(id: number, firstName: string, lastName: string, city: string, state: string, country: string, testimonial: string, date: Date){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.state = state;
        this.country = country;
        this.testimonial = testimonial;
        this.date = date;
    }
}
