// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取当前用户信息 GET /api/admin/current_user */
export async function currentUser(options?: { [key: string]: any }) {
  return request<{ data?: API.UserInfo }>('/api/admin/current_user', {
    method: 'GET',
    ...(options || {}),
  });
}
