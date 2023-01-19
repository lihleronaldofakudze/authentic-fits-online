import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const sanity = sanityClient({
  projectId: "cyi6cisn",
  dataset: "production",
  apiVersion: "vX",
});

const builder = imageUrlBuilder(sanity);
export const urlFor = (source) => builder.image(source);
export default sanity;
