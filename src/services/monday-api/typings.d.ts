declare namespace API {
  type deleteMerchantAdminParams = {
    ''?: any;
  };

  type getMerchantAdminDetailParams = {
    ''?: any;
  };

  type getMerchantAdminListParams = {
    ''?: any;
    ''?: any;
    /** 管理员名称 */
    name?: string;
    /** 状态 */
    status?: 0 | 1;
    /** 是否默认 */
    is_default?: 0 | 1;
    ''?: any;
    ''?: any;
  };

  type getTokenParams = {
    /** 邮箱 */
    email: string;
    /** 密码 */
    password: string;
  };

  type MerchantAdminList =
    // #/components/schemas/MerchantAdminProps
    MerchantAdminProps & {
      /** 所有权限 */
      all_permissions?: TokenProps[];
    };

  type MerchantAdminProps = {
    /** id */
    id?: number;
    /** 商户id */
    merchant_id?: number;
    /** 用户id */
    user_id?: number;
    /** 名称 */
    name?: string;
    /** 状态：0禁用，1启用 */
    status?: number;
    /** 是否默认 */
    is_default?: number;
  };

  type pageLinks = {
    /** 第一页链接 */
    first?: string;
    /** 最后一页链接 */
    last?: string;
    /** 上一页链接 */
    prev?: string;
    /** 下一页链接 */
    next?: string;
  };

  type pageMata = {
    /** 当前页码 */
    current_page?: number;
    /** 开始 */
    from?: number;
    /** 最后一页 */
    last_page?: number;
    /** 路径 */
    path?: string;
    /** 每页数量 */
    per_page?: number;
    /** 结束 */
    to?: number;
    /** 总数 */
    total?: number;
  };

  type PermissionProps = {
    /** id */
    id?: number;
    /** 名称 */
    name?: string;
  };

  type TokenInfo =
    // #/components/schemas/TokenProps
    TokenProps & {
      default_merchant_admin?: MerchantAdminProps & { all_permissions?: PermissionProps[] };
    };

  type TokenProps = {
    /** token */
    token?: string;
    /** token有效期 */
    expires_in?: number;
  };

  type updateMerchantAdminParams = {
    ''?: any;
  };
}
