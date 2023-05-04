import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "qe59h6ch",
  dataset: 'production',
  apiVersion: "2023-05-01",
  useCdn: true,
  token:
    "sk2r9yBLsGQZ5VJC4xLxDZQ6CqBWNo0SDgL3IkyB0eITiW8qebSYovY8tWrsGsUEHmgrvaXerPzpek4LFMZj2AFHPvW0yDvG0m1izcrJYVnQVvRHeE8rMpJoinES4X1UzZHMGLOBJCB1fyBQrJVowFZig4XzULANSyukLZryZZ8hzSrgF0Mu",
  ignoreBrowserTokenWarning: true
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)