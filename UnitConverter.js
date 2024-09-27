/**
 *
 */
export class UnitConverter {
  /**
   * Converts a number of minutes to a specified unit of time.
   *
   * @param {number} seconds - The number of seconds to convert
   * @param {string} toUnit - The unit to convert to. Can be 'minutes', 'hours', 'days', or 'seconds'.
   * @returns {number | boolean} - The converted value, or false if the input is invalid.
   */
  secondsConverter (seconds, toUnit) {
    if (!this.validateNumber(seconds)) {
      return false
    }

    switch (toUnit) {
      case 'seconds':
        return seconds
      case 'minutes':
        return seconds / 60
      case 'hours':
        return seconds / 3600
      case 'days':
        return seconds / 86400
      default:
        return false
    }
  }

  /**
   * Converts a number of minutes to a specified unit of time.
   *
   * @param {number} number - The number of minutes to convert
   * @returns {number | boolean} - The converted value, or false if the input is invalid.
   */
  validateNumber (number) {
    if (isNaN(number)) {
      return false
    } else {
      return true
    }
  }
}
