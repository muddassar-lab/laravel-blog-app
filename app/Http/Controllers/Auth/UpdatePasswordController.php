<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdatePasswordRequest;
use App\Models\User;
use Hash;
use Redirect;

class UpdatePasswordController extends Controller
{
    public function update(UpdatePasswordRequest $request)
    {
        $id = auth()->user()->id;
        $user = User::find($id);
        $user->password = Hash::make($request->new_password);
        $user->save();

        return Redirect::route('home')->with('success', 'Password Updated Successfully');
    }
}
