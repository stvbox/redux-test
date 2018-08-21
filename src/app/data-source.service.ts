import { Injectable } from '@angular/core';
import C from './constants';

const DATA = {
  colors: [
    {
      'id': 'f2fd74a2-f01a-43db-b1cb-1d9d5659c0fd',
      'title': 'Ocean Blue'
    },
    {
      'id': 'baaf256f-57d3-4cf1-8a29-6f7778cace77',
      'title': 'Tomate'
    }
  ],
  SORT: 'SORTED_BY_DATE'
};

interface IColorAction {
  id: string;
  type: string;
  title: string;
  color: string;
  timestamp: Date;
  rating?: number;
}

export const color = (state: {id?: string} = {id: null}, action: IColorAction) => {
  switch (action.type) {
    case C.ADD_COLOR: {
      return {
        id: action.id,
        title: action.title,
        color: action.color,
        timestamp: action.timestamp,
        rating: 0
      };
    }
    case C.RATE_COLOR: {
      return (state.id !== action.id) ?
      state : {
        ...state,
        rating: action.rating
      };
    }
    default:
      return state;
  }

  return {};
};

export const colors = (state = [], action: IColorAction) => {
  return [];
};

export const sort = (state = 'SORTED_BY_DATE', action: IColorAction) => {
  return '';
};

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {

  constructor() { }

  getState() {
    return DATA;
  }
}
