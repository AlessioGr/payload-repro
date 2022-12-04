import { CollectionConfig } from 'payload/types';
import NewRichTextBlock from "../blocks/NewRichTextBlock";
import slug from "../fields/slug";
import OldRichTextBlock from "../blocks/OldRichTextBlock";

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Page',
    plural: 'Pages'
  },
  admin: {
    useAsTitle: 'title',
  },
  versions: {
    maxPerDoc: 50,
    retainDeleted: false,
    drafts: {
      autosave: true, //Setting this to true breaks lexical :(
    },
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
      localized: true,
    },
    slug(),
    {
      name: 'content',
      label: 'Content',
      type: 'blocks',
      minRows: 0,
      maxRows: 1000,
      blocks: [
        NewRichTextBlock,
      ],
    },
  ],
}

export default Pages;
