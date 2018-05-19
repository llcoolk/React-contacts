import React from 'react';

import ContactItem from './ContactItem';

const styles = {
    contactListWrapper: {
        fontFamily: 'Montserrat, Open Sans,sans-serif',
        fontSize: '16px',
        width: '33.3%',
        border: '0',
        overflow: 'scroll'
        // background: '#FFE6A0'
    }
}

const contactList = () => <div style={styles.contactListWrapper}><ContactItem /></div>;

export default contactList;
