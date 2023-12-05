import React from 'react';

export default function PageTitle(props) {
    return (
        <div className="page-title mt-0">
            <div className="main_title">
                <div className="row title-banner-wrapper" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
                    <div className="banner-container">
                        <h1>{props.title}</h1>
                        {props.displayHome === 'true' ? (() => {
                            return (
                                <div className="page-breadcrumb d-sm-none d-md-block">
                                    <a href="/"> Home </a>  / <span> {props.title}</span>
                                </div>
                            )
                        }) : ''}

                    </div>
                </div>

            </div>

        </div>
    );
}


