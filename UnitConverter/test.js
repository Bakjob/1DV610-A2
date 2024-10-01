// Testfil för modulen

import { UnitConverter } from './UnitConverter.js'

const Converter = new UnitConverter()

// TIME TESTS ############################################################################################################
console.log('TIME TESTS ############################################################################################################')

// Testfall 1
const secsToMins = Converter.timeConverter(180, 'seconds', 'minutes')
console.log('180 seconds to minutes: ', secsToMins)

// Testfall 2
const hoursToDays = Converter.timeConverter(48, 'hours', 'days')
console.log('48 hours to days: ', hoursToDays)

// Testfall 3
const invalidInput = Converter.timeConverter('invalid', 'hours', 'days')
console.log(invalidInput)

// Testfall 4
const invalidOutput = Converter.timeConverter(24, 'hours', 'invalid')
console.log(invalidOutput)

// Testfall 5
const minsToHours = Converter.timeConverter(60, 'minutes', 'hours')
console.log('60 minutes to hours: ', minsToHours)

// Testfall 6
const daysToSecs = Converter.timeConverter(1, 'days', 'seconds')
console.log('One day in seconds: ', daysToSecs)

// TEMPERATURE TESTS #####################################################################################################
console.log('TEMPERATURE TESTS #####################################################################################################')
