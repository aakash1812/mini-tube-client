// import React from 'react';
// import {Field, reduxForm} from 'redux-form';
// import { connect } from 'react-redux';
// import { createStreams } from '../../actions';


// class StreamCreate extends React.Component {

//     renderError = ({touched, error}) => {
//         if (touched && error){
//             return(
//                 <div className="ui error message">
//                     <div className="header">
//                         {error}
//                     </div>
//                 </div>
//             );
//         }
//     }


//     renderInput = (formProps) => {
//         const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error': ''}`;
//         return(
//             <div className={className}>
//             <label>{formProps.label}</label>
//                 <input onChange={formProps.input.onChange} value={formProps.input.value} />
//                 {this.renderError(formProps.meta)}
//                 {/* <div>{formProps.meta.error}</div> */}
//             </div>
//         );
//     }

//     onSubmit = (formValues) => {
//         // e.preventDefault();              //No longer needed

//         // formValues can be now directly used for validation, saving to any APIs, etc.
//         // Thus its better method and avoid useless handling of 'event'. 

//         // console.log(formValues);

//         this.props.createStreams(formValues);


//     }

//     render() {
//         return(
//             <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">

//             {/* 'handleSubmit' is a callback method provided to component by the Redux-form. We then pass our callback method (onSubmit) to this function.
//             Behind the scenes 'handleSubmit' automatically gets access to 'event' and automatically call 'e.preventDefault()'. Thus there is no need to 
//             even call onSubmit function with event (i.e. onSubmit(e)) instead its going to be called with the values which we have inside our 'Field' inputs. */}

//             {/* Field (by default) in case of extra input like 'label' automatically pass it as a prop to renderInput function.
//                 This makes label access by 'formProps'. */}

//                 <Field name='Title' component={this.renderInput} label="Enter Title"/>
//                 <Field name='Description' component={this.renderInput} label="Enter Description"/>

//                 <button className="ui button primary">Submit</button>
//             </form>
//         );
//     }
// }


// const validate = (formValues) => {
//     const errors = {};

//     if(!formValues.Title) {
//         errors.Title = "Form must have a Title";
//     }

//     if(!formValues.Description) {
//         errors.Description = "Form must have a Description";
//     }

//     return errors;
// };


// const formWrapped = reduxForm({form : 'streamCreate', validate})(StreamCreate);

// export default connect(null, { createStreams })(formWrapped);

//#######################################################################################################################################################

import React from 'react';
import { connect } from 'react-redux';
import { createStreams } from '../../actions';
import StreamForm from './StreamForm';


class StreamCreate extends React.Component {

    onSubmit = (formValues) => {
        this.props.createStreams(formValues);
    }

    render() {
        return(
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}


export default connect(null, { createStreams })(StreamCreate);
 

