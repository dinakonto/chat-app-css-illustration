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
        '/images/dog-image-1.jpg',
        '/images/dog-image-2.jpg',
        '/images/dog-image-3.jpg'
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

  // Loop through messages and display each one
  let delay = 1000;

  messages.forEach(function(msg, index) {
    setTimeout(function() {
      let msgBubbleHTML;
      // Add basic building blocks (All)
      msgBubbleHTML = '<li class="msg from-' + msg.from + ' type-' + msg.type + '"><div class="msg-content">';

      if (msg.type === 'image') {
        // Add images (Images)
        let imgArray = msg.src;
        imgArray.forEach(function(src, index) {
          msgBubbleHTML += '<img src=".' + src + '">'
        });

      } else {
        // Add text (Text, choice)
        msgBubbleHTML += '<p>' + msg.msg + '</p>'
      }

      // End block (All)
      msgBubbleHTML += '</div></div>'
      // Add to DOM (All)
      document.querySelector("#msg-area .msg-list").innerHTML += msgBubbleHTML;
    }, delay);
    delay += 1000;
  });




});

  //
  // messages.forEach(function(msg, index) {
  //   setTimeout(function() {
  //     let msgBubbleHTML = '<li class="msg from-' + msg.from + ' type-' + msg.type + '"><div class="msg-content">';
  //
  //     // If it's images
  //
  //
  //
  //     // If it's text
  //     // else {
  //       msgBubbleHTML += '<p>' + msg.msg + '</p>'
  //     // }
  //     msgBubbleHTML += '</div></div>'
  //     // Add it to the DOM
  //     document.querySelector("#msg-area .msg-list").innerHTML += msgBubbleHTML;
  //   })
  //   }, delay);
  //   delay += 1000;
  //   });
