import { useEffect, useRef, useState } from "react"

    
    export const useFetch = ( url ) => {
      
        const isMonted = useRef(true)
        const [state, setState] = useState({ data: null, loading: true, eror: null })

        useEffect(() => {

            return () => {
                isMonted.current = false
            }
    
        }, [])


        useEffect( () => {

            setState({ data: null, loading: true, eror: null })
        
                fetch( url )
                    .then( resp => resp.json())
                    .then( data => {

                        
                            setTimeout(() => {

                                if(isMonted.current){
                                    setState({
                                        loading: false,
                                        eror: null,
                                        data
                                    });
                                }else{
                                    console.log("no se llamo al setstate");
                                }
                            }, 4000);
                       
                            
                        })

        }, [ url ])
        

        return state

    }
    