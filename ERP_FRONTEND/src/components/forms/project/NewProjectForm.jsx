import {
    Button,
    DatePicker,
    Divider,
    Form,
    Input,
    Select,
    Steps,
    Upload,
  } from "antd";
  import axios from "axios";
  import React, { useContext, useEffect, useState } from "react";
  import { AlertContext } from "../../../context/AlertContext";
  import { BACKENDURL } from "../../../helper/Urls";
  import { FaUpload } from "react-icons/fa";
  import TextArea from "antd/es/input/TextArea";
  
  const NewProjectForm = ({ openModalFun, reload }) => {
    const { openNotification } = useContext(AlertContext);
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const [formValues, setFormValues] = useState();
    const { Dragger } = Upload;
  
    const onFinish = async () => {
      setLoading(true);
      try {
        const res = await axios.post(`${BACKENDURL}/project/new`, formValues);
        setLoading(false);
        reload();
        openModalFun(false);
        openNotification("success", res.data.message, 3, "green");
        form.resetFields();
      } catch (error) {
        setLoading(false);
        openNotification("error", error.response.data.message, 3, "red");
      }
    };
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
  
    const formInfos = [
      {
        title: "Tender Information",
        key: 1,
        children: [
          {
            lable: "Description",
            name: "description",
            type: "Text",
            width: "100%",
          },
          {
            lable: "Type",
            name: "type",
            type: "Text",
            width: "100%",
          },
          {
            lable: "CompanyName",
            name: "companyName",
            type: "Text",
            width: "100%",
          },
          {
            lable: "Attachment",
            name: "attachment",
            type: "File",
            width: "100%",
          },
        ],
      },
    ];
  
    const onFieldChange = (name, e) => {
      setFormValues({
        ...formValues,
        [name]: e,
      });
    };
  
    return (
      <Form
        layout="vertical"
        onFinish={onFinish}
        form={form}
        onFinishFailed={onFinishFailed}
      >
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {formInfos[0].children.map((data, key) => (
              <Form.Item
                key={key}
                style={{ margin: "0", width: `${data.width}` }}
                label={data.lable}
                name={data.name}
                rules={[
                  {
                    required: data.notRequired ? false : true,
                    message: `Please input ${data.lable}`,
                  },
                ]}
              >
                {data.type === "Input" ? (
                  <Input
                    onChange={(e) => onFieldChange(data.name, e.target.value)}
                    minLength={data.min ? data.min : 1}
                    maxLength={data.max ? data.max : 400}
                    type={data.req && data.req}
                  />
                ) : data.type === "Text" ? (
                  <TextArea
                    onChange={(e) => onFieldChange(data.name, e.target.value)}
                    type={data.req && data.req}
                  />
                ) : data.type === "Date" ? (
                  <DatePicker
                    onChange={(e) => {
                      onFieldChange(data.name, e && e.toISOString());
                    }}
                  />
                ) : data.type === "Select" ? (
                  <Select
                    options={data.options}
                    loading={data.loading ? data.loading : false}
                    onChange={(e) => {
                      onFieldChange(data.name, e);
                    }}
                  />
                ) : (
                  data.type === "File" && (
                    <Dragger
                      name="file"
                      action={`${BACKENDURL}/upload/new`}
                      accept={data.req}
                      onChange={(e) => {
                        if (e.file.status === "done")
                          onFieldChange(data.name, e.file.response.name.filename);
                      }}
                      multiple={false}
                      maxCount={1}
                    >
                      <p className="ant-upload-drag-icon">
                        <FaUpload />
                      </p>
                      <p className="ant-upload-text">
                        Click or drag file to this area to upload
                      </p>
                      <p className="ant-upload-hint">
                        Support for a single{" "}
                        {data.req === "image/*" ? "image" : "Pdf"} file. Max size
                        3MB.
                      </p>
                    </Dragger>
                  )
                )}
              </Form.Item>
            ))}
          </div>
          <Button
            type="primary"
            style={{ width: "100%", marginTop: "10px" }}
            onClick={onFinish}
            disabled={loading}
            loading={loading}
          >
            Publish
          </Button>
        </div>
      </Form>
    );
  };
  
  export default NewProjectForm;
  