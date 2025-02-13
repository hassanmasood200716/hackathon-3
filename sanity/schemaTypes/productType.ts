import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  icon: TrolleyIcon,
  fields: [
    defineField({
      name: "name",
      title: "product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name:"slug",
        title:"Slug",
        type:"slug",
        options:{
            source:"name",
            maxLength:96,
        },
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: "image",
        title: "product Image",
        type: "image",
        options:{
            hotspot: true,
        }
      }),
    defineField({
        name: "description",
        title: "Description",
        type: "blockContent",
      }),
    defineField({
        name: "price",
        title: "Price",
        type: "number",
        validation: (Rule) => Rule.required().min(0),
      }),
    defineField({
        name: "peoplecapicity",
        title: "People Capicity",
        type: "number",
        validation: (Rule) => Rule.required().min(0),
      }),
    defineField({
        name: "tankcapicity",
        title: "Tank Capicity",
        type: "number",
        validation: (Rule) => Rule.required().min(0),
      }),
    defineField({
        name: "categories",
        title: "Categories",
        type: "array",
        of: [{ type: "reference", to: {type: "category"}}]
      }),
      defineField({
        name: "stock",
        title: "Stock",
        type: "number",
        validation: (Rule) => Rule.required().min(0),
      }),
  ],
  preview: {
    select: {
        title: "name",
        media: "image",
        price: "price",
    },
    prepare(select) {
        return{
            title: select.title,
            subtitle: `PKR ${select.price}`,
            media: select.media,
        }
    }
  }
});
