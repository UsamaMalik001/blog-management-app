"use client";
import { getPosts } from "@/app/api/PostApi";
import { link } from "fs";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function AllPosts() {
  const [data, setData] = useState([]);
  const getPostData = async () => {
    const res = await getPosts();
    console.log(res.data);
    setData(res.data);
  };
  useEffect(() => {
    getPostData();
  }, []);

  return (
    <div className="max-w-[1100px] mx-auto px-4">
      <h1 className="text-2xl font-semibold mb-4">All posts component here.</h1>

      <ul>
        {data.map((post) => {
          const { id, title, body } = post;
          return (
            <li key={id} className="border p-4 mb-4 rounded shadow-md">
              <p className="text-xl font-bold">{id}.</p>
              <p className="text-xl font-bold">{title}</p>
              <p className="text-gray-600 mt-2">{body}</p>
              <span className="space-x-2 space-y-2">
                <Button>Edit</Button>
                <Button>Delete</Button>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
