import React from 'react';
import { AppBar, Button, Separator } from 'react95';
import Clock from './Clock';
import './styles/fuentes.css'; // Ruta correcta hacia tu archivo CSS

const AppBarComponent = () => {
  return (
    <AppBar style={{ bottom: 0, top: 'unset' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ padding: '0 8px', fontFamily: 'MS Sans Serif' }}>ilovepavon@gmail.com</div>
        <Separator orientation='vertical' size='43px' />
        <Clock style={{ fontWeight: 600, padding: '0 8px', fontFamily: 'MS Sans Serif', marginLeft: 'auto'}} />
      </div>
    </AppBar>
  );
};

export default AppBarComponent;