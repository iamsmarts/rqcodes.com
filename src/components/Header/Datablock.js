import React from 'react'

const Datablock = ({title, value}) => {
    return (
        <div className="intro-data">
            <div className="intro-data-block">
                <p className="data-title">
                    {title}
                </p>
                <p className="data-value">
                    {value}
                </p>
            </div>
        </div>
    )
}

export default Datablock
