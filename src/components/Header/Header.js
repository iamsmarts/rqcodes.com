import React from 'react'
import Avitar from './Avitar'
import Datablock from './Datablock'

const Header = () => {
    return (
        <header>
            <Avitar/>
            <div className="intro">
                <div className="intro-copy">
                    <h1>Rudy Quevedo</h1>
                    <p>Front end guy, builder of things for the web.</p>
                </div>
                <Datablock title={'experince'} value={'15 years'}/>
                <Datablock title={'availability'} value={'Full Time, Short / Long Contract'}/>
            </div>
        </header>
    )
}

export default Header
