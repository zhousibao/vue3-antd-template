import request from '@/utils/axios'

// 获取列表
export function getList(data: IAnyObj): Promise<IResponse<any>> {
  return request({
    url: '/api/getList',
    json: true,
    data,
  });
}


