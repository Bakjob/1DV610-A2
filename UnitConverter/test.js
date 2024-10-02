// Testfil for the module UnitConverter.js

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
const invalidInput2 = Converter.timeConverter(24, 'hours', 'invalid')
console.log(invalidInput2)

// Testfall 5
const minsToHours = Converter.timeConverter(60, 'minutes', 'hours')
console.log('60 minutes to hours: ', minsToHours)

// Testfall 6
const daysToSecs = Converter.timeConverter(1, 'days', 'seconds')
console.log('One day in seconds: ', daysToSecs)

// Testfall 7 with an array as input.
const daysToSecsArray = Converter.timeConverter([1, 2, 3], 'days', 'seconds')
console.log('Array of days to seconds: ', daysToSecsArray)

// temp TESTS #####################################################################################################
console.log('temp TESTS #####################################################################################################')

// Testfall 1
const celsiusToFahrenheit = Converter.tempConverter(0, 'celsius', 'fahrenheit')
console.log('0 Celsius to Fahrenheit: ', celsiusToFahrenheit)

// Testfall 2
const fahrenheitToCelsius = Converter.tempConverter(32, 'fahrenheit', 'celsius')
console.log('32 Fahrenheit to Celsius: ', fahrenheitToCelsius)

// Testfall 3
const invalidInputTemp = Converter.tempConverter('invalid', 'celsius', 'fahrenheit')
console.log(invalidInputTemp)

// Testfall 4
const invalidInputTemp2 = Converter.tempConverter(0, 'celsius', 'invalid')
console.log(invalidInputTemp2)

// Testfall 5
const celsiusToKelvin = Converter.tempConverter(0, 'celsius', 'kelvin')
console.log('0 Celsius to Kelvin: ', celsiusToKelvin)

// Testfall 6
const kelvinToCelsius = Converter.tempConverter(273.15, 'kelvin', 'celsius')
console.log('273.15 Kelvin to Celsius: ', kelvinToCelsius)

// Testfall 7
const fahrenheitToKelvin = Converter.tempConverter(32, 'fahrenheit', 'kelvin')
console.log('32 Fahrenheit to Kelvin: ', fahrenheitToKelvin)

// Testfall 8
const kelvinToFahrenheit = Converter.tempConverter(273.15, 'kelvin', 'fahrenheit')
console.log('273.15 Kelvin to Fahrenheit: ', kelvinToFahrenheit)

// WEIGHT TESTS ############################################################################################################
console.log('WEIGHT TESTS ############################################################################################################')

// Testfall 1
const gramsToKilograms = Converter.weightConverter(1000, 'grams', 'kilograms')
console.log('1000 grams to kilograms: ', gramsToKilograms)

// Testfall 2
const kilogramsToGrams = Converter.weightConverter(1, 'kilograms', 'grams')
console.log('1 kilogram to grams: ', kilogramsToGrams)

// Testfall 3
const invalidInputWeight = Converter.weightConverter('invalid', 'grams', 'kilograms')
console.log(invalidInputWeight)

// Testfall 4
const invalidInputWeight2 = Converter.weightConverter(1, 'grams', 'invalid')
console.log(invalidInputWeight2)

// Testfall 5
const kilogramsToPounds = Converter.weightConverter(1, 'kilograms', 'pounds')
console.log('1 kilogram to pounds: ', kilogramsToPounds)

// Testfall 6
const poundsToKilograms = Converter.weightConverter(1, 'pounds', 'kilograms')
console.log('1 pound to kilograms: ', poundsToKilograms)

// Testfall 7
const gramsToPounds = Converter.weightConverter(453.592, 'grams', 'pounds')
console.log('453.592 grams to pounds: ', gramsToPounds)

// Testfall 8
const poundsToGrams = Converter.weightConverter(1, 'pounds', 'grams')
console.log('1 pound to grams: ', poundsToGrams)

// Testfall 9
const kilogramsToOunces = Converter.weightConverter(1, 'kilograms', 'ounces')
console.log('1 kilogram to ounces: ', kilogramsToOunces)

// Testfall 10
const ouncesToKilograms = Converter.weightConverter(1, 'ounces', 'kilograms')
console.log('1 ounce to kilograms: ', ouncesToKilograms)

// LENGTH TESTS ##########################################################################################################
console.log('LENGTH TESTS ##########################################################################################################')

// Testfall 1
const metersToKilometers = Converter.lengthConverter(1000, 'meters', 'kilometers')
console.log('1000 meters to kilometers: ', metersToKilometers)

// Testfall 2
const kilometersToMeters = Converter.lengthConverter(1, 'kilometers', 'meters')
console.log('1 kilometer to meters: ', kilometersToMeters)

// Testfall 3
const invalidInputLength = Converter.lengthConverter('invalid', 'meters', 'kilometers')
console.log(invalidInputLength)

// Testfall 4
const invalidInputLength2 = Converter.lengthConverter(1, 'meters', 'invalid')
console.log(invalidInputLength2)

// Testfall 5
const metersToFeet = Converter.lengthConverter(1, 'meters', 'feet')
console.log('1 meter to feet: ', metersToFeet)

// Testfall 6
const feetToMeters = Converter.lengthConverter(1, 'feet', 'meters')
console.log('1 foot to meters: ', feetToMeters)

// Testfall 7
const metersToYards = Converter.lengthConverter(1, 'meters', 'yards')
console.log('1 meter to yards: ', metersToYards)

// Testfall 8
const yardsToMeters = Converter.lengthConverter(1, 'yards', 'meters')
console.log('1 yard to meters: ', yardsToMeters)

