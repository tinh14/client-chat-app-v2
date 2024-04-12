import { UserModel } from "../models/user.model";


export class SessionService {

    private static CURRENT_USER_KEY: string = "currentUser";

    static getCurrentUser(): UserModel {
        return JSON.parse(sessionStorage.getItem(SessionService.CURRENT_USER_KEY));
    }

    static setCurrentUser(currentUser: UserModel): void {
        sessionStorage.setItem(SessionService.CURRENT_USER_KEY, JSON.stringify(currentUser));
    }
}