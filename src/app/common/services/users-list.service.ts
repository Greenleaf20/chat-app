import { Injectable } from "@angular/core";
import { UserDetails } from "../models/user-details.model";
import { UserDetailsService } from "./user-details.service";

@Injectable({
    providedIn: 'root'
})
export class UsersListService {
    constructor(private userDetailsService: UserDetailsService) {}

    private usersList: Map<string, UserDetails> = new Map();

    public addUser(data: UserDetails) {
        if (this.usersList.get(data.username)!==undefined) return -1;
        data.id = this.usersList.size;
        this.usersList.set(data.username,data);
        this.login(data.username, data.password);
        return data.id;
    }

    public getUser(username: string): UserDetails | undefined{
        return this.usersList.get(username);
    }

    public login(username: string, password: string) {
        if (!this.usersList.has(username)) return -1;
        
        let user = this.usersList.get(username) as UserDetails;

        if (password !== user.password) return -2;

        this.userDetailsService.setUserDetails(user);
        return user.id;
    }

    public logout() {
        this.userDetailsService.resetUserDetails();
    }
}