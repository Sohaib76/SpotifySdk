import React, { Component } from 'react';
import {
  View, Button,Text,Image
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles.js';

class PlaylistsTracks extends Component {

    constructor(){
        super();
        this.state ={
        }
    }



    render() {

        const {playlistsTrackAlbum,playlistsTrackName,playlistsTracksArtist,playlistsTracksImage,playlistsTracksPopularity,playlistsTrackUri,playlistsTrackDuration,navigation} = this.props;
     
        return (  
            <TouchableOpacity onPress={() =>navigation.navigate("TrackyPlayer",{playlistsTracksArtist:playlistsTracksArtist,playlistsTrackAlbum:playlistsTrackAlbum,playlistsTracksImage:playlistsTracksImage,playlistsTrackName:playlistsTrackName,playlistsTrackUri:playlistsTrackUri,playlistsTrackDuration:playlistsTrackDuration})} style={{ display:'flex',flexDirection:'row', borderWidth:20 , marginBottom:1, backgroundColor:"black", justifyContent:"space-between",flex:6}}>
                <View style={{borderBottomColor:'white', borderWidth:1, borderRadius:1,display:'flex', flexDirection:'row', justifyContent:'flex-start', flex:4}}>
                    
                
                    <View>
                        <Image style={styles.imagePlaylistTracks} source={{uri:playlistsTracksImage}}/>
                    </View>
                    <View style={{display:'flex',flexDirection:'column',backgroundColor:'black'}}>
                        <Text style={styles.playlistSongName}>{playlistsTrackName}</Text>
                        <Text style={styles.playlistSongArtist}>by {playlistsTracksArtist}</Text>
                    </View>

                </View>

               <View style={{borderBottomColor:'white', borderWidth:1, borderRadius:1,backgroundColor:'black', display:"flex", flexDirection:'row', justifyContent:'flex-end', alignItems:'flex-end', flex:2}}>
                    <Text style={styles.popularity}>{playlistsTracksPopularity}</Text>
                    <Image style={styles.popularityImg} source={{uri:"https://www.canvasvalleyforge.com/wp-content/uploads/2018/10/flame.png"}}/>
                </View>

                
                

            </TouchableOpacity>

        
      
        );
    }
}

export default PlaylistsTracks;