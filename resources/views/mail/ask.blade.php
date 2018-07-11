@component('mail::message')
# Message from site visitor

**Name:** {{ $msg['name'] }}

**E-mail:** {{ $msg['email'] }}

## Message body
@component('mail::panel')
{{ $msg['body'] }}
@endcomponent

@endcomponent
