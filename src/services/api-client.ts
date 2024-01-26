import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
    key: 'f2e7632133714dd79292db2aadbcd052',
    }
});