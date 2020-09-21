export class PrayerRequest {

    id:number;
    firstName: string;
    lastName: string;
    locationCity: string;
    locationState: string;
    locationCountry: string;
    prayerRequest: string;
    date: Date;

    constructor(id: number, firstName: string, lastName: string, locationCity: string, locationState: string, locationCountry: string, prayerRequest: string, date: Date){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.locationCity = locationCity;
        this.locationState = locationState;
        this.locationCountry = locationCountry;
        this.prayerRequest = prayerRequest;
        this.date = date;
    }
}
