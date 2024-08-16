<template>
  <div class="code-service container my-4">
    <h1 class="text-center mb-4">域名比价</h1>
    <p class="text-center mb-4">这里是域名比价的内容。</p>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col" v-for="service in services" :key="service.name">
        <div class="card shadow">
          <img :src="service.logo" class="card-img-left" :alt="service.name">
          <div class="card-body">
            <h2 class="card-title">{{ service.name }}</h2>
            <p class="card-text">{{ service.description }}</p>
            <a :href="service.url" target="_blank" rel="noopener noreferrer" class="btn btn-primary">访问网站</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CodeService',
  data() {
    return {
      services: [
        {
          name: '哪煮米',
          logo: '/images/nazhumi-log.png',
          url: 'https://www.nazhumi.com/',
          description: '哪煮米是一个提供域名比价服务的网站，特色在于由8位阿姨手工更新数据，确保信息的精准与实时。'
        },
        {
          name: 'tld-list',
          logo: '/images/tld-list-log.png',
          url: 'https://zh-hans.tld-list.com/',
          description: 'tld-list允许用户比较来自不同注册商的3485个域名扩展的价格，并且价格信息每8分钟更新一次，确保用户获取到最新的市场数据。'
        },
        {
          name: 'namebeta',
          logo: '/images/namebeta-log.png',
          url: 'https://namebeta.com/',
          description: 'namebeta是一个域名服务平台，旨在激发用户的域名创意。'
        },
        {
          name: 'domcomp',
          logo: '/images/domcomp-log.png',
          url: 'https://www.domcomp.com/',
          description: 'domcomp是一个提供域名可用性检查和价格比较服务的网站。'
        },
        {
          name: 'tldes',
          logo: '/images/tldes-log.png',
          url: 'https://tldes.com/com',
          description: 'tldes是一个专门提供.com域名注册、续费和转移服务的网站，它允许用户比较来自136个注册商的价格。'
        },
      ]
    }
  }
}
</script>

<style scoped>
/* 引入字体和图标库（如果需要） */
@import url('https://fonts.googleapis.com/css?family=Lato:400,700');
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

/* 基本样式 */
body {
  font-family: 'Lato', sans-serif;
}

/* 卡片图片样式 */
.card-img-left {
  object-fit: cover;
  width: 100px;
  /* 调整图片宽度 */
  height: 100px;
  /* 调整图片高度 */
  border-radius: 50%;
  float: left;
  /* 图片左浮动 */
  margin-right: 20px;
  /* 与文本保持间隔 */
}

/* 卡片样式 */
.card {
  border: none;
  border-radius: 1rem;
  background: #fff;
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    inset 0 -1px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid #ccc;
  padding: 20px;
  position: relative;
  overflow: hidden;
}

/* 按钮样式 */
.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}

/* 卡片样式，添加了 :hover 伪类 */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  /* 平滑的变换和阴影效果 */
  transform: translateY(0);
  /* 使 translate 动画生效 */
  cursor: pointer;
  /* 改变鼠标悬停时的光标样式 */
}

.card:hover {
  transform: translateY(-5px) scale(1.02);
  /* 鼠标悬停时卡片上移并放大 */
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  /* 鼠标悬停时更深的阴影 */
}

/* 按钮悬停效果 */
.btn-primary:hover {
  opacity: 0.9;
  /* 鼠标悬停时按钮透明度变化 */
}

/* 响应式布局 */
@media (max-width: 768px) {
  .card-img-left {
    width: 80px;
    /* 调整图片宽度 */
    height: 80px;
    /* 调整图片高度 */
  }

  .card-body {
    display: block;
    /* 堆叠文本内容 */
  }
}

@media (max-width: 480px) {
  .card-img-left {
    width: 60px;
    /* 调整图片宽度 */
    height: 60px;
    /* 调整图片高度 */
  }
}
</style>