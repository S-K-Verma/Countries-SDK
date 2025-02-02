import CountriesApi from './api/countries';
import { ICountries } from './interface';
const express = require('express');
const router = express.Router();
const PORT = 9000;
const app = express();

export class CountriesSDK {
    constructor() {
        console.log('Countries API');
    }
    fetchAll = async () => {
        try {
            const { data: allCountries }: { data: ICountries } = await CountriesApi.fetchAllCountries();
            return allCountries;
        } catch (error) {
            console.log({ error });
            throw error;
        }
    };
}

app.get(
    '/',
    (req: any, res: { status: (arg0: number) => { (): any; new (): any; json: { (arg0: { name: string; data: string }): any; new (): any } } }) => {
        const country = new CountriesSDK();

        country.fetchAll().then((result) => res.status(200).json({ name: 'Saurav', data: JSON.stringify(result) }));
    }
);

app.listen(PORT, () => {
    console.log('Running on port ' + PORT);
});

