import React from 'react';

const styles = {
    headerWrapper: {
        fontFamily: 'Montserrat, Open Sans,sans-serif',
        fontSize: '50px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px',
        borderStyle: 'solid',
        borderWidth: '10px',
        borderColor: '#c9e1b0',
        background: '#bcd8ef'
    }
}

const header = () => <div style={styles.headerWrapper}>Contacts</div>;

export default header;