<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class MessageFromSiteVisitor extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

  public $data;

  /**
   * Create a new message instance.
   *
   * @param array $data
   */
    public function __construct($data)
    {
      $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from(env('MAIL_FROM_ADDRESS'))
          ->subject($this->data['subject'])
          ->markdown('mail.ask')
          ->with(['msg' => $this->data]);
    }
}
