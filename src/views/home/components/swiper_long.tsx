import { computed, defineComponent, inject } from "vue-demi";
import './header.less'
import { Fold, Expand } from '@element-plus/icons'
import { useStore } from "vuex";
import { Swiper } from 'swiper';
import l1 from '@/assets/l1.png'
import l2 from '@/assets/l2.png'
import l3 from '@/assets/l3.png'
import l4 from '@/assets/l4.png'
import l5 from '@/assets/l5.png'
import l6 from '@/assets/l6.png'
import { onMounted, ref } from "vue";
import { Autoplay } from 'swiper/modules';
Swiper.use([Autoplay]);
/*
 * @Author: luyao
 * @Date: 2021-10-02 22:39:51
 * @LastEditTime: 2021-10-03 22:13:06
 * @Description:
 * @LastEditors: luyao
 * @FilePath: /m-dmm的副本/src/views/home/components/header.tsx
 */

export default defineComponent({
    name: 'Long',
    setup() {
        const swiperInstance = ref();
        const list = ref([
            {
                src: l1
            },
            {
                src: l2
            },
            {
                src: l3
            },
            {
                src: l4
            },
            {
                src: l5
            },
            {
                src: l6
            },
        ])

        // 在组件挂载时初始化 Swiper
        onMounted(() => {
            // 这里的 swiperOptions 是 Swiper 的配置选项，根据你的需求进行配置
            const swiperOptions = {
                slidesPerView: 5,
                spaceBetween: 60,
                loop: true,
                speed: 5000, //滚动速度
                freeMode: true,
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false, //就算触摸了也继续滚动
                    loopPreventsSlide: true
                },
                // autoplay: false
            };

            swiperInstance.value = new Swiper('.long', swiperOptions);
        });

        return () => (
            <div class="swiper-container long" dir="rtl">
                <div class="swiper-wrapper">
                    {list.value.map(item => {
                        return<div class="swiper-slide">
                            <img src={item.src} alt="" />
                        </div>
                    }) }
                </div>
            </div>
        )
    }
})