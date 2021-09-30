import React, { useEffect, useState } from 'react';
import NetInfo from "@react-native-community/netinfo";
import NotFoundInternet from '../components/NotFoundInternet';

function withInternetVerification(WrappedComponent) {
  return (props) => {
    const [isOffline, setOfflineStatus] = useState(false);

    useEffect(() => {
      // Check the network connection
      const removeNetInfoSubscription = NetInfo.addEventListener(({isConnected , isInternetReachable}) => {
        if( isInternetReachable === null){
          return;
        }

        const offline = !(isConnected && isInternetReachable);
        setOfflineStatus(offline);
      });
      return () => removeNetInfoSubscription();
    }, []);

    return isOffline ? <NotFoundInternet />  : <WrappedComponent {...props} /> ;
  }
}

export default withInternetVerification;