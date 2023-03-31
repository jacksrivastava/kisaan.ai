export default {
    name: "plants",
    title: "plants",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
  
      {
        name: "age",
        title: "Age",
        type: "number",
      },
      {
        name: "imgurl",
        title: "ImgUrl",
        type: "image",
        options: {
          hotspot: true,
        },
      },
    ],
  };
  