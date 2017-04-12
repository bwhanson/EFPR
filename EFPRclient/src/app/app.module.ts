import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { HomePageComponent } from './home-page.component';
import { VotingPageComponent } from './voting-page.component';

import { SongInfoBox } from './song-info-box.component';
import { SongVoteFetchService } from './song-fetch.service';
import { NowPlayingFetchService } from './now-playing-fetch.service';
import { NowPlayingSongInfo } from './now-playing-song.component';


@NgModule({
  imports:      [
      BrowserModule,
      HttpModule,
      AppRoutingModule,
  ],
  declarations: [
      AppComponent,
      SongInfoBox,
      HomePageComponent,
      NowPlayingSongInfo,
      VotingPageComponent
  ],
    providers: [ SongVoteFetchService, NowPlayingFetchService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
