import React from "react";

export const Unavailable = ({ title, className, children }) => (
  <div className='unavailable'>
    <p className={className}>{title}</p>
    {children}
  </div>
);
