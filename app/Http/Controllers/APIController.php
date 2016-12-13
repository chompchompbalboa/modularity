<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;

use App\Models\Sites;
use App\Models\User;

class APIController extends Controller
{
    /**
    * Constructor
    *
    * @requires Request
    * @requires Sites
    * @requires User
    */
    public function __construct(Request $request, Sites $sites, User $user)
    {
        $this->app = app();
        $this->request = $request;
        $this->sites = $sites;
        $this->user = $user;
    }
    /**
     * API
     *
     * @return Response
     */
    public function api()
    {
        $request = $this->request->input('request');
        $data = $this->request->input('data');
        switch($request) {
            case "INITIAL_CONTENT":
                $response = [
                    [
                        "key" => "app",
                        "value" => $this->fetchApp($request, $data)
                    ],
                    [
                        "key" => "site",
                        "value" => $this->fetchSite($request, $data)
                    ],
                ];
            break;
        }
        return json_encode($response);
    }


    /**
     * Fetch App
     *
     * @return array
     */
    public function fetchApp($data, $request)
    {
        return ["display" => [
                    "App" => "NotAppDashboard",
                    "AppDashboard" => "AppDashboardVisible"
                    ]
                ];
    }


    /**
     * Fetch Site
     *
     * @return array
     */
    public function fetchSite($data, $request)
    {
        return ["something" => "something else"];
    }
}