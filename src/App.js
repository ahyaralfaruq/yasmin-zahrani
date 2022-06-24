import React, {useState, useEffect} from 'react'
import {Carousel, OpeningBackground, Quotes, Gallery, Pesan, Footer} from './components'
import './App.css';

const LOCAL_STORAGE_KEY = 'pesan-dan-doa'

function App() {

    const [message, setMessage] = useState([])

    function addPesan(pesan) {
        setMessage([pesan,...message])
    }

    useEffect(() => {
        const getPenyimpananLokal = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if(getPenyimpananLokal) {
            setMessage(getPenyimpananLokal)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(message));
    }, [message])

    return (
        <div className="App">
            <OpeningBackground />
            <Quotes />
            <Gallery />
            <Pesan message={message} addPesan={addPesan} />
            <Carousel />
            <Footer />
        </div>
    );
}

export default App;
