import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'amenities',
  title: 'Lista de amenidades',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nombre de la amenidad',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug de la amenidad',
      type: 'slug',
      description:
        '*Siempre que se agregue o cambie el nombre del producto, dar clic al botón lateral: Generate',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen principal de la amenidad',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
