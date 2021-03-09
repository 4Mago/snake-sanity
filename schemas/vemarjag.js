export default {
  title: "Vem är jag?",
  name: "vemarjag",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Tagline",
      name: "tagline",
      type: "string",
    },
    {
      title: "Description",
      name: "description",
      type: "string",
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      title: "Hero",
      name: "heroImage",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
  ],
}
