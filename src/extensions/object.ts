// export interface IObjectExtensions
// {
//   assignDefaults(defaults:any):void;
// }

// // export class ObjectExtensions<K, V> extends Map<K, V> implements IObjectExtensions
// export class ObjectExtensions extends Object implements IObjectExtensions
// {
//   constructor(defaults={}, ...args:any[])
//   {
//     super(...args);

//     this.assignDefaults(defaults);
//   }

//   // assignDefaults<K, V>(defaults:Map<K, V>):void
//   assignDefaults(defaults:Object):void
//   {
//     // defaults.forEach((v:V, k:K) =>

//     for(const k in defaults)
//     {
//       const that = <any>this;
//       that[k] = that[k] || defaults[k];
//       // console.log(k, v);
//       // const that = this as unknown;
//       // const that2 = <Map<K,V>> that;


//       // const value:any = that2.get(k);

//       // if(!value)
//       // {
//       //   that2.set(k, v);
//       // }

//       // <K,V>this[key] = this[key] || value;
//     // });
//     }
//   }
// }

// export function assign<T>(target:T, defaults:T, type: { new(): T ;}):T
// export function pluck<T>(source:any, defaults:T):any & T

export default class ObjectExtensions<T>
{
  static union<T>(defaults:T, source:any):any & T
  {
    let ret:any & T = {...source};

    for(const k in defaults)
    {
      // if(target[k])
      // {
      //   continue;
      // }
      
      ret[k] = source[k] ? source[k] : defaults[k];

    //   // (target as any)[k] = (defaults as any)[k];

    //   // const fragment:T = new type();
    //   // fragment[k] = defaults[k];

    //   // (target as any)[k] = defaults[k];
    //   // target[k] = fragment[k];

    //   // Object.assign(target, fragment);


    //   // Object.assign(target, <T>{[k]: defaults[k]});
    //   // target[k] = defaults[k];
    }

    return ret;
  }
}
