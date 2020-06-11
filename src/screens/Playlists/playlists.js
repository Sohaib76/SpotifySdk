import React, { Component } from 'react';
import {
  View,Text,Image
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles.js';

class PlaylistsScreen extends Component {

    constructor(){
        super();
        this.state ={
        }
    }



    render() {

        const {playlistsName,playlistsImage,playlistsTracks,playlistsOwner,playlistsMusicsID,navigation, infoMania} = this.props;
        return (
            <TouchableOpacity onPress={() =>navigation.navigate("PlaylistsSongs", {infoMania:infoMania, playlistsMusicsID:playlistsMusicsID})}>
                <View style={{display:"flex",flexDirection:"row"}}>
                    <View><Image style={styles.imagePlaylist} source={{uri:playlistsImage}}/></View>
                    <View style={{display:"flex",flexDirection:"column"}}>
                        <Text style={styles.titlePlaylist}>{playlistsName}</Text>
                        <Text style={styles.noOfSongs}>by {playlistsOwner} . {playlistsTracks} songs</Text>
                        </View>
                </View>
               
                
               
            </TouchableOpacity>
        );
    }
}

export default PlaylistsScreen;