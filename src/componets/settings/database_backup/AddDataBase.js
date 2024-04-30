import Form from 'react-bootstrap/Form';
// import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;
function AddDataBase() {
    const props = {
        name: 'file',
        multiple: true,
        action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
        onChange(info) {
          const { status } = info.file;
          if (status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
          } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
        onDrop(e) {
          console.log('Dropped files', e.dataTransfer.files);
        },
      };
    return <div>
        <div className="content-wrapper">
            {/* Content */}
            <div className="container-xxl flex-grow-1 container-p-y">

                <div className="app-ecommerce">
                    {/* Add Product */}
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3">
                        <div className="d-flex flex-column justify-content-center">
                            <h4 className="mb-1 mt-3">Restore Database</h4>
                        </div>

                    </div>
                    <div className="row">
                        {/* First column*/}
                        <div className="col-12 col-lg-12">
                            {/* Product Information */}
                            <div className="row mb-3">

                                <div className="col-12">
                                    <label
                                        className="form-label"
                                        htmlFor="ecommerce-product-barcode"
                                    >
                                        File Upload
                                    </label>
                                    <Dragger {...props}>
                                        <p className="ant-upload-drag-icon">
                                            {/* <InboxOutlined /> */}
                                        </p>
                                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                        <p className="ant-upload-hint">
                                            Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                                            banned files.
                                        </p>
                                    </Dragger>
                                </div>
                            </div>



                            <button type="submit" className="btn btn-primary" style={{margin:"20px 0"}}>
                                Save
                            </button>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    </div>

}
export default AddDataBase