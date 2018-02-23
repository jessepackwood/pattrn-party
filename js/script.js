const showMobileTab = (event) => {
$(event.target).toggleClass('active')
$(event.target).next().toggleClass('mobile-hide')
}

const showMobileHeader = () => {
  console.log(event.target)
  $('nav').find('.nav-link-container').toggleClass('nav-hidden')
}

const showTab = (event) => {
  $('.active').removeClass('active')
  $(event.target).addClass('active')
  $('.card').addClass('hide')
  $(`.card-${$(event.target).attr('id')}`).removeClass('hide')
}


$('.tab').on('click', showTab)
$('.mobile-tab').on('click', showMobileTab)
$('.menu-button').on('click', showMobileHeader)