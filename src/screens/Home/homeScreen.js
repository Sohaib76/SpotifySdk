import React, { Component } from 'react';
import {
  View, Button,Text
} from 'react-native';
import PlaylistsScreen from '../Playlists/playlists';
import { ScrollView } from 'react-native-gesture-handler';

//If something wrong push the code///

class HomeScreen extends Component {

    constructor(){
        super();
        this.state ={
            country:"",
            info : [],
            infoMania: [],
            tempinfoMania: [],          
           

        }
    }

    accessToken = 'BQBPs1ZRPYitNnX-OCauLvsfgNRSpf5A5Npcjgx4AwkaQaT5Vd1G05TJ8NOzB6NZjW09-CQn6zvZJtWmN7vqwhC4_v0-6Div_1D5N2nskwiZ1WS4l9I__meRG0IbCIKDNG1wDpZrNK7fkopCU7xeANOT7CX_BJJ5THrIys_SPMDKMoVqhj1Jcvcc417FdoAt3ZMkYRlifd5uSP4fUJWScl42Jvr2ktGGXe-ejtAF-jU89xu-AJgmghTyJjzBz04KR-2x9klOybpdAivhTVwX6AVX0cPtuKD7'

    componentDidMount(){
      // "https://api.spotify.com/v1/me"
      //  "https://api.spotify.com/v1/me/playlists"
      //https://api.spotify.com/v1/browse/categories/party/playlists?country=FI&limit=5

        if (this.state.info.length==0 && this.state.infoMania.length==0){
            fetch("https://api.spotify.com/v1/me/", {
            headers:{"Authorization":"Bearer " + this.accessToken}
        }).then(response => response.json())
        .then(data =>{
            // console.log(data)
            this.setState(
                {country: data.country}
              )
            this.fetchPlaylists()
             
            }
  
        ).catch((error) => {
            alert("Error Fetching Data")
        });

        }
    }





    fetchPlaylists() {
        
        fetch(`https://api.spotify.com/v1/browse/categories/party/playlists?country=${this.state.country}&limit=6`, {
            headers:{"Authorization":"Bearer " + this.accessToken}
            }).then(response => {
                if (response.ok) {
                    return response.json();
                  } else {
                      
                      console.disableYellowBox = true;
                      var playlistsName = "Turn On Your Internet"
                      var playlistsImage = "https://i.scdn.co/image/ab67706f00000002093e46b7de34536fc2944b88"
                      var playlistsTracks = "00"
                      var playlistsOwner = "Spotify"
                      var playlistsMusicsID = "0001"

                      var playlistsTrackName = "Check Access Token"
                      var playlistsTracksPopularity = "00"
                      var playlistsTracksID = "0001"
                      var playlistsTracksImage = "https://i.scdn.co/image/ab67706f00000002093e46b7de34536fc2944b88"
                      var playlistsTracksArtist  = "Error"
                      var playlistsTrackUri = "https://www.youtube.com/watch?v=DWwP2Dp4dcg"
                      var playlistsTrackDuration = 20
                      var playlistsTrackAlbum = "Empty"


                      this.setState({
                          info:[{playlistsName,playlistsImage,playlistsTracks,playlistsOwner,playlistsMusicsID}],
                          infoMania: {[playlistsMusicsID]:[{playlistsTrackAlbum,playlistsTrackDuration,playlistsTrackUri,playlistsTrackName,playlistsTracksPopularity,playlistsTracksID,playlistsTracksImage,playlistsTracksArtist}]}
                      })
                    
                  }
            })
            .then(dat =>{
                // console.log(dat)                
                dat.playlists.items.map((item, count) =>{
                    
                    var playlistsName = item.name
                    var playlistsOwner = item.owner.display_name
                    var playlistsTracks = item.tracks.total
                    var playlistsMusicsID = item.id 


                    item.images.map((item, count) =>{
                        var playlistsImage = item.url
                        this.setState(prevState => ({
                            info : [...prevState.info, {playlistsName,playlistsOwner,playlistsTracks,playlistsImage,playlistsMusicsID}],
                           
                            
 
                        }))
                    }
                        
                    )

                   

                }


                
                    
                )
                this.fetchTracks()
                }
            )

    }


    async fetchTracks(){
        this.state.info.map((item, count) =>{
            // console.log(`https://api.spotify.com/v1/playlists/${item.playlistsMusicsID}/tracks`)
            
            fetch(`https://api.spotify.com/v1/playlists/${item.playlistsMusicsID}/tracks?limit=7`, {
                headers:{"Authorization":"Bearer " + this.accessToken}
            }).then(response => response.json())
            .then(dataa =>{
                // console.log(dataa.items[0].track.album.artists[0].name)

                dataa.items.map((item, count) =>{
                        
                    var playlistsTrackName = item.track.name
                    var playlistsTracksPopularity = item.track.popularity
                    var playlistsTracksID = item.track.id
                    var playlistsTracksImage = item.track.album.images[0].url
                    var playlistsTracksArtist  = item.track.album.artists[0].name
                    var playlistsTrackUri = item.track.uri
                    var playlistsTrackDuration = item.track.duration_ms/1000
                    var playlistsTrackAlbum = item.track.album.name

                   
                    
                    this.setState(prevState => ({
                            tempinfoMania : [ ...prevState.tempinfoMania,{playlistsTrackAlbum,playlistsTrackName,playlistsTracksPopularity,playlistsTracksID,playlistsTracksImage,playlistsTracksArtist,playlistsTrackUri,playlistsTrackDuration}],


                        }))
                  
                
                  
                 
            })

            

            this.setState((prevState) => ({
                
                infoMania: {...prevState.infoMania,[item.playlistsMusicsID]:this.state.tempinfoMania},
                tempinfoMania:[]

              }))

            }


            
            ).catch((error) => {
                console.log(`https://api.spotify.com/v1/playlists/${item.playlistsMusicsID}/tracks`)
                alert("Error Fetching Dataa")
                console.log(error)
            });
            
      
        }
        
        
        )














    }





    render() {

        const {playlistsName,playlistsImage,playlistsTracks,playlistsOwner,playlistsMusicsID} = this.state;
        const {infoMania} = this.state
        

        const thePlayList =   
            this.state.info.map((item, key) =>
            

                <PlaylistsScreen playlistsName={item.playlistsName} playlistsImage={item.playlistsImage} playlistsTracks={item.playlistsTracks} playlistsOwner={item.playlistsOwner} playlistsMusicsID={item.playlistsMusicsID} navigation={this.props.navigation} infoMania={infoMania}/>

       )
    
     
        return (
            <ScrollView style={{backgroundColor:"#070707"}}>
               {thePlayList}
            </ScrollView>
        );
    }
}

export default HomeScreen;