import createView from './views/createView';
import Grid from './views/Grid';
import Colors from './views/Colors';
import Typography from './views/Typography';

const components = [{
  label: 'Grid',
  name: 'grid',
  path: 'grid',
  component: createView(Grid),
}];

const foundations = [{
  label: 'Colors',
  name: 'colors',
  path: 'colors',
  component: createView(Colors),
}, {
  label: 'Typography',
  name: 'typography',
  path: 'typography',
  component: createView(Typography),
}];

export {
  components,
  foundations,
};
