export interface IComponent
{
}

export interface IComponentOptions extends IComponentChildren
{
  className?:string;
  ref?:any;
  // ref:React.RefObject<T>;
}

export interface IComponentChildren
{
  // children?:React.ReactNode | React.ReactNode[];
  children?:React.ReactNode;
}
