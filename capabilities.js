class SmartThingsCapability {
  constructor(state) {
    this._state = state;
  }
  getIcon() {
    return {prefix: 'fas', name: 'question'};
  }
  getValue() {
    return {};
  }
  isActionable() {
    return false;
  }
  getActions() {
    return {};
  }
}

class AccelerationSensor extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    if (this.getValue() == 'active') {
      return {prefix: 'fas', name: 'arrows-alt'};
    }
    else {
      return {prefix: 'fas', name: 'compress'};
    }
  }
  getValue() {
    return {value: this._state.accelerationSensor.acceleration.value};
  }
  isActionable() {
    return false;
  }
  getActions() {
    return {};
  }
}

class AirQualitySensor extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    return {prefix: 'fas', name: 'air-refreshener'};
  }
  getValue() {
    let value = this._state.airQualitySensor.airQuality.value;
    let unit = this._state.airQualitySensor.airQuality.unit;
    return {value: value, unit: unit};
  }
  isActionable() {
    return false;
  }
  getActions() {
    return {};
  }
}

class Alarm extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    if (this._state.alarm.alarm.value != 'off') {
      return {prefix: 'fas', name: 'bell'};
    }
    else {
      return {prefix: 'fas', name: 'far fa-bell-slash'};
    }
  }
  getValue() {
    return {value: this._state.alarm.alarm.value};
  }
  isActionable() {
    return true;
  }
  getActions() {
    return {
      both: null,
      off: null,
      siren: null,
      strobe: null
    };
  }
}

class AudioMute extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    if (this._state.audioMute.mute.value != 'unmuted') {
      return {prefix: 'fas', name: 'volume-up'};
    }
    else {
      return {prefix: 'fas', name: 'volume-mute'};
    }
  }
  getValue() {
    return {value: this._state.audioMute.mute.value};
  }
  isActionable() {
    return true;
  }
  getActions() {
    return {
      mute: null,
      unmute: null
    };
  }
}

class Battery extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    if (this._state.battery.battery.value > 75) {
      return {prefix: 'fas', name: 'battery-full'};
    }
    else if (this._state.battery.battery.value > 50) {
      return {prefix: 'fas', name: 'battery-three-quarters'};
    }
    else if (this._state.battery.battery.value > 25) {
      return {prefix: 'fas', name: 'battery-half'};
    }
    else if (this._state.battery.battery.value > 5) {
      return {prefix: 'fas', name: 'battery-quarter'};
    }
    else {
      return {prefix: 'fas', name: 'battery-empty'};
    }
  }
  getValue() {
    let value = this._state.battery.battery.value;
    let unit = this._state.battery.battery.unit;
    return {value: value, unit: unit};
  }
  isActionable() {
    return false;
  }
  getActions() {
    return {};
  }
}

class Button extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    if (this._state.button.button.value == 'pushed') {
      return {prefix: 'fas', name: 'circle'};
    }
    else if (this._state.button.button.value == 'double') {
      return {prefix: 'fas', name: 'dot-circle'};
    }
    else if (this._state.button.button.value == 'held') {
      return {prefix: 'fas', name: 'circle-notch'};
    }
    else if (this._state.button.button.value == 'down') {
      return {prefix: 'fas', name: 'chevron-circle-down'};
    }
    else if (this._state.button.button.value == 'up') {
      return {prefix: 'fas', name: 'chevron-circle-up'};
    }
    else if (this._state.button.button.value == 'down_hold') {
      return {prefix: 'fas', name: 'pause-circle'};
    }
    else if (this._state.button.button.value == 'up_hold') {
      return {prefix: 'far', name: 'pause-circle'};
    }
    else if (this._state.button.button.value.match(/pushed_/)) {
      return {prefix: 'fas', name: 'plus-circle'};
    }
    else if (this._state.button.button.value.match(/down_/)) {
      return {prefix: 'fas', name: 'times-circle'};
    }
    else if (this._state.button.button.value.match(/up_/)) {
      return {prefix: 'far', name: 'times-circle'};
    }
    else {
      return {prefix: 'fas', name: 'window-minimize'};
    }
  }
  getValue() {
    return {value: this._state.button.button.value};
  }
  isActionable() {
    return false;
  }
  getActions() {
    return {};
  }
}

class CarbonDioxideMeasurement extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    return {prefix: 'fas', name: 'cloud-meatball'};
  }
  getValue() {
    let value = this._state.carbonDioxideMeasurement.carbonDioxide.value;
    let unit = this._state.carbonDioxideMeasurement.carbonDioxide.unit;
    return {value: value, unit: unit};
  }
  isActionable() {
    return false;
  }
  getActions() {
    return {};
  }
}

class CarbonMonoxideDetector extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    return {prefix: 'fas', name: 'fire-alt'};
  }
  getValue() {
    return {value: this._state.carbonMonoxideDetector.carbonMonoxide.value};
  }
  isActionable() {
    return false;
  }
  getActions() {
    return {};
  }
}

class CarbonMonoxideMeasurement extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    return {prefix: 'fas', name: 'cloud-meatball'};
  }
  getValue() {
    let value = this._state.carbonMonoxideMeasurement.carbonMonoxide.value;
    let unit = this._state.carbonMonoxideMeasurement.carbonMonoxide.unit;
    return {value: value, unit: unit};
  }
  isActionable() {
    return false;
  }
  getActions() {
    return {};
  }
}

class ColorControl extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    return {prefix: 'fas', name: 'palette'};
  }
  getValue() {
    return {value: this._state.colorControl.color.value};
  }
  isActionable() {
    return true;
  }
  getActions() {
    return {
      setColor:{
        color: {
          hue: "number",
          saturation: "number",
          hex: "string",
          level: "integer",
          switch: "string"
        }
      },
      setHue: {
        hue: "number"
      },
      setSaturation: {
        saturation: "number"
      }
    };
  }
}

class ColorTemperature extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    return {prefix: 'fas', name: 'tint'};
  }
  getValue() {
    let value = this._state.colorTemperature.colorTemperature.value;
    let unit = this._state.colorTemperature.colorTemperature.unit;
    return {value: value, unit: unit};
  }
  isActionable() {
    return true;
  }
  getActions() {
    return {
      setColorTemperature: {
        temperature: "number"
      }
    };
  }
}

class ContactSensor extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    if (this._state.contactSensor.contact.value == 'open') {
      return {prefix: 'fas', name: 'door-open'};
    }
    else {
      return {prefix: 'fas', name: 'door-closed'};
    }
  }
  getValue() {
    return {value: this._state.contactSensor.contact.value};
  }
  isActionable() {
    return false;
  }
  getActions() {
    return {};
  }
}

class DoorControl extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    if (this._state.doorControl.door.value == 'unknown') {
      return {prefix: 'fas', name: 'dungeon'};
    }
    else if (this._state.doorControl.door.value.match(/open|ing/)) {
      return {prefix: 'fas', name: 'door-open'};
    }
    else {
      return {prefix: 'fas', name: 'door-closed'};
    }
  }
  getValue() {
    return {value: this._state.doorControl.door.value};
  }
  isActionable() {
    return true;
  }
  getActions() {
    return {
      close: null,
      open: null
    };
  }
}

class DustSensor extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    if (this._state.doorControl.door.value == 'unknown') {
      return {prefix: 'fas', name: 'dungeon'};
    }
    else if (this._state.doorControl.door.value.match(/open|ing/)) {
      return {prefix: 'fas', name: 'door-open'};
    }
    else {
      return {prefix: 'fas', name: 'door-closed'};
    }
  }
  getValue() {
    let dust = this._state.dustSensor.dustLevel.value;
    let fineDust = this._state.fineDustSensor.dustLevel.value;
    let value = `fineDust/dust`;
    let unit = this._state.dustSensor.dustLevel.unit;
    return {value: value, unit: unit};
  }
  isActionable() {
    return false;
  }
  getActions() {
    return {};
  }
}

class EnergyMeter extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    return {prefix: 'fas', name: 'bolt'};
  }
  getValue() {
    let value = this._state.energyMeter.energy.value;
    let unit = this._state.energyMeter.energy.unit;
    return {value: value, unit: unit};
  }
  isActionable() {
    return false;
  }
  getActions() {
    return {};
  }
}

class EquivalentCarbonDioxideMeasurement extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    return {prefix: 'fas', name: 'cloud-meatball'};
  }
  getValue() {
    let value = this._state.equivalentCarbonDioxideMeasurement.equivalentCarbonDioxideMeasurement.value;
    let unit = this._state.equivalentCarbonDioxideMeasurement.equivalentCarbonDioxideMeasurement.unit;
    return {value: value, unit: unit};
  }
  isActionable() {
    return false;
  }
  getActions() {
    return {};
  }
}

class FormaldehydeMeasurement extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    return {prefix: 'fas', name: 'flask'};
  }
  getValue() {
    let value = this._state.formaldehydeMeasurement.formaldehydeLevel.value;
    let unit = this._state.formaldehydeMeasurement.formaldehydeLevel.unit;
    return {value: value, unit: unit};
  }
  isActionable() {
    return false;
  }
  getActions() {
    return {};
  }
}

class IlluminanceMeasurement extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    return {prefix: 'fas', name: 'sun'};
  }
  getValue() {
    let value = this._state.illuminanceMeasurement.illuminance.value;
    let unit = this._state.illuminanceMeasurement.illuminance.unit;
    return {value: value, unit: unit};
  }
  isActionable() {
    return false;
  }
  getActions() {
    return {};
  }
}

class InfraredLevel extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    return {prefix: 'far', name: 'moon'};
  }
  getValue() {
    let value = this._state.infraredLevel.infraredLevel.value;
    let unit = this._state.infraredLevel.infraredLevel.unit;
    return {value: value, unit: unit};
  }
  isActionable() {
    return true;
  }
  getActions() {
    return {
      setInfraredLevel: {
        level: "number"
      }
    };
  }
}

class Lock extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    if (this._state.lock.lock.value == 'unknown') {
      return {prefix: 'fas', name: 'user-lock'};
    }
    else if (this._state.lock.lock.value == 'unlocked with timeout') {
      // return 'fas fa-unlock-alt'};
      return {prefix: 'fas', name: 'user-clock'};
    }
    else if (this._state.lock.lock.value == 'unlocked') {
      return {prefix: 'fas', name: 'lock-open'};
    }
    else {
      return {prefix: 'fas', name: 'lock'};
    }
  }
  getValue() {
    return {value: this._state.lock.lock.value};
  }
  isActionable() {
    return true;
  }
  getActions() {
    return {
      lock: null,
      unlock: null
    };
  }
}

class MotionSensor extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    if (this._state.motionSensor.motion.value == 'active') {
      return {prefix: 'fas', name: 'people-carry'};
    }
    else {
      return {prefix: 'fas', name: 'lock'};
    }
  }
  getValue() {
    return {value: this._state.motionSensor.motion.value};
  }
  isActionable() {
    return false;
  }
  getActions() {
    return {};
  }
}

class PowerMeter extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    return {prefix: 'fas', name: 'plug'};
  }
  getValue() {
    let value = this._state.powerMeter.power.value;
    let unit = this._state.powerMeter.power.unit;
    return {value: value, unit: unit};
  }
  isActionable() {
    return false;
  }
  getActions() {
    return {};
  }
}

class PowerSource extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    if (this._state.powerSource.powerSource.value == 'battery') {
      return {prefix: 'fas', name: 'battery-full'};
    }
    else if (this._state.powerSource.powerSource.value == 'mains') {
      return {prefix: 'fas', name: 'charging-station'};
    }
    else if (this._state.powerSource.powerSource.value == 'dc') {
      return {prefix: 'fas', name: 'car-battery'};
    }
    else {
      return {prefix: 'fas', name: 'battery-empty'};
    }
  }
  getValue() {
    let value = this._state.powerSource.popowerSourcewer.value;
    let unit = this._state.powerSource.powerSource.unit;
    return {value: value, unit: unit};
  }
  isActionable() {
    return false;
  }
  getActions() {
    return {};
  }
}

class PresenceSensor extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    if (this._state.presenceSensor.presence.value != 'present') {
      return {prefix: 'far', name: 'user'};
    }
    else {
      return {prefix: 'fas', name: 'user'};
    }
  }
  getValue() {
    return {value: this._state.presenceSensor.presence.value};
  }
  isActionable() {
    return false;
  }
  getActions() {
    return {};
  }
}

class RelativeHumidityMeasurement extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    return {prefix: 'fas', name: 'cloud-rain'};
  }
  getValue() {
    let value = this._state.relativeHumidityMeasurement.humidity.value;
    let unit = this._state.relativeHumidityMeasurement.humidity.unit;
    return {value: value, unit: unit};
  }
  isActionable() {
    return false;
  }
  getActions() {
    return {};
  }
}

class SignalStrength extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    return {prefix: 'fas', name: 'signal'};
  }
  getValue() {
    let value = this._state.signalStrength.lqi.value;
    let unit = this._state.signalStrength.lqi.unit;
    return {value: value, unit: unit};
  }
  isActionable() {
    return false;
  }
  getActions() {
    return {};
  }
}

class SmokeDetector extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    return {prefix: 'fas', name: 'fire'};
  }
  getValue() {
    return {value: this._state.smokeDetector.smoke.value};
  }
  isActionable() {
    return false;
  }
  getActions() {
    return {};
  }
}

class SoundSensor extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    if (this._state.soundSensor.sound.value == 'detected') {
      return {prefix: 'fas', name: 'volume-down'};
    }
    else {
      return {prefix: 'far', name: 'volume-off'};
    }
  }
  getValue() {
    return {value: this._state.soundSensor.sound.value};
  }
  isActionable() {
    return false;
  }
  getActions() {
    return {};
  }
}

class SwitchLevel extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    return {prefix: 'fas', name: 'level-up-alt'};
  }
  getValue() {
    let value = this._state.switchLevel.level.value;
    let unit = this._state.switchLevel.level.unit;
    return {value: value, unit: unit};
  }
  isActionable() {
    return true;
  }
  getActions() {
    return {
      setLevel: {
        level: "integer",
        rate: "integer"
      }
    };
  }
}

class Switch extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    if (this._state.switch.switch.value == 'on') {
      return {prefix: 'fas', name: 'toggle-on'};
    }
    else {
      return {prefix: 'fas', name: 'toggle-off'};
    }
  }
  getValue() {
    return {value: this._state.switch.switch.value};
  }
  isActionable() {
    return true;
  }
  getActions() {
    return {
      off: null,
      on: null
    };
  }
}

class TamperAlert extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    if (this._state.tamperAlert.tamper.value == 'detected') {
      // return 'fas fa-people-carry'};
      return {prefix: 'fas', name: 'hand-lizard'};
    }
    else {
      // return 'fas fa-lock'};
      return {prefix: 'far', name: 'hand-lizard'};
    }
  }
  getValue() {
    return {value: this._state.tamperAlert.tamper.value};
  }
  isActionable() {
    return false;
  }
  getActions() {
    return {};
  }
}

class TemperatureMeasurement extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    return {prefix: 'fas', name: 'thermometer-half'};
  }
  getValue() {
    let value = this._state.temperatureMeasurement.temperature.value;
    let unit = this._state.temperatureMeasurement.temperature.unit;
    unit = '°' + unit;
    return {value: value, unit: unit};
  }
  isActionable() {
    return false;
  }
  getActions() {
    return {};
  }
}

class ThermostatCoolingSetpoint extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    return {prefix: 'fas', name: 'temperature-high'};
  }
  getValue() {
    let value = this._state.thermostatCoolingSetpoint.coolingSetpoint.value;
    let unit = this._state.thermostatCoolingSetpoint.coolingSetpoint.unit;
    return {value: value, unit: unit};
  }
  isActionable() {
    return true;
  }
  getActions() {
    return {
      setCoolingSetpoint: {
        setpoint: "number"
      }
    };
  }
}

class ThermostatFanMode extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    return {prefix: 'fas', name: 'fan'};
  }
  getValue() {
    return {value: this._state.thermostatFanMode.thermostatFanMode.value};
  }
  isActionable() {
    return true;
  }
  getActions() {
    return {
      fanAuto: null,
      fanCirculate: null,
      fanOn: null,
      setThermostatFanMode: {
        mode: "string" // auto|cirulate|followschedule|on
      }
    };
  }
}

class ThermostatHeatingSetpoint extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    return {prefix: 'fas', name: 'temperature-high'};
  }
  getValue() {
    let value = this._state.thermostatHeatingSetpoint.HeatingSetpoint.value;
    let unit = this._state.thermostatHeatingSetpoint.HeatingSetpoint.unit;
    return {value: value, unit: unit};
  }
  isActionable() {
    return true;
  }
  getActions() {
    return {
      setHeatingSetpoint: {
        setpoint: "number"
      }
    };
  }
}

class ThermostatMode extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    if (this._state.thermostatMode.thermostatMode.value == 'auto') {
      return {prefix: 'fas', name: 'weight'};
    }
    else if (this._state.thermostatMode.thermostatMode.value == 'cool') {
      return {prefix: 'fas', name: 'fan'};
    }
    else if (this._state.thermostatMode.thermostatMode.value == 'eco') {
      return {prefix: 'fas', name: 'leaf'};
    }
    else if (this._state.thermostatMode.thermostatMode.value == 'rush hour') {
      return {prefix: 'fas', name: 'money-bill-wave'};
    }
    else if (this._state.thermostatMode.thermostatMode.value == 'emergency heat') {
      return {prefix: 'fas', name: 'burn'};
    }
    else if (this._state.thermostatMode.thermostatMode.value == 'heat') {
      return {prefix: 'fas', name: 'sun'};
    }
    else if (this._state.thermostatMode.thermostatMode.value == 'off') {
      return {prefix: 'fas', name: 'power-off'};
    }
    else {
      return {prefix: 'far', name: 'weight'};
    }
  }
  getValue() {
    return {value: this._state.thermostatMode.thermostatMode.value};
  }
  isActionable() {
    return true;
  }
  getActions() {
    return {
      auto: null,
      cool: null,
      emergencyHeat: null,
      heat: null,
      off: null,
      setThermostatMode: {
        mode: "string" // auto|cool|eco|rush hour|emergency heat|heat|off
      }
    };
  }
}

class ThermostatOperatingState extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    if (this._state.thermostatOperatingState.thermostatOperatingState.value == 'cooling') {
      return {prefix: 'fas', name: 'wind'};
    }
    if (this._state.thermostatOperatingState.thermostatOperatingState.value == 'fan only') {
      return {prefix: 'fas', name: 'fan'};
    }
    else if (this._state.thermostatOperatingState.thermostatOperatingState.value == 'heating') {
      return {prefix: 'fas', name: 'sun'};
    }
    else if (this._state.thermostatOperatingState.thermostatOperatingState.value.match(/pending/)) {
      return {prefix: 'fas', name: 'clock'};
    }
    else if (this._state.thermostatOperatingState.thermostatOperatingState.value == 'vent economizer') {
      return {prefix: 'fas', name: 'money-bill-wave'};
    }
    else {
      return {prefix: 'far', name: 'weight'};
    }
  }
  getValue() {
    return {value: this._state.thermostatMode.thermostatMode.value};
  }
  isActionable() {
    return false;
  }
  getActions() {
    return {};
  }
}

class Tone extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    return {prefix: 'fas', name: 'volume-up'};
  }
  getValue() {
    return;
  }
  isActionable() {
    return true;
  }
  getActions() {
    return {
      beep: null
    };
  }
}

class TvocMeasurement extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    return {prefix: 'fas', name: 'allergies'};
  }
  getValue() {
    let value = this._state.tvocMeasurement.tvocLevel.value;
    let unit = this._state.tvocMeasurement.tvocLevel.unit;
    return {value: value, unit: unit};
  }
  isActionable() {
    return false;
  }
  getActions() {
    return {};
  }
}

class UltravioletIndex extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    return {prefix: 'far', name: 'umbrella-beach'};
  }
  getValue() {
    return {value: this._state.ultravioletIndex.ultravioletIndex.value};
  }
  isActionable() {
    return false;
  }
  getActions() {
    return {};
  }
}

class Valve extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    if (this._state.valve.valve.value == 'open') {
      return {prefix: 'fas', name: 'tint'};
    }
    else {
      return {prefix: 'fas', name: 'tint-slash'};
    }
  }
  getValue() {
    return {value: this._state.valve.valve.value};
  }
  isActionable() {
    return true;
  }
  getActions() {
    return {
      close: null,
      open: null
    };
  }
}

class VoltageMeasurement extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    return {prefix: 'fas', name: 'bolt'};
  }
  getValue() {
    let value = this._state.voltageMeasurement.voltage.value;
    let unit = this._state.voltageMeasurement.voltage.unit;
    return {value: value, unit: unit};
  }
  isActionable() {
    return false;
  }
  getActions() {
    return {};
  }
}

class WaterSensor extends SmartThingsCapability {
  constructor(state) {
    super(state);
  }
  getIcon() {
    return {prefix: 'fas', name: 'water'};
  }
  getValue() {
    return {value: this._state.waterSensor.water.value};
  }
  isActionable() {
    return false;
  }
  getActions() {
    return {};
  }
}

export const capabilityClasses = {
  accelerationSensor: AccelerationSensor,
  airQualitySensor: AirQualitySensor,
  alarm: Alarm,
  audioMute: AudioMute,
  battery: Battery,
  button: Button,
  carbonDioxideMeasurement: CarbonDioxideMeasurement,
  carbonMonoxideDetector: CarbonMonoxideDetector,
  colorControl: ColorControl,
  colorTemperature: ColorTemperature,
  contactSensor: ContactSensor,
  doorControl: DoorControl,
  dustSensor: DustSensor,
  energyMeter: EnergyMeter,
  equivalentCarbonDioxideMeasurement: EquivalentCarbonDioxideMeasurement,
  formaldehydeMeasurement: FormaldehydeMeasurement,
  illuminanceMeasurement: IlluminanceMeasurement,
  infraredLevel: InfraredLevel,
  lock: Lock,
  motionSensor: MotionSensor,
  powerMeter: PowerMeter,
  powerSource: PowerSource,
  presenceSensor: PresenceSensor,
  relativeHumidityMeasurement: RelativeHumidityMeasurement,
  signalStrength: SignalStrength,
  smokeDetector: SmokeDetector,
  soundSensor: SoundSensor,
  switchLevel: SwitchLevel,
  switch: Switch,
  tamperAlert: TamperAlert,
  temperatureMeasurement: TemperatureMeasurement,
  thermostatCoolingSetpoint: ThermostatCoolingSetpoint,
  thermostatFanMode: ThermostatFanMode,
  thermostatHeatingSetpoint: ThermostatHeatingSetpoint,
  thermostatMode: ThermostatMode,
  thermostatOperatingState: ThermostatOperatingState,
  tone: Tone,
  tvocMeasurement: TvocMeasurement,
  ultravioletIndex: UltravioletIndex,
  valve: Valve,
  voltageMeasurement: VoltageMeasurement,
  waterSensor: WaterSensor
};
