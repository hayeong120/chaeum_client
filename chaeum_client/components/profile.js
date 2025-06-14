import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';
import { styles } from './styles/Profile.styles';

const Profile = ({
  style,
  name = '채움이',
  slogan = '오늘 하루가 미래를 바꾼다.',
  likes = 0
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.profileBox}>
        <View style={styles.circle}>
          <Image 
            source={require('../assets/icon.png')}
            style={styles.image} 
          />
        </View>
        <View style={styles.profile}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.slogan}>{slogan}</Text>
        </View>
      </View>
      
      <View style={styles.reactions}>
        <View style={[styles.reaction, { marginBottom: 4 }]}>
          <Image source={require('../assets/불.png')} style={styles.fire} />
          <Text style={styles.reactionText}>7</Text>
        </View>
        <View style={styles.reaction}>
          <Image source={require('../assets/하트.png')} style={styles.heart} />
          <Text style={styles.reactionText}>{likes}</Text>
        </View>
      </View>

    </View>
  );
}

export default Profile;
