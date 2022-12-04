import { CollectionConfig } from 'payload/types';


const Media: CollectionConfig = {
    slug: 'media',
    upload: {
        // thumbnail image for the admin UI will use cloudinary instead of the admin host URL
        //adminThumbnail: ({ doc }) => String(doc.cloudinaryURL),
        disableLocalStorage: true,
        imageSizes: [
            {
                name: 'sm',
                width: 400,
                height: null,
                position: 'centre',
            },
            {
                name: 'md',
                width: 768,
                height: null,
                position: 'centre',
            },
            {
                name: 'lg',
                width: 1024,
                // By specifying `null` or leaving a height undefined,
                // the image will be sized to a certain width,
                // but it will retain its original aspect ratio
                // and calculate a height automatically.
                height: null,
                position: 'centre',
            },
        ],
        formatOptions: {
            format: 'webp'
        }
    },
    fields: [
        {
            name: 'altText',
            label: 'Alt Text - Describe what you can see on the image here. This description will be read by both screen readers and visually impaired users.',
            type: 'text',
            required: true,
            localized: true,
        },
    ],
};

export default Media;
