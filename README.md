# \<smartapp-tile\>

Tile for presenting capabilities from SmartThings API

## Example usage

```html
<script src="../node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
<script type="module" src="../smartapp-tile.js"></script>

<!-- create a tile using HTML -->
<smartapp-tile tile-name="Test Label" current-value="Test value" capability="temperatureMeasurement"></smartapp-tile>

<!-- create a tile programmatically -->
<script>
  let tile = document.createElement('smartapp-tile');
  tile.tileCapability = 'contactSensor';
  const device = {
    label: 'Test Sensor',
    state: {
      "contactSensor": {
        "contact": {
          "value": "closed"
        }
      }
    }
  };
  tile.device = device;
  document.appendChild(tile);
</script>

```