// Testfall 9
const feetToYards = Converter.lengthConverter(3, 'feet', 'yards')
console.log('3 feet to yards: ', feetToYards)

// Testfall 10
const yardsToFeet = Converter.lengthConverter(1, 'yards', 'feet')
console.log('1 yard to feet: ', yardsToFeet)

// VOLUME TESTS ##########################################################################################################
console.log('VOLUME TESTS ##########################################################################################################')

// Testfall 1
const litersToMilliliters = Converter.volumeConverter(1, 'liters', 'milliliters')
console.log('1 liter to milliliters: ', litersToMilliliters)

// Testfall 2
const millilitersToLiters = Converter.volumeConverter(1000, 'milliliters', 'liters')
console.log('1000 milliliters to liters: ', millilitersToLiters)

// Testfall 3
const invalidInputVolume = Converter.volumeConverter('invalid', 'liters', 'milliliters')
console.log(invalidInputVolume)

// Testfall 4
const invalidInputVolume2 = Converter.volumeConverter(1, 'liters', 'invalid')
console.log(invalidInputVolume2)

// Testfall 5
const litersToCups = Converter.volumeConverter(1, 'liters', 'cups')
console.log('1 liter to cups: ', litersToCups)

// Testfall 6
const cupsToLiters = Converter.volumeConverter(1, 'cups', 'liters')
console.log('1 cup to liters: ', cupsToLiters)

// Testfall 7
const litersToGallons = Converter.volumeConverter(1, 'liters', 'gallons')
console.log('1 liter to gallons: ', litersToGallons)

// Testfall 8
const gallonsToLiters = Converter.volumeConverter(1, 'gallons', 'liters')
console.log('1 gallon to liters: ', gallonsToLiters)

// Testfall 9
const millilitersToCups = Converter.volumeConverter(236.588, 'milliliters', 'cups')
console.log('236.588 milliliters to cups: ', millilitersToCups)

// Testfall 10
const cupsToMilliliters = Converter.volumeConverter(1, 'cups', 'milliliters')
console.log('1 cup to milliliters: ', cupsToMilliliters)

// speed TESTS ##########################################################################################################
console.log('speed TESTS ##########################################################################################################')

// Testfall 1
const kmhToMph = Converter.speedConverter(100, 'kmh', 'mph')
console.log('100 km/h to mph: ', kmhToMph)

// Testfall 2
const mphToKmh = Converter.speedConverter(62.1371, 'mph', 'kmh')
console.log('62.1371 mph to km/h: ', mphToKmh)

// Testfall 3
const invalidInputSpeed = Converter.speedConverter('invalid', 'kmh', 'mph')
console.log(invalidInputSpeed)

// Testfall 4
const invalidInputSpeed2 = Converter.speedConverter(100, 'kmh', 'invalid')
console.log(invalidInputSpeed2)

// Testfall 5
const kmhToMs = Converter.speedConverter(100, 'kmh', 'ms')
console.log('100 km/h to m/s: ', kmhToMs)

// Testfall 6
const msToKmh = Converter.speedConverter(27.7778, 'ms', 'kmh')
console.log('27.7778 m/s to km/h: ', msToKmh)

// Testfall 7
const mphToMs = Converter.speedConverter(62.1371, 'mph', 'ms')
console.log('62.1371 mph to m/s: ', mphToMs)

// Testfall 8
const msToMph = Converter.speedConverter(27.7778, 'ms', 'mph')
console.log('27.7778 m/s to mph: ', msToMph)

// Testfall 9
const kmhToKnots = Converter.speedConverter(100, 'kmh', 'knots')
console.log('100 km/h to knots: ', kmhToKnots)

// Testfall 10
const knotsToKmh = Converter.speedConverter(51.4444, 'knots', 'kmh')
console.log('51.4444 knots to km/h: ', knotsToKmh)

// area TESTS ##########################################################################################################
console.log('area TESTS ##########################################################################################################')

// Testfall 1
const sqmToSqft = Converter.areaConverter(1, 'sqm', 'sqft')
console.log('1 sqm to sqft: ', sqmToSqft)

// Testfall 2
const sqftToSqm = Converter.areaConverter(10.7639, 'sqft', 'sqm')
console.log('10.7639 sqft to sqm: ', sqftToSqm)

// Testfall 3
const invalidInputArea = Converter.areaConverter('invalid', 'sqm', 'sqft')
console.log(invalidInputArea)

// Testfall 4
const invalidInputArea2 = Converter.areaConverter(1, 'sqm', 'invalid')
console.log(invalidInputArea2)

// Testfall 5
const sqmToSqyd = Converter.areaConverter(1, 'sqm', 'sqyd')
console.log('1 sqm to sqyd: ', sqmToSqyd)

// Testfall 6
const sqydToSqm = Converter.areaConverter(0.836127, 'sqyd', 'sqm')
console.log('0.836127 sqyd to sqm: ', sqydToSqm)

// Testfall 7
const sqftToSqyd = Converter.areaConverter(9, 'sqft', 'sqyd')
console.log('9 sqft to sqyd: ', sqftToSqyd)

// Testfall 8
const sqydToSqft = Converter.areaConverter(1, 'sqyd', 'sqft')
console.log('1 sqyd to sqft: ', sqydToSqft)

// Testfall 9
const sqmToAcre = Converter.areaConverter(4046.86, 'sqm', 'acre')
console.log('4046.86 sqm to acre: ', sqmToAcre)

// Testfall 10
const acreToSqm = Converter.areaConverter(1, 'acre', 'sqm')
console.log('1 acre to sqm: ', acreToSqm)
