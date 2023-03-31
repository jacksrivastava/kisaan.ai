import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "jctw8oa4",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skSeFblPZbdm3o48cWf9DlM1Nj9XUY4j6aS1lQVMwoJ3E2vmQV8POpLSaD3gCD7sOQQMLDbpr2eHIxcCpHron543OoDnJYHJmlZQZ8byMhFGGgQx54yTZ6lEvLza7aydqX0Li2g2jPxk45gSsH7toZYd7H145x1SwXh9nQXa7ETyzJiOyFOS",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
