import React from 'react';
import { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, VirtualizedList } from 'react-native';
import AirlineCard from './AirlineCard';
import AirlineDetails from './AirlineDetails';
import ErrorScreen from './ErrorPage';
import LoadingScreen from './LoadingScreen';

function AirlineCatalog({airlineList, loading, error, setRetry}) {
    const [currentView, setCurrentView] = useState({page:"list", item:null}) // or detail

    const goToAirlineDetailsPage = (item) => {
        console.log("go to details page of " , item.name)
        setCurrentView({page:"detail", item:item})
    }

    const goBackHere = (index) => {
        console.log("go Back to list page")
        setCurrentView({page:"main", item:null})
    }

    console.log(loading, error)
    if(loading) {
        return <LoadingScreen/>
    } else if(error) {
        return <ErrorScreen msg={error.msg} retry={()=>setRetry(true)}/>
    } else {
        if(currentView.page === "detail") {
            return(<AirlineDetails info={currentView.item} goBack={goBackHere}/>)
        } else { 
        return(
            <SafeAreaView style={styles.container}>
                <VirtualizedList
                    data={airlineList}
                    initialNumToRender={10}
                    renderItem={({ item }) => <AirlineCard  info={item} onSelect={()=>goToAirlineDetailsPage(item)}/>}
                    keyExtractor={(data, index) => ""+index}
                    getItemCount={()=>airlineList.length}
                    getItem={(data, index)=>airlineList[index]}
                />
            </SafeAreaView>);
        }

       
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
    },
  });


export default AirlineCatalog;