let $imgBox = $('#imgBox'),
  $img = $imgBox.children('img'),
  $window = $(window);

// jquery 中的事件绑定，支持多事件绑定
$window.on('load scroll', function () {
  if ($img.attr('isLoad') === 'true') return; // => 加载过之后，就不用加载了

  let $A = $imgBox.outerHeight() + $imgBox.offset().top,
    $B = $window.outerHeight() + $window.scrollTop();
  if ($A <= $B) {
    $img.attr('src', $img.attr('data-img'));
    $img.on('load', function () {
      // => 加载成功
      $img.css('display','block');
    });
    $img.attr('isLoad', true); // => attr 存储的自定义属性值，都是字符串格式 'true'
  }
});
