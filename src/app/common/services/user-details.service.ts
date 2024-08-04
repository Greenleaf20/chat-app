import { Injectable } from "@angular/core";
import { UserDetails } from "../models/user-details.model";

@Injectable({
    providedIn: 'root'
})
export class UserDetailsService {
    constructor() {}

    userDetails: UserDetails = new UserDetails('','','','',-1);

    public setUserDetails(user: UserDetails) {
        this.userDetails = user;
    }

    public getUserDetails() {
        if (this.userDetails.id === -1) return null;
        return this.userDetails;
    }

    public resetUserDetails() {
        this.userDetails = new UserDetails('','','','',-1);
    }
}