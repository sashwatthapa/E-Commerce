// Products Schema
export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      validation: (Rule: any) => Rule.required().min(3),
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'price',
      type: 'number',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'URL',
            },
            {
              name: 'file',
              type: 'file',
              title: 'File',
            },
          ],
        },
      ],
    },
    {
      name: 'isFeatured',
      type: 'boolean',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'isPopular',
      type: 'boolean',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'isRecomended',
      type: 'boolean',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'quantity',
      type: 'number',
      validation: (Rule: any) => Rule.required().integer().min(1),
    },
    {
      name: 'description',
      type: 'text',
      validation: (Rule: any) => [
        Rule.required().min(10),
        Rule.custom((text: string) => {
          const wordCount = text.trim().split(/\s+/).length
          if (wordCount<10) {
            return `Product Description must have a minimum of 10 word. ${wordCount} /10`
          }
          return true
        }),
      ],
    },
  ],
}
