<template>
    <div class="daily-quote-card">
      <h2 class="section-title">每日一言</h2>
      <blockquote class="quote-content">
        <p>{{ dailyQuote.content }}</p>
        <p>{{ dailyQuote.chineseContent }}</p>
      </blockquote>
      <!-- 如果需要显示作者，可以添加以下行 -->
      <!-- <footer class="quote-author">—— {{ dailyQuote.author }}</footer> -->
    </div>
  </template>

<script>
export default {
    name: 'DailyQuote',
    data() {
        return {
            dailyQuote: {
                content: '加载中...',
                author: ''
            }
        };
    },
    mounted() {
        this.fetchDailyQuote();
    },
    methods: {
    fetchDailyQuote() {
        fetch('/api/yiyan') // 使用代理路径
            .then(response => {
                if (!response.ok) {
                    throw new Error('网络响应不正确');
                }
                return response.text();
            })
            .then(data => {
                // 去除尾部的分隔符和空格
                const trimmedData = data.trim();
                // 根据 '/&/' 分隔符分割数据
                const separator = '/&/';
                const parts = trimmedData.split(separator);

                // 检查分割后的数据是否包含至少两部分
                if (parts.length >= 2) {
                    // 第一部分为英文，第二部分为中文
                    this.dailyQuote.content = parts[0].trim(); // 英文内容，去除可能的首尾空格
                    this.dailyQuote.chineseContent = parts[1].trim(); // 中文内容，去除可能的首尾空格
                } else {
                    // 如果数据格式不正确，设置默认消息
                    this.dailyQuote.content = '数据格式错误';
                    this.dailyQuote.chineseContent = '';
                    console.error('数据格式无效:', data);
                }
            })
            .catch(error => {
                // 打印错误信息到控制台，并设置错误消息
                console.error('获取每日一言失败:', error);
                this.dailyQuote.content = '加载失败，请稍后重试';
                this.dailyQuote.chineseContent = '';
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 轻微的立体阴影 */
  margin: 20px auto;
  max-width: 600px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
}

/* 当鼠标悬停时增加立体效果 */
.daily-quote-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* 鼠标悬停时更深的阴影 */
  background-color: #f8f8f8; /* 轻微改变背景色，增加层次感 */
}

/* 每日一言标题 */
.section-title {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(255, 255, 255, 0.3);
}

/* 引用内容 */
.quote-content {
  font-size: 20px;
  color: #666;
  margin-bottom: 20px;
  font-style: italic;
  position: relative;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 -1px 0 rgba(255, 255, 255, 0.1);
}

/* 作者信息 */
.quote-author {
  font-size: 16px;
  color: #888;
  margin-top: 10px;
  border-top: 1px solid #eaeaea;
  padding-top: 10px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}

/* 响应式设计 */
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

  .quote-author {
    font-size: 14px;
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