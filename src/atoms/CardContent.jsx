import React from 'react'
import propTypes from 'prop-types'


const CardContent = (params) => {
    const className = [""]
    if(params.isChecked) className.push("is-checked")
    
    return (
        <li className={className.join(" ")}>{params.desc}</li>
    )
}

CardContent.propTypes = {
    isChecked : propTypes.bool,
    desc : propTypes.string,
}

export default CardContent
