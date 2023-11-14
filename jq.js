$(function () {
  var container = $('#container')
  var list = $('#list')
  var buttons = $('#buttons span')
  var prev = $('#prev')
  var next = $('#next')
  var index = 1 //store image
  var len = 4
  var interval = 3000
  //time interval
  var timer

  function animate(offset) {
    var left = parseInt(list.css('left')) + offset
    if (offset > 0) {
      offset = '+=' + offset
    } else {
      offset = '-=' + Math.abs(offset)
    }
    list.animate({ left: offset }, 300, function () {
      if (left > -100 + '%') {
        list.css('left', -100 + '%' * len)
      }
      if (left < -100 + '%' * len) {
        list.css('left', -100 + '%')
      }
    })
  } //button active
  function showButton() {
    buttons
      .eq(index - 1)
      .addClass('on')
      .siblings()
      .removeClass('on')
  } // continue to play 
  function play() {
    timer = setTimeout(function () {
      next.trigger('click')
      play()
    }, interval)
  } //stop playing no clicking
  function stop() {
    clearTimeout(timer)
  } // right click
  next.bind('click', function () {
    // if animated
    if (list.is(':animated')) {
      return
    } // if the last one
    if (index == 5) {
      index = 1
    } else {
      index += 1
    }
    animate(-600)
    showButton()
  }) // left click
  prev.bind('click', function () {
    // if animated
    if (list.is(':animated')) {
      return
    } // if the last one
    if (index == 1) {
      index = 5
    } else {
      index -= 1
    }
    animate(600)
    showButton()
  }) //small buttom clicking
  buttons.each(function () {
    $(this).bind('click', function () {
      // if animation playing
      if (list.is(':animated') || $(this).attr('class') == 'on') {
        return
      } 
      var myIndex = parseInt($(this).attr('index'))
      var offset = -600 * (myIndex - index)
      animate(offset)
      index = myIndex
      showButton()
    })
  })
  container.hover(stop, play)
  play()
})
