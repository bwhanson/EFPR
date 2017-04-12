/**
 * Created by bradw on 4/11/2017.
 */
import { Injectable } from '@angular/core';
import { Song } from './song';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class NowPlayingFetchService {
    private nowPlayingUrl = '/nowPlaying';
    
    constructor(private http: Http) {}
    
    getNowPlaying(): Promise<Song> {
        return this.http.get(this.nowPlayingUrl)
            .toPromise()
            .then(function(response){
                console.log(response);
                return response.json() as Song;
            })
            .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred in the now playing module', error);
        return Promise.reject(error.message || error);
    }
}
