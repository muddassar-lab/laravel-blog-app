<?php

use App\Http\Controllers\Auth\UpdatePasswordController;
use App\Http\Controllers\Category\CategoryController;
use App\Http\Controllers\Home\HomeController;
use App\Http\Controllers\Payment\PaymentController;
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
    Route::resource('categories', CategoryController::class);


    //Post Routes
    Route::resource('posts', PostController::class);

    //Profile Routes
    Route::prefix('profile')->group(
        function () {
            Route::get('/', [ProfileController::class, 'index'])->name('profile.home');
            Route::put('/{id}', [ProfileController::class, 'update'])->name('profile.update');
            Route::put('/update/password', [UpdatePasswordController::class, 'update'])->name('profile.password.update');
        }
    );

    //payment routes

    Route::prefix('payments')->group(
        function () {
            Route::get('/', [PaymentController::class, 'index'])->name('payments.home');
            Route::get("/create", [PaymentController::class, 'create'])->name('payments.create');
        }
    );
});

require __DIR__ . '/auth.php';