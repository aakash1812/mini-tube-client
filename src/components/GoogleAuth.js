import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () =>{
            window.gapi.client.init({
                // clientId:'144062268697-tbkvqjghrnnpd6q63qbcb74mgqqgb6lf.apps.googleusercontent.com',
                clientId:'547149568769-8hiov01cujr38e22o83ar8vqno28nf6s.apps.googleusercontent.com',
                scope:'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                // this.setState({ isSignedIn : this.auth.isSignedIn.get() });
                console.log("At Auth");
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    // onAuthChange = () => {
    //     this.setState({ isSignedIn : this.auth.isSignedIn.get() })
    // };


    onAuthChange = (isSignedIn) => {
        // this.setState({ isSignedIn : this.auth.isSignedIn.get() });
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
            // console.log(a.type);
        } else {
            this.props.signOut();
            // console.log(a.type);
        }
    };


    renderAuthButton() {
        // if (this.state.isSignedIn === null){
        //     return(
        //         <div>I don't know</div>
        //     );
        // } else 
        if(this.props.isSignedIn === true){
            return(
                <button onClick={this.onSignOutClick} className="ui blue google button">
                    <i className="google icon" />
                        Sign Out
                </button>
            );
        } else {
            return(
                <button onClick={this.onSignInClick} className="ui blue google button">
                    <i className="google icon" />
                        Sign in with Google
                </button>
            );
        }
    }


    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };


    render() {
        return(
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isSignedIn : state.auth.isSignedIn
    }
}


export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);