import { omit } from './index';

const testObject = {
  name: 'Ryan Hefner',
  site: 'https://www.ryanhefner.com',
  twitter: '@ryanhefner',
  location: {
    city: 'Brooklyn',
    state: 'New York',
    geo: {
      lat: '0.000',
      long: '0.000'
    }
  }
};

describe('lomit', () => {
  test('simple omit', () => {
    const omitted = omit(testObject, ['site', 'twitter', 'location']);
    expect(omitted).toStrictEqual({ "name": "Ryan Hefner" });
  });

  test('deep omit', () => {
    const omitted = omit(testObject, ['site', 'twitter', 'location.state', 'location.geo']);
    expect(omitted).toStrictEqual({
      "name": "Ryan Hefner",
      "location": {
        "city": "Brooklyn"
      }
    });
  });

  test('deeep omit', () => {
    const omitted = omit(testObject, ['site', 'twitter', 'location.state', 'location.geo.lat']);
    expect(omitted).toStrictEqual({
      "name": "Ryan Hefner",
      "location": {
        "city": "Brooklyn",
        "geo": {
          "long": "0.000"
        }
      }
    });
  });
});
