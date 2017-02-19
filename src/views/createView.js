import LayoutBody from './LayoutBody';

export default function createView(ChildComponent) {
  return {
    components: {
      ChildComponent,
      LayoutBody,
    },
    template: '<LayoutBody><ChildComponent></ChildComponent></LayoutBody>',
  };
}
