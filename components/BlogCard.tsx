import Image from 'next/image';
import Link from 'next/link';
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import { Blog } from '../types/Blog';

interface Props {
  blog: Blog;
}

const BlogCard: React.FC<Props> = ({ blog }) => {
  const imageUrl =
    blog.image?.formats.small.url || '/images/default-blog-image.jpg';
  return (
    <Link href={`/blogs/${blog.id}`}>
      <a>
        <div className="max-w-md rounded overflow-hidden shadow-lg">
          <Image
            className="w-full"
            src={imageUrl}
            alt={blog.title}
            height={400}
            width={400}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{blog.title}</div>
            <p className="text-gray-700 text-base">{blog.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            {blog.categories.map((category: { id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => (
              <span
                key={category.id}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >
                #{category.name}
              </span>
            ))}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;
