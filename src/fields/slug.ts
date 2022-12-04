import { FieldHook, Field } from 'payload/types';

const format = (val: string): string => val.replace(/ /g, '-').replace(/[^\w-]+/g, '').toLowerCase();

const formatSlug = (fallback: string): FieldHook => ({ value, originalDoc, data }) => {
    if (typeof value === 'string') {
        return format(value);
    }
    const fallbackData = (data && data[fallback]) || (originalDoc && originalDoc[fallback]);

    if (fallbackData && typeof fallbackData === 'string') {
        return format(fallbackData);
    }

    return value;
};


function slug(name?: string): Field {
    return {
        name: 'slug',
        label: 'Slug',
        type: 'text',
        admin: {
            position: 'sidebar',
        },
        hooks: {
            beforeValidate: [
                formatSlug(name ? name : 'title'),
            ]
        }
    }
}

export default slug;