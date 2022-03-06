<?php
// @codingStandardsIgnoreFile
header('Content-type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
$url = 'https://note.com/api/v2/creators/yama_to_web/contents?kind=note&page=1';
$respose = file_get_contents($url);

$data = json_decode($respose, true);
$articles = $data['data']['contents'];
date_default_timezone_set('Asia/Tokyo');

$result = array_map(function ($val) {
  $filteredVal = array_filter($val, 'Filter_keys', ARRAY_FILTER_USE_KEY);
  $filteredVal['publishAt'] = date('D, M j Y G:i', strtotime($filteredVal['publishAt']));
  if (!$filteredVal['eyecatch']) {
    return false;
  }
  return $filteredVal;
}, $articles);

echo json_encode($result, JSON_UNESCAPED_UNICODE);

function Filter_keys($val)
{
  $keys = ['name', 'likeCount', 'publishAt', 'eyecatch', 'body', 'noteUrl'];
  return in_array($val, $keys);
}
