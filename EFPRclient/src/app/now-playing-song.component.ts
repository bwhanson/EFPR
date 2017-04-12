/**
 * Created by bradw on 4/8/2017.
 */
import {Component, OnInit} from '@angular/core';

import { Song } from './song';
import { NowPlayingFetchService } from './now-playing-fetch.service';

@Component({
    selector: 'now-playing-song',
    templateUrl: './now-playing-song.component.html',
    styleUrls: [ './now-playing-song.component.css' ],
    providers: [ NowPlayingFetchService ]
})
export class NowPlayingSongInfo implements OnInit {
    song: Song;

    constructor(
        private nowPlayingFetchService: NowPlayingFetchService
    ) {}

    getNowPlaying(): void {
        var self = this;
        this.nowPlayingFetchService
            .getNowPlaying()
            .then(function(song){
                self.song = song;
                console.log('song fetched:');
                console.log(song);
            });
        
    }

    ngOnInit(): void {
        this.getNowPlaying();
    }
};
