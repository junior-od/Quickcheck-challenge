import {Hn} from './constants';
import axios from 'axios';
import {requestTimeout} from './constants';

export const instance = axios.create({
  baseURL: Hn.BASE_URL,
  timeout: requestTimeout,
  headers: {'Content-Type': 'application/json'},
});
