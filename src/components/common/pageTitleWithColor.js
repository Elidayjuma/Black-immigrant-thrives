import React from 'react';

export default function PageTitleWithColor(props) {
    return (
        <div className="page-title page-title-with-color mt-0">
            <div className="main_title">
                <div className="row title-banner-wrapper" style={{margin:'0',background:props.backgroundColor}}>
                    <div className="banner-container">
                        <h1>{props.title}</h1>
                        {/* <div className="page-breadcrumb d-sm-none d-md-block">
                            <a href="/"> Home </a>  / <span> {props.title}</span> 						
                        </div> */}
                    </div>
                </div>

            </div>

        </div>
    );
}


