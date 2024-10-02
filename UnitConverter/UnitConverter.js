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
    volume: ['liters', 'milliliters', 'gallons', 'quarts', 'pints', 'cups'],
    speed: ['ms', 'kmh', 'mph', 'knots'],
    area: ['sqm', 'sqkm', 'sqft', 'sqyd', 'sqmi', 'sqin', 'sqcm', 'sqmm', 'acre', 'hectare'],
  }

  // Validate the unit against the group to see if it exists.
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
    },
    speed: {
      ms: { kmh: 3.6, mph: 2.23694, knots: 1.94384 },
      kmh: { ms: 0.277778, mph: 0.621371, knots: 0.539957 },
      mph: { ms: 0.44704, kmh: 1.60934, knots: 0.868976 },
      knots: { ms: 0.514444, kmh: 1.852, mph: 1.15078 }
    },
    area: {
      sqm: { sqkm: 0.000001, sqft: 10.7639, sqyd: 1.19599, sqmi: 3.861e-7, sqin: 1550, sqcm: 10000, sqmm: 1000000, acre: 0.000247105, hectare: 1e-4 },
      sqkm: { sqm: 1000000, sqft: 10763900.0, sqyd: 1195990.0, sqmi: 0.386102, sqin: 1550000000, sqcm: 10000000000, sqmm: 1000000000000, acre: 247.105, hectare: 100 },
      sqft: { sqm: 0.092903, sqkm: 9.2903e-6, sqyd: 0.111111, sqmi: 3.587e-8, sqin: 144, sqcm: 929.03, sqmm: 92903, acre: 0.0000229568, hectare: 9.2903e-6 },
      sqyd: { sqm: 0.836127, sqkm: 8.3613e-6, sqft: 9, sqmi: 3.2283e-7, sqin: 1296, sqcm: 8361.27, sqmm: 836127, acre: 0.000206612, hectare: 8.3613e-5 },
      sqmi: { sqm: 2589988.11, sqkm: 2.589988, sqft: 27878400, sqyd: 3097600, sqin: 4014489600, sqcm: 25899881100, sqmm: 2589988110000, acre: 640, hectare: 258.998811 },
      sqin: { sqm: 0.00064516, sqkm: 6.4516e-10, sqft: 0.00694444, sqyd: 0.000771605, sqmi: 2.49098e-10, sqcm: 6.4516, sqmm: 645.16, acre: 1.59423e-7, hectare: 6.4516e-8 },
      sqcm: { sqm: 0.0001, sqkm: 1e-8, sqft: 0.00107639, sqyd: 0.000119599, sqmi: 3.861e-11, sqin: 0.155, sqmm: 100, acre: 2.47105e-8, hectare: 1e-4 },
      sqmm: { sqm: 1e-6, sqkm: 1e-12, sqft: 0.0000107639, sqyd: 0.00000119599, sqmi: 3.861e-13, sqin: 0.00155, sqcm: 0.01, acre: 2.47105e-9, hectare: 1e-6 },
      acre: { sqm: 4046.86, sqkm: 0.00404686, sqft: 43560, sqyd: 4840, sqmi: 0.0015625, sqin: 6272640, sqcm: 40468600, sqmm: 4046860000, hectare: 0.404686 },
      hectare: { sqm: 10000, sqkm: 0.01, sqft: 107639, sqyd: 11960, sqmi: 0.00386102, sqin: 15500000, sqcm: 100000000, sqmm: 10000000000, acre: 2.47105 }
    }
  }

  // The main conversion method.
  #convert(number, fromUnit, toUnit, group) {
    if (number < 0 && group === 'time') { // Negative time values are not supported.
      console.error('Negative time values are not supported.')
      return
    }

    if (number === Infinity || number === -Infinity) { // Infinite values are not allowed.
      console.error('Infinite values are not allowed.')
      return
    }

    if (group === 'temp' && fromUnit === 'kelvin' && number < 0) { // Negative Kelvin values are impossible.
      console.error('Negative Kelvin values are not allowed.')
      return
    }

    if (!this.#validateNumber(number)) { // Validate the number.
      return
    }

    if (!this.#validateUnit(fromUnit, group) || !this.#validateUnit(toUnit, group)) { // Validate the units.
      return
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
      return this.#batchConvert(number, fromUnit, toUnit, 'time')
    } else {
      return this.#convert(number, fromUnit, toUnit, 'time')
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

  speedConverter(number, fromUnit, toUnit) {
    if (Array.isArray(number)) {
      return this.#batchConvert(number, fromUnit, toUnit, 'speed')
    } else {
      return this.#convert(number, fromUnit, toUnit, 'speed')
    }
  }

  areaConverter(number, fromUnit, toUnit) {
    if (Array.isArray(number)) {
      return this.#batchConvert(number, fromUnit, toUnit, 'area')
    } else {
      return this.#convert(number, fromUnit, toUnit, 'area')
    }
  }

  /**
   * Converts an array of values from one unit to another in the groups object in conversionFactors.
   * 
   * @param {number[]} values - The values to convert.
   * @param {number} fromUnit - The unit to convert from.
   * @param {number} toUnit - The unit to convert to.
   * @param {number} group - The group to convert within.
   * @returns {array} - An array with the converted values.
   */
  #batchConvert(values, fromUnit, toUnit, group) {
    return values.map(value => this.#convert(value, fromUnit, toUnit, group))
  }
}
