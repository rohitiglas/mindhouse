import React, {useState, useEffect} from 'react';
import SongsData from '../songsData.json';
import SplashScreen from 'react-native-splash-screen';

export const SongsContext = React.createContext();

const SongsProvider = (props) => {
  const [songs, setSongs] = useState(SongsData.results);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isFetching, setFetching] = useState(false);
  const [isLoader, setLoader] = useState(true);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, [isLoader]); // Only re-run the effect if count changes

  const getSongs = () => {
    setTimeout(() => {
      setSongs(SongsData.results);
      setFetching(false);
    }, 2000);
  };

  const onRefresh = () => {
    setFetching(true);
    getSongs();
  };

  /**
   * function to set which item is the currently selected item
   * this way we are managing the object(s) here in the context
   */
  const setCurrentItem = (currentItem) => {
    setSelectedItem(currentItem);
  };

  let value = {
    songs: songs,
    isFetching: isFetching,
    isLoader: isLoader,
    selectedItem: selectedItem,
    setCurrentItem: setCurrentItem,
    pullRefresh: onRefresh,
  };
  return (
    <SongsContext.Provider value={value}>
      {props.children}
    </SongsContext.Provider>
  );
};
export default SongsProvider;
