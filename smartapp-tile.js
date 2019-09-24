import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import 'fontawesome-icon';
import {capabilityClasses} from './capabilities.js';

/**
 * `smartapp-tile`
 * Tile for presenting capabilities from SmartThings API
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
const defaultTileName = 'Untitled';

class SmartappTile extends PolymerElement {
  static get properties() {
    return {
      /* the name for the tile */
      tileName: {
        type: String,
        notify: true,
        reflectToAttribute: true,
        value: defaultTileName,
      },
      /* the capability for the tile */
      tileCapability: {
        type: String,
        notify: true,
        reflectToAttribute: true,
      },
      /* the device attached to this tile */
      device: {
        type: Object,
        notify: true,
      },
      /* can this tile be clicked/pushed/tapped -> can its device be controlled? */
      actionable: {
        type: Boolean,
        reflectToAttribute: true,
        value: false, // actions not implemented yet!
      },
      /* FontAwesome icon for the tile */
      icon: {
        type: Object,
        reflectToAttribute: false,
      },
      /* current value (and unit) of the capability of this tile's device */
      value: {
        type: Object,
        notify: true,
        reflectToAttribute: false,
      },
      /* current value (no unit) of the capability of this tile's device */
      currentValue: {
        type: String,
        notify: true,
        reflectToAttribute: true,
      },
    };
  }
  static get observers() {
    return [
      'capabilityChanged(tileCapability)',
      'devicePropertyChanged(device.*)',
    ]
  }
  static get template() {
    return html`
      <style>
        :host {
          background-color: rgba(255,204,153,1);
        	border-color: rgba(255,204,153,0.8);
        	border-radius: 1em;
        	border-style: solid;
        	border-width: 0.3em;
          display: inline-block;
        	margin: 1em 1em 2em 1em;
        	min-height: 8em;
        	min-width: 8em;
        	padding: 0.25em;
        	position: relative;
        	text-align: center;
        }
        :host([actionable]) {
        	background-color: rgba(255,204,153,0.8);
        	border-color: rgba(255,204,153,1);
        	border-style: outset;
        }
        :host([actionable]:hover) {
        	background-color: rgba(255,204,153,1);
        }
        :host([actionable]:active) {
        	border-color: rgba(255,204,153,1);
        	border-style: inset;
        }
        h2 {
          font-size: 100%;
          text-align: center;
        }
        fontawesome-icon {
          font-size: 300%;
          text-align: center;
        }
        p.value {
          font-size: 100%;
          text-align: center;
        }
        p.value .unit {
          font-size: smaller;
        }
      </style>
      <h2>{{tileName}}</h2>
      <fontawesome-icon prefix="{{icon.prefix}}" name="{{icon.name}}" title="{{capability}}"></fontawesome-icon>
      <p class="value"><span class="value">{{value.value}}</span> <span class="unit">{{value.unit}}</span></p>
    `;
  }
/*
  currentValueChanged(currentValue) {
    // this.value = {value: currentValue, unit: this.value.unit};
    // this.value.value = currentValue;
  }
*/
  capabilityChanged(newCapability) {
    if (!capabilityClasses[newCapability]) {
      console.error('Unknown capability ' + newCapability);
      return false;
    }
    this.refreshValues();
  }
  devicePropertyChanged(changeRecord) {
    let device = this.device;
    if (changeRecord.path == 'device') {
      const newDevice = changeRecord.value;
      if (!newDevice) {
        console.error('No device specified.');
        return false;
      }
      if (!newDevice.state) {
        console.error('No state for device.');
        return false;
      }
      this.device = newDevice;
    }
    this.refreshValues();
  }
  refreshValues() {
    if (!this.tileCapability) {
      console.warn(`The tile ${this.tileName} has no capability!`);
      return false;
    }
    if (!this.device) {
      console.warn(`The tile ${this.tileName} has no device attached!`);
      return false;
    }
    const deviceCapability = new capabilityClasses[this.tileCapability](this.device.state);
    this.tileName = (this.tileName == defaultTileName) ? this.device.label : this.tileName;
    this.icon = deviceCapability.getIcon();
    this.value = deviceCapability.getValue();
    this.currentValue = this.value.value;
    return true;
  }
}

window.customElements.define('smartapp-tile', SmartappTile);
