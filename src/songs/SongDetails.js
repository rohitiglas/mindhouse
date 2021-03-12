import React from 'react';
import {SongsContext} from './SongsProvider';
import {
  ArticleText,
  CollectionText,
  PriceText,
  DetailChildView,
  RowItemDetailsView,
  DetailImage,
} from './styles';

const DetailScreen = () => (
  <SongsContext.Consumer>
    {({selectedItem}) => (
      <RowItemDetailsView>
        <DetailImage source={{uri: selectedItem.artworkUrl100}} />
        <DetailChildView>
          <ArticleText>{selectedItem.artistName}</ArticleText>
          <CollectionText>{selectedItem.trackName}</CollectionText>
          <PriceText>{selectedItem.collectionPrice}</PriceText>
        </DetailChildView>
      </RowItemDetailsView>
    )}
  </SongsContext.Consumer>
);

export default DetailScreen;
