/**
 * Created by bradw on 4/5/2017.
 */
import { Injectable } from '@angular/core';
import { Song } from './song';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class SongVoteFetchService {

    private songsUrl = '/songs/nowVoting';

    constructor(private http: Http) {}

    getSongs(): Promise<Song[]> {
        return this.http.get(this.songsUrl)
            .toPromise()
            .then(response => response.json().data as Song[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}

