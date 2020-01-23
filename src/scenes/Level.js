import React, {useState, useEffect} from 'react';
import {View, Text, AsyncStorage} from 'react-native'

const Level = () => {
  const [userProgress, setUserProgress] = useState(0)

  useEffect(()=>{
    // Retrieve stored progress value
    // setUserProgress(storedProgressValue)
  })

  return (
    <View>
      <Text>
        levels
        {userProgress}
      </Text>
    </View>
  )
}

export default Level;