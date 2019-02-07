import React from 'react';
import {Router, Route} from 'react-router-dom';
import StreamCreate from './Streams/StreamCreate';
import StreamDelete from './Streams/StreamDelete';
import StreamEdit from './Streams/StreamEdit';
import StreamList from './Streams/StreamList';
import StreamShow from './Streams/StreamShow';
import Header from './Header';
import history from '../history';

// const PageOne = () => {
//     return(
//         <div>PageOne<br></br>
//             Bad Method !
//             <Link to="/pagetwo">Navigate to page 2</Link>
//         </div>
//     );
// }

// const PageTwo = () => {
//     return(
//         <div>PageTwo<br></br>
//             <Link to="/">Navigate to Page 1</Link>
//             <button>Click Me !</button>
//         </div>
//     );
// }

const App = () => {
    return(
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/edit/:id" exact component={StreamEdit} />
                    <Route path="/streams/delete/:id" exact component={StreamDelete} />
                    <Route path="/streams/show" exact component={StreamShow} />
                </div>
            </Router>
        </div>
    );
};

export default App;