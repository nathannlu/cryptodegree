import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import axios from 'react-native-axios';

import LoadingFeed from '../components/LoadingFeed';

import NewsFeed from '../components/NewsFeed';
import PostSmall from '../components/PostSmall';
import Button from '../components/Button';

const Discover = props => {
  // Variables
  const NEWS_API_URL = 'https://cryptodegree-api.herokuapp.com/api/news';

  // Functions
  const handleWebviewNavigation = link => {
    props.navigation.push('Browser', {
      link: link,
    });
  };

  // States
  const [news, setNews] = useState([]);
  const [trending, setTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(NEWS_API_URL)
      .then(response => {
        setTrending(response.data.filter(post => post.trending));
        setNews(response.data.filter(post => !post.trending));
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <View>
      {isLoading ? (
        <View style={[styles.container, {paddingTop: 20}]}>
          <LoadingFeed />
        </View>
      ) : (
        <ScrollView style={{paddingTop: 20}} scrollEventThrottle={16}>
          <View style={{flex: 1}}>
            <View style={styles.container}>
              <Text style={styles.h1}>Trending</Text>
              <Text style={styles.h3}>Popular & Breaking News</Text>
            </View>

            <NewsFeed
              topic={trending}
              handleWebviewNavigation={handleWebviewNavigation}
            />

            <View style={styles.container}>
              <Button
                title="View all"
                onPress={() => {
                  props.navigation.navigate('ViewAll');
                }}
              />
            </View>

            <View style={[styles.container, {paddingTop: 40}]}>
              <Text style={styles.h1}>Latest News</Text>
              <Text style={styles.h3}>Based on most relevant</Text>
              {news.map((post, i) => (
                <View key={i}>
                  <PostSmall
                    title={post.title}
                    link={post.source}
                    imageUri={post.thumbnail}
                    handleWebviewNavigation={handleWebviewNavigation}
                  />
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Discover</Text>
    </View>
  );
};

Discover.navigationOptions = () => ({
  header: () => <Header />,
});

const styles = StyleSheet.create({
  headerContainer: {
    padding: 16,
    borderBottomColor: '#000',
    borderBottomWidth: 0.5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    paddingHorizontal: 20,
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  h3: {
    fontWeight: 'bold',
    opacity: 0.25,
    marginBottom: 20,
  },
});

export default Discover;
