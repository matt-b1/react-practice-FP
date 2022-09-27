import React from 'react';

const Card = ({name, github}) => {
  const cardStyle ={
    backgroundColor: 'lightgrey',
    color: '#222',
    marginBottom: '20px'
  }

    return (
      <div style={cardStyle}>
        <p>name: {name} - GitHub: {github}</p>
      </div>
    )
}

export default Card;
