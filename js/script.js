const showMobileTab = (event) => {
$(event.target).toggleClass('active')
$(event.target).next().toggleClass('mobile-hide')
  // console.log(event.target)

// $('.card-info').removeClass('mobile-hide')
}

const showTab = (event) => {
  $('.active').removeClass('active')
  $(event.target).addClass('active')
  $('.card').addClass('hide')
  $(`.card-${$(event.target).attr('id')}`).removeClass('hide')
  // $(`${$(event.target).attr('id')}`).removeClass('hide')
}


$('.tab').on('click', showTab)
$('.mobile-tab').on('click', showMobileTab)
// $('.view-code').on('click', showCode)