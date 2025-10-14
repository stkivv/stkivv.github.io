import { getPost } from "$lib/utils/markdown";

export const load = async ({ params }) => {
  const post = getPost(params.slug);
  return { post };
};
