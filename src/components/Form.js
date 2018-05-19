import React, { Component } from 'react';
import { connect } from 'react-redux';

const styles = {
    formWrapper: {
        textAlign: 'left',
        fontFamily: 'Montserrat, Open Sans, sans-serif',
        fontSize: '20px',
        width: '66.6%',
        height: '100vh',
        border: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'left',
        background: '#c7e1b2'
    },
    innerForm1: {
        fontSize: '20px',
        padding: '100px',
        border: '0',
        background: '#a29cdd'
    },
    innerForm2: {
        float: 'right',
        padding: '50ox',
        border: '0',
    },
    buttonUpdate: {
        margin: '10px',
        border: 'solid white',
        fontSize: '20px',
        background: '#73ac3e'
    },
    buttonDelete: {
        margin: '10px',
        border: 'solid white',
        fontSize: '20px',
        background: '#bf1300'
    },
    buttonAdd: {
        border: 'solid white',
        fontSize: '20px',
        margin: '50px',
        background: '#ffd959'
    }

}

class Form extends Component {

    componentDidMount() {
        this.props.onListChange(this.props.match.params.listId)
    }

    componentWillReceiveProps(newProps) {
        if (this.props.match.params.listId !== newProps.match.params.listId) {
            this.props.onListChange(newProps.match.params.listId);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.redirectTo !== prevProps.redirectTo) {
            this.props.history.push(this.props.redirectTo);
        }
    }

    submit(e) {
        e.preventDefault();
    }

    focus(e) {
        e.target.value = '';
    }

    render() {
        const { listId } = this.props.match.params,
            { name, email, phone, onInputChange, onUpdate, onDelete, onAdd } = this.props;
        return (
            <form style={styles.formWrapper} onSubmit={this.submit}>
                <div>
                    <div style={styles.innerForm1}>
                        <label>Name: <input
                            type='text'
                            name='name'
                            placeholder='Name'
                            value={name}
                            onFocus={this.focus}
                            onChange={(e) => onInputChange(e.target.name, e.target.value)} /></label>
                        <br />
                        <br />
                        <label>Email: <input
                            type='text'
                            name='email'                           
                            placeholder='Email'
                            value={email}
                            onFocus={this.focus}
                            onChange={(e) => onInputChange(e.target.name, e.target.value)} /></label>
                        <br />
                        <br />
                        <label>Phone: <input
                            type='text'
                            name='phone'
                            placeholder='Phone'
                            value={phone}
                            onFocus={this.focus}
                            onChange={(e) => onInputChange(e.target.name, e.target.value)} /></label>
                        <br />
                        <br />
                        <div>
                            <input type='button' value='Update' style={styles.buttonUpdate} onClick={() => onUpdate(listId)} />
                            <input type='button' value='Delete' style={styles.buttonDelete} onClick={() => onDelete(listId)} />
                            <br />
                            <br />
                        </div>
                    </div>
                    <div style={styles.innerForm2}>
                        <input type='button' value='Add New Contact' style={styles.buttonAdd} onClick={onAdd} />
                    </div>
                </div>
            </form>

        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.list,
        name: state.name,
        email: state.email,
        phone: state.phone,
        redirectTo: state.redirectTo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onListChange: (id) => dispatch({ type: 'CHANGE_ITEM', id }),
        onInputChange: (name, value) => dispatch({ type: 'CAPTURE_INPUT', payload: { name, value } }),
        onUpdate: (id) => dispatch({ type: 'UPDATE', id }),
        onDelete: (id) => dispatch({ type: 'DELETE', id }),
        onAdd: () => dispatch({ type: 'ADD' }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form);