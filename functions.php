<?php

function image_tag($file, $url_only = false, $classes = null) {
  $url = "images/" . $file;
  $tag = '<img src="' . $url . '" ' . ($classes ? (' class="' . $classes . '"') : null) . ' />';
  echo $url_only ? $url : $tag;
}
function js_tag($file, $url_only = false) {
  $url = "js/" . $file;
  $tag = '<script src="' . $url . '"></script>';
   echo $url_only ? $url : $tag;
}


?>
