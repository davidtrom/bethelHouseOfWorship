export class Testimonial {

    id:number;
    firstName: string;
    lastName: string;
    locationCity: string;
    locationState: string;
    locationCountry: string;
    testimonial: string;
    date: Date;

    constructor(id: number, firstName: string, lastName: string, locationCity: string, locationState: string, locationCountry: string, testimonial: string, date: Date){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.locationCity = locationCity;
        this.locationState = locationState;
        this.locationCountry = locationCountry;
        this.testimonial = testimonial;
        this.date = date;
    }
}
