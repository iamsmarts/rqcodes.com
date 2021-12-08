import React from 'react'

const Avitar = () => {
    return (
        <div className="avitar">
            <div className="avi-image">
                {/* image here */}
                <img src="/images/left-hand-raised_new.png" alt="Rudy Quevedo's custom emoji waiving hello" />
            </div>
            <div className="avi-title">
                <h2>{`{ rq_codes }`}</h2>
            </div>
            <div className="site-update">
                {/* get date from git? */}
                <p>//WIP - Last updated 01-01-2099</p>
            </div>
        </div>
    )
}

export default Avitar
