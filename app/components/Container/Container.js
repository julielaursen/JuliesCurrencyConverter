import React, {PropTypes} from 'react';
import { View } from 'react-native';
import styles from './styles';


const Container = ({children}) => {
    <View style={styles.container}>
        {childern}
    </View>
};

Container.propTypes = {
    children: PropTypes.element,
};

export default Container;