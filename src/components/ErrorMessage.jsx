import React from 'react'

const ErrorMessage = ({ children }) => {
    return (
        <div className="error-message">
            <span className="error-icon">⚠️</span>
            <span className="error-text">{children}</span>
        </div>
    )
}

export default ErrorMessage