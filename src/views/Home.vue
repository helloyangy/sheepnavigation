<template>
  <div class="home">
    <header class="home-header">
      <h1 class="home-title">欢迎访问主页</h1>
      <p class="home-intro">点击分类查看导航栏详情。</p>
      <WeatherComponent />
      <DailyQuote />
    </header>
    <main class="home-content">
      <section class="recommendations">
        <h2 class="section-title">推荐内容</h2>
        <div class="cards">
          <div class="card">
            <a href="https://top.smallsheeps.cn/" class="card-link">
              <h3 class="card-title">小羊网站</h3>
              <p class="card-description">小羊网站成立于2023年，是一个提供技术教程和软件资源的网站。</p>
            </a>
          </div>
          <div class="card">
            <a href="https://tools.smallsheeps.uk/" class="card-link">
              <h3 class="card-title">小羊工具</h3>
              <p class="card-description">免费站长工具，视频去水印，QQ等级查看等。</p>
            </a>
          </div>
          <div class="card">
            <a href="https://smallsheeps-1319590963.cos.ap-guangzhou.myqcloud.com/xiaoyang/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7.jpg"
              class="card-link">
              <h3 class="card-title">公众号</h3>
              <p class="card-description">小羊文章——微信公众号，提供热门教程，网络资源。</p>
            </a>
          </div>
          <div class="card">
            <a href="https://xytool.asia/" class="card-link">
              <h3 class="card-title">小程序</h3>
              <p class="card-description">小羊多功能工具箱——微信小程序，天气查询，油价查询等。</p>
            </a>
          </div>
          <div class="card">
            <a href="https://github.com/helloyangy/sheepnavigation" class="card-link">
              <h3 class="card-title">开源项目地址</h3>
              <p class="card-description">本导航站开源，使用veu3和bootstrap构建</p>
            </a>
          </div>
        </div>
      </section>
    </main>
    <footer class="home-footer">
      <p>© 2024 网站名称. 小羊网站保留所有权利。<br>备案号：</p>
    </footer>
  </div>
  <!-- 如果需要在特定页面添加播放器，确保容器ID与CDN脚本中的ID匹配 -->
  <div id="gui-MusicPlayer" data-cdnName="https://y.cenguigui.cn/js"></div>
</template>

<script>
import WeatherComponent from '@/views/WeatherComponent/WeatherComponent.vue';
import DailyQuote from '@/views/DailyQuote/DailyQuote.vue';

export default {
  name: 'Home',
  components: {
    WeatherComponent,
    DailyQuote,
  },
}
</script>

<style scoped>
/* 页面整体布局 */
.home {
  font-family: Arial, sans-serif;
  color: #333;
  background-color: #f4f4f4;
  padding: 20px;
}

/* 页眉 */
.home-header {
  text-align: center;
  margin-bottom: 20px;
}

.home-title {
  font-size: 36px;
  color: #007bff;
  margin: 0;
}

.home-intro {
  font-size: 18px;
  color: #555;
}

/* 主内容区 */
.home-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* 卡片容器 */
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  /* 居中显示卡片 */
}

/* 卡片 */
.card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: calc(33.333% - 20px);
  text-align: left;
  /* 使卡片内文本左对齐 */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* 推荐内容部分 */
.recommendations {
  margin-top: 20px;
}

.section-title {
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

/* 卡片 */
.card {
  background-color: #ffffff;
  border: 2px solid #d0d0d0; /* 增加边框宽度和对比度 */
  border-radius: 10px; /* 调整圆角大小以配合线条风格 */
  box-shadow: 
    inset 0 0 3px rgba(255, 255, 255, 0.7), /* 内阴影 */
    0 4px 8px rgba(0, 0, 0, 0.2); /* 外阴影 */
  padding: 20px;
  width: calc(33.333% - 40px); /* 调整宽度以适应更宽的边框 */
  text-align: left;
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
  position: relative;
  overflow: hidden; /* 确保伪元素不超出边框 */
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid #e8e8e8; /* 添加一个内部边框 */
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  pointer-events: none; /* 防止伪元素影响交互 */
}

.card::after {
  content: '';
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  border: 1px solid #f5f5f5; /* 另一个内部边框，可调整颜色以适应设计 */
  border-radius: 8px;
  pointer-events: none;
}

.card:hover {
  box-shadow: 
    0 5px 15px rgba(0, 0, 0, 0.3),
    inset 0 0 3px rgba(255, 255, 255, 0.7);
  border-color: #c0c0c0; /* 悬停时改变边框颜色以增强立体感 */
}

.card-link {
  text-decoration: none;
  color: inherit;
}

.card-title {
  font-size: 22px;
  color: #007bff;
  margin: 0 0 10px;
}

.card-description {
  font-size: 16px;
  color: #666;
}

/* 页脚 */
.home-footer {
  text-align: center;
  margin-top: auto;
  padding: 20px;
  background-image: linear-gradient(to right, #6dd5ed, #d8b4fe);
  color: #ffffff;
  border: 1px solid #c0c0c0; /* 清晰的边框 */
  border-radius: 8px;
  box-shadow: 
    inset 0 -1px 0 rgba(0, 0, 0, 0.2), /* 下方内阴影 */
    0 4px 8px rgba(0, 0, 0, 0.3), /* 外部阴影 */
    inset 0 1px 0 rgba(255, 255, 255, 0.2); /* 上方内阴影 */
  width: calc(100% - 40px);
  background-origin: border-box;
  background-clip: content-box;
  position: relative; /* 为伪元素定位 */
  margin: 0 auto; /* 上下外边距为0，左右外边距自动调整以居中 */
}


.home-footer::before,
.home-footer::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 5px;
  border-radius: 8px;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.5), transparent 70%);
}

.home-footer::before {
  left: -5px;
}

.home-footer::after {
  right: -5px;
}

/* 媒体查询：平板和小型笔记本电脑 */
@media (max-width: 1024px) {
  .card {
    width: calc(50% - 20px);
    /* 两列布局 */
  }
}

/* 媒体查询：手机和小型平板 */
@media (max-width: 768px) {
  .card {
    width: 100%;
    /* 单列布局 */
  }
}

@media (max-width: 768px) {
  .home-content {
    padding: 20px;
    /* 调整内边距以适应较小屏幕 */
  }

  .cards {
    justify-content: center;
    /* 居中显示卡片 */
  }

  .card {
    width: calc(100% - 40px);
    /* 单列布局，减去外边距宽度 */
    margin: 10px;
    /* 添加外边距以避免卡片接触到屏幕边缘 */
  }
}

@media (max-width: 480px) {
  .home-title {
    font-size: 24px;
  }

  .home-intro {
    font-size: 14px;
  }

  .section-title {
    font-size: 22px;
  }

  .card-title {
    font-size: 18px;
  }

  .card-description {
    font-size: 14px;
  }
}
</style>