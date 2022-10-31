export interface IComponent
{
}

export interface IComponentOptions extends IComponentChildren
{
  className?:string;
}

export interface IComponentChildren
{
  children?:React.ReactNode | React.ReactNode[];
}
