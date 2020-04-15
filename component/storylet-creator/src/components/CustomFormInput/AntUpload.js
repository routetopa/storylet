import React, {useState, useEffect, useRef} from 'react';
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {translate} from "../helpers";
import {useSelector} from "react-redux";

export function AntUpload ({name,
                            //value = ['https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png','https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png','https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'],
                            value,
                            onChange,
                            max=1})
{
    const ln = useSelector(state => state.selectedLanguage);

    const [_fileList, setFileList]             = useState([]);
    const [_previewVisible, setPreviewVisible] = useState(false);
    const [_previewImage, setPreviewImage]     = useState(null);

    const runnedOnce = useRef(false);

    /*const normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };*/

    useEffect(() =>
    {
        if(!value || runnedOnce.current)
            return;

        runnedOnce.current = true;

        // Se la prima volta che entri qui value è un file
        // vuo dire che nn erano associati file all'oggetto e lo stai aggiungendo adesso
        if(value.isFile/*Array.isArray(value) && value[0] && value[0].originFileObj*/)
            return;

        let fl = [];

        if(Array.isArray(value))
            value.forEach((f, idx) => fl.push({uid:idx, url:`${window.global.base_path}${f}`}));
        else
            fl.push({uid:1, url:`${window.global.base_path}${value}`});

        setFileList(fl);

    }, [value]);

    const dummy_request = function({file, onSuccess})
    {
        setTimeout(()=>{
            onSuccess("ok")
        },0);
    };

    const handle_onChange = function ({file, fileList})
    {
        setFileList(fileList);
        if(onChange)
            onChange(fileList.length > 0 ? {isFile:true, fileList: fileList} : '');
    };

    /*const handle_upload = function (file, fileList) {
        setFile(fileList)
    };*/

    const handleCancel = function () {
        setPreviewVisible(false);
    };

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setPreviewImage(file.url || file.preview);
        setPreviewVisible(true);
    };

    const getBase64 = (file) =>
    {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    };

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div className="ant-upload-text">{translate('uploadImage', ln)}</div>
        </div>
    );

    return (
        <div className={'ant-upload-container'}>
            <Upload
                 /*fileList={_fileList}*/ /*beforeUpload={handle_upload}*/
                 fileList={_fileList}
                 multiple={true}
                 onChange={handle_onChange}
                 onPreview={handlePreview}
                 customRequest={dummy_request}
                 listType="picture-card"
            >
                {!_fileList || _fileList.length < max ? uploadButton : null}
           </Upload>
            <Modal visible={_previewVisible} footer={null} onCancel={handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={_previewImage} />
            </Modal>
        </div>
    )
}

export default (AntUpload);