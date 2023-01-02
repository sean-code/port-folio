import './Contact.css';


function Contact(){
    const handleSubmit = event => {
        event.preventDefault();

        alert('Message Sent Successfully')
    }


    return(
        <>
            <div className="container">
                <h2><u>Co</u>ntact Me</h2>
                <div className="row100">
                    <div className="col">

                {/* CREATE FORM */}
                    <form action='https://app.headlessforms.cloud/api/v1/form-submission/JgbXegaT6O' method='POST'>
                        <div className='col'>
                            <div className='inputBox'>
                                <input type="text" placeholder= 'First Name' name=" FirstName" required="required" />
                                <span className="line"></span>
                            </div>
                        </div>
                        <div className='col'>
                        <div className='inputBox'>
                                <input type="text" placeholder= 'Last Name' name="LastName" required="required" />
                                <span className="line"></span>
                            </div>
                        </div>
                        <div className='col'>
                        <div className='inputBox'>
                                <input type="number" placeholder= 'Phone Number' name="PhoneNumber" required="required" />
                                <span className="line"></span>
                            </div>
                        </div>
                        <div className='row100'>
                            <div className='col'>
                                <div className='inputBox'>
                                    <input type="text" placeholder= 'Email' name="Email" required="required" />
                                    <span className="line"></span>
                                </div>
                            </div>
                        </div>
                        <div className="inputBox textarea">
                            <textarea name="Message" required="required" placeholder='Type your message Here...'></textarea>
                            <span className="text"></span>
                            <span className="line"></span>
                        </div>

                        {/* Form Submit Button */}
                        <div className='row100'>
                            <div className='col'>
                                <button type="submit" value="Send">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
            </div>
                        {/* End of Form */}

                    {/* Contact me stickers */}
            <div className='container2'>
                <div className="card">
                    <a href='https://www.twitter.com/nganga_sea' target='_blank'>
                        <h3 className="title">Twitter</h3>
                    </a>
                    <div className="bar">
                        <div className="emptybar"></div>
                        <div className="filledbar"></div>
                    </div>
                    <div className="circle">
                        <a href='https://www.twitter.com/nganga_sea' target='_blank'>
                            @nganga_sea
                        </a>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <circle className="stroke" cx="60" cy="60" r="50" />
                        </svg>
                    </div>
                </div>
                <div className="card">
                    <a href='https://github.com/sean-code' target='_blank'>
                        <h3 className="title">GitHub</h3>
                    </a>
                    <div className="bar">
                        <div className="emptybar"></div>
                        <div className="filledbar"></div>
                    </div>
                    <div className="circle">
                        <a href='https://github.com/sean-code' target='_blank'>
                            @Sean-Code
                        </a>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <circle className="stroke" cx="60" cy="60" r="50"/>
                        </svg>
                    </div>
                </div>
                <div className="card">
                    <a href='https://www.instagram.com/its_ngangasean' target='_blank'>
                        <h3 className="title">Instagram</h3>
                    </a>
                    <div className="bar">
                        <div className="emptybar"></div>
                        <div className="filledbar"></div>
                    </div>
                    <div className="circle">
                        <a href='https://www.instagram.com/its_ngangasean' target='_blank'>
                            @its_ngangasean
                        </a>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <circle className="stroke" cx="60" cy="60" r="50"/>
                    </svg>
                    </div>
                </div>
                <div className="card">
                    <a href="mailto:email@example.com" target='_blank'>
                        <h3 className="title">Email</h3>
                    </a>
                    <div className="bar">
                        <div className="emptybar"></div>
                        <div className="filledbar"></div>
                    </div>
                    <div className="circle">
                        <a href="mailto:email@example.com" target='_blank'>
                            ngangasean@yahoo.com
                        </a>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <circle className="stroke" cx="60" cy="60" r="50"/>
                        </svg>
                    </div>
                </div>
            </div>
        </> 
        )
    }

export default Contact;