const messages = [
  {
    msg: 'That sounds great. I’d be happy with that.',
    from: 'sam',
    type: 'text'
  },
  {
    msg: 'Could you send over some pictures of your dog, please?',
    from: 'sam',
    type: 'text'
  },
  {
    msg: '3 images go here',
    from: 'me',
    type: 'image'

  },
  {
    msg: 'Here are a few pictures. She’s a happy girl!',
    from: 'me',
    type: 'text'

  },
  {
    msg: 'Can you make it?',
    from: 'me',
    type: 'text'
  },
  {
    msg: 'She looks so happy! The time we discussed works. How long shall I take her out for?',
    from: 'sam',
    type: 'text'

  },
  {
    msg: '30 minute walk',
    price: 29,
    from: 'sam',
    type: 'choice'
  },
  {
    msg: '1 hour walk',
    price: 49,
    from: 'sam',
    type: 'choice'
  }
];

// Document ready
$(function() {

  // Add each message sequentially after a delay
  var delay = 1000;
  $.each(messages, function(key, value) {
    setTimeout(function() {
      console.log(value.msg);
      let msgBubbleHTML = '<div class="msg from-' + value.from + '"><p>' + value.msg + '</p></div>'
      console.log(msgBubbleHTML);
      $("#msg-area").append(msgBubbleHTML);
    }, delay)
    delay += 1000;

  })

})
