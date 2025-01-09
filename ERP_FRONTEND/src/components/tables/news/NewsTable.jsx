import React, { useContext, useRef, useState } from "react";
import {
  Button,
  Divider,
  Input,
  Popconfirm,
  Space,
  Tooltip,
  Table,
  Tag,
  Image,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { FaUsers } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { FormatDateTime } from "../../../helper/FormatDate";
import ModalForm from "../../../modal/Modal";
import { AlertContext } from "../../../context/AlertContext";
import { BACKENDURL } from "../../../helper/Urls";
import axios from "axios";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { FormatDay } from "../../../helper/FormateDay";
import UpdateNewsForm from "../../forms/news/UpdateNewsForm";

const NewsTable = ({ vacancyData, loading, reload }) => {
  const { openNotification } = useContext(AlertContext);
  const [searchedColumn, setSearchedColumn] = useState("");
  const [searchText, setSearchText] = useState("");
  const searchInput = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState([]);
  const [banLoading, setBanLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
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
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
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
          color: filtered ? "#1677ff" : undefined,
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
    render: (text) => (searchedColumn === dataIndex ? searchText : text),
  });

  const DeleteSlider = async (id) => {
    console.log(id)
    setBanLoading(true);
    try {
      const res = await axios.get(`${BACKENDURL}/news/delete?id=${id}`);
      openNotification("success", res.data.message, 3, "green");
      reload();
      setBanLoading(false);
    } catch (error) {
      setBanLoading(false);
      openNotification("error", error.response.data.message, 3, "red");
    }
  };

  const columns = [
    {
      title: "Description",
      dataIndex: "description",
      width: "100px",
      key: "description",
    },
    {
        title: "Title",
        dataIndex: "title",
        width: "100px",
        key: "title",
      },
    {
      title: "Attachment",
      dataIndex: "attachment",
      render: (r) => (
        <Image src={`${BACKENDURL}/uploads/new/${r}`} height={30} width={30} />
      ),
      key: "type",
      width: "140px",
    },
    {
      title: "Action",
      width: "100px",
      fixed: "right",
      key: "operation",
      render: (r) => (
        <Space
          style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
        >
          <Tooltip title="Update">
            <Button
              style={{ padding: "0", margin: "0" }}
              type="text"
              onClick={() => {
                setModalOpen(true);
                setModalContent(r);
              }}
            >
              <MdEdit />
            </Button>
          </Tooltip>
          <Tooltip title="Delete">
            <Popconfirm
              title="Are you sure, Delete News"
              onConfirm={() => DeleteSlider(r.id)}
            >
              <Button style={{ padding: "0", margin: "0" }} type="text">
                <IoMdEyeOff />
              </Button>
            </Popconfirm>
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <ModalForm
        open={modalOpen}
        close={() => setModalOpen(false)}
        title={<Divider>Update Slider</Divider>}
        content={<UpdateNewsForm initialData={modalContent} sliderId={modalContent.id} reload={reload} openModalFun={()=>setModalOpen(false)}/>}
      />
      <Table
        size="small"
        columns={columns}
        bordered
        scroll={{
          x: 500,
        }}
        pagination={{
          defaultPageSize: 7,
          showSizeChanger: false,
        }}
        dataSource={vacancyData}
        loading={loading}
      />
    </div>
  );
};
export default NewsTable;
