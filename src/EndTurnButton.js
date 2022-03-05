import React from 'react';

export default function EndTurnButton(props) {

  var events = [
    {
      'label': 0,
      'title': 'A fine day.',
      'effect': 'None',
    },
    {
      'label': 1,
      'title': 'A great day.',
      'effect': 'None',
    },
    {
      'label': 2,
      'title': 'An excellent day.',
      'effect': 'None',
    },
    {
      'label': 3,
      'title': 'A lousy day.',
      'effect': 'None',
    },

  ]

  var newItems = [
    {
      'label': 0,
      'title': 'a rock',
      'effect': 'None',
    },
    {
      'label': 1,
      'title': 'a stick',
      'effect': 'None',
    },
    {
      'label': 2,
      'title': 'a bug',
      'effect': 'None',
    },
    {
      'label': 3,
      'title': 'a boot',
      'effect': 'None',
    },

  ]

  var changeWeather = () => {
    var weatherRoll = Math.random() * 100;
    if (weatherRoll < 60) {
      props.setWeather('sunny');
    } else if (weatherRoll < 95) {
      props.setWeather('rainy');
    } else {
      props.setWeather('stormy');
    }
  }

  var changeEvent = () => {
    var eventRoll = Math.floor(Math.random() * events.length);
    props.setEvent(events[eventRoll]);
  }

  var changeNewItem = () => {
    var newItemRoll = Math.floor(Math.random() * newItems.length);
    props.setNewItem(newItems[newItemRoll]);
  }

  var incrementDay = () => {
    if (props.day < 31) {
      props.setDay(props.day + 1);
    } else {
      props.setDay(1);
      if (props.season === 'Spring') {
        props.setSeason('Summer');
      } else if (props.season === 'Summer') {
        props.setSeason('Fall');
      } else if (props.season === 'Fall') {
        props.setSeason('Winter');
      } else if (props.season === "Winter") {
        props.setSeason('The ');
        props.setDay('End!');
      }
    }
  }

  var endTurn = () => {
    changeWeather();
    changeEvent();
    changeNewItem();
    incrementDay();
    props.setStamina(12);
    props.setClaimed(false);
  }

  return (
      <button className="endTurnButton" onClick={endTurn}>End Turn</button>
    )
}