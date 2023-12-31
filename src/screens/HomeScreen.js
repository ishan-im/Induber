import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';

import NavOptions from '../components/NavOptions';

import tw from 'twrnc';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import {GOOGLE_MAPS_API_KEY} from '@env';

import { useDispatch } from 'react-redux';

import { setOrigin,setDestination } from '../../store/slices/navSlice';

import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain',
          }}
          source={{
            uri: 'https://links.papareact.com/gzs',
          }}
        />

        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true

            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description,
            }));

           dispatch(setDestination(null));

          }}
          fetchDetails={true}
          returnkeyType={'search'}
          minLength={2}
          enablePoweredByContainer={false}
          query={{key: GOOGLE_MAPS_API_KEY, language: 'en'}}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          placeholder="Where from?"
        />
        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
