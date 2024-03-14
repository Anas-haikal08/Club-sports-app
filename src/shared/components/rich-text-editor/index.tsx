import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const toolbarOptions = {
  toolbar: [
    [{header: '1'}, {header: '2'}, {font: []}],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{align: []}],
    [{list: 'ordered'}, {list: 'bullet'}, {indent: '-1'}, {indent: '+1'}],
    [{color: []}, {background: []}], // dropdown with defaults from theme
    [{direction: 'rtl'}], // text direction
    ['link', 'image'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

export interface IRichTextEditor {
  value: string;
  height: number;
  onChange: (content: any, editor: any) => void;
  setRichText?: any;
}

const RichTextEditor = (props: IRichTextEditor) => {
  return (
    <div style={{height: `${props.height}px`}}>
      <ReactQuill
        theme='snow'
        style={{height: `${props.height - 50}px`}}
        value={props.value ?? ''}
        onChange={(content, delta, source, editor) =>
          props.onChange(editor.getContents(), editor)
        }
        modules={toolbarOptions}
      />
    </div>
  );
};

export default RichTextEditor;
