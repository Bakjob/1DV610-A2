/**
 *
 */
export class UnitConverter {
  /**
   * Converts a number of minutes to a specified unit of time.
   *
   * @param {number} number - The number of units to convert.
   * @param {string} fromUnit - The unit type to convert from. Can be 'minutes', 'hours', 'days', or 'seconds'.
   * @param {string} toUnit - The unit to convert to. Can be 'minutes', 'hours', 'days', or 'seconds'.
   * @returns {number | boolean} - The converted value, or false if the input is invalid.
   */
  timeConverter(number, fromUnit, toUnit) {
    if (!this.#validateNumber(number)) {
      return 'invalidInput'
    }

    if (!this.#validateTimeUnitType(toUnit)) {
      return 'invalidInput'
    }

    if (!this.#validateTimeUnitType(fromUnit)) {
      return 'invalidInput'
    }

    switch (toUnit) {
      case 'minutes':
        return this.#convertToMinutes(fromUnit, number)
      case 'hours':
        return this.#convertToHours(fromUnit, number)
      case 'days':
        return this.#convertToDays(fromUnit, number)
      case 'seconds':
        return this.#convertToSeconds(fromUnit, number)
    }
  }

  #convertToMinutes(fromUnit, number) {
    if (fromUnit === 'seconds') {
      return number / 60
    } else if (fromUnit === 'hours') {
      return number * 60
    } else if (fromUnit === 'days') {
      return number * 1440
    } else {
      return number
    }
  }

  #convertToHours(fromUnit, number) {
    if (fromUnit === 'minutes') {
      return number / 60
    } else if (fromUnit === 'seconds') {
      return number / 3600
    } else if (fromUnit === 'days') {
      return number * 24
    } else {
      return number
    }
  }

  #convertToDays(fromUnit, number) {
    if (fromUnit === 'minutes') {
      return number / 1440
    } else if (fromUnit === 'hours') {
      return number / 24
    } else if (fromUnit === 'seconds') {
      return number / 86400
    } else {
      return number
    }
  }

  #convertToSeconds(fromUnit, number) {
    if (fromUnit === 'minutes') {
      return number * 60
    } else if (fromUnit === 'hours') {
      return number * 3600
    } else if (fromUnit === 'days') {
      return number * 86400
    } else {
      return number
    }
  }

  /**
   * Converts a number of minutes to a specified unit of time.
   *
   * @param {number} number - The number of units to convert.
   * @param {string} fromUnit - The unit type to convert from. Can be 'celsius', 'fahrenheit', or 'kelvin'.
   * @param {string} toUnit - The unit to convert to. Can be 'celsius', 'fahrenheit', or 'kelvin'.
   * @returns {number | boolean} - The converted value, or false if the input is invalid.
   */
  tempConverter(number, fromUnit, toUnit) {
    if (!this.#validateNumber(number)) {
      return 'invalidInput'
    }

    if (!this.#validateTempUnitType(toUnit)) {
      return 'invalidInput'
    }

    if (!this.#validateTempUnitType(fromUnit)) {
      return 'invalidInput'
    }

    switch (toUnit) {
      case 'celsius':
        return this.#convertToCelsius(fromUnit, number)
      case 'fahrenheit':
        return this.#convertToFahrenheit(fromUnit, number)
      case 'kelvin':
        return this.#convertToKelvin(fromUnit, number)
    }
  }

  #convertToCelsius(fromUnit, number) {
    if (fromUnit === 'fahrenheit') {
      return (number - 32) * 5 / 9
    } else if (fromUnit === 'kelvin') {
      return number - 273.15
    } else {
      return number
    }
  }

  #convertToFahrenheit(fromUnit, number) {
    if (fromUnit === 'celsius') {
      return number * 9 / 5 + 32
    } else if (fromUnit === 'kelvin') {
      return number * 9 / 5 - 459.67
    } else {
      return number
    }
  }

  #convertToKelvin(fromUnit, number) {
    if (fromUnit === 'celsius') {
      return number + 273.15
    } else if (fromUnit === 'fahrenheit') {
      return (number + 459.67) * 5 / 9
    } else {
      return number
    }
  }

  /**
   *
   * @param {number} number - The number of units to convert.
   * @param {string} fromUnit - The unit type to convert from. Can be 'grams', 'kilograms', 'ounces' or 'pounds'.
   * @param {*} toUnit
   * @returns
   */
  weightConverter(number, fromUnit, toUnit) {
    if (!this.#validateNumber(number)) {
      return 'invalidInput'
    }

    if (!this.#validateWeightUnitType(toUnit)) {
      return 'invalidInput'
    }

    if (!this.#validateWeightUnitType(fromUnit)) {
      return 'invalidInput'
    }

    switch (toUnit) {
      case 'grams':
        return this.#convertToGrams(fromUnit, number)
      case 'kilograms':
        return this.#convertToKilograms(fromUnit, number)
      case 'pounds':
        return this.#convertToPounds(fromUnit, number)
      case 'ounces':
        return this.#convertToOunces(fromUnit, number)
    }
  }

  #convertToGrams(fromUnit, number) {
    if (fromUnit === 'kilograms') {
      return number * 1000
    } else if (fromUnit === 'pounds') {
      return number * 453.592
    } else if (fromUnit === 'ounces') {
      return number * 28.3495
    } else {
      return number
    }
  }

  #convertToKilograms(fromUnit, number) {
    if (fromUnit === 'grams') {
      return number / 1000
    } else if (fromUnit === 'pounds') {
      return number / 2.205
    } else if (fromUnit === 'ounces') {
      return number / 35.274
    } else {
      return number
    }
  }

  #convertToPounds(fromUnit, number) {
    if (fromUnit === 'grams') {
      return number / 453.592
    } else if (fromUnit === 'kilograms') {
      return number * 2.205
    } else if (fromUnit === 'ounces') {
      return number / 16
    } else {
      return number
    }
  }

  #convertToOunces(fromUnit, number) {
    if (fromUnit === 'grams') {
      return number / 28.3495
    } else if (fromUnit === 'kilograms') {
      return number * 35.274
    } else if (fromUnit === 'pounds') {
      return number * 16
    } else {
      return number
    }
  }

  /**
   * Converts a number of length units to a specific unit of length.
   *
   * @param {number} number - The number of units to convert.
   * @param {string} fromUnit - The unit type to convert from. Can be 'meters', 'kilometers', 'inches', 'feet', 'yards', or 'miles'.
   * @param {string} toUnit - The unit to convert to. Can be 'meters', 'kilometers', 'inches', 'feet', 'yards', or 'miles'.
   * @returns {number | boolean} - The converted value, or false if the input is invalid.
   */
  lengthConverter(number, fromUnit, toUnit) {
    if (!this.#validateNumber(number)) {
      return 'invalidInput'
    }

    if (!this.#validateLengthUnitType(toUnit)) {
      return 'invalidInput'
    }

    if (!this.#validateLengthUnitType(fromUnit)) {
      return 'invalidInput'
    }

    switch (toUnit) {
      case 'meters':
        return this.#convertToMeters(fromUnit, number)
      case 'kilometers':
        return this.#convertToKilometers(fromUnit, number)
      case 'inches':
        return this.#convertToInches(fromUnit, number)
      case 'feet':
        return this.#convertToFeet(fromUnit, number)
      case 'yards':
        return this.#convertToYards(fromUnit, number)
      case 'miles':
        return this.#convertToMiles(fromUnit, number)
    }
  }

  #convertToMeters(fromUnit, number) {
    if (fromUnit === 'kilometers') {
      return number * 1000
    } else if (fromUnit === 'inches') {
      return number / 39.37
    } else if (fromUnit === 'feet') {
      return number / 3.281
    } else if (fromUnit === 'yards') {
      return number / 1.094
    } else if (fromUnit === 'miles') {
      return number * 1609.34
    } else {
      return number
    }
  }

  #convertToKilometers(fromUnit, number) {
    if (fromUnit === 'meters') {
      return number / 1000
    } else if (fromUnit === 'inches') {
      return number / 39370.079
    } else if (fromUnit === 'feet') {
      return number / 3280.84
    } else if (fromUnit === 'yards') {
      return number / 1093.613
    } else if (fromUnit === 'miles') {
      return number * 1.609
    } else {
      return number
    }
  }

  #convertToInches(fromUnit, number) {
    if (fromUnit === 'meters') {
      return number * 39.37
    } else if (fromUnit === 'kilometers') {
      return number * 39370.079
    } else if (fromUnit === 'feet') {
      return number * 12
    } else if (fromUnit === 'yards') {
      return number * 36
    } else if (fromUnit === 'miles') {
      return number * 63360
    } else {
      return number
    }
  }

  #convertToFeet(fromUnit, number) {
    if (fromUnit === 'meters') {
      return number * 3.281
    } else if (fromUnit === 'kilometers') {
      return number * 3280.84
    } else if (fromUnit === 'inches') {
      return number / 12
    } else if (fromUnit === 'yards') {
      return number * 3
    } else if (fromUnit === 'miles') {
      return number * 5280
    } else {
      return number
    }
  }

  #convertToYards(fromUnit, number) {
    if (fromUnit === 'meters') {
      return number * 1.094
    } else if (fromUnit === 'kilometers') {
      return number * 1093.613
    } else if (fromUnit === 'inches') {
      return number / 36
    } else if (fromUnit === 'feet') {
      return number / 3
    } else if (fromUnit === 'miles') {
      return number * 1760
    } else {
      return number
    }
  }

  #convertToMiles(fromUnit, number) {
    if (fromUnit === 'meters') {
      return number / 1609.34
    } else if (fromUnit === 'kilometers') {
      return number / 1.609
    } else if (fromUnit === 'inches') {
      return number / 63360
    } else if (fromUnit === 'feet') {
      return number / 5280
    } else if (fromUnit === 'yards') {
      return number / 1760
    } else {
      return number
    }
  }

    /**
   * Converts a number of volume units to a specific unit of volume.
   *
   * @param {number} number - The number of units to convert.
   * @param {string} fromUnit - The unit type to convert from. Can be 'liters', 'milliliters', 'gallons', 'quarts', 'pints', 'cups'. 
   * @param {string} toUnit - The unit to convert to. Can be 'liters', 'milliliters', 'gallons', 'quarts', 'pints', 'cups'.
   * @returns {number | boolean} - The converted value, or false if the input is invalid.
   */
  volumeConverter(number, fromUnit, toUnit) {
    if (!this.#validateNumber(number)) {
      return 'invalidInput'
    }

    if (!this.#validateVolumeUnitType(toUnit)) {
      return 'invalidInput'
    }

    if (!this.#validateVolumeUnitType(fromUnit)) {
      return 'invalidInput'
    }

    switch (toUnit) {
      case 'liters':
        return this.#convertToLiters(fromUnit, number)
      case 'milliliters':
        return this.#convertToMilliliters(fromUnit, number)
      case 'gallons':
        return this.#convertToGallons(fromUnit, number)
      case 'quarts':
        return this.#convertToQuarts(fromUnit, number)
      case 'pints':
        return this.#convertToPints(fromUnit, number)
      case 'cups':
        return this.#convertToCups(fromUnit, number)
    }
  }

  #convertToLiters(fromUnit, number) {
    if (fromUnit === 'milliliters') {
      return number / 1000
    } else if (fromUnit === 'gallons') {
      return number * 3.785
    } else if (fromUnit === 'quarts') {
      return number / 1.057
    } else if (fromUnit === 'pints') {
      return number / 2.113
    } else if (fromUnit === 'cups') {
      return number / 4.227
    } else {
      return number
    }
  }

  #convertToMilliliters(fromUnit, number) {
    if (fromUnit === 'liters') {
      return number * 1000
    } else if (fromUnit === 'gallons') {
      return number * 3785.41
    } else if (fromUnit === 'quarts') {
      return number * 946.353
    } else if (fromUnit === 'pints') {
      return number * 473.176
    } else if (fromUnit === 'cups') {
      return number * 236.588
    } else {
      return number
    }
  }

  #convertToGallons(fromUnit, number) {
    if (fromUnit === 'liters') {
      return number / 3.785
    } else if (fromUnit === 'milliliters') {
      return number / 3785.41
    } else if (fromUnit === 'quarts') {
      return number / 4
    } else if (fromUnit === 'pints') {
      return number / 8
    } else if (fromUnit === 'cups') {
      return number / 16
    } else {
      return number
    }
  }

  #convertToQuarts(fromUnit, number) {
    if (fromUnit === 'liters') {
      return number * 1.057
    } else if (fromUnit === 'milliliters') {
      return number / 946.353
    } else if (fromUnit === 'gallons') {
      return number * 4
    } else if (fromUnit === 'pints') {
      return number / 2
    } else if (fromUnit === 'cups') {
      return number / 4
    } else {
      return number
    }
  }

  #convertToPints(fromUnit, number) {
    if (fromUnit === 'liters') {
      return number * 2.113
    } else if (fromUnit === 'milliliters') {
      return number / 473.176
    } else if (fromUnit === 'gallons') {
      return number * 8
    } else if (fromUnit === 'quarts') {
      return number * 2
    } else if (fromUnit === 'cups') {
      return number / 2
    } else {
      return number
    }
  }

  #convertToCups(fromUnit, number) {
    if (fromUnit === 'liters') {
      return number * 4.227
    } else if (fromUnit === 'milliliters') {
      return number / 236.588
    } else if (fromUnit === 'gallons') {
      return number * 16
    } else if (fromUnit === 'quarts') {
      return number * 4
    } else if (fromUnit === 'pints') {
      return number * 2
    } else {
      return number
    }
  }

  /**
   * Converts a number of minutes to a specified unit of time.
   *
   * @param {number} number - The number of minutes to convert
   * @returns {number | boolean} - The converted value, or false if the input is invalid.
   */
  #validateNumber(number) {
    if (isNaN(number)) {
      return false
    } else {
      return true
    }
  }

  /**
   * Validates if the entered string is a time unit type.
   *
   * @param {string} unit - The unit to validate.
   * @returns {boolean} - True if the unit is valid, false otherwise.
   */
  #validateTimeUnitType(unit) {
    if (
      unit === 'minutes' ||
      unit === 'hours' ||
      unit === 'days' ||
      unit === 'seconds'
    ) {
      return true
    } else {
      return false
    }
  }

  /**
   *
   * @param unit
   */
  #validateTempUnitType(unit) {
    if (
      unit === 'celsius' ||
      unit === 'fahrenheit' ||
      unit === 'kelvin'
    ) {
      return true
    } else {
      return false
    }
  }

  /**
   *
   * @param unit
   */
  #validateWeightUnitType(unit) {
    if (
      unit === 'grams' ||
      unit === 'kilograms' ||
      unit === 'pounds' ||
      unit === 'ounces'
    ) {
      return true
    } else {
      return false
    }
  }

  #validateLengthUnitType(unit) {
    if (
      unit === 'meters' ||
      unit === 'kilometers' ||
      unit === 'inches' ||
      unit === 'feet' ||
      unit === 'yards' ||
      unit === 'miles'
    ) {
      return true
    } else {
      return false
    }
  }

  #validateVolumeUnitType(unit) {
    if (
      unit === 'liters' ||
      unit === 'milliliters' ||
      unit === 'gallons' ||
      unit === 'quarts' ||
      unit === 'pints' ||
      unit === 'cups'
    ) {
      return true
    } else {
      return false
    }
  }
}
