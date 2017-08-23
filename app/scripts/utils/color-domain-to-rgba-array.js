import {scaleLinear} from 'd3-scale';
import {range} from 'd3-array';
import {rgb} from 'd3-color';

/**
 * Convert a color domain to a 255 element array of [r,g,b,a]
 * values (all from 0 to 255). The last color (255) will always be
 * transparent
 */
const colorDomainToRgbaArray = (colorRange) => {
  // we should always have at least two values in the color range
  let domain = colorRange.map((x,i) =>  i * (255 / (colorRange.length - 1)) );

  let d3Scale = scaleLinear().domain(domain)
    .range(colorRange)

  let rgbaArray = range(254,-1,-1).map(d3Scale)
  .map(x => {
    let r = rgb(x);
    return [r.r, r.g, r.b, 255];
  })

  // add a transparent color at the end for missing values
  rgbaArray.push([255,255,255,0]);

  return rgbaArray;
}

export default colorDomainToRgbaArray;
