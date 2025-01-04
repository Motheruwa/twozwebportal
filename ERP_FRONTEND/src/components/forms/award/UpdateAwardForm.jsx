import {
    Button,
    DatePicker,
    Divider,
    Form,
    Input,
    Select,
    Upload,
  } from "antd";
  import axios from "axios";
  import React, { useContext, useEffect, useState } from "react";
  import { AlertContext } from "../../../context/AlertContext";
  import { BACKENDURL } from "../../../helper/Urls";
  import { FaUpload } from "react-icons/fa";
  import TextArea from "antd/es/input/TextArea";
  
  const UpdateAwardForm = ({ openModalFun, reload, sliderId, initialData }) => {
    const { openNotification } = useContext(AlertContext);
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const { Dragger } = Upload;
  
    // Prefill form with initial data
    useEffect(() => {
      if (initialData) {
        form.setFieldsValue({
          description: initialData.description,
          attachment: initialData.attachment,
        });
      }
    }, [initialData, form]);
  
    const onFinish = async () => {
      setLoading(true);
      try {
        const updatedValues = form.getFieldsValue();
        const res = await axios.post(`${BACKENDURL}/award/update`, {
          id: sliderId,  // Pass the slider id to update
          ...updatedValues,
        });
        setLoading(false);
        reload();  // Reload the data after updating
        openModalFun(false);  // Close the modal
        openNotification("success", res.data.message, 3, "green");
      } catch (error) {
        setLoading(false);
        openNotification("error", error.response.data.message, 3, "red");
      }
    };
  
    const formInfos = [
      {
        title: "Slider Information",
        key: 1,
        children: [
          {
            label: "Type",
            name: "type",
            type: "Text",
            width: "100%",
          },
          {
            label: "CompanyName",
            name: "companyName",
            type: "Text",
            width: "100%",
          },
          {
            label: "Attachment",
            name: "attachment",
            type: "File",
            width: "100%",
          },
        ],
      },
    ];
  
    return (
      <Form
        layout="vertical"
        onFinish={onFinish}
        form={form}
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
                label={data.label}
                name={data.name}
                rules={[
                  {
                    required: data.notRequired ? false : true,
                    message: `Please input ${data.label}`,
                  },
                ]}
              >
                {data.type === "Input" ? (
                  <Input />
                ) : data.type === "Text" ? (
                  <TextArea />
                ) : data.type === "Date" ? (
                  <DatePicker />
                ) : data.type === "Select" ? (
                  <Select />
                ) : (
                  data.type === "File" && (
                    <Dragger
                      name="file"
                      action={`${BACKENDURL}/upload/new`}
                      accept={data.req}
                      onChange={(e) => {
                        if (e.file.status === "done")
                          form.setFieldsValue({ [data.name]: e.file.response.name.filename });
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
                        {data.req === "image/*" ? "image" : "Pdf"} file. Max size 3MB.
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
            Update Award
          </Button>
        </div>
      </Form>
    );
  };
  
  export default UpdateAwardForm;
  