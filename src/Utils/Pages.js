import React from 'react';

const Pages = (props) => {
    return (
        <>
        <br />
    <div>
        {props.pages.map(page => (<button className="btn btn-primary mr-2" id={page} onClick={props.handler}>{page + '.'}</button>))}
    </div>
    </>
    );
}

export default Pages;