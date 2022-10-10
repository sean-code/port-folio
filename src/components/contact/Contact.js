// import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';

function Contact(){
    return(
        <div className="container">
            <h2>Contact Me</h2>
            <div className="row100">
                <div className="col">
                    <div className="inputBox">
                        <input type="text" name="" required="required" />
                        <span className="text">First Name</span>
                        <span className="line"></span>
                    </div>
                </div>
                <div className="col">
                    <div className="inputBox">
                        <input type="text" name="" required="required" />
                        <span className="text">Last Name</span>
                        <span className="line"></span>
                    </div>
                </div>
            </div>
            <div className="row100">
                <div className="col">
                    <div className="inputBox">
                        <input type="text" name="" required="required" />
                        <span className="text">Email</span>
                        <span className="line"></span>
                    </div>
                </div>
                <div className="col">
                    <div className="inputBox">
                        <input type="number" name="" required="required" />
                        <span className="text">Mobile</span>
                        <span className="line"></span>
                    </div>
                </div>
            </div>
            <div className="row100">
                <div className="col">
                    <div className="inputBox textarea">
                        <textarea required="required" placeholder='Type your message Here...'></textarea>
                        <span className="text"></span>
                        <span className="line"></span>
                    </div>
                </div>
            </div>
            <div class="row100">
                <div class="col">
                    <input type="submit" value="Send" />
                </div>
            </div>
        </div>
        )
    }

export default Contact;