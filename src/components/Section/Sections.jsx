import PropTypes from 'prop-types';
import React from 'react';

export const Section = ({ title, children }) => {
    return (
        <section>
       <h1 className={title}>{title}</h1>
        {children}
        </section>
       
    )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};