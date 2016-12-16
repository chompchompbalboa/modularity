<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;

use App\Models\Sites;
use App\Models\User;

use App\Services\SiteLoader;

class APIController extends Controller
{
    /**
    * Constructor
    *
    * @requires Request
    * @requires Sites
    * @requires User
    */
    public function __construct(Request $request, SiteLoader $siteLoader, Sites $sites, User $user)
    {
        $this->app = app();
        $this->request = $request;
        $this->siteLoader = $siteLoader;
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
        $data = json_decode($this->request->input('data'));
        switch($request) {
            case "INITIAL_CONTENT":
                $response = [
                    [
                        "key" => "app",
                        "value" => $this->initialApp($request, $data)
                    ],
                    [
                        "key" => "site",
                        "value" => $this->initialSite($request, $data)
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
    public function initialApp($request, $data)
    {
        return [
            "state" => [
                "device" => "desktop",
                "App" => "AppDashboard",
                "AppDashboard" => "AppDashboardVisible",
                "AppDashboardOverview" => [
                    "position" => "center"
                ],
                "AppDashboardPage" => [
                    "page" => "1",
                    "position" => "right"
                ],
                "AppDashboardModules" => [
                    "page" => "1",
                    "position" => "right"
                ],
                "AppDashboardEdit" => [
                    "page" => "1",
                    "module" => "1",
                    "position" => "right"
                ],
            ],
            "modules" => [
                "LandingPage" => [
                    "description" => "A simple landing page with background image and centered text",
                    "header" => "Landing Page",
                    "module" => "LandingPage",
                    "props" => [
                        "height" => 50,
                        "width" => 50,
                        "backgroundColor" => [
                            "r" => 255,
                            "g" => 0,
                            "b" => 0,
                            "a" => 1
                        ]
                    ]
                ]
            ]
        ];
    }


    /**
     * Fetch Site
     *
     * @return array
     */
    public function initialSite($request, $data)
    {
        $site = $this->siteLoader->initialSite($data, $this->sites);
        $site['state'] = [];
        $site['state']['path'] = $data->url->path;
        return $site;
    }
}