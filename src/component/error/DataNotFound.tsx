import React from 'react';
import './NotFound.css'

interface NotFoundProps {
    header: string,
    message?: string,
}

function DataNotFound(props: NotFoundProps) {
    return (
        <div className="not-found data-not-found text-center">
            <div className="ContWrap">
                <div className="imgbox"><img src="/images/data-not-found.svg" className="img-fluid" alt="Data Not Found" /></div>
                <div className="content">
                    <h4> {props.header}</h4>
                    <p>{props.message}</p>
                </div>
            </div>
        </div>
    );
}

DataNotFound.defaultProps = {
    header: "Sorry",
    message: "What you searched was unfortunately Not found or doesn’t exist.",
}

export default DataNotFound;