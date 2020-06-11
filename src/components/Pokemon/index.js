import React, { PureComponent } from 'react'; 
import { View, Text, Image } from 'react-native';
import styles from './styles';



export default class Pokemon extends PureComponent {
    render() {
        const { navigation } = this.props;
        
        const { name } = this.props.route.params;
        return (
            <View style={styles.pokview}>
                <Image source={{uri: 'https://res.cloudinary.com/aa1997/image/upload/v1535930682/pokeball-image.jpg'}}
                        style={styles.pokemonImage} />
                <Text style={styles.nameOfPokemon}>{name}</Text>
            </View>
        );
    }
}
