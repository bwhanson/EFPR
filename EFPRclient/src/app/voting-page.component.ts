/**
 * Created by bradw on 4/8/2017.
 */
import { Component, OnInit } from '@angular/core';
import { SongVoteFetchService } from "./song-fetch.service";
import { Song } from './song';

@Component({
    selector: 'voting-page',
    templateUrl: './voting-page.component.html',
    styleUrls: [ './voting-page.component.css' ]
})
export class VotingPageComponent implements OnInit {
    currentSongs: Song[];

    constructor(private songVoteFetchService: SongVoteFetchService) { }

    ngOnInit(): void {
        this.songVoteFetchService.getSongs()
            .then(songs => this.currentSongs = songs);
    }
};
