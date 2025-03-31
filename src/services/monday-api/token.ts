// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取用户token令牌 POST /api/admin/tokens */
export async function getToken(
  body: API.getTokenParams,
  options?: { [key: string]: any },
) {
  return request<{ data?: API.TokenInfo }>('/api/admin/tokens', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除用户token令牌 DELETE /api/admin/tokens */
export async function deleteToken(options?: { [key: string]: any }) {
  return request<any>('/api/admin/tokens', {
    method: 'DELETE',
    ...(options || {}),
  });
}
