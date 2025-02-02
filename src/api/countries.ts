const axios = require('axios');
import config from '../config';

export default {
    fetchAllCountries: async () => {
        return await axios.get(config.COUNTRIES_BASE_URL + '/all');
    }
};

