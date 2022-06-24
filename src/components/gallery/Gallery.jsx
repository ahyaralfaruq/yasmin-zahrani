import React from 'react'
import './style.css'

const Gallery = () => {
    return (
        <section className="it-gallery">
            <h3 className="it-gallery-title-typography">Gallery</h3>

            <div className="it-gallery-grids">
                <div className="it-gallery-content">
                    <div>
                        <img src="assets/img/yasmin.png" alt="yasmin" />
                    </div>
                </div>

                <div className="it-gallery-content">
                    <div>
                        <img src="assets/img/yasmin-zahrani.png" alt="yasmin" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery