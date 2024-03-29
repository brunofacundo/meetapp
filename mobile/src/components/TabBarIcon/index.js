import PropTypes from 'prop-types';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function TabBarIcon({ name, color }) {
    return (
        <Icon
            name={name}
            color={color}
            size={20}
            style={{
                position: 'absolute',
                top: 0
            }}
        />
    );
}

TabBarIcon.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};
