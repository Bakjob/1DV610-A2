/**
 * A class for converting between different units of measurement.
 */
export class UnitConverter {
  // General validation for numbers.
  #validateNumber(number) {
    if (typeof number !== 'number' || isNaN(number)) {
      // Return a clear error message for invalid number
      console.error(`Invalid input: ${number}. Expected a valid number.`)
      return false
    } else {
      return true
    }
  }

  // Unit groups for every supported type. This can be expanded with more units. Only here for validation purposes.
  #unitGroups = {
    time: ['minutes', 'hours', 'days', 'seconds', 'milliseconds', 'microseconds', 'nanoseconds', 'picoseconds'],
    temp: ['celsius', 'fahrenheit', 'kelvin'],
    weight: ['grams', 'kilograms', 'pounds', 'ounces', 'stones',],
    length: ['meters', 'kilometers', 'inches', 'feet', 'yards', 'miles'],
    volume: ['liters', 'milliliters', 'gallons', 'quarts', 'pints', 'cups']
  }

  // Validering för att säkerställa att enheten finns inom en given grupp
  #validateUnit(unit, group) {
    if (!this.#unitGroups[group].includes(unit)) {
      console.error(`Invalid unit: ${unit}. Valid units for ${group} are ${this.#unitGroups[group].join(', ')}`)
      return false
    }
    return true
  }

  // Conversion factors for every supported type. Very easy to add more types later.
  #conversionFactors = {
    time: {
      seconds: { minutes: 1 / 60, hours: 1 / 3600, days: 1 / 86400, seconds: 1 },
      minutes: { seconds: 60, hours: 1 / 60, days: 1 / 1440, minutes: 1 },
      hours: { seconds: 3600, minutes: 60, days: 1 / 24, hours: 1 },
      days: { seconds: 86400, minutes: 1440, hours: 24, days: 1 },
      milliseconds: { seconds: 0.001, minutes: 1 / 60000, hours: 1 / 3600000, days: 1 / 86400000, milliseconds: 1 },
      microseconds: { seconds: 1 / 1000000, minutes: 1 / 60000000, hours: 1 / 3600000000, days: 1 / 86400000000, microseconds: 1 },
      nanoseconds: { seconds: 1 / 1000000000, minutes: 1 / 60000000000, hours: 1 / 3600000000000, days: 1 / 86400000000000, nanoseconds: 1 },
      picoseconds: { seconds: 1 / 1000000000000, minutes: 1 / 60000000000000, hours: 1 / 3600000000000000, days: 1 / 86400000000000000, picoseconds: 1 }
    },
    temp: {
      celsius: {
        fahrenheit: (n) => (n * 9 / 5 + 32), // Arrow function for converting celsius to fahrenheit.
        kelvin: (n) => n + 273.15, // Kelvin.
        celsius: (n) => n // Celsius.
      }, 
      fahrenheit: {
        celsius: (n) => (n - 32) * 5 / 9, // Fahrenheit to celsius.
        kelvin: (n) => (n + 459.67) * 5 / 9, // Kelvin.
        fahrenheit: (n) => n // Fahrenheit.
      }, 
      kelvin: {
        celsius: (n) => n - 273.15, // Kelvin to celsius.
        fahrenheit: (n) => n * 9 / 5 - 459.67, // Fahrenheit.
        kelvin: (n) => n // Kelvin.
      } 
    },
    weight: {
      grams: { kilograms: 1 / 1000, pounds: 0.00220462, ounces: 0.035274 },
      kilograms: { grams: 1000, pounds: 2.20462, ounces: 35.274 },
      pounds: { grams: 453.592, kilograms: 0.453592, ounces: 16 },
      ounces: { grams: 28.3495, kilograms: 0.0283495, pounds: 0.0625 },
      stones: { grams: 6350.29, kilograms: 6.35029, pounds: 14, ounces: 224 }
    },
    length: {
      meters: { kilometers: 0.001, inches: 39.3701, feet: 3.28084, yards: 1.09361, miles: 0.000621371 },
      kilometers: { meters: 1000, inches: 39370.1, feet: 3280.84, yards: 1093.61, miles: 0.621371 },
      inches: { meters: 0.0254, kilometers: 0.0000254, feet: 0.0833333, yards: 0.0277778, miles: 0.000015783 },
      feet: { meters: 0.3048, kilometers: 0.0003048, inches: 12, yards: 0.333333, miles: 0.000189394 },
      yards: { meters: 0.9144, kilometers: 0.0009144, inches: 36, feet: 3, miles: 0.000568182 },
      miles: { meters: 1609.34, kilometers: 1.60934, inches: 63360, feet: 5280, yards: 1760 }
    },
    volume: {
      liters: { milliliters: 1000, gallons: 0.264172, quarts: 1.05669, pints: 2.11338, cups: 4.22675 },
      milliliters: { liters: 0.001, gallons: 0.000264172, quarts: 0.00105669, pints: 0.00211338, cups: 0.00422675 },
      gallons: { liters: 3.78541, milliliters: 3785.41, quarts: 4, pints: 8, cups: 16 },
      quarts: { liters: 0.946353, milliliters: 946.353, gallons: 0.25, pints: 2, cups: 4 },
      pints: { liters: 0.473176, milliliters: 473.176, gallons: 0.125, quarts: 0.5, cups: 2 },
      cups: { liters: 0.236588, milliliters: 236.588, gallons: 0.0625, quarts: 0.25, pints: 0.5 }
    }
  }

  // The main conversion method.
  #convert(number, fromUnit, toUnit, group) {
    if (number < 0 && group === 'time') { // Negative time values are not supported.
      console.error('Negative time values are not supported.')
      return 'invalidInput'
    }

    if (number === Infinity || number === -Infinity) { // Infinite values are not allowed.
      console.error('Infinite values are not allowed.')
      return 'invalidInput'
    }

    if (!this.#validateNumber(number)) { // Validate the number first.
      return 'invalidInput'
    }

    if (!this.#validateUnit(fromUnit, group) || !this.#validateUnit(toUnit, group)) { // Validate the units.
      return 'invalidInput'
    }

    // Get the conversion factor from the conversionFactors object and store it in a variable.
    const factor = this.#conversionFactors[group][fromUnit][toUnit]

    // If the factor is a function, call it with the number as an argument. Otherwise, multiply the number with the factor.
    if (typeof factor === 'function') {
      return factor(number)
    } else {
      return number * factor
    }
  }

  /**
   * Converts a unit type from one unit to another in the groups object in conversionFactors.
   *
   * @param {number} number - The number to convert.
   * @param {number} fromUnit - The unit to convert from.
   * @param {number} toUnit - The unit to convert to.
   * @returns - The converted value.
   */
  timeConverter(number, fromUnit, toUnit) {
    if (Array.isArray(number)) {
      return this.#batchConvert(number, fromUnit, toUnit, 'time');
    } else {
      return this.#convert(number, fromUnit, toUnit, 'time');
    }
  }

  tempConverter(number, fromUnit, toUnit) {
    if (Array.isArray(number)) {
      return this.#batchConvert(number, fromUnit, toUnit, 'temp')
    } else {
      return this.#convert(number, fromUnit, toUnit, 'temp')
    }
  }

  weightConverter(number, fromUnit, toUnit) {
    if (Array.isArray(number)) {
      return this.#batchConvert(number, fromUnit, toUnit, 'weight')
    } else {
      return this.#convert(number, fromUnit, toUnit, 'weight')
    }
  }

  lengthConverter(number, fromUnit, toUnit) {
    if (Array.isArray(number)) {
      return this.#batchConvert(number, fromUnit, toUnit, 'length')
    } else {
      return this.#convert(number, fromUnit, toUnit, 'length')
    }
  }

  volumeConverter(number, fromUnit, toUnit) {
    if (Array.isArray(number)) {
      return this.#batchConvert(number, fromUnit, toUnit, 'volume')
    } else {
      return this.#convert(number, fromUnit, toUnit, 'volume')
    }
  }

  /**
   * Converts an array of values from one unit to another in the groups object in conversionFactors.
   * 
   * @param {number[]} values - The values to convert.
   * @param {number} fromUnit - The unit to convert from.
   * @param {number} toUnit - The unit to convert to.
   * @param {number} group - The group to convert within.
   * @returns - The converted values.
   */
  #batchConvert(values, fromUnit, toUnit, group) {
    return values.map(value => this.#convert(value, fromUnit, toUnit, group))
  }
}
