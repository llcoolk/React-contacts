import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const styles = {
    listWrapper: {
        fontFamily: 'Montserrat, Open Sans,sans-serif',
        fontSize: '16px',
        fontColor: 'black',
        border: 'solid',
        borderColor: '#ffe69b',
        borderWidth: '10px',
        background: '#f8ccab',
        whiteSpace: 'nowrap',
        overFlow: 'hidden',
        textOverflow: 'ellipsis'
    },
    list: {
        padding: 10,
        fontweight: 'bold'
    }
}

const contactItem = props => {
    console.log(props.myList)
    const list = props.myList.map(item => {
        return (

            <Link to={`${item.id}`} key={item.id} style={{ textDecoration: 'none' }} >
                <div style={styles.listWrapper}>
                    <p><span style={styles.list}>Name:</span>{item.name}</p>
                    <p><span style={styles.list}>Email:</span>{item.email}</p>
                </div>
            </Link>
        )
    });
    return <div>{list}</div>;
}

const mapStateToProps = state => {
    return {
        myList: state.list
    }
}
export default connect(mapStateToProps, null)(contactItem);