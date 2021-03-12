import React from 'react';
import {TouchableNativeFeedback} from 'react-native';
import {
  Image,
  ArticleText,
  PriceText,
  CollectionText,
  RowItemMainView,
  RowItemChildView,
} from './styles';

const RowItem = ({setCurrentItem, item, index, onItemPressed}) => {
  const {artistName, artworkUrl100, trackName, collectionPrice} = item;
  /**
   * when pressed set current item in context and then call the
   * handler that was passed in
   */
  const onPressed = () => {
    setCurrentItem(item);
    onItemPressed();
  };

  // use properties that were passed in to render the row item
  return (
    <TouchableNativeFeedback id={index} onPress={onPressed}>
      <RowItemMainView>
        <Image source={{uri: artworkUrl100}} />
        <RowItemChildView>
          <ArticleText>{artistName}</ArticleText>
          <CollectionText>{trackName}</CollectionText>
          <PriceText>₹{collectionPrice}</PriceText>
        </RowItemChildView>
      </RowItemMainView>
    </TouchableNativeFeedback>
  );
};
export default RowItem;
