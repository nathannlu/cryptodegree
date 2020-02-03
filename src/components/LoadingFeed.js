import React from 'react';
import {View, StyleSheet} from 'react-native';
import Shimmer from './Shimmer'

const LoadingFeed = () => {
  return (
    <View style={styles.loadingWrapper}>
      <Shimmer style={styles.loadingTextLarge}></Shimmer>
      <Shimmer style={styles.loadingTextSmall}></Shimmer>

      <View style={styles.postContainer}>
        <Shimmer autoRun={true} visible={true} style={styles.loadingBox}></Shimmer>
        <Shimmer autoRun={true} visible={true} style={styles.loadingText}></Shimmer>

        <View style={styles.sourceContainer}>
          <Shimmer autoRun={true} visible={true} style={styles.loadingAvatar}></Shimmer>
          <Shimmer autoRun={true} visible={true} style={styles.loadingTextSmall}></Shimmer>
        </View>
      </View>

      <Shimmer style={styles.loadingButton}></Shimmer>      
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    width: 270,
    height: 250,
    marginTop: 15,
  },
  sourceContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  loadingBox: {
    height: '75%',
    width: '100%',
    backgroundColor: '#E8E8E8',
    borderRadius: 10,
    marginBottom: 20,
  },
  loadingText: {
    height: 20,
    width: '100%',
    backgroundColor: '#E8E8E8',
    marginBottom: 10,
  },
  loadingTextLarge: {
    height: 25,
    width: 150,
    backgroundColor: '#E8E8E8',
    marginBottom: 5,
  },
  loadingTextSmall: {
    height: 15,
    width: 100,
    backgroundColor: '#E8E8E8',
  },
  loadingAvatar: {
    height: 25,
    width: 25,
    backgroundColor: '#E8E8E8',
    borderRadius: 100,
    marginRight: 10,
  },
  loadingButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#E8E8E8',
    marginTop: 60,
    borderRadius: 100,
  }
});

export default LoadingFeed;
