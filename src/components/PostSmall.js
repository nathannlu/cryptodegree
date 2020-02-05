import React from 'react';
import {
  TouchableWithoutFeedback,
  Image,
  View,
  Text,
  StyleSheet,
} from 'react-native';

const SmallBox = props => {
  return (
    <TouchableWithoutFeedback
      onPress={() => props.handleWebviewNavigation(props.link)}>
      <View style={styles.wrapper}>
        <View style={styles.imageContainer}>
          <Image source={{uri: props.imageUri}} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text numberOfLines={3} style={styles.postTitle}>
            {props.title}
          </Text>

          <Text style={styles.postSource}>By Cryptodegree</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 20,
  },
  imageContainer: {
    width: 150,
    height: 100,
  },
  image: {
    flex: 1,
    borderRadius: 10,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
    paddingLeft: 20,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: '500',
    width: '100%',
    marginBottom: 10,
  },
  postSource: {
    fontSize: 14,
    fontWeight: '500',
    color: '#BFBFBF',
  },
});

export default SmallBox;
