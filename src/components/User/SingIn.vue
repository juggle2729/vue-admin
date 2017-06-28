<template>
  <section id="content">
    <div class="admin-form theme-info">
      <div class="row mb15 table-layout">
        <div class="col-xs-6 va-m pln index-links">
          <a href="/" title="返回主页">一元购英文版控制台</a>
        </div>

        <div class="col-xs-6 text-right va-b pr5">
          <div class="login-links">
            <a href="user.html#signup/" class="" title="注册">注册</a>
          </div>
        </div>
      </div>

      <div class="panel panel-primary heading-border br-n">
        <div class="panel-heading">
          <span class="panel-title"><i class="fa fa-sign-in"></i>登录</span>
        </div>

        <form method="post" action="/admin/user/login/" id="form-signin" novalidate="novalidate">
          <div class="panel-body p25 pt10">
            <div class="col-sm-12">
              <div class="section">
                <label for="email" class="field-label text-muted fs18 mb10">邮箱名</label>
                <label for="email" class="field prepend-icon">
                  <input type="text" name="email" id="email" class="gui-input" placeholder="输入邮箱..." aria-required="true" aria-invalid="true">
                  <label for="email" class="field-icon"><i class="fa fa-user"></i>
                  </label>
                </label>
              </div>

              <div class="section">
                <label for="password" class="field-label text-muted fs18 mb10">密码</label>
                <label for="password" class="field prepend-icon">
                  <input type="password" name="password" id="password" class="gui-input" placeholder="输入密码..." aria-required="true" aria-invalid="true">
                  <label for="password" class="field-icon"><i class="fa fa-lock"></i>
                  </label>
                </label>
              </div>
            </div>
          </div>
          <div class="panel-footer clearfix p10 ph15">
            <button type="submit" class="button btn-primary mr10 pull-right">登录</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>

</script>

<style>

</style>
