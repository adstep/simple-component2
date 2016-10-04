/// <reference path="../typings/index.d.ts" />

import * as angular from 'angular';

import {hello} from './app/hello';

import './index.scss';

export const app: string = 'ngSimpleComponent';

angular
  .module(app, [])
  .component('simpleComponent', hello);
