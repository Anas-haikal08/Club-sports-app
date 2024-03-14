import { Dispatch, FC, Fragment, ReactNode, SetStateAction, useState } from "react";
import { Upload, UploadFile, Image as AntdImage, Modal, message } from "antd";
import { UploadListType } from "antd/lib/upload/interface"
import MainUtils from "../../utils/main";
import { BsFileEarmarkArrowDown } from "react-icons/bs";

type UploadFileProps = {
    uploadButton: ReactNode,
    fileList: Array<UploadFile>,
    setFileList: Dispatch<SetStateAction<any>>,
    accept?: string,
    listType?: UploadListType,
    beforeUpload?: Function,
    customRequest?: Function,
    onDownload?: Function,
    maxCount?: number,
    showPic?: boolean,
    showDownLoad?: boolean,
    deleteFile?: Function,
    className?: string
};

const UploadFileDate: FC<UploadFileProps> = ({ deleteFile, uploadButton, beforeUpload, customRequest, fileList, setFileList, accept, onDownload, listType, maxCount, showPic, showDownLoad, className }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [srcImage, setSrcImage] = useState()
    const onChange = ({ file, fileList }: any) => {     
        if (beforeUpload) {
            const fileStates = beforeUpload(file)
            if (fileStates) {
                setFileList(fileList);
            }
        } else {
            setFileList(fileList);
        }
    };

    const onPreview = async (file: any) => {
        let src = file.url?.toString();
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj)
                reader.onload = () => resolve(reader.result?.toString());
            });
        }
        const image = new Image();
        image.src = src ? src : '';
        setSrcImage(src);
        setOpen(true)
    };
    const handleCancel = () => setOpen(false);

    const onRemove = () => {
        setFileList([])
        if (deleteFile) {
            deleteFile();
        }
    }


    const beforeUploadFile = (file: any) => {
        if (beforeUpload) {
            const fileStates = beforeUpload(file)
            if (fileStates) {
                return true
            } else {
                message.error(`${file.name} is not A valid file`);
                return false;
            }
        }
    }


    return <Fragment>
        <Upload
            className={className}
            accept={accept}
            listType={listType}
            onPreview={onPreview}
            onRemove={onRemove}
            beforeUpload={beforeUploadFile}
            customRequest={customRequest ? (file) => customRequest(file, fileList) : undefined}
            onChange={onChange}
            fileList={fileList}
            onDownload={onDownload ? (file) => onDownload(file) : undefined}
            maxCount={maxCount ?? 1}
            showUploadList={
                showDownLoad && {
                    showDownloadIcon: true,
                    downloadIcon: <BsFileEarmarkArrowDown />,
                }}
        >
            {MainUtils.isEmptyValue(fileList) && uploadButton}
        </Upload>
        {
            showPic &&
            <Modal open={open} title={'preview'} footer={null} onCancel={handleCancel} centered>
                <AntdImage src={srcImage} style={{ width: '100%' }} />
            </Modal>
        }
    </Fragment >;
};

export default UploadFileDate;
