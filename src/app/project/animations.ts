import {animate, state, style, transition, trigger} from '@angular/animations';

export const markedStateTrigger = trigger('markedState', [
  state('default', style({
    border: 'solid 1px black',
    backgroundColor: 'transparent',
    padding: '20px'
  })),
  state('marked', style({
    border: 'solid 2px blue',
    backgroundColor: '#caeff9',
    padding: '19px'
  })),
  state('inactive', style({
    border: 'solid 1px #ccc',
    color: '#ccc'
  })),
  transition('default => marked', [
    style({
      border: '2px solid black',
      padding: '19px'
    }),
    animate('200ms ease-out', style({
      transform: 'scale(1.05)'
    })),
    animate(200)
  ]),
  transition('marked => default', [
    style({
      border: '1px solid black',
      padding: '20px'
    }),
    animate('300ms ease-out')
  ])
]);
