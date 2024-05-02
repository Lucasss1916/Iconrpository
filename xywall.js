# 重写规则配置片段包含若干条重写规则，并可以包含若干作用于 MitM 的主机名；可通过资源引用的方式使用。
# 片段文件将保存在 Quantumult X 目录下的 Profiles 子目录中。
# 样例可参见 https://raw.githubusercontent.com/crossutility/Quantumult-X/master/sample-import-rewrite.snippet
 
 
 
;^http://example.com/resource1/4/ url reject
[rewrite_local]
https://sdk.xiangyubizhi.com/(v2/front/photo/getOne|v2/front/member/info) url script-response-body xywall.js
***********************
[mitm]
hostname = sdk.xiangyubizhi.com




*/
var body = $response.body
 .replace(/"vip":\s*\d/g, '"vip":1')
  .replace(/"vipName":\s*\w+/g, `"vipName":"永久会员"`)
  .replace(/"endTime":\s*\w+/g, '"endTime":"2099-12-12"')
  .replace(/false/g, "true");
$done({ body });！