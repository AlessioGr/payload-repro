import type { Block } from 'payload/types';

const OldRichTextBlock: Block = {
    slug: 'rich-text-old', // required
    fields: [ // required
        {
            type: 'richText',
            name: 'contentold',
        }
    ]
};

export default OldRichTextBlock;
