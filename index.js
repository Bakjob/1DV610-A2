// Testfil för modulen

import { UnitConverter } from './UnitConverter'

const Converter = new UnitConverter()

const secsToMins = Converter.secondsConverter(60, 'minutes')

console.log(secsToMins, 'Minute') // Expected output: 1 Minute
