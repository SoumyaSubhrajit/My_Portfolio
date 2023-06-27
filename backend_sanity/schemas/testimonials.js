export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },

    {
      name: 'company',
      title: 'Company',
      type: 'string'
    },

    {
      name: 'imageurl',
      title: 'ImgURl',
      type: 'image',
      option: {
        // This is the feature that the user can choose the crop option while 
        // uploding the image.
        hospot: true,
      }
    },

    {
      name: 'feedback',
      title: 'Feedback',
      type: 'string'
    }
  ]
}