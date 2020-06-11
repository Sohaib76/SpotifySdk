import React, { Component } from 'react';
import {
    View, Button,Text,Image,Dimensions,StyleSheet
  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { Icon } from 'react-native-elements';
import Slider from 'react-native-slider';
import Video from 'react-native-video';
// import localTrack from '../../utils/pure.m4a'


//LINKS
//https://github.com/react-native-kit/react-native-track-player/blob/dev/example/react/components/Player.js
//https://github.com/react-native-kit/react-native-track-player/blob/dev/example/react/screens/PlaylistScreen.js


const window = Dimensions.get('window');

export default class TrackyPlayer extends Component {


    
  constructor(props){
    super(props);
    this.state = {
      playing: true,
      muted: false,
      sliding: false,
      currentTime: 0,
    
    };
  }




  togglePlay(){
    this.setState({ playing: !this.state.playing });
  }

  toggleVolume(){
    this.setState({ muted: !this.state.muted });
  }

  randomSongIndex(){
    let maxIndex = this.props.songs.length - 1;
    return Math.floor(Math.random() * (maxIndex - 0 + 1)) + 0;
  }

  setTime(params){
    if( !this.state.sliding ){
      this.setState({ currentTime: params.currentTime });
    }
  }

  onLoad(playlistsTrackDuration){
    // console.log(params.playlistsTrackDuration,"asfs")
    this.setState({ songDuration: playlistsTrackDuration });
  }

  onSlidingStart(){
    this.setState({ sliding: true });
  }

  onSlidingChange(value, songDuration){
    let newPosition = value * songDuration;
    this.setState({ currentTime: newPosition });
  }

  onSlidingComplete(){
    this.refs.audio.seek( this.state.currentTime );
    this.setState({ sliding: false });
  }

  onEnd(){
    this.setState({ playing: false });
  }


  render() {
    const {route} =  this.props;
    const {playlistsTrackUri,playlistsTrackName,playlistsTracksImage,playlistsTrackAlbum,playlistsTracksArtist,playlistsTrackDuration} = route.params;


    let songPercentage;
    if( playlistsTrackDuration !== undefined ){
      songPercentage = this.state.currentTime / playlistsTrackDuration;
    } else {
      songPercentage = 0;
    }

    let playButton;
    if( this.state.playing ){

      playButton = <Icon onPress={ this.togglePlay.bind(this) } style={ styles.play } name="pause" size={70} color="#fff" />;
    } else {
      playButton = <Icon  onPress={ this.togglePlay.bind(this) } style={ styles.play } name="play-arrow" size={70} color="#fff" />;
    }


    let volumeButton;
    if( this.state.muted ){
      volumeButton = <Icon  onPress={ this.toggleVolume.bind(this) } style={ styles.volume } name="volume-mute" size={18} color="#fff" />;
    } else {
      volumeButton = <Icon onPress={ this.toggleVolume.bind(this) } style={ styles.volume } name="volume-up" size={18} color="#fff" />;
    }

   

    return (
      <View style={styles.container}>
        {/* 'https://www.youtube.com/watch?v=DWwP2Dp4dcg' */}
        <Video source={{uri: 'https://www.youtube.com/watch?v=DWwP2Dp4dcg' }}
            ref="audio"
            volume={ this.state.muted ? 0 : 1.0}
            muted={false}
            paused={!this.state.playing}
            onLoad={ this.onLoad.bind(this,playlistsTrackDuration) }
            onProgress={ this.setTime.bind(this,playlistsTrackDuration) }
            onEnd={ this.onEnd.bind(this) }
            resizeMode="cover"
            repeat={false}/>

        <View style={ styles.header }>
          <Text style={ styles.headerText }>{playlistsTracksArtist}
          </Text>
        </View>
        <Image
          style={ styles.songImage }
          source={{uri: playlistsTracksImage,
                        width: window.width - 30,
                        height: 300}}/>
        <Text style={ styles.songTitle }>{playlistsTrackName}</Text>
        <Text style={ styles.albumTitle }>{playlistsTrackAlbum}</Text>
        <View style={ styles.sliderContainer }>
          <Slider
            onSlidingStart={ this.onSlidingStart.bind(this) }
            onSlidingComplete={ this.onSlidingComplete.bind(this) }
            onValueChange={ this.onSlidingChange.bind(this,playlistsTrackDuration) }
            minimumTrackTintColor='#851c44'
            style={ styles.slider }
            trackStyle={ styles.sliderTrack }
            thumbStyle={ styles.sliderThumb }
            value={ songPercentage }/>

          <View style={ styles.timeInfo }>
            <Text style={ styles.time }>{ formattedTime(this.state.currentTime)  }</Text>
            <Text style={ styles.timeRight }>- { formattedTime( playlistsTrackDuration - this.state.currentTime ) }</Text>
          </View>
        </View>
        <View style={ styles.controls }>
          <Icon  style={ styles.back } name="fast-rewind" size={25} color="#fff" />
          { playButton }
          { volumeButton }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  header: {
    marginTop: 17,
    marginBottom: 17,
    width: window.width,
  },
  headerClose: {
    position: 'absolute',
    top: 10,
    left: 0,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerText: {
    color: "#FFF",
    fontSize: 18,
    textAlign: 'center',
  },
  songImage: {
    marginBottom: 20,
  },
  songTitle: {
    color: "white",
    fontFamily: "Helvetica Neue",
    marginBottom: 10,
    marginTop: 13,
    fontSize: 19
  },
  albumTitle: {
    color: "#BBB",
    fontFamily: "Helvetica Neue",
    fontSize: 14,
    marginBottom: 20,
  },
  controls: {
    flexDirection: 'row',
    marginTop: 30,
  },
  back: {
    marginTop: 22,
    marginLeft: 45,
  },
  play: {
    marginLeft: 50,
    marginRight: 50,
  },
  forward: {
    marginTop: 22,
    marginRight: 45,
  },
  shuffle: {
    marginTop: 26,
  },
  volume: {
    marginTop: 26,
  },
  sliderContainer: {
    width: window.width - 40,
  },
  timeInfo: {
    flexDirection: 'row',
  },
  time: {
    color: '#FFF',
    flex: 1,
    fontSize: 10,
  },
  timeRight: {
    color: '#FFF',
    textAlign: 'right',
    flex: 1,
    fontSize: 10,
  },
  slider: {
    height: 20,
  },
  sliderTrack: {
    height: 2,
    backgroundColor: '#333',
  },
  sliderThumb: {
    width: 10,
    height: 10,
    backgroundColor: '#f62976',
    borderRadius: 10 / 2,
    shadowColor: 'red',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 2,
    shadowOpacity: 1,
  }
});

//TODO: Move this to a Utils file
function withLeadingZero(amount){
  if (amount < 10 ){
    return `0${ amount }`;
  } else {
    return `${ amount }`;
  }
}

function formattedTime( timeInSeconds ){
  let minutes = Math.floor(timeInSeconds / 60);
  let seconds = timeInSeconds - minutes * 60;

  if( isNaN(minutes) || isNaN(seconds) ){
    return "";
  } else {
    return(`${ withLeadingZero( minutes ) }:${ withLeadingZero( seconds.toFixed(0) ) }`);
  }
}


