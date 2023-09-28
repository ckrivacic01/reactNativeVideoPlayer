
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Video, ResizeMode, AVPlaybackStatus } from 'expo-av';



const VideoComponent = (props) => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (
      <View style={styles.video}>
            <Text>Video HERE for {props.uri}</Text>
          
      <Video
        // style={{flex: 1}}
        videoStyle={{width:100, height:100}}
        ref={video}
        source={{
          uri: props.uri,
        }}
        useNativeControls={false}
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
        shouldPlay={true}
      />
      <View>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>{
            console.log("button pressed state=" + status);
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
          }
        />
      </View>
    </View>
        
        
    )
}


const styles = StyleSheet.create({
    video: {
        flex: 1
    }
})

export default VideoComponent;