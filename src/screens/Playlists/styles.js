import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    imagePlaylist: {
       height:100,
       width:100,
       margin: 20
    },

    titlePlaylist:{
        margin : 20,
        color:"white",
        fontWeight:"bold",
        fontSize:20,
        marginLeft: -2,
        paddingRight:10,
        marginTop:35,
        marginBottom:-0
        
    },

    noOfSongs:{
        color:"grey",
        fontSize:16,
        fontWeight:"bold",
    },









    playlistSongName: {
        color:'white',
        fontSize:14,
        margin:12,
        marginBottom:-8
    },
    imagePlaylistTracks:{
        
            height:70,
            width:70,
            margin:1
         
    }
    ,
    playlistSongArtist:{
        color:'grey',
        fontSize:12,
        marginBottom:0.5,
        margin:12,
        
    },
    popularity:{
        color:'white',

        
    },
    popularityImg:{
        height:15,
        width:15,
        margin:4
    }







    , 
    trackImage :{
        width:300,
        height: 300,

    },
    trackTitle:{
        color:'white',
        fontSize:35,
        fontWeight:'bold'
    },
    trackCaption:{
        color:'grey',
        fontSize:15,
       
    }
   
})

export default styles;