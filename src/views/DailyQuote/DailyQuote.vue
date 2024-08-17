<template>
  <div class="daily-quote-card">
    <h2 class="section-title">每日一言</h2>
    <blockquote class="quote-content" v-html="dailyQuote.content"></blockquote>
  </div>
</template>

<script>
export default {
  name: 'DailyQuote',
  data() {
      return {
          dailyQuote: {
              content: '加载中...',
          }
      };
  },
  mounted() {
      this.fetchDailyQuote();
  },
  methods: {
      fetchDailyQuote() {
          fetch('https://v.api.aa1.cn/api/yiyan/index.php')
              .then(response => {
                  if (!response.ok) {
                      throw new Error('网络响应不正确');
                  }
                  return response.text();
              })
              .then(data => {
                  this.dailyQuote.content = data.trim(); 
              })
              .catch(error => {
                  console.error('获取每日一言失败:', error);
                  this.dailyQuote.content = '加载失败，请稍后重试';
              });
      }
  }
};
</script>

<style scoped>
/* 每日一言卡片样式 */
.daily-quote-card {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  max-width: 600px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
}

.daily-quote-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  background-color: #f8f8f8;
}

.section-title {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(255, 255, 255, 0.3);
}

.quote-content {
  font-size: 20px;
  color: #666;
  margin-bottom: 20px;
  font-style: italic;
  position: relative;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 -1px 0 rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .daily-quote-card {
    padding: 15px;
  }

  .section-title {
    font-size: 22px;
  }

  .quote-content {
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .daily-quote-card {
    margin: 10px;
  }

  .section-title {
    font-size: 20px;
  }

  .quote-content {
    font-size: 16px;
  }
}
</style>
