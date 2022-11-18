import React from "react";
import Pagination from "./Pagination";
import PostRow from "./PostRow";

const PostTable = ({ posts, name }) => {
    return (
        <div className="pt-4 pb-12">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div className="border-b border-gray-200 bg-white p-6">
                        {name != null ? (
                            <h1 className="py-4 text-4xl">
                                Posts By{" "}
                                <span className="font-bold text-blue-400">
                                    {name}
                                </span>{" "}
                            </h1>
                        ) : null}

                        <table className="w-full table-fixed">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="w-20 px-4 py-2">No.</th>
                                    <th className="px-4 py-2">Title</th>
                                    <th className="px-4 py-2">Description</th>
                                    <th className="px-4 py-2">category</th>
                                    <th className="px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.data.map((post) => (
                                    <PostRow post={post} name={name} />
                                ))}
                            </tbody>
                        </table>

                        <Pagination class="mt-6" links={posts.links} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostTable;
