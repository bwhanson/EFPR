/**
 * Created by bradw on 4/8/2017.
 */
import { Component, OnInit } from '@angular/core';
import { NowPlayingFetchService } from './now-playing-fetch.service';
import { Song } from './song';

@Component({
    selector: 'home-page',
    templateUrl: './home-page.component.html',
    styleUrls: [ './home-page.component.css' ]
})
export class HomePageComponent implements OnInit {
    nowPlayingSong: Song;

    constructor(private nowPlayingFetchService: NowPlayingFetchService) { }

    ngOnInit(): void {
        this.nowPlayingFetchService.getNowPlaying()
            .then(song => this.nowPlayingSong = song);
    }
};
