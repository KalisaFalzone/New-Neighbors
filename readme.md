# New-Neighbors

#### An application to help you move into any new locality in the United States, by suggesting you personalized recommendations for the best neighborhoods around.

##User information

######Searching for Neighborhoods
To get started:
- Type in an address or city that you would like to be close to
- Select weather you would like to Rent or Buy
- Enter the number of bedrooms and bathrooms you are looking for

This will display a list of nearby neighborhoods as well as the price ranges to rent/buy there as well as the commute distance and time.

######Filtering the Search Results
You can filter the search results by the following criteria:
- Maximum rent price per month
- Maximum commute distance
- Maximum commute driving time

Use the slider and dropdown items in the filter section to do this.

######Ordering the Search Results
You may also order the results by the same factors as you can filter using the Order drop down.


## Developer Information

### Tech Stack

- [Angular](https://angularjs.org/)
- [Foundation for Apps](http://foundation.zurb.com/apps/)
- [Google Maps API](https://developers.google.com/maps/?hl=en)
- [Zilpy](http://www.zilpy.com/api)

### Installing Dependencies

From within the root directory:

```sh
npm install
bower install
```

### Updating API keys:

Create a file located at server/config/keys.js with this information:

module.exports = {
  googleAPIKey : 'your API key',
  TruliaAPIKey : 'your API key'
};




