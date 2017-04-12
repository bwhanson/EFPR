/**
 * Created by bradw on 4/5/2017.
 */
import {Component, OnInit} from '@angular/core';
import {Song} from "./song";
import {SongVoteFetchService} from "./song-fetch.service";

@Component({
    selector: 'song-info-box',
    templateUrl: './song-info-box.component.html',
    styleUrls: [ './song-info-box.component.css' ],
    providers: [ SongVoteFetchService ]
})
export class SongInfoBox implements OnInit {
    songs: Song[];

    constructor(
        private songVoteFetchService: SongVoteFetchService
    ) { }

    getSongs(): void {
    this.songVoteFetchService
        .getSongs()
        .then(songs => this.songs = songs);
}

    ngOnInit(): void {
        this.getSongs();
    }
};
