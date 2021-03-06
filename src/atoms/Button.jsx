import React from 'react'
import propTypes from 'prop-types'

const Button = (params) => {
    const className = ["button"]

    if(params.isPrimary) className.push("button-primary")
    if (params.isWideMobile) className.push("button-wide-mobile")
    if (params.isSmall) className.push("button-sm")
    if (params.isBlock) className.push("button-block")

    return (
        <button className={className.join(" ")}>
            {params.children}
        </button>
    )
}

Button.propTypes = {
    isPrimary : propTypes.bool,
    isWideMobile : propTypes.bool,
    isSmall : propTypes.bool,
    isBlock : propTypes.bool,
}


export default Button