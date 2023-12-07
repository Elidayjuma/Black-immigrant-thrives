import React from 'react';

export default function PageTitleWithColor(props) {
    return (
        <div className='row'>
            <div className='col-md-6' style={{ height: '300px', float: 'left', margin: '0', background: props.backgroundColor }}>
            </div>
            <div className='col-md-6' style={{ margin: 'auto' }}>
                {/* <p className=' h1 text-center' > {props.title} </p> */}
                <p className='h1 text-center' > {props.title} </p>
            </div>
        </div>
    );
}


