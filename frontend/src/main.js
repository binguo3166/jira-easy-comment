import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@atlaskit/button';
import '@atlaskit/css-reset';
import '@atlaskit/reduced-ui-pack';

function startRender() {
    ReactDOM.render(
        <Button appearance="primary">
            Button created using React Atlaskit
        </Button>
    , document.getElementById('react-container'));
}

window.onload = startRender;