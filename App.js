import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import VideoComponent from './src/VideoComponent';

const data = [
  // {uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', id: 1},
  // {uri: 'http://10.0.0.201:8888/fan/640/5/25/index.m3u8', id: 2},
  // {uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', id: 3},
  // {uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', id: 4},
  // {uri: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_30MB.mp4', id: 5},
  // {uri: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_30MB.mp4', id: 6},
  // {uri: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_30MB.mp4', id: 7},
  // {uri: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_30MB.mp4', id: 8},
  {uri: 'https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_adv_example_hevc/master.m3u8', id: 9},
  {uri: 'https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8', id: 10},
  {uri: 'https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8', id: 11},
  {uri: 'https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8', id: 12},
  {uri: 'https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8', id: 13},
  {uri: 'https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8', id: 14},
]

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <VideoList/>
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

function VideoList(){
  return (
   <FlatList
   data={data}
   renderItem={({item}) => <VideoComponent uri={item.uri}/>}
   keyExtractor={(item) => item.id}
   numColumns={2}
   />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
