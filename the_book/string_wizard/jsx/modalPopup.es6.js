'use strict';

import React from 'lib/react';
import KvPairsList from 'kvPairsList.es6';

class ModalPopup extends React.Component {
    render() {
        return <div id="id01" class="w3-modal" style="display: block;">
            <div class="w3-modal-content w3-animate-top w3-card-4">
                <header class="w3-container w3-red w3-display-container">
                    <span onclick="document.getElementById('id01').style.display='none'"
                          class="w3-button w3-xlarge w3-display-topright w3-hover-red w3-hover-opacity">×</span>
                    <h2>Modal Header</h2>
                </header>
                <div class="w3-container">
                    <p>Hello World!</p>
                    <p>Modals are awesome!</p>
                </div>
                <footer class="w3-container w3-red">
                    <p>Modal Footer</p>
                </footer>
            </div>
        </div>;
    }
}