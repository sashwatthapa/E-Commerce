// Order Schema

export default {
  name: 'order',
  type: 'document',
  title: 'Order',
  fields: [
    {
      name: 'useName',
      title: 'Use Name',
      type: 'string',
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'product',
              title: 'Product',
              type: 'reference',
              to: [{type: 'product'}],
            },
          ],
        },
      ],
    },
    {
      name: 'orderStatus',
      title: 'Order Status',
      type: 'string',
      option: {
        list: [
          {title: 'Pending', value: 'Pending'},
          {title: 'Cancelled', value: 'Cancelled'},
          {title: 'Processing', value: 'Processing'},
          {title: 'Shipped', value: 'Shipped'},
          {title: 'Deliverd', value: 'Deliverd'},
        ],
      },
      initialValue:'Pending',
    },
  ],
}
