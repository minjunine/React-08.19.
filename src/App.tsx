import React from 'react';
// import Component, { FunctionComponent } from './component/Component';
import './App.css';
// import CurlyBraces from './component/CurlyBraces';
import Properties from './component_manage/Properties';
import Example2 from './component_manage/Example/Example2';
import ListFormat  from 'typescript';
import ListRender from './component_manage/Example/ListRender';
import HookComponent1 from './hook/HookComponent1';
import HookComponent2 from './hook/HookComponent2';
import CustomHook from './hook/CustomHook';

function App() {
  return (
    <>
      {/* <Component /> */}
      {/* <FunctionComponent /> */} 
      {/* <CurlyBraces /> */}
      {/* <Properties /> */}
      {/* <ConditionalRender />*/}
      {/* <Example2 /> */}
      {/* <ListRender /> */}
      {/* <EventComponent /> */}
      {/* <StateComponent /> */}
      {/* <ForwordingStateComponent /> */}
      {/* <HookComponent1 /> */}
      {/* <HookComponent2 /> */}
      <CustomHook />
    </>
  );
}

export default App;