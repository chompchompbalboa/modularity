<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

/*
* This is modularity
*
* thisismodularity.com
*/
$thisismodularity = function() {
    Route::post('/api', 'APIController@api');
    Route::get('/{any}', 'BladeController@load')->where('any', '.*');
    
};
Route::group(['domain' => 'thisismodularity.com'], $thisismodularity);
Route::group(['domain' => 'thisismodularity.local'], $thisismodularity);

/*
* Other sites
*/
Route::post('/api', 'APIController@api');
Route::get('/{any}', 'BladeController@load')->where('any', '.*');
