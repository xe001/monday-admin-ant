// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 商户管理员列表 GET /admin/merchant_admins */
export async function getMerchantAdminList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMerchantAdminListParams,
  options?: { [key: string]: any },
) {
  return request<{ data?: API.MerchantAdminList[]; links?: API.pageLinks; meta?: API.pageMata }>(
    '/admin/merchant_admins',
    {
      method: 'GET',
      params: {
        // per_page has a default value: 15
        per_page: '15',
        // page has a default value: 1
        page: '1',
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 添加商户管理员 POST /admin/merchant_admins */
export async function addMerchantAdmin(
  body: {
    /** 商户id */
    merchant_id: number;
    /** 用户id */
    user_id: number;
    /** 名称 */
    name: string;
    /** 状态：0禁用，1启用 */
    status: number;
    /** 是否默认 */
    is_default: number;
  },
  options?: { [key: string]: any },
) {
  return request<{ data?: API.MerchantAdminProps }>('/admin/merchant_admins', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 商户管理员详情 GET /admin/merchant_admins/${param0} */
export async function getMerchantAdminDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMerchantAdminDetailParams,
  options?: { [key: string]: any },
) {
  const { merchant_admin_id: param0, ...queryParams } = params;
  return request<{ data?: API.MerchantAdminProps }>(`/admin/merchant_admins/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 修改商户管理员 PUT /admin/merchant_admins/${param0} */
export async function updateMerchantAdmin(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateMerchantAdminParams,
  body: {
    /** 商户id */
    merchant_id: number;
    /** 用户id */
    user_id: number;
    /** 名称 */
    name: string;
    /** 状态：0禁用，1启用 */
    status: number;
    /** 是否默认 */
    is_default: number;
  },
  options?: { [key: string]: any },
) {
  const { merchant_admin_id: param0, ...queryParams } = params;
  return request<{ data?: API.MerchantAdminProps }>(`/admin/merchant_admins/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 删除商户管理员 DELETE /admin/merchant_admins/${param0} */
export async function deleteMerchantAdmin(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteMerchantAdminParams,
  options?: { [key: string]: any },
) {
  const { merchant_admin_id: param0, ...queryParams } = params;
  return request<any>(`/admin/merchant_admins/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
