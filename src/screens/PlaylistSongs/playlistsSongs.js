import React, { Component } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import PlaylistsTracks from '../Playlists/playlistsTracks.js';


class PlaylistsSongs extends Component {

    constructor(){
        super();
        this.state ={
            infoMania:{}
        }
    }

    // componentDidMount(){  
    // }

    render() {
       
        const {route} = this.props;
        const { infoMania,playlistsMusicsID } = route.params;


        var dict = infoMania;
        var arr = [];

        for (var key in dict) {
            if (key == playlistsMusicsID )
            {
                arr.push(dict[key]);
            }
            
        
    
        }

      

        const thePlayListTracks =
            arr[0].map((item, key) =>{
                return <PlaylistsTracks playlistsTrackAlbum={item.playlistsTrackAlbum} playlistsTrackDuration={item.playlistsTrackDuration} playlistsTrackUri={item.playlistsTrackUri} playlistsTrackName={item.playlistsTrackName} playlistsTracksArtist={item.playlistsTracksArtist} playlistsTracksImage={item.playlistsTracksImage} playlistsTracksPopularity={item.playlistsTracksPopularity} navigation={this.props.navigation}/>
            })


        return (
         <ScrollView style={{backgroundColor:'black'}}>
            
              {thePlayListTracks}
              
              
         </ScrollView>
         
        
        );
    }
}

export default PlaylistsSongs;