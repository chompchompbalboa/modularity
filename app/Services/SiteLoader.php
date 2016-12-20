<?php

namespace App\Services;

class SiteLoader
{
    /**
    * Initial Site
    *
    * @requires data
    * @requires sites
    * @returns Site
    */
    public function initialSite($data, $sites)
    {
        // Replace .local with .com (for development purposes)
        $url = str_replace(".local", ".com", $data['url']['domain']);

        // Fetch site from db
        $site = $sites->where('domain', '=', $url)->first();
        if(is_null($site)) {
            $site = $sites->where('domain', '=', "thisismodularity.com")->first();
        }
        return ($site->versions['active']);
    }
}
