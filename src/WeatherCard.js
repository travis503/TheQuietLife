import React from 'react';

export default function WeatherCard(props) {

  return (
    <div className="weather tile card">
      <div>The weather is {props.weather}</div>
      <img src={`ql${props.weather}.png`} alt='Weather Cards' />
    </div>
  )
}