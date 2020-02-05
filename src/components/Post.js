import React from 'react';
import {
  TouchableWithoutFeedback,
  Image,
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Post = props => {
  return (
    <View style={styles.postContainer}>
      <TouchableWithoutFeedback
        onPress={() => props.handleWebviewNavigation(props.link)}
        style={{height: '100%'}}>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{uri: props.imageUri}} />
            </View>

            <View>
              <Text numberOfLines={2} style={styles.postTitle}>
                {props.title}
              </Text>

              <Text style={styles.postSource}>By Cryptodegree</Text>                       
            </View>
   
          </View>

      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    width: 270,
    height: 250,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  imageContainer: {
    height: 187.5,
    width: '100%',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
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

export default Post;
