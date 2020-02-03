import React from "react";
import { View, Text, ScrollView } from "react-native";
import Post from "./Post";

const NewsFeed = props => {
  return (
    <View style={{height: 300}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {props.topic.map((post, i) => (
          <View
            key={i}
            style={
              i === props.topic.length - 1
                ? { marginHorizontal: 20 }
                : { marginLeft: 20 }
            }
          >
            <Post
              title={post.title}
              link={post.source}
              imageUri={post.thumbnail}
              handleWebviewNavigation={props.handleWebviewNavigation}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default NewsFeed;
