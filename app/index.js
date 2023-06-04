import {view , Text,ScrollView, SafeAreaView} from 'react-native';
import { useState} from 'react';
import { Stack, useRouter } from 'expo-router';

import {COLORS, icons, images , SIZES } from '../../MReactNative/constants';
import{ Nearbyjobs, Popularjobs, ScreenHeaderBtn
, Welcome
} from '../../MReactNative/components';

import { View } from 'react-native';

const Home = () => {
    const router = useRouter();
    return (
       <SafeAreaView style={{flex:1, backgroundColor: COLORS.lightWhite}}>
        <Stack.Screen options={{headerStyle: {backgroundColor: COLORS.lightWhite},
        headerShadowVisible: false,
        headerLeft: () => (
            <ScreenHeaderBtn iconurl={icons.search} dimension="60%" />
        ),
        headerRight: () => (
            <ScreenHeaderBtn iconurl={images.profile} dimension="100%" />
        ),
        headerTitle: ""
    }}
    />

    <ScrollView showsVerticalScrollIndicator={false} >
        <View 
        style={{
            flex: 1,
            padding: SIZES.medium
        }}>
            <Welcome />

            <Popularjobs />
            <Nearbyjobs />
        </View>
        
        
    </ScrollView>
       </SafeAreaView>
    )
}

export default Home;