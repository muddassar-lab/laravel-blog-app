<?php

use App\Http\Controllers\Auth\UpdatePasswordController;
use App\Http\Controllers\Category\CategoryController;
use App\Http\Controllers\Home\HomeController;
use App\Http\Controllers\Post\PostController;
use App\Http\Controllers\Profile\ProfileController;
use App\Models\Category;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware('auth')->group(function () {
    // Home Routes
    Route::get('/', [HomeController::class, 'index'])->name('home');

    //Category Routes
    Route::prefix('categories')->group(
        function () {
            Route::get('/', [CategoryController::class, 'index'])->name('categories.home');
            Route::get('/create', [CategoryController::class, 'create'])->name('categories.create');
            Route::get('/{id}/edit', [CategoryController::class, 'edit'])->name('categories.edit');
            Route::get('/{id}', [CategoryController::class, 'show'])->name('categories.show');
            Route::post('/', [CategoryController::class, 'store'])->name('categories.store');
            Route::delete('/{id}', [CategoryController::class, 'destroy'])->name('categories.destroy');
            Route::put('/{id}', [CategoryController::class, 'update'])->name('categories.update');
        }
    );

    //Post Routes
    Route::prefix('posts')->group(
        function () {
            Route::get('/', [PostController::class, 'index'])->name('posts.home');
            Route::delete('/{id}', [PostController::class, 'destroy'])->name('posts.destroy');
            Route::get('/create', [PostController::class, 'create'])->name('posts.create');
            Route::post('/', [PostController::class, 'store'])->name('posts.store');
            Route::get('/{id}/edit', [PostController::class, 'edit'])->name('posts.edit');
            Route::put('/{id}', [PostController::class, 'update'])->name('posts.update');
            Route::get('/{id}', [PostController::class, 'show'])->name('posts.show');
        }
    );

    //Profile Routes
    Route::prefix('profile')->group(
        function () {
            Route::get('/', [ProfileController::class, 'index'])->name('profile.home');
            Route::put('/{id}', [ProfileController::class, 'update'])->name('profile.update');
            Route::put('/update/password', [UpdatePasswordController::class, 'update'])->name('profile.password.update');
        }
    );
});

require __DIR__.'/auth.php';
