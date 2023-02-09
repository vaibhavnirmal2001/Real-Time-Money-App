import { Component } from "react";
class Footer extends Component {

    state = {}
    render() {
        return (
            <div>
                <div className="card d-flex flex-column min-vh-100 bg-dark">
                    <div className="card-header text-white">
                        Created By AVR Group
                    </div>
                    
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <footer className="blockquote-footer">This web application shows the realtime prices of Elements. </footer>
                            <footer className="blockquote-footer">The Prices of elemets are in USD per ounce unit. </footer>
                            <footer className="blockquote-footer"> </footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;