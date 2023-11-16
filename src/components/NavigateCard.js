import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import tw from 'twrnc';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import {GOOGLE_MAPS_API_KEY} from '@env';

import {setDestination} from '../../store/slices/navSlice';

import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import NavFavourites from './NavFavourites';

import {Icon} from '@rneui/themed';

const NavigateCard = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center  text-xl`}>Hi Ishan :)</Text>

      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            styles={toInputBoxStyle}
            placeholder="Where to?"
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            fetchDetails={true}
            returnkeyType={'search'}
            minLength={2}
            enablePoweredByContainer={false}
            query={{key: GOOGLE_MAPS_API_KEY, language: 'en'}}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true

              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                }),
              );

              navigation.navigate('RideOptionsCard');
            }}
          />
        </View>

        <NavFavourites />
      </View>

      <View
        style={tw`flex-row bg-white justify-evenly mt-auto border-t border-gray-100 py-5 mb-2`}>
        <TouchableOpacity
          style={tw`flex flex-row bg-black rounded-full w-24 px-4 py-3 justify-between`}
          onPress={() => navigation.navigate('RideOptionsCard')}
          >
          <Icon name="car" type="font-awesome" size={16} color="white" />
          <Text style={tw`text-white text-center`}>Ride</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row bg-gray-200 rounded-full w-24 px-4 py-3 justify-between`}>
          <Icon name="car" type="font-awesome" size={16} color="black" />
          <Text style={tw`text-black text-center`}>Eat</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: '#DDDDDF',
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
