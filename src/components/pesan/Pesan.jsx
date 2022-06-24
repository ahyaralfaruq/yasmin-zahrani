import React, {useState} from 'react'
import {v4} from 'uuid'
import Chat from './Chat'
import './style.css'

const Pesan = (props) => {

    const [pesan, setPesan] = useState({
        id: "",
        nama: "",
        pesan: ""
    })

    function getVal(e) {
        const data = {...pesan}
        data[e.target.id] = e.target.value
        setPesan(data)
        // console.log(data)
    }

    function handleSubmit(e){
        e.preventDefault();
        if(pesan.nama.trim() && pesan.pesan.trim()){
            props.addPesan({...pesan, id: v4(), nama: pesan.nama, pesan: pesan.pesan});
            setPesan({...pesan, nama: "", pesan: ""})
            // setPesan({...pesan, pesan: ""})
        }
    }

    return (
        <section className="it-pesan">
            <h3 className="it-pesan-title-typography">Ucapan & Do'a</h3>
            
            <Chat userChat={props.message} />

            <form className="it-pesan-form" onSubmit={handleSubmit}>
                <div className="it-pesan-form-input-wrapper">
                    <input name="nama" id="nama" type="text" placeholder='Masukkan nama anda' className="it-pesan-form-input" minLength="3" autoComplete="off" required value={pesan.nama} onChange={(e) => getVal(e)} />
                </div>
                <div className="it-pesan-form-input-wrapper">
                    <textarea name="pesan" id="pesan" type="text" placeholder='Tulis pesan yang ingin anda sampaikan' className="it-pesan-form-input" autoComplete="off" required value={pesan.pesan} onChange={(e) => getVal(e)}></textarea>
                </div>

                <div className="it-pesan-form-submit">
                    <button type="submit" className="it-pesan-form-button-submit">
                        send
                    </button>
                </div>
            </form>
            
        </section>
    )
}

export default Pesan