/**
 * Created by bradw on 4/5/2017.
 */
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Song } from './song';

export class InMemSongService implements InMemoryDbService {
    
    private songList = [
        {title: 'name 1', artist: 'artist 1', album: 'album 1', votes: 0, id: 1},
        {title: 'name 2', artist: 'artist 2', album: 'album 2', votes: 0, id: 2},
        {title: 'name 3', artist: 'artist 3', album: 'album 3', votes: 0, id: 3}
    ];
    
    createDb() {
        let nowPlayingSong = {title: 'nowPlayingSongTitle', artist: 'NP Artist', album: 'NP Album', votes: 0, id: 1};
        let votingSongs = [
            {title: 'name 1', artist: 'artist 1', album: 'album 1', votes: 0, id: 1},
            {title: 'name 2', artist: 'artist 2', album: 'album 2', votes: 0, id: 2},
            {title: 'name 3', artist: 'artist 3', album: 'album 3', votes: 0, id: 3}
        ]; 
        return {nowPlayingSong: nowPlayingSong, votingSongs: votingSongs};
    }
};

