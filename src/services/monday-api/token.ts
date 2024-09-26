// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取用户token令牌 POST /api/common/token */
export async function getToken(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTokenParams,
  options?: { [key: string]: any },
) {
  return request<{ data?: API.TokenInfo }>('/api/admin/token', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
