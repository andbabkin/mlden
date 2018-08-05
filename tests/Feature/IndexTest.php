<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;

class IndexTest extends TestCase
{
  use WithoutMiddleware;

  /**
   * Request should return with status 200.
   */
  public function testIndexResponseIsOK()
  {
    $response = $this->get('/');

    $response->assertStatus(200);
  }

  /**
   * Page should have defined title
   */
  public function testPageTitle(){
    $this->get('/')->assertSee('<title>Malachite Den</title>');
  }
}
