import React from 'react';
import './Modal.css';
import Modal from './Modal'

const About = () => {
    return (
        <div>
            <Modal />
            <div className='ui raised very padded text container segment'
                style={{marginTop: '80px'}}>
                <h3 className='ui header'>About</h3>
                <p>Mussum Ipsum, cacilds vidis litro abertis. Atirei o pau no gatis, per gatis num morreus. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.</p>
            </div>
        </div>
    )
}

export default About;