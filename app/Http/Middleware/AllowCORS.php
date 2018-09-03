<?php

namespace App\Http\Middleware;

use Closure;

class AllowCORS
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
      if($this->isCorsRequest($request)){
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, UPDATE, PATCH, PUT');
        header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
      }
      return $next($request);
    }

    private function isCorsRequest($request)
    {
      return $request->headers->has('Origin') && !$this->isSameHost($request);
    }

    private function isSameHost($request)
    {
      return $request->headers->get('Origin') === $request->getSchemeAndHttpHost();
    }
}
