import { ICountries } from './interface';
export declare class CountriesSDK {
    constructor();
    fetchAll: () => Promise<ICountries>;
}
