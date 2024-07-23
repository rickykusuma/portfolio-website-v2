import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="Image"
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-5 list-inside list-disc">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-5 list-inside list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-10 font-bold text-gray-700">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl py-10 font-bold text-gray-700">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl py-10 font-bold text-gray-700">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl py-10 font-bold text-gray-700">{children}</h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="text-xl py-10 font-bold text-gray-700">{children}</h5>
    ),
    h6: ({ children }: any) => (
      <h6 className="text-lg py-10 font-bold text-gray-700">{children}</h6>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-bluelight-500 border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-bluelight-500 hover:decoration-bluelight-900"
        >
          {children}
        </Link>
      );
    },
  },
};
