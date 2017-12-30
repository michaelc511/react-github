import createRental from './createRental1';
import data from '../mock-data';
fetch = require('jest-fetch-mock');

describe('createRental', () => {
  it('Calls fetch and creates a rental ', () => {
    //console.log('RENTAL: ', data.rentals[0]);
    fetch.mockResponse(JSON.stringify(data.rentals[0]));

    return createRental(data.rentals[0], '1', '2').then(rental => {
      expect(rental).toEqual(data.rentals[0]);
    });
  }); // end of it

  afterAll(() => {
    fetch.mockReset();
  });
});
