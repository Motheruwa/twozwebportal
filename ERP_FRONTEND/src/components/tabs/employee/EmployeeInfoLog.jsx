import { Button, Table, Tag, Select, DatePicker, Input, Space } from 'antd';
import axios from 'axios';
import React, { useEffect, useState ,useRef} from 'react';
import { BACKENDURL } from '../../../helper/Urls';
import { FormatDay } from '../../../helper/FormateDay';
import {SearchOutlined} from '@ant-design/icons';

const { RangePicker } = DatePicker;
const { Option } = Select;

const EmployeeInfoLog = ({ id }) => {
  const [employeeLogs, setEmployeeLogs] = useState([]);
  const [loading, setLoading] = useState(false);


  const [searchedColumn, setSearchedColumn] = useState ('');
  const [searchText, setSearchText] = useState ('');
  const searchInput = useRef (null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm ();
    setSearchText (selectedKeys[0]);
    setSearchedColumn (dataIndex);
  };
  const handleReset = clearFilters => {
    clearFilters ();
    setSearchText ('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        text
      ) : (
        text
      ),
  });

  const [selectedAction, setSelectedAction] = useState(''); // Action filter
  const [dateRange, setDateRange] = useState([]); // Date range filter

  // Fetch employee logs from the server
  const GetEmployeeLog = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BACKENDURL}/employee/auditlog/${id}`);
      setLoading(false);
      console.log(res.data);
      setEmployeeLogs(res.data.logs);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    GetEmployeeLog();
  }, []);

  const applyFilters = () => {
    let filteredLogs = sampleEmployeeLogs;

    // Apply action filter if selected
    if (selectedAction) {
      filteredLogs = filteredLogs.filter((log) => log.action === selectedAction);
    }

    // Apply date range filter
    if (dateRange&&dateRange.length === 2) {
      const [start, end] = dateRange;
      filteredLogs = filteredLogs.filter(
        (log) =>
          new Date(log.createdAt) >= new Date(start) && new Date(log.createdAt) <= new Date(end)
      );
    }

    return filteredLogs;
  };

  const handleActionChange = (value) => {
    setSelectedAction(value);
  };

  const handleDateChange = (dates) => {
    setDateRange(dates);
  };

  const columns = [
    {
      title: 'TimeStamp',
      dataIndex: 'createdAt',
      width: '140px',
      key: 'createdAt',
      render: (r) => <span>{FormatDay(r)}</span>,
    },
    {
      title: 'User IDNO',
      dataIndex: 'UserIDNO',
      width: '140px',
      key: 'userIDNO',
      ...getColumnSearchProps('userIDNO'),
    },
    {
      title: 'User Name',
      width: '140px',
      dataIndex: 'userName',
      ...getColumnSearchProps('userName'),
      key: 'userName',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      width: '100px',
      key: 'action',
      render: (r) => <Tag color={r === 'DELETE' || r === 'ACCESS_DENIED' ? 'volcano' : 'processing'}>{r}</Tag>,
    },
    {
      title: 'Details',
      dataIndex: 'details',
      key: 'details',
      width: '200px',
      render: (r) => JSON.stringify(r),
    },
  ];

  const sampleEmployeeLogs = [
    {
      createdAt: '2024-11-09T10:00:00Z',
      UserIDNO: 101,
      userName: 'Alice Johnson',
      action: 'CREATE',
      details: { employee_id: '567', position: 'Manager', department: 'HR' },
    },
    {
      createdAt: '2022-12-09T11:30:00Z',
      UserIDNO: 102,
      userName: 'Bob Smith',
      action: 'UPDATE',
      details: { updatedFields: [{ field: 'department', oldValue: 'HR', newValue: 'IT' }] },
    },
    {
      createdAt: '2024-12-19T12:30:00Z',
      UserIDNO: 103,
      userName: 'Charlie Brown',
      action: 'DELETE',
      details: { employee_id: '890' },
    },
    {
      createdAt: '2024-10-29T13:30:00Z',
      UserIDNO: 104,
      userName: 'Dana White',
      action: 'LOGIN',
      details: {},
    },
    {
      createdAt: '2024-12-11T14:00:00Z',
      UserIDNO: 105,
      userName: 'Eve Adams',
      action: 'LOGOUT',
      details: {},
    },
    {
      createdAt: '2023-11-01T15:00:00Z',
      UserIDNO: 106,
      userName: 'Frank Moore',
      action: 'ACCESS_DENIED',
      details: { attemptedResource: 'admin_panel' },
    },
    {
      createdAt: '2024-10-18T08:45:00Z',
      UserIDNO: 107,
      userName: 'Grace Lee',
      action: 'LOGIN',
      details: {},
    },
    {
      createdAt: '2024-11-20T10:30:00Z',
      UserIDNO: 108,
      userName: 'Hank Carter',
      action: 'PASSWORD_CHANGE',
      details: { reason: 'Routine security update' },
    },
    {
      createdAt: '2024-12-01T09:00:00Z',
      UserIDNO: 109,
      userName: 'Ivy Martinez',
      action: 'EXPORT',
      details: { exportedData: 'employee_records_2023' },
    },
    {
      createdAt: '2024-12-04T11:30:00Z',
      UserIDNO: 110,
      userName: 'James Wilson',
      action: 'IMPORT',
      details: { importedFile: 'new_employee_list.csv' },
    },
    {
      createdAt: '2024-12-07T13:00:00Z',
      UserIDNO: 111,
      userName: 'Kara Spencer',
      action: 'CREATE',
      details: { employee_id: '125', position: 'Manager', department: 'IT' },
    },
    {
      createdAt: '2024-11-25T14:30:00Z',
      UserIDNO: 112,
      userName: 'Leo Murphy',
      action: 'UPDATE',
      details: { updatedFields: [{ field: 'position', oldValue: 'Manager', newValue: 'Senior Manager' }] },
    },
    {
      createdAt: '2023-12-09T16:00:00Z',
      UserIDNO: 113,
      userName: 'Mona Davis',
      action: 'DELETE',
      details: { employee_id: '321' },
    },
    {
      createdAt: '2024-12-03T12:15:00Z',
      UserIDNO: 114,
      userName: 'Nick Rogers',
      action: 'LOGIN',
      details: {},
    },
    {
      createdAt: '2024-12-08T10:30:00Z',
      UserIDNO: 115,
      userName: 'Oscar Bell',
      action: 'ACCESS_DENIED',
      details: { attemptedResource: 'restricted_data' },
    },
    {
      createdAt: '2024-12-10T14:30:00Z',
      UserIDNO: 116,
      userName: 'Paul Garcia',
      action: 'LOGOUT',
      details: {},
    },
    {
      createdAt: '2024-12-15T09:30:00Z',
      UserIDNO: 117,
      userName: 'Quinn Harris',
      action: 'PASSWORD_CHANGE',
      details: { reason: 'User request' },
    },
    {
      createdAt: '2024-11-29T10:15:00Z',
      UserIDNO: 118,
      userName: 'Rachel Adams',
      action: 'EXPORT',
      details: { exportedData: 'employee_payroll_data' },
    },
    {
      createdAt: '2024-12-05T13:45:00Z',
      UserIDNO: 119,
      userName: 'Sam Carter',
      action: 'IMPORT',
      details: { importedFile: 'new_hiring_list.csv' },
    },
    {
      createdAt: '2024-12-11T08:00:00Z',
      UserIDNO: 120,
      userName: 'Tina Lewis',
      action: 'CREATE',
      details: { employee_id: '432', position: 'HR', department: 'Finance' },
    },
    {
      createdAt: '2024-10-12T10:30:00Z',
      UserIDNO: 121,
      userName: 'Umar Hassan',
      action: 'UPDATE',
      details: { updatedFields: [{ field: 'department', oldValue: 'Finance', newValue: 'Operations' }] },
    },
    {
      createdAt: '2024-12-13T15:00:00Z',
      UserIDNO: 122,
      userName: 'Victor King',
      action: 'DELETE',
      details: { employee_id: '900' },
    },
    {
      createdAt: '2024-12-02T11:30:00Z',
      UserIDNO: 123,
      userName: 'Wendy Moore',
      action: 'LOGIN',
      details: {},
    },
    {
      createdAt: '2024-12-09T16:45:00Z',
      UserIDNO: 124,
      userName: 'Xavier James',
      action: 'ACCESS_DENIED',
      details: { attemptedResource: 'restricted_access' },
    },
    {
      createdAt: '2024-12-11T11:00:00Z',
      UserIDNO: 125,
      userName: 'Yvonne Green',
      action: 'LOGOUT',
      details: {},
    },
    {
      createdAt: '2024-12-15T14:30:00Z',
      UserIDNO: 126,
      userName: 'Zachary Lane',
      action: 'PASSWORD_CHANGE',
      details: { reason: 'Scheduled security update' },
    },
  ];
  

  return (
    <div style={{ height: '500px', overflow: 'scroll' }}>
      <div style={{ marginBottom: '10px' }}>
        {/* Filter by Action */}
        <Select
          style={{ marginRight: '10px', width: '200px' }}
          placeholder="Filter by Action"
          onChange={handleActionChange}
          allowClear
        >
          <Option value="CREATE">CREATE</Option>
          <Option value="UPDATE">UPDATE</Option>
          <Option value="DELETE">DELETE</Option>
          <Option value="LOGIN">LOGIN</Option>
          <Option value="LOGOUT">LOGOUT</Option>
          <Option value="ACCESS_DENIED">ACCESS DENIED</Option>
        </Select>

        {/* Filter by Date Range */}
        <RangePicker
          style={{ width: '250px' }}
          onChange={handleDateChange}
        />

        {/* Reload Button */}
        <Button onClick={GetEmployeeLog} loading={loading} style={{ marginLeft: '10px' }}>
          Reload
        </Button>
      </div>

      {/* Table */}
      <Table
        size="small"
        columns={columns}
        pagination={{
          defaultPageSize: 7,
          showSizeChanger: false,
        }}
        dataSource={applyFilters()}
        loading={loading}
      />
    </div>
  );
};

export default EmployeeInfoLog;
