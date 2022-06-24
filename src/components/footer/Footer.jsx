import React from 'react'
import './style.css'

const Footer = () => {
  return (
    <section className="it-footer">
        <div className="it-footer-wrapper">
            <div className="it-footer-images">
                <div className="it-footer-images-limit">
                    <img src="assets/img/ayar.jpg" alt="ayar" className="it-footer-img" />
                </div>
            </div>

            <div className="it-footer-media-wrapper">
                <a href="https://api.whatsapp.com/send?phone=089652408205" target="_blank"  rel='noreferrer'>
                    <div className="it-footer-icons">
                        <div className="it-footer-images-limit">
                            <img src="assets/icon/wa-icon.png" alt="whatsapp" className="it-footer-img" />
                        </div>
                    </div>
                </a>
                <a href="https://www.instagram.com/ayar.jr/" target="_blank" rel='noreferrer'>
                    <div className="it-footer-icons">
                        <div className="it-footer-images-limit">
                            <img src="assets/icon/ig-icon.png" alt="instagram" className="it-footer-img" />
                        </div>
                    </div>
                </a>
                <a href="https://github.com/ahyaralfaruq" target="_blank" rel='noreferrer'>
                    <div className="it-footer-icons">
                        <div className="it-footer-images-limit">
                            <img src="assets/icon/github-icon.png" alt="github" className="it-footer-img" />
                        </div>
                    </div>
                </a>
            </div>

            <p className="it-footer-typography">Alright Reserved 2022</p>
        </div>
    </section>
  )
}

export default Footer