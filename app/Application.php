<?php
/**
 * Author: Andrei Babkin <andrei@malachiteden.com>
 * Date: 22.07.2018
 * Time: 19:05
 */

namespace App;

/**
 * Used to rewrite default public path.
 * Class Application
 * @package App
 */
class Application extends \Illuminate\Foundation\Application
{
  /**
   * Get the path to the public / web directory.
   *
   * @return string
   */
  public function publicPath()
  {
    return $this->basePath.DIRECTORY_SEPARATOR.'htdocs';
  }

}
