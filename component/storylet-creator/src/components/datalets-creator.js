import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {translate} from "./helpers";
import { Input, Modal } from 'antd';
import { CheckOutlined, BgColorsOutlined } from '@ant-design/icons';
import { SketchPicker } from 'react-color';
import { AntUpload } from "./CustomFormInput/AntUpload";

import '../style/datalets-creator.css'

export default function DataletsCreator({isOpened, addDatalet}) {
    const ln = useSelector(state => state.selectedLanguage);

    // const [selectedImg, setSelectedImg] = useState({});

    useEffect(()=>{

    }, []);

    const xxx = () => {

    };

    return (
        <>
            <iframe style={{display:(isOpened ? 'block' : 'none')}} src="http://deep.routetopa.eu/deep2/COMPONENTS/creator.html" className={"datalets-creator"}> </iframe>
            <Modal title={translate('copyDataletHTML', ln)}
                visible={isOpened} width={'80vw'}
                // bodyStyle={{maxHeight:'60vh', overflowX:'auto', backgroundColor:'transparent', padding:8}}
                style={{position:'absolute', top:'unset', bottom:16, left:'10vw'}}
                // onOk={() => xxx()}
                // onCancel={() => xxx}

                // footer={[
                //     <Select key="select" defaultValue={hasUploads() ? "0" : "1"} onChange={selectGallery}>
                //         {getOptions()}
                //     </Select>,
                //     <Button key="cancel" onClick={() => closeGallery({_id:'@close'})}>{translate('buttonCancel', ln)}</Button>,
                //     <Button key="ok" type="primary" onClick={() => closeGallery(selectedImg, selectedColor, type)}>{translate('buttonOk', ln)}</Button>
                // ]}
            >
                <Input.TextArea rows={3} />
            </Modal>
        </>
    )
};