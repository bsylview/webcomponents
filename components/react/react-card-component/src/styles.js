import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'card': {
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'borderRadius': '0.2em',
    'backgroundColor': 'rgb(228, 245, 239)',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.2)' }],
    'justifyContent': 'center',
    'textAlign': 'center',
    'color': 'black'
  },
  'title': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#0f0f0f' }]
  },
  'logo': {
    'height': [{ 'unit': 'rem', 'value': 3 }],
    'margin': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.5 }]
  },
  'header': {
    'justifyContent': 'center'
  },
  'footer': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }]
  },
  'button': {
    'display': 'inline-block',
    'verticalAlign': 'middle',
    'fontFamily': 'inherit',
    'cursor': 'pointer',
    'userSelect': 'none',
    'position': 'relative',
    'boxSizing': 'border-box',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'lineHeight': [{ 'unit': 'px', 'value': 16 }],
    'height': [{ 'unit': 'px', 'value': 32 }],
    'WebkitTapHighlightColor': 'rgba(255, 255, 255, 0)',
    'borderWidth': 'initial',
    'borderStyle': 'none',
    'borderColor': 'initial',
    'borderImage': 'initial',
    'textDecoration': 'none',
    'borderRadius': '3px',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 14 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 14 }],
    'outline': '0px',
    'color': 'rgb(255, 255, 255)',
    'backgroundColor': 'rgb(66, 185, 131)',
    'margin': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.5 }]
  }
});
