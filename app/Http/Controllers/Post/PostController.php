<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Models\Category;
use App\Models\Post;
use Auth;
use Inertia\Inertia;
use Redirect;
use Storage;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $posts = Post::with('category')->latest()->paginate(5);

        return Inertia::render('Post/Index', ['posts' => $posts]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        $categories = Category::all();

        return Inertia::render('Post/Create', ['categories' => $categories]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StorePostRequest $request)
    {
        $path = $request->file('image_path')->store('posts', 'public');

        $uid = Auth::id();
        Post::create([
            'description' => $request->description,
            'title' => $request->title,
            'status' => $request->status,
            'category_id' => $request->category,
            'author_id' => $uid,
            'image_path' => $path,
        ]);

        return Redirect::route('posts.home')->with('success', 'Post Added Successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Inertia\Response
     */
    public function show($id)
    {
        $post = Post::with('category')->find($id);

        return Inertia::render('Post/View', ['post' => $post]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Inertia\Response
     */
    public function edit($id)
    {
        $categories = Category::all();
        $post = Post::with('category')->find($id);

        return Inertia::render('Post/Edit', ['postModel' => $post, 'categories' => $categories]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(UpdatePostRequest $request, int $id)
    {
        $path = null;
        if ($request->hasFile('image')) {
            if (Storage::delete($request->image_path)) {
                $path = $request->file('image')->store('posts');
            }
        } else {
            $path = $request->image_path;
        }

        $post = Post::find($id);
        $post->title = $request->title;
        $post->description = $request->description;
        $post->image_path = $path;
        $post->category_id = $request->category;
        $post->status = $request->status;
        $post->save();

        return Redirect::route('posts.home')->with('success', 'Post Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy($id)
    {
        $post = Post::find($id);
        $post->delete();
        return Redirect::route('posts.home')->with('success', 'Post Deleted Successfully');
    }
}