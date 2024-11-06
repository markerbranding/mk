import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'products',
  title: 'Productos',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'hero',
      title: 'Hero',
    },
    {
      name: 'product',
      title: 'Características',
    },
    {
      name: 'amenitiesList',
      title: 'Amenidades',
    },
    {
      name: 'location',
      title: 'Ubicación',
    },
    {
      name: 'gallery',
      title: 'Galería',
    },
  ],
  fields: [
    defineField({
      name: 'titleseo',
      title: 'Título para posicionar esta página en buscadores',
      type: 'string',
      description: '*Quedará oculto a la vista del usuario, exclusivo para SEO (Max caracteres 70)',
      group: 'seo',
      validation: (rule) => rule.max(70).warning('Se han rebasado los 70 caracteres recomendados'),
    }),
    defineField({
      name: 'descseo',
      title: 'Descripción para posicionar esta página en buscadores',
      type: 'text',
      description:
        '*Quedará oculto a la vista del usuario, exclusivo para SEO (Max caracteres 155)',
      group: 'seo',
      validation: (rule) =>
        rule.max(155).warning('Se han rebasado los 155 caracteres recomendados'),
    }),
    defineField({
      name: 'keyseo',
      title: 'Palabras clave para posicionar esta página en buscadores',
      type: 'text',
      description: '*Separar palabras con comas',
      group: 'seo',
    }),
    defineField({
      name: 'title',
      title: 'Nombre del desarrollo',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'slug',
      title: 'Slug del desarrollo',
      type: 'slug',
      description:
        '*Siempre que se agregue o cambie el nombre del producto, dar clic al botón lateral: Generate',
      options: {
        source: 'title',
        maxLength: 96,
      },
      group: 'hero',
    }),
    defineField({
      name: 'categories',
      type: 'array',
      title: 'Categoría del desarrollo',
      of: [{type: 'reference', to: [{type: 'category'}]}],
      options: {
        layout: 'tags',
      },
      group: 'hero',
    }),
    defineField({
      name: 'titlePage',
      title: 'Título principal para describir el desarrollo',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'place',
      title: 'Ubicación del desarrollo',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'tbImage',
      title: 'Imagen de previsualización (thumbnail)',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'hero',
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen principal del desarrollo',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'hero',
    }),
    defineField({
      name: 'color',
      title: 'Color destacado del desarrollo',
      description:'*Elegir un color oscuro, porque servirá de fondo para el logo claro',
      type: 'color',
      group: 'hero',
    }),
    defineField({
      name: 'colorLight',
      title: 'Color claro destacado del desarrollo',
      description:'*Elegir un color claro, porque servirá de fondo para textos',
      type: 'color',
      group: 'hero',
    }),
    defineField({
      name: 'logoImg',
      title: 'Logo del desarrollo en color claro',
      type: 'image',
      group: 'hero',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'logoImg2',
      title: 'Logo del desarrollo en color oscuro',
      type: 'image',
      group: 'hero',
      options: {
        hotspot: true,  
      }
    }),
    defineField({
      name: 'introImage',
      title: 'Imagen lateral para la descripción del desarrollo',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'product',
    }),
    defineField({
      name: 'introTitle',
      title: 'Título de la descripción general',
      type: 'string',
      group: 'product',
    }),
    defineField({
      name: 'introRichText',
      title: 'Descripción general del desarrollo',
      type: 'blockContent',
      group: 'product',
    }),
    defineField({
      name: 'introProductWeb',
      title: 'Sitio web del desarrollo',
      type: 'string',
      group: 'product',
    }),
    defineField({
      name: 'introProductBrochure',
      title: 'Brochure del desarrollo',
      type: 'file',
      group: 'product',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Fecha de publicación',
      type: 'datetime',
      group: 'product',
    }),
    defineField({
      name: 'characteristicsTitle',
      title: 'Frase llamativa del desarrollo',
      type: 'blockContent',
      group: 'product',
    }),
    defineField({
      name: 'characteristicsRichText',
      title: 'Características del desarrollo',
      type: 'blockContent',
      group: 'product',
    }),
    defineField({
      name: 'characteristicsSpecifications',
      title: 'Especificaciones del desarrollo',
      type: 'blockContent',
      group: 'product',
    }),
    defineField({
      name: 'divisorImg',
      title: 'Imagen o render divisor (imagen grande de detalle)',
      type: 'image',
      group: 'product',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'amenitiesTitle',
      title: 'Título de la sección amenidades',
      type: 'string',
      group: 'amenitiesList',
    }),

    defineField({
      name: 'amenitieList',
      type: 'array',
      title: 'Amenidades del desarrollo',
      of: [{type: 'reference', to: [{type: 'amenities'}]}],
      options: {
        layout: 'tags',
      },
      group: 'amenitiesList',
    }),

    /*defineField({
      name: 'amenities',
      title: 'Amenidades',
      type: 'array',
      group: 'product',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Título',
              type: 'string',
            },
            {
              name: 'icon',
              title: 'Icono',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ], 
    }),*/
    
    defineField({
      name: 'mapTitle',
      title: 'Título de sección mapa',
      type: 'string',
      group: 'location',
    }),
    defineField({
      name: 'mapRichText',
      title: 'Descripción sección del mapa',
      type: 'blockContent',
      group: 'location',
    }),
    defineField({
      name: 'mapLink',
      title: 'Link de google maps del mapa',
      type: 'string',
      group: 'location',
    }),
    defineField({
      name: 'latitud',
      title: 'Pegar la latitud del Google Maps',
      type: 'string',
      group: 'location',
    }),
    defineField({
      name: 'longitud',
      title: 'Pegar la longitud del Google Maps',
      type: 'string',
      group: 'location',
    }),
    defineField({
      name: 'map',
      title: 'Iframe del mapa',
      type: 'text',
      group: 'location',
    }),
    defineField({
      name: 'galleryImages',
      title: 'Galería de imágenes de sección',
      group: 'gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      options: {
        layout: 'grid',
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
