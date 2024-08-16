<template>
  <nav ref="navbar" class="navbar">
    <div class="navbar__logo">
      <router-link to="/" class="logo-link">小羊导航站</router-link>
    </div>
    <div class="navbar__menu">
      <div class="navbar__menu-item" @click="toggleDropdown">
        分类
        <ul v-if="dropdownOpen" class="dropdown">
          <li v-for="category in categories" :key="category.id" class="dropdown-item">
            <router-link :to="category.path">{{ category.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      dropdownOpen: false,
      categories: [
        { id: 'home', name: '主页', path: '/' },
        { id: 'codeService', name: '接码', path: '/code-service' },
        { id: 'domainComparison', name: '域名比价', path: '/domain-comparison' },
        { id: 'ipaDownload', name: 'IPA下载', path: '/ipa-download' },
        { id: 'windowsDownload', name: 'Windows下载', path: '/windows-download' },
        { id: 'windowsActivation', name: 'Windows激活', path: '/windows-activation' },
      ],
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    handleScroll() {
      if (window.scrollY > 0) {
        this.$refs.navbar.classList.add('sticky');
      } else {
        this.$refs.navbar.classList.remove('sticky');
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
/* 样式重置 */
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 导航栏 */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-image: linear-gradient(to left, #6dd5ed, #d8b4fe);
  color: #ffffff;
  border: 2px solid #d0d0d0; /* 增加边框宽度和对比度 */
  border-radius: 10px; /* 调整圆角大小以配合线条风格 */
  box-shadow: 
    inset 0 0 3px rgba(255, 255, 255, 0.7), /* 内阴影 */
    0 4px 8px rgba(0, 0, 0, 0.2); /* 外阴影 */
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: rgba(109, 213, 237, 0.9); /* 稍微透明的背景色以适应渐变 */
}

.navbar::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  pointer-events: none; /* 防止伪元素影响交互 */
}

.navbar::after {
  content: '';
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  border-radius: 10px;
  pointer-events: none;
}

.navbar:hover {
  box-shadow: 
    0 5px 15px rgba(0, 0, 0, 0.3),
    inset 0 0 3px rgba(255, 255, 255, 0.7);
}

.navbar__logo {
  font-size: 24px;
  font-weight: bold;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}

.logo-link {
  color: #ffffff;
  text-decoration: none;
}

.navbar__menu-item {
  cursor: pointer;
  padding: 10px 15px;
  font-size: 16px;
  color: #ffffff;
  border-radius: 8px;
  background-color: #0056b3;
  border: 1px solid #004494;
  box-shadow: 
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 2px 2px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.navbar__menu-item:hover {
  background-color: #004494;
  border-color: #003d7c;
}

/* 下拉菜单 */
.dropdown {
  position: absolute;
  top: 100%; /* 保持在菜单项的正下方 */
  right: 0;
  background-color: #f0f0f0; /* 改为浅灰色，与导航栏背景形成对比 */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-top: 5px;
  list-style: none;
  padding: 5px 0;
  width: 200px;
  border: 1px solid #cccccc;
  z-index: 1000; /* 确保下拉菜单在导航栏之上 */
}

/* 下拉菜单项 */
.dropdown-item {
  margin: 0;
  padding: 0;
}

.dropdown-item a {
  color: #333;
  text-decoration: none;
  display: block;
  width: 100%;
  padding: 10px 15px;
  transition: background-color 0.3s ease;
  border-bottom: 1px solid #eaeaea;
  z-index: 99;
}

.dropdown-item a:hover {
  background-color: #e1e1e1; /* 悬停时的背景色变化 */
}

/* 确保下拉菜单在小屏幕上也能良好显示 */
@media (max-width: 768px) {
  .dropdown {
    width: 100%; /* 在小屏幕上全宽显示 */
  }
}

/* 响应式布局 */
@media (max-width: 768px) {
  .navbar__logo {
    font-size: 20px;
  }

  .navbar__menu-item {
    padding: 8px 12px;
    font-size: 14px;
  }

  .dropdown {
    width: 150px;
  }
}

@media (max-width: 480px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .navbar__menu-item {
    padding: 6px 10px;
  }

  .dropdown {
    width: 100%;
  }
}
</style>
