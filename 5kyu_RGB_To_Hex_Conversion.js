// 5 kyu - RGB To Hex Conversion

// The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function rgb(r, g, b){
  if (r > 255) {r = 255};
  if (r < 0) {r = 0};
  if (g > 255) {g = 255};
  if (g < 0) {g = 0};
  if (b > 255) {b = 255};
  if (b < 0) {b = 0};
  return  ('00' + r.toString(16).toUpperCase()).slice(-2)
        + ('00' + g.toString(16).toUpperCase()).slice(-2)
        + ('00' + b.toString(16).toUpperCase()).slice(-2); 
}