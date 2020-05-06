import jbinary from 'jbinary';

/**
 * 
 * @param {String} url
 * Takes in path to binary file and passes it to jBinary to begin parsing 
 */
const fetchData = (url) => {
  return jbinary.load(url)
  .then((res) => { 
    const data = parseFile(res, data);
    return data.data;
  })
  .catch((err) => {
    console.log(err)
  })
}

/**
 * 
 * @param {String} binary 
 * Takes the file contents and parses it into a readable obj seperating header from sample data
 */
const parseFile = (binary) => {
  const fileHeader = binary.read({
    header: ['string', 177] 
  });
  const parsedBin = binary.read('uint64');
  const dataSamples = extractSample(binary);
  const file = {
      header: fileHeader.header,
      data: dataSamples,
      length: parsedBin.length,
  };
  return file;
};

/**
 * 
 * @param {String} binary
 * Iterates over all possible rows of data, formats them as an object and pushes them into an array of samples 
 */
const extractSample = (binary) => {
  let finished = false;
  let trackingData = [];
  
  while (finished === false) {
    try {
      let data = binary.read({
        sampleStart: 'char',
        UTCTIME: ['uint64', true],
        TZO: 'int16',
        DSTO: ['int16', true],
        GPSTIME: ['uint64', true],
        GPSSTATUS: 'uint8',
        LAT: ['float64', true],
        LATDIR: 'char',
        LNG: ['float64', true],
        LNGDIR: 'char',
        GPSSPEED: ['float32', true],
        GPSCOURSE: ['float32', true],
        DIPSTATE: 'uint8',
        ACCSTATE: 'uint8'
      })
      trackingData.push(data);
    } catch (error) {
      finished = true;
    }
  }
  return trackingData;
};

export default {
    fetchData
};