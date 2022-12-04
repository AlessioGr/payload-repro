import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'role', // required
      label: 'Role',
      type: 'select', // required
      required: true,
      hasMany: false,
      defaultValue: 'public',
      options: [
        {
          label: 'API Read',
          value: 'api_read',
        },
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Public User',
          value: 'public',
        },
      ],
    },
  ],
};

export default Users;
