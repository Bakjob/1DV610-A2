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
  timeConverter (number, fromUnit, toUnit) {
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

  /**
   * Converts a number of minutes to a specified unit of time.
   *
   * @param {string} fromUnit - The unit type to convert from.
   * @param {number} number - The number of minutes to convert.
   * @returns {number} - The converted value.
   */
  #convertToMinutes (fromUnit, number) {
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

  /**
   * Converts a number of minutes to a specified unit of time.
   *
   * @param {string} fromUnit - The unit type to convert from.
   * @param {number} number - The number of minutes to convert.
   * @returns {number} - The converted value.
   */
  #convertToHours (fromUnit, number) {
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

  #convertToDays (fromUnit, number) {
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

  #convertToSeconds (fromUnit, number) {
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
  tempConverter (number, fromUnit, toUnit) {
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

  #convertToCelsius (fromUnit, number) {
    if (fromUnit === 'fahrenheit') {
      return (number - 32) * 5 / 9
    } else if (fromUnit === 'kelvin') {
      return number - 273.15
    } else {
      return number
    }
  }

  #convertToFahrenheit (fromUnit, number) {
    if (fromUnit === 'celsius') {
      return number * 9 / 5 + 32
    } else if (fromUnit === 'kelvin') {
      return number * 9 / 5 - 459.67
    } else {
      return number
    }
  }

  #convertToKelvin (fromUnit, number) {
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
  weightConverter (number, fromUnit, toUnit) {
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

  #convertToGrams (fromUnit, number) {
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

  #convertToKilograms (fromUnit, number) {
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

  #convertToPounds (fromUnit, number) {
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

  #convertToOunces (fromUnit, number) {
    if (fromUnit === 'grams') {
      return number / 28.3495
    } else if (fromUnit === 'kilograms') {
      return number * 35.274
    } else if (fromUnit === 'pounds') {
      return number * 16
    } else {
      return number
  }

  /**
   * Converts a number of minutes to a specified unit of time.
   *
   * @param {number} number - The number of minutes to convert
   * @returns {number | boolean} - The converted value, or false if the input is invalid.
   */
  #validateNumber (number) {
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
  #validateTimeUnitType (unit) {
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

  #validateTempUnitType (unit) {
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

  #validateWeightUnitType (unit) {
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
}
