import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

export default async function Page() {
  const { data } = await getClient().query({
    query: gql`
      query GetPosts {
        posts {
          nodes {
            id
            title
          }
        }
      }
    `,
  });

  return (
    <ul>
      {data.posts.nodes.map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
