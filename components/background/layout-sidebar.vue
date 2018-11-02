<template>
  <aside class="main-sidebar">
    <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 240.008px;">
      <section class="sidebar" style="height: 240.008px; overflow: hidden; width: auto;">
        <div class="user-panel">
          <div class="pull-left image"><img class="img-circle"
                                            data-src="/api/download/64c802693adb72e8f2147b780d93e7459ccd60a6.jpg"
                                            src="/api/download/64c802693adb72e8f2147b780d93e7459ccd60a6.jpg"
                                            lazy="loaded"></div>
          <div class="pull-left info"><p>Y-先生</p> <a href="#"><i class="fa fa-circle text-success"></i>在线</a></div>
        </div>
        <form action="#" method="get" class="sidebar-form">
          <div class="input-group"><input type="text" placeholder="搜索" class="form-control"> <span
            class="input-group-btn"><button type="submit" name="search" class="btn btn-flat"><i
            class="fa fa-search"></i></button></span></div>
        </form>
        <ul class="sidebar-menu">
          <li class="header">菜单</li> <!---->
          <li class=""><a href="/admin" class="router-link-active"><i class="fa fa-home"></i><span>后台首页</span> <!---->
          </a> <!----></li>
          <li class="treeview"><a href="/admin/index" class="router-link-exact-active router-link-active"><i
            class="fa fa-file-text"></i><span>文章管理</span> <span class="pull-right-container"><i
            class="fa fa-angle-left pull-right"></i></span></a>
            <ul class="treeview-menu" style="display: none;">
              <li class=""><a href="/admin/article/category/index" class=""><i
                class="fa fa-columns"></i><span>文章分类</span> <!----></a> <!----></li><!---->
              <li class=""><a href="/admin/article/index" class=""><i class="fa fa-file-text-o"></i><span>文章列表</span>
                <!----></a> <!----></li><!---->
              <li class=""><a href="/admin/article/model/index" class=""><i
                class="fa fa-list-alt"></i><span>文章模型管理</span> <!----></a> <!----></li><!----></ul>
          </li>
          <li class="treeview"><a href="/admin/index" class="router-link-exact-active router-link-active"><i
            class="fa fa-users"></i><span>用户管理</span> <span class="pull-right-container"><i
            class="fa fa-angle-left pull-right"></i></span></a>
            <ul class="treeview-menu">
              <li class=""><a href="/admin/user/index" class=""><i class="fa fa-user-o"></i><span>用户列表</span> <!---->
              </a> <!----></li><!---->
              <li class=""><a href="/admin/user/auth_group/index" class=""><i class="fa fa-vcard"></i><span>角色管理</span>
                <!----></a> <!----></li><!----><!---->
              <li class=""><a href="/admin/user/auth_rule/index" class=""><i
                class="fa fa-user-circle"></i><span>角色节点列表</span> <!----></a> <!----></li><!----></ul>
          </li>
          <li class="treeview"><a href="/admin/index" class="router-link-exact-active router-link-active"><i
            class="fa fa-comments"></i><span>消息管理</span> <span class="pull-right-container"><i
            class="fa fa-angle-left pull-right"></i></span></a>
            <ul class="treeview-menu">
              <li class=""><a href="/admin/leaveWord/index" class=""><i class="fa fa-comment-o"></i><span>留言列表</span>
                <!----></a> <!----></li>
              <li class=""><a href="/admin/arc_comment/index" class=""><i
                class="fa fa-comments-o"></i><span>文章评论列表</span> <!----></a> <!----></li><!----></ul>
          </li>
          <li class="treeview"><a href="/admin/index" class="router-link-exact-active router-link-active"><i
            class="fa fa-gear"></i><span>系统管理</span> <span class="pull-right-container"><i
            class="fa fa-angle-left pull-right"></i></span></a>
            <ul class="treeview-menu">
              <li class=""><a href="/admin/config/index" class=""><i class="fa fa-gears"></i><span>系统配置字段</span> <!---->
              </a> <!----></li><!---->
              <li class=""><a href="/admin/config/site" class=""><i class="fa fa-desktop"></i><span>站点配置</span> <!---->
              </a> <!----></li>
            </ul>
          </li>
          <li class="treeview"><a href="/admin/index" class="router-link-exact-active router-link-active"><i
            class="fa fa-wrench"></i><span>站长工具</span> <span class="pull-right-container"><i
            class="fa fa-angle-left pull-right"></i></span></a>
            <ul class="treeview-menu">
              <li class=""><a href="/admin/tool/login_log/index" class=""><i
                class="fa fa-location-arrow"></i><span>登录日志</span> <!----></a> <!----></li>
              <li class=""><a href="/admin/tool/modules/index" class=""><i class="fa fa-modx"></i><span>模块分类</span>
                <!----></a> <!----></li>
              <li class=""><a href="/admin/tool/flink/index" class=""><i class="fa fa-link"></i><span>友情链接</span>
                <!----></a> <!----></li>
              <li class=""><a href="/admin/tool/music/index " class=""><i class="fa fa-music"></i><span>音乐管理</span>
                <!----></a> <!----></li>
            </ul>
          </li>
          <li class="treeview"><a href="/admin/index" class="router-link-exact-active router-link-active"><i
            class="fa fa-database"></i><span>数据库管理</span> <span class="pull-right-container"><i
            class="fa fa-angle-left pull-right"></i></span></a>
            <ul class="treeview-menu">
              <li class=""><a href="/admin/database/index" class=""><i class="fa fa-list"></i><span>数据库列表</span> <!---->
              </a> <!----></li>
              <li class=""><a href="/admin/database/reset" class=""><i class="fa fa-rotate-left"></i><span>还原数据库</span>
                <!----></a> <!----></li>
            </ul>
          </li><!----><!----></ul>
      </section>
      <div class="slimScrollBar"
           style="background: rgba(0, 0, 0, 0.2); width: 3px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px; height: 120.755px;"></div>
      <div class="slimScrollRail"
           style="width: 3px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div>
    </div>
  </aside>
</template>

<script>
  export default {
    name: "layout-sidebar"
  }
</script>
