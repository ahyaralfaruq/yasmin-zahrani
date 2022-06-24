import React from 'react'
import './style.css'

const background = () => {
    return (
        <section className="it-background-profile">
            <div className="it-background-overlay"></div>
            <div className="it-background-content">
                <div className="it-background-desc">
                    {/* <div className="it-background-border-profile">
                        <div className="it-background-border-limit-profile">
                            <img src="assets/img/yasmin-zahrani.png" alt="yasmin" className="it-background-image-profile" />
                        </div>
                    </div> */}

                    <h3 className="it-background-title-typography">Happy Birthday for 19 y.o</h3>
                    <h1 className="it-background-heading-typography">Yasmin Zahrani</h1>
                    <p className="it-background-paragraph-typography">21 Juni 2003</p>
                </div>
            </div>
        </section>
    )
}

export default background