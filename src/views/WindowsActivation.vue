<template>
  <div class="code-service container my-4">
    <h1 class="text-center mb-4">Windows激活</h1>
    <p class="text-center mb-4">这里是Windows激活的内容。</p>
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
          name: 'HEU KMS Activator',
          logo: '/images/Windows11.png',
          url: 'https://github.com/zbezj/HEU_KMS_Activator/releases',
          description: '一款高效全能的 KMS/OEM 激活工具，适用于 Windows、Office 及 VL 版本，无需联网即可一键激活，支持 UEFI 的 KMS 激活工具。'
        },
        {
          name: '云萌windows10+激活工具',
          logo: '/images/Windows11.png',
          url: 'https://cmwtat.cloudmoe.com/cn.html',
          description: '这个工具声称可以一键免费终身激活 Windows 10 和 Windows 11，包括x86、x64和ARM64版本。'
        },
        {
          name: 'Microsoft Activation Scripts',
          logo: '/images/Windows11.png',
          url: 'https://github.com/massgravel/Microsoft-Activation-Scripts',
          description: '这个项目提供了一系列激活Windows和Office的脚本，使用了HWID、KMS38和在线KMS等激活方法'
        },
        {
          name: 'CMWTAT Digital Edition',
          logo: '/images/Windows11.png',
          url: 'https://github.com/TGSAN/CMWTAT_Digital_Edition',
          description: '这个项目提供了一个工具，可以激活Windows 10和Windows 11，使用数字许可证。它是用CSharp编写的，并且是开源的，这意味着用户可以查看和修改代码。'
        },
        {
          name: '沧水的KMS服务',
          logo: '/images/Windows11.png',
          url: 'https://kms.cangshui.net/',
          description: '这个服务提供了一种激活Windows和Office的方法，称为KMS激活。它通常用于批量激活，适用于企业环境中的多台计算机。'
        },
        {
          name: 'KMS一键激活windows/office',
          logo: '/images/Windows11.png',
          url: 'https://kms.cx/',
          description: '可以免费激活windows和office'
        },
        {
          name: 'windows系统一句命令激活',
          logo: '/images/Windows11.png',
          url: 'https://v0v.bid/',
          description: '页面简单，一句命令可以直接激活windows'
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