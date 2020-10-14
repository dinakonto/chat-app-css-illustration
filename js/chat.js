// Document ready
$(function() {

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
      msg: '',
      src: [
        '../../images/dog-image-1.jpg',
        '../../images/dog-image-2.jpg',
        '../../images/dog-image-3.jpg'
      ],
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


  let delay = 1000;

  messages.forEach(function(value, index) {
    setTimeout(function() {
      let msgBubbleHTML = '<li class="msg from-' + value.from + ' type-' + value.type + '"><div class="msg-content"><p>' + value.msg + '</p></div></div>'
      document.querySelector("#msg-area .msg-list").innerHTML += msgBubbleHTML;
    }, delay);
    delay += 1000;
  });
})
