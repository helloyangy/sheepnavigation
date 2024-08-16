<template>
  <div :class="['weather-component', weatherClass]">
    <h2 v-if="location">{{ location }}的天气</h2>
    <!-- 仅在 weatherData 存在时显示图标 -->
    <img v-if="weatherData" :src="getIconPath(weatherData.icon)" alt="Weather Icon" width="64" height="64" />
    <p v-if="weatherData">温度：{{ weatherData.temp }}°C</p>
    <p v-if="weatherData">体感温度：{{ weatherData.feelsLike }}°C</p>
    <p v-if="weatherData">天气状况：{{ weatherData.text }}</p>
    <!-- <p v-if="weatherData">风向：{{ weatherData.windDir }}</p>
    <p v-if="weatherData">风力：{{ weatherData.windScale }}</p>
    <p v-if="weatherData">风速：{{ weatherData.windSpeed }} km/h</p>
    <p v-if="weatherData">相对湿度：{{ weatherData.humidity }}%</p> -->
    <p v-else-if="loading" class="loading">加载中...</p>
    <p v-else>加载天气数据失败，请检查网络连接或API密钥。</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';

const weatherApiKey = 'b44f0a5c81284440875b7d214b9097fb'; // 替换为你的和风天气API密钥
const amapKey = '9c3c88ec825f959eb4b51cbf44a8e978'; // 替换为你的高德API密钥

const weatherData = ref(null);
const loading = ref(true);
const location = ref(null); // 用于存储地点名称

const weatherClass = computed(() => {
  if (weatherData.value) {
    const condition = weatherData.value.text.toLowerCase();
    if (condition.includes('晴')) return 'sunny';
    if (condition.includes('阴')) return 'cloudy';
    if (condition.includes('雨')) return 'rainy';
    if (condition.includes('雪')) return 'snowy';
    // 可以添加更多的天气类型
  }
  return 'default'; // 默认背景
});

const fetchWeather = async (coordinates) => {
  try {
    const response = await axios.get('https://devapi.qweather.com/v7/weather/now', {
      params: {
        location: coordinates,
        key: weatherApiKey
      }
    });

    if (response.data && response.data.now) {
      weatherData.value = response.data.now;
      loading.value = false;
    } else {
      weatherData.value = null;
      loading.value = false;
    }
  } catch (error) {
    weatherData.value = null;
    loading.value = false;
  }
};

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      try {
        const amapResponse = await axios.get('https://restapi.amap.com/v3/geocode/regeo', {
          params: {
            location: `${longitude},${latitude}`, // 高德API要求经纬度顺序为：经度,纬度
            key: amapKey
          }
        });

        if (amapResponse.data.status === '1') {
          const addressComponent = amapResponse.data.regeocode.addressComponent;
          if (addressComponent) {
            const cityName = addressComponent.city || addressComponent.province || '未知地点';
            location.value = cityName;
            const coordinates = `${longitude},${latitude}`;
            fetchWeather(coordinates); // 使用经纬度查询天气
          } else {
            loading.value = false;
          }
        } else {
          loading.value = false;
        }

      } catch (amapError) {
        loading.value = false;
      }

    }, (error) => {
      loading.value = false;
    });
  } else {
    loading.value = false;
  }
};

const getIconPath = (iconCode) => {
  if (!iconCode) {
    return '/QWeather-Icons-1.6.0/icons/default.svg'; // 使用默认图标
  }
  return `/QWeather-Icons-1.6.0/icons/${iconCode}.svg`;
};

getLocation();
</script>

<style scoped>
.weather-component {
  padding: 20px;
  border-radius: 12px;
  max-width: 300px; /* 大屏幕上的最大宽度 */
  margin: auto;
  text-align: center;
  background: #ffffff; /* 默认背景 */
  background: linear-gradient(145deg, #ffffff, #f1f1f1);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  position: relative;
}

.weather-component::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: inherit;
  filter: blur(10px);
  z-index: -1;
  transition: background 0.3s ease;
}

.weather-component.sunny::before {
  background: linear-gradient(145deg, #ffeb3b, #ff9800); /* 晴天背景 */
}

.weather-component.cloudy::before {
  background: linear-gradient(145deg, #b0bec5, #90a4ae); /* 阴天背景 */
}

.weather-component.rainy::before {
  background: linear-gradient(145deg, #2196f3, #0d47a1); /* 雨天背景 */
}

.weather-component.snowy::before {
  background: linear-gradient(145deg, #e3f2fd, #bbdefb); /* 雪天背景 */
}

.weather-component.default::before {
  background: linear-gradient(145deg, #ffffff, #f1f1f1); /* 默认背景 */
}

.weather-component:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.weather-component h2 {
  margin-bottom: 12px;
  font-size: 1.5em;
  color: #333;
}

.weather-component p {
  margin: 8px 0;
  font-size: 1em;
  color: #555;
  border-bottom: 1px solid #eee;
  padding-bottom: 8px;
}

.weather-component p:last-child {
  border-bottom: none;
}

.loading {
  font-size: 1.1em;
  color: #007BFF;
  font-weight: bold;
}

@media (min-width: 600px) {
  .weather-component {
    max-width: 300px; /* 大屏幕上保持小卡片的宽度 */
    padding: 20px;
  }

  .weather-component h2 {
    font-size: 1.5em;
  }

  .weather-component p {
    font-size: 1em;
  }
}

@media (max-width: 600px) {
  .weather-component {
    max-width: 100%;
    padding: 15px;
  }

  .weather-component h2 {
    font-size: 1.3em;
  }

  .weather-component p {
    font-size: 0.9em;
  }
}
</style>

