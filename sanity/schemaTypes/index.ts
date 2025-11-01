import { type SchemaTypeDefinition } from 'sanity'
import { productType } from './productTypes'
import {TagIcon} from "@sanity/icons";
import { blockContent } from './blockContentTypes'
import { orderType } from './orderType';
import { salesType } from './salesType';
import { defineField } from 'sanity';



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // {
    //   name: 'post',
    //   type: 'document',
    //   title: 'Post',
    //   fields: [
    //     { name: 'title', type: 'string', title: 'Title' },
    //     { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } },
    //     { name: 'author', type: 'reference', to: [{ type: 'author' }], title: 'Author' },
    //     { name: 'categories', type: 'array', of: [{ type: 'reference', to: [{ type: 'category' }] }], title: 'Categories' },
    //     { name: 'body', type: 'text', title: 'Body' }
    //   ]
    // },
    {
      name: 'category',
      type: 'document',
      title: 'Category',
      icon: TagIcon,
      fields: [
        { name: 'title', type: 'string', title: 'Title' },
        // Add a slug field so categories can have SEO-friendly URLs.
        defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' }, }),
        { name: 'description', type: 'text', title: 'Description' }
      ],
       preview: {
        select: {
            title: "title",
            media: "image",
            price: "price",
            subtitle: "description",
        },
      }
    },
    // {
    //   name: 'author',
    //   type: 'document',
    //   title: 'Author',
    //   fields: [
    //     { name: 'name', type: 'string', title: 'Name' },
    //     { name: 'bio', type: 'text', title: 'Biography' }
    //   ]
    // },
    
    blockContent,
    orderType,
    productType,
    salesType
  ],
}
