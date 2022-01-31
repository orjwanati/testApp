import React from 'react';
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchAirlines, setFavorite } from "../actions/actions";

import AirlineCatalog from "./AirlineCatalog";

function AirlineCatalogContainer(props) {
    const [retry, setRetry] = useState(true);

    useEffect(() => { 
        if(retry) {
            console.log("fetching ...")
            props.fetchAirlines('https://api.instantwebtools.net/v1/airlines')
            setRetry(false)
        }
    }, [retry])

    return <AirlineCatalog {...props} setRetry={setRetry}/>
}

const mapStatetoProps = (state) => {
    return { airlineList: state.airlineList,
            loading: state.loading,
            error: state.error }
  }
  
  const mapDispatchtoProps = (dispatch) => {
    return {
        fetchAirlines: (url) => dispatch(fetchAirlines(url)),
        // setFavorite: (id) => dispatch(setFavorite(id)),
    }
  }
  
  export default connect(mapStatetoProps, mapDispatchtoProps)(AirlineCatalogContainer); 