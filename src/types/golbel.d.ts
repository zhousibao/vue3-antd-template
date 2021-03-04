// anyObject
interface IAnyObj {
  [prop: string]: any;
  [prop: number]: any;
}

// 请求方法
type IMethod = 'POST' | 'post' | "GET" | "get" 


// api request请求
interface IRequest<Params = any, Data = any> {
  url: string;
  method?: IMethod;
  json?: boolean;
  params?: Params;
  data?: Data;
  timeout?: number;
}

// api response响应
interface IResponse<T = any> {
  code: number;
  msg: string;
  data: T;
}