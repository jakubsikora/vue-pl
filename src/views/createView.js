import ComponentRoot from './ComponentRoot';

export default function createView(ChildComponent) {
  return {
    components: {
      ChildComponent,
      ComponentRoot,
    },
    template: '<ComponentRoot><ChildComponent></ChildComponent></ComponentRoot>',
  };
}
