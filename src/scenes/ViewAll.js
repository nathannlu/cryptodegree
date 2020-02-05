import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import PostSmall from '../components/PostSmall';
import Icon from 'react-native-vector-icons/Ionicons';

const ViewAll = props => {
  const title = props.navigation.getParam('title');
  const articles = props.navigation.getParam('articles');
  const handleWebviewNavigation = link => {
    props.navigation.push('Browser', {
      link: link,
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {articles.map((post, i) => (
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

    </ScrollView>
  );
};

const Header = props => {
  const title = props.navigation.getParam('title');
  return (
    <View style={styles.headerBorder}>
      <View style={styles.headerContainer}>
        <TouchableWithoutFeedback onPress={() => props.navigation.goBack()}>
          <Icon name="md-arrow-back" size={27}></Icon>
        </TouchableWithoutFeedback>
        <View style={styles.textWrapper}>
          <Text style={styles.headerTitle}>{title}</Text>
          <Text style={styles.h3}>
            {title === 'Trending'
              ? 'Popular & Breaking News'
              : 'Based on most relevant'}
          </Text>
        </View>
      </View>
    </View>
  );
};

ViewAll.navigationOptions = () => ({
  header: props => <Header {...props} />,
});

const styles = StyleSheet.create({
  headerBorder: {
    borderColor: '#000',
    borderWidth: 0.5,
    paddingVertical: 11,
    paddingHorizontal: 16,
  },
  headerContainer: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
    flex: 1
  },
  textWrapper: {
    paddingLeft: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  h3: {
    fontWeight: 'bold',
    opacity: 0.25,
  },
});

export default ViewAll;
