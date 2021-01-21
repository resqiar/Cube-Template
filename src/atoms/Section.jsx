import React from "react";
import propTypes from 'prop-types'

const Section = (params) => {
    const className = ['section']
    className.push(params.className)

    if(params.isCentered) className.push('center-content')

    return (
        <section className={className.join(" ")}>
            {params.children}
        </section>
    )
}

Section.propTypes = {
    isCentered: propTypes.bool,
    className: propTypes.string,
}


export default Section;
