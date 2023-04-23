interface IadaptResponse {
  headers: Object;
  statusCode: number;
  message: string;
  data: any;
}

export default function adaptResponse<T>(props: IadaptResponse) {
  return { ...props, data: props.data as T };
}

export type TadaptResponse = ReturnType<typeof adaptResponse>;
