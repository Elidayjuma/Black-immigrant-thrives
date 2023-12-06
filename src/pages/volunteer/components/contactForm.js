import React from 'react';

export default function ContactForm(props) {
    return (
        <div className="contact-form container">
            <form method="post">
                <div className="row">
                    <div className='col-sm-12 col-md-6' style={{ borderRight: 'solid 1px rgb(241,169,28)' }}>
                        <p>
                            <strong>Fill in the form and we will find the best position to place you as a volunteer.</strong>
                        </p>
                    </div>
                    <div className="col-sm-12 col-md-6" >
                        <div className="form-group">
                            <input type="text" name="txtName" className="form-control" placeholder="Your Name *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" value="" />
                        </div>
                        <div className="form-group">
                            <textarea name="txtMsg" className="form-control" placeholder="Your expertise *" style={{ width: "100%", height: "150px" }}></textarea>
                        </div>
                        <div className="form-group">
                            <input type="submit" name="btnSubmit" className="btn btn-primary" value="Submit" />
                        </div>
                    </div>

                </div>
            </form>
        </div>
    );
}