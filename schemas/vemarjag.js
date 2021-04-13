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
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
        title: "Beskrivning",
        name: "description",
        type: "array",
        of: [
          {
            type: "block",
          },
        ],
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
