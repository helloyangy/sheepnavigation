<template>
  <div class="code-service container my-4">
    <h1 class="text-center mb-4">Windows下载</h1>
    <p class="text-center mb-4">这里是Windows下载的内容。</p>
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
          name: 'hellowindows',
          logo: '/images/hellowindows.png',
          url: 'https://hellowindows.cn/',
          description: '一个专注于提供精校、完整、极致的Windows系统下载服务的仓储站，网站托管于Github。'
        },
        {
          name: 'MSDN - 山己几子木',
          logo: '/images/MSDN.png',
          url: 'https://msdn.sjjzm.com/',
          description: 'MSDN - 山己几子木，提供Windows 11、Windows 10等不同版本，细分非常详细，包括消费版和商业版。'
        },
        {
          name: 'MSDN系统库',
          logo: '/images/xitongku.png',
          url: 'https:xitongku//www..com/',
          description: 'MSDN系统库这是一个致力于提供原版Windows生态服务的平台，提供Windows操作系统的下载服务。'
        },
        {
          name: 'ITELLYOU',
          logo: '/images/ITELLYOU.png',
          url: 'https://next.itellyou.cn/',
          description: 'NEXT, ITELLYOU是一个专注于提供原版软件下载的平台，包括windows镜像下载，linux镜像下载等。'
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