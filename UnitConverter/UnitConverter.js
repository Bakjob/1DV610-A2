/**
 * A class for converting between different units of measurement.
 */
export class UnitConverter {
  // General validation for numbers.
  #validateNumber(number) {
    return !isNaN(number)
  }

  // Unit groups for every supported type. This can be expanded with more units. Only here for validation purposes.
  #unitGroups = {
    time: ['minutes', 'hours', 'days', 'seconds'],
    temp: ['celsius', 'fahrenheit', 'kelvin'],
    weight: ['grams', 'kilograms', 'pounds', 'ounces'],
    length: ['meters', 'kilometers', 'inches', 'feet', 'yards', 'miles'],
    volume: ['liters', 'milliliters', 'gallons', 'quarts', 'pints', 'cups']
  }

  // Validering för att säkerställa att enheten finns inom en given grupp
  #validateUnit(unit, group) {
    return this.#unitGroups[group].includes(unit)
  }

  // Conversion factors for every supported type.
  #conversionFactors = {
    time: {
      seconds: { minutes: 1 / 60, hours: 1 / 3600, days: 1 / 86400, seconds: 1 },
      minutes: { seconds: 60, hours: 1 / 60, days: 1 / 1440, minutes: 1 },
      hours: { seconds: 3600, minutes: 60, days: 1 / 24, hours: 1 },
      days: { seconds: 86400, minutes: 1440, hours: 24, days: 1 }
    },
    temp: {
      celsius: { fahrenheit: (n) => (n * 9 / 5 + 32), kelvin: (n) => n + 273.15, celsius: (n) => n },
      fahrenheit: { celsius: (n) => (n - 32) * 5 / 9, kelvin: (n) => (n + 459.67) * 5 / 9, fahrenheit: (n) => n },
      kelvin: { celsius: (n) => n - 273.15, fahrenheit: (n) => n * 9 / 5 - 459.67, kelvin: (n) => n }
    },
    weight: {
      grams: { kilograms: 1 / 1000, pounds: 0.00220462, ounces: 0.035274 },
      kilograms: { grams: 1000, pounds: 2.20462, ounces: 35.274 },
      pounds: { grams: 453.592, kilograms: 0.453592, ounces: 16 },
      ounces: { grams: 28.3495, kilograms: 0.0283495, pounds: 0.0625 }
    },
    length: {
      
    },
    volume: {

    }
  }

  // The main conversion method.
  #convert(number, fromUnit, toUnit, group) {
    if (!this.#validateNumber(number)) { // Validate the number first.
      return 'invalidInput'
    }
    if (!this.#validateUnit(fromUnit, group) || !this.#validateUnit(toUnit, group)) { // Validate the units.
      return 'invalidInput'
    }

    // Get the conversion factor.
    const factor = this.#conversionFactors[group][fromUnit][toUnit]

    console.log(factor)

    return typeof factor === 'function' ? factor(number) : number * factor
  }

  // Specific methods for every supported type.
  timeConverter(number, fromUnit, toUnit) {
    return this.#convert(number, fromUnit, toUnit, 'time')
  }

  tempConverter(number, fromUnit, toUnit) {
    return this.#convert(number, fromUnit, toUnit, 'temp')
  }

  weightConverter(number, fromUnit, toUnit) {
    return this.#convert(number, fromUnit, toUnit, 'weight')
  }

  lengthConverter(number, fromUnit, toUnit) {
    return this.#convert(number, fromUnit, toUnit, 'length')
  }

  volumeConverter(number, fromUnit, toUnit) {
    return this.#convert(number, fromUnit, toUnit, 'volume')
  }
}
