// Constante date/time
const { DateTime } = require("luxon");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");



module.exports = function (eleventyConfig) {

  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://emeka.mx",
    },
  });
  

  // Colección productos:
  eleventyConfig.addCollection("productos", async function(collectionApi) {
    const productosModule = require('./src/_data/products.js');
    const productos = await productosModule();
    return productos.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  });

  // Colección categorías:
  eleventyConfig.addCollection("categorias", async function(collectionApi) {
    const categoriasModule = require('./src/_data/categoriasProductos.js');
    const categorias = await categoriasModule();
    return categorias;
  });

  // Colección artículos
  eleventyConfig.addCollection("articulos", async function(collectionApi) {
    const articulosModule = require('./src/_data/posts.js');
    const articulos = await articulosModule();
    return articulos;
  });

  // Colección categorías:
  eleventyConfig.addCollection("categoriasBlog", async function(collectionApi) {
    const categoriasPostsModule = require('./src/_data/categoriasPosts.js');
    const categoriasPosts = await categoriasPostsModule();
    return categoriasPosts;
  });

  

  // Filtro personalizado 'slice' para limitar el número de elementos
  eleventyConfig.addFilter('slice', function(arr, limit) {
    return arr.slice(0, limit);
  });



  // Filtro para crear un srcset de imágenes
  eleventyConfig.addNunjucksFilter("srcset", function(images) {
    return images.map(image => `${image.srcset}`).join(", ");
  });
  
 


  // Filtro para exportar resultantes a la carpeta public
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy('./src/js');
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/images');





  // Filtro para formatear fechas
  eleventyConfig.addFilter("date", (dateObj, format = "d 'de' LLLL 'de' yyyy") => {
    if (typeof dateObj === "string") {
      dateObj = DateTime.fromISO(dateObj);
    } else {
      console.log("Parsing date object:", dateObj);
    }
    // se pasa a español
    return dateObj.isValid 
      ? dateObj.setLocale('es').toFormat(format) 
      : "Fecha inválida";
  });




  
  
  // Entrada y salida del contenido estático
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};