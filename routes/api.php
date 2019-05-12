<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::apiResources([
    'countries'     =>  'CountryController',
    'universities'  => 'UniversityController',
    'majors'        => 'MajorController'
]);

Route::get('countries/{country}/universities','UniversityController@index');
Route::get('countries/{country}/universities/{university}/majors','MajorController@index');