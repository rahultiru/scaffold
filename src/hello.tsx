import * as React from 'react';
require('./hello.scss');
interface HelloProps {
  compiler: string;
  framework: string;
}

const Hello:React.StatelessComponent<HelloProps> = (props) => {
  return (<h1>Hello from {props.compiler} and {props.framework}!</h1>);
};

export default Hello;
