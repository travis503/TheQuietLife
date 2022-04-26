import setOpenModal from './App.js';

export const eventList = [
  {
    'label': 0,
    'title': 'A fine day.',
    'effect': 'None',
    'description': 'This day is fine!',
    'button1': function() {alert('You pushed the button!')},
    'button2': function() {setOpenModal(false)}
  },
  {
    'label': 1,
    'title': 'A great day.',
    'effect': 'None',
    'description': 'This day is great!',
    'button1': function() {alert('You pushed the button!')},
    'button2': function() {setOpenModal(false)}
  },
  {
    'label': 2,
    'title': 'An excellent day.',
    'effect': 'None',
    'description': 'This day is excellent!',
    'button1': function() {alert('You pushed the button!')},
    'button2': function() {setOpenModal(false)}
  },
  {
    'label': 3,
    'title': 'A lousy day.',
    'effect': 'None',
    'description': 'This day is lousy.',
    'button1': function() {alert('You pushed the button!')},
    'button2': function() {setOpenModal(false)}
  },

]