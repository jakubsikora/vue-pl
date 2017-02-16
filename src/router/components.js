import Grid from '../views/Grid';
import createView from '../views/createView';

export default [{
  name: 'grid',
  path: 'grid',
  component: Grid,
}, {
  name: 'foo',
  path: 'foo',
  component: createView(Grid),
}];
