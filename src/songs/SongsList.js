import React from 'react';
import {RefreshControl, ActivityIndicator, View} from 'react-native';
import {FlatListView, LoaderView, PriceText} from './styles';

import {SongsContext} from './SongsProvider';
import RowItem from './SongItem';

const Songs = (props) => {
  const onItemPressed = (_item) => {
    props.navigation.navigate('SongDetails');
  };
  return (
    <SongsContext.Consumer>
      {({songs, setCurrentItem, pullRefresh, isFetching, isLoader}) => (
        <View>
          {isLoader && (
            <LoaderView>
              <ActivityIndicator size="large" />
              <PriceText>Please wait</PriceText>
            </LoaderView>
          )}
          {!isLoader && (
            <FlatListView
              data={songs}
              refreshControl={
                <RefreshControl
                  refreshing={isFetching}
                  onRefresh={pullRefresh}
                />
              }
              automaticallyAdjustContentInsets={false}
              keyExtractor={(item, index) => {
                return index.toString();
              }}
              renderItem={(_data) => {
                return (
                  <RowItem
                    // pass in all of the data that goes to rowItem
                    {..._data}
                    // pass in function to call onPress
                    onItemPressed={onItemPressed}
                    // Pass context function into component
                    // as prop
                    setCurrentItem={setCurrentItem}
                  />
                );
              }}
            />
          )}
        </View>
      )}
    </SongsContext.Consumer>
  );
};

export default Songs;
