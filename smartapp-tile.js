import { LitElement, html } from 'lit-element';
import {capabilityClasses} from './capabilities.js';
import 'fontawesome-icon';

/**
 * `smartapp-tile`
 * Tile for presenting capabilities from SmartThings API
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
const defaultTileName = 'Untitled';

class SmartappTile extends LitElement {
  constructor() {
    super();
    this.name = defaultTileName;
    this.capability = null;
    this.device = null;
    this.actionable = false;
    this.icon = {prefix:'fas', name:'question'};
    this.value = ''; // read only
    this.unit = ''; // read only
    this.valueObject = {};
  }
  static get properties() {
    return {
      /* the name for the tile */
      name: {
        type: String,
        notify: true,
        reflect: true,
        value: defaultTileName,
      },
      /* the capability name (string) for the tile */
      capability: {
        type: String,
        notify: true,
        reflect: true,
      },
      /* the capability object for the tile */
      capabilityObject: {
        type: Object,
        notify: true,
        reflect: false,
      },
      /* the device (with state) attached to this tile */
      device: {
        type: Object,
        notify: true,
        reflect: false,
      },
      /* can this tile be clicked/pushed/tapped -> can its device be controlled? */
      actionable: {
        type: Boolean,
        reflect: true,
        value: false, // actions not implemented yet!
      },
      /* FontAwesome icon for the tile */
      icon: {
        type: Object,
        reflect: false,
      },
      /* current value (no unit) of the capability of this tile's device */
      value: {
        type: String,
        notify: true,
        reflect: true,
      },
      /* current unit of the capability of this tile's device */
      unit: {
        type: String,
        notify: true,
        reflect: true,
      },
      /* current value (and unit) of the capability of this tile's device */
      valueObject: {
        type: Object,
        notify: true,
        reflect: false,
      },
    };
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} changed from ${oldValue} to ${newValue}`);
    this.refreshValues();
  }

  render() {
    let deviceCapability;
    let vo = this.valueObject;
    let icon = this.icon;
    if (this.capability && this.device) {
      deviceCapability = new capabilityClasses[this.capability](this.device.state);
      vo = deviceCapability.getValue();
      icon = deviceCapability.getIcon();
    }
    let renderValue = vo.value;
    let renderUnit = vo.unit;
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
      <h2>${this.name}</h2>
      <fontawesome-icon prefix="${icon.prefix}" name="${icon.name}" title="${this.capability}"></fontawesome-icon>
      <p class="value"><span class="value">${renderValue}</span> <span class="unit">${renderUnit}</span></p>
    `;
  }
  refreshValues() {
    if (!this.capability) {
      console.warn(`The tile ${this.name} has no capability!`);
      return false;
    }
    if (!this.device) {
      console.warn(`The tile ${this.name} has no device attached!`);
      return false;
    }
    const deviceCapability = new capabilityClasses[this.capability](this.device.state);
    this.name = (this.name == defaultTileName) ? this.device.label : this.name;
    this.icon = deviceCapability.getIcon();
    this.valueObject = deviceCapability.getValue();
    this.value = this.valueObject.value;
    this.unit = this.valueObject.unit;
    return true;
  }
}
customElements.define('smartapp-tile', SmartappTile);
