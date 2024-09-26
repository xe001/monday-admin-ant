import { rule } from '@/services/ant-design-pro/rule';
import {type ProColumns, ProTable} from '@ant-design/pro-components';
import React from "react";

const TableList: React.FC = () => {
  const columns: ProColumns<API.RuleListItem>[] = [
    {
      title: '规则名称',
      dataIndex: 'name',
      render: (_) => <a>{_}</a>,
    },
    {
      title: '描述',
      dataIndex: 'desc',
    },
    {
      title: '服务调用次数',
      dataIndex: 'callNo',
      sorter: true,
      hideInForm: true,
      renderText: (val: string) => `${val} 万`,
    },
    {
      title: '状态',
      dataIndex: 'status',
      valueEnum: {
        0: { text: '关闭', status: 'Default' },
        1: { text: '运行中', status: 'Processing' },
        2: { text: '已上线', status: 'Success' },
        3: { text: '异常', status: 'Error' },
      },
    },
    {
      title: '上次调度时间',
      dataIndex: 'updatedAt',
      sorter: true,
      valueType: 'dateTime',
      hideInForm: true,
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: () => [
        <a key="config">配置</a>,
        <a  key="subscribeAlert" style={{marginLeft: 8}}>订阅警报</a>
      ],
    },
  ];
  return (
    <ProTable<API.RuleListItem, API.PageParams> request={rule} columns={columns} />
  )
}

export default TableList;
