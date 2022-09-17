
const axios = require('axios').default;

const [API_URLS, STATE_URL] = require("../../config/const");
exports.CountryList = async (req, res, next) => {
    await axios.get(API_URLS.COUNTRY_URL).then(function (response) {
        res.send(response.data);
    })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });


}
exports.StateList = async (req, res, next) => {
    const countrycode = req.query.countrycode;
    const stateUrl = STATE_URL(countrycode);
    await axios.get(stateUrl).then(function (response) {
        res.send(response.data);
    })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });


}
