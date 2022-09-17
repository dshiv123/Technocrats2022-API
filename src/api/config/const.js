const API_URLS =
{
    COUNTRY_URL: "https://battuta.medunes.net/api/country/all/?key=00000000000000000000000000000000",

}
STATE_URL = (countrycode) => {
    return `https://battuta.medunes.net/api/region/${countrycode}/all/?key=00000000000000000000000000000000`
}
module.exports = [API_URLS, STATE_URL]