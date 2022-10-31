import * as React from 'react';

// type StringWithoutToString = new(entries?: String | null) =>
// {
//   [P in Exclude<keyof String, 'toString'>] : String[P]
// }

// const StringWithoutToString: StringWithoutToString = String;

import Key from '../utils/key';

export interface IStringExtensions
{
  toJSXString():(string | JSX.Element)[][];
}

export class StringExtensions
  extends String
  implements IStringExtensions
{
  toJSXString():(string | JSX.Element)[][]
  {
    return this.split('\n').map((str) => [str, <br key={Key.gen()}/>]);
  }
}
