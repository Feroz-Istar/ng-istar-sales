import { Injectable } from '@angular/core';
@Injectable()
export class AppConfiguration {
    public static Server = 'http://business.talentify.in:9090/istar/rest/';
    public static loginurl = 'auth/login/';
    public static ServerWithLoginUrl = AppConfiguration.Server + AppConfiguration.loginurl;

}