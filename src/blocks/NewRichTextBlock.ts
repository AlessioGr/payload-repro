import type { Block } from 'payload/types';
import newRichText from "../fields/richText";

const NewRichTextBlock: Block = {
    slug: 'rich-text-new', // required
    fields: [ // required
        newRichText()
    ]
};

export default NewRichTextBlock;
