import { Image } from 'react-native';
import React from 'react';

import Onboarding from 'react-native-onboarding-swiper';

const App = () => (
  <Onboarding
    nextLabel="Next Slide"
    skipLabel= "Skip Slide"
    onSkip={()=>{
      alert('Go to the Home Page')
    }}
    titleStyles={{color: "#555555"}}
    // subTitleStyles={{color: "blue"}}
    onDone={() => alert('done')}
    pages={[
      {
        backgroundColor: '#fff',
        image: <Image source={require('./assets/circle.png')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#fe6e58',
        image: <Image source={require('./assets/square.png')} />,
        title: 'The Title',
        subtitle: 'This is the subtitle that sumplements the title.',
      },
      {
        backgroundColor: '#999',
        image: <Image source={require('./assets/triangle.png')} />,
        title: 'Triangle',
        subtitle: "Beautiful, isn't it?",
      },
    ]}
    bottomBarColor='#333333'
    // bottomBarHeight={100}
    // showPagination={false}
  />
);

export default App;