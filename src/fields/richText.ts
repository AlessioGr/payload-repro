import { Field } from 'payload/types';
import lexicalRichTextField from '../plugins/plugin-lexical/fields/lexicalRichTextField'


function lexicalRichText(props?: {name?: string, label?: string, debug?: boolean}): Field {
    return lexicalRichTextField({
        name: props?.name ? props?.name : 'newRichText',
        label: props?.label ? props?.label : 'Rich Text',
        localized: true,
        editorConfigModifier: defaultEditorConfig => {
            defaultEditorConfig.debug = props?.debug ? props?.debug : false;
            defaultEditorConfig.features.textColor.enabled = false;
            defaultEditorConfig.features.textBackground.enabled = false;
            defaultEditorConfig.features.figma.enabled = false;
            defaultEditorConfig.features.fontSize.enabled = false;
            defaultEditorConfig.features.font.enabled = false;
            defaultEditorConfig.features.align.enabled = false;

            return defaultEditorConfig;
        }
    })
}

export default lexicalRichText;
