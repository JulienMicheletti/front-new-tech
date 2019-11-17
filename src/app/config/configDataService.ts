import {DefaultDataServiceConfig} from '@ngrx/data';

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'http://localhost:3000',
  timeout: 3000, // request timeout
}
