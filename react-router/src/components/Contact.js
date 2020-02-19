import React from 'react';
import {Link} from 'react-router-dom';

const Contact = (props) => {
    //programmatic redirect
    //console.log(props);
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000);
    return ( 
        <div>
            <div className='ui raised very padded text container segment'
             style={{marginTop: '80px'}}>
                <Link to='/alex' className='ui header'>Alex</Link>
                <p>Mussum Ipsum, cacilds vidis litro abertis. Atirei o pau no gatis, per gatis num morreus. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.</p>
            </div>
            <div className='ui raised very padded text container segment'
                style={{marginTop: '80px'}}>
                    <Link to='/willma' className='ui header'>Willma</Link>
                    <p>Mussum Ipsum, cacilds vidis litro abertis. Atirei o pau no gatis, per gatis num morreus. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.</p>
            </div>
        </div>
    )
}

export default Contact;