import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllBlogPosts } from "@/lib/blogData";
import { Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Arcade Houston Blog | VR Tips, Houston Arcades & Entertainment Guide",
  description: "Explore the Arcade Houston blog — VR game guides, Houston arcade reviews, activity ideas, team building tips, birthday inspiration, and everything arcades in the Houston metro area.",
  alternates: { canonical: "https://arcadehouston.com/blog" },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Arcade Houston Blog",
  "description": "Houston arcade guides, VR tips, and everything arcades and entertainment in the Houston metro area.",
  "url": "https://arcadehouston.com/blog",
  "publisher": { "@type": "Organization", "name": "Arcade Houston", "url": "https://arcadehouston.com" },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-14">
            <h1 className="font-orbitron text-4xl md:text-5xl font-black text-white">Arcade Houston <span className="text-stroke-cyan">Blog</span></h1>
            <p className="mt-4 max-w-2xl mx-auto text-[#7DD3FC]">Houston arcade guides, VR tips, activity ideas, and everything you need to know about arcades and free-roam VR in the Houston metro area.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block glass rounded-2xl overflow-hidden hover:border-cyan-500/60 transition-all duration-300">
                <div className="relative aspect-video">
                  <Image src={post.featuredImage} alt={post.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" priority={i === 0} className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000C1A] to-transparent" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-4 text-xs text-[#7DD3FC]/50 mb-3">
                    <span className="flex items-center gap-1"><Calendar size={12} />{new Date(post.publishDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                    {post.readTime && <span className="flex items-center gap-1"><Clock size={12} />{post.readTime} min read</span>}
                  </div>
                  <h2 className="font-orbitron text-sm font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">{post.title}</h2>
                  <p className="mt-2 text-xs text-[#7DD3FC]/70 leading-relaxed line-clamp-3">{post.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
