<template>
  <header class="main-header"><a href="#" class="logo"><span class="logo-mini">TF</span><span
    class="logo-lg">TuFanInc</span></a>
    <nav class="navbar navbar-static-top"><a href="#" data-toggle="offcanvas" role="button" class="sidebar-toggle"><span
      class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span
      class="icon-bar"></span></a>
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <li class="dropdown messages-menu"><a href="/" target="_blank">网站首页</a></li>
          <li class="dropdown messages-menu"><a href="javascript:void(0);" class="delete-one">中文/English</a></li>
          <li class="dropdown user user-menu"><a href="javascript:void(0);" data-toggle="dropdown"
                                                 class="dropdown-toggle"><img
            src="/api/download/64c802693adb72e8f2147b780d93e7459ccd60a6.jpg" class="user-image"> <span
            class="hidden-xs">Y-先生</span></a>
            <ul class="dropdown-menu">
              <li class="user-header"><img src="/api/download/64c802693adb72e8f2147b780d93e7459ccd60a6.jpg"
                                           class="img-circle">
                <p>Y-先生
                  <small>超级管理员</small>
                </p>
              </li>
              <li class="user-footer">
                <div class="pull-left"><a href="/admin/user/?id=1" class="btn btn-default btn-flat">
                  个人设置</a></div>
                <div class="pull-right"><a href="javascript:void(0)" class="btn btn-default btn-flat">
                  退出</a></div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>

</template>

<script>
  export default {
    name: "layout-head"
  }
</script>
