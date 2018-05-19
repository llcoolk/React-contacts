import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Header from './components/Header';
import ContactList from './components/ContactList';
import Form from './components/Form';

const styles = {
    bodyWrapper: {
        display: 'flex',
        height: '100vh',
        background: '#c9e1b0',
        borderStyle: 'solid',
        borderColor: '#c9e1b0',
        borderWidth: '10px',
    }
}

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <div style={styles.bodyWrapper}>
                    <ContactList />
                    <Switch>
                        <Route path='/:listId' component={Form} />
                        <Redirect from='/' to='/1' />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;