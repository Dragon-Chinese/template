/*
 * @Author: luyao
 * @Date: 2021-10-02 19:58:02
 * @LastEditTime: 2021-10-10 16:56:31
 * @Description:
 * @LastEditors: luyao
 * @FilePath: /vue3-tsx-vite-admin/src/views/home/index.tsx
 */

import './index.less'
import { defineComponent, KeepAlive, ref, watch, reactive } from "vue-demi";
import { useRouter } from "vue-router";
import { getMenuTree, checkFull, versionUpdated } from "@/utils/index";
import { Swiper } from 'swiper';
// import { Autoplay, Pagination, Navigation, Scrollbar } from 'swiper'
import 'swiper/css/pagination' // 轮播图底面的小圆点
import 'swiper/css/navigation' // 轮播图两边的左右箭头
import 'swiper/css';
import tel from "@/assets/tel.png";
import tch from "@/assets/tch.png";
import bgp from "@/assets/bgp.png";
import kymf from "@/assets/kymf.png";
import jlqz from "@/assets/jlqz.jpg";
import gj from "@/assets/gj.jpg";
import gwmb from "@/assets/gwmb.png";
import gwnjj from "@/assets/gwnjj.jpg";
import banner from "@/assets/banner.png";
import { onMounted } from 'vue';

export default defineComponent({
    name: 'home',
    setup() {
        const router = useRouter();
        let meta = ref({});
        let verUpdate: any = ref(false);
        // 焦炉维修材料小图
        const cokeOvenmaintenance = ref([
            {
                src: tch,
                title: '陶瓷焊补料',
                id: 0
            },
            {
                src: bgp,
                title: '半干喷补料',
                id: 1
            },
            {
                src: kymf,
                title: '空压密封料',
                id: 2
            },
            {
                src: jlqz,
                title: '焦炉砌筑料',
                id: 3
            },
            {
                src: gj,
                title: '灌浆料',
                id: 4
            },
            {
                src: gwmb,
                title: '高温抹补料',
                id: 5
            },
            {
                src: gwnjj,
                title: '高温粘结剂',
                id: 6
            }
        ]);
        // 材料展示大图
        const topImgSrc = ref({
            src: '/src/assets/tch.png',
            title: '陶瓷焊补料',
            id: 0
        });
        // 左右切换按钮是否显示
        const isShowNavigationBtn = ref(false);

        watch(() => [router.currentRoute.value, router.currentRoute.value.meta], (val) => {
            meta.value = val;
            hasVersionUpdated()
        })



        async function hasVersionUpdated() {
            verUpdate.value = await versionUpdated();
        }

        onMounted(() => {
            var mySwiper = new Swiper('.swiper', {
                autoplay: {
                    disableOnInteraction: false,
                    delay: 3000 //3秒切换一次
                },//可选选项，自动滑动
                // loop: true,
                // navigation: {
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev',
                // },
            })

            //如果你初始化时没有定义Swiper实例，后面也可以通过Swiper的HTML元素来获取该实例
            new Swiper('.swiper')
            var mySwiper = document.querySelector('.swiper').swiper
            mySwiper.slideNext();
        })
        // 点击切换图片
        const changeImg = (itemImg: any) => {
            topImgSrc.value = itemImg;
        }
        // 左按钮向前切换图片
        const changePrev = () => {
            if (topImgSrc.value.id <= 0) return;
            topImgSrc.value = cokeOvenmaintenance.value[topImgSrc.value.id - 1];
        }
        // 右按钮向后切换图片
        const changeNext = () => {
            if (topImgSrc.value.id >= 6) return;
            topImgSrc.value = cokeOvenmaintenance.value[topImgSrc.value.id + 1];
        }
        // 鼠标划入显示左右切换按钮
        const changeMouseover = () => {
            isShowNavigationBtn.value = true;
        }
        // 鼠标划出隐藏左右切换按钮
        const changeMouseout = () => {
            isShowNavigationBtn.value = false;
        }


        return () => (
            <el-container class='el-container'>
                <el-container>
                    <div class='wrapper'>
                        <div class='sitetips-title'>您的网站试用资格已过期。</div>
                        <div class="header-title">
                            <span class="title-left">临汾鑫达耐火材料有限公司</span>
                            <div class="title-right">
                                <img src={tel} alt="" />
                                <span class="tel">
                                    <span>咨询热线</span>
                                    <span>15333071118</span>
                                </span>
                            </div>
                        </div>
                        <div class='nav-tab'>
                            <p class="tab">
                                <span>首页</span>
                            </p>
                        </div>
                    </div>
                    <div class='wrapper'>
                        <div class='content'>
                            <div class="swiper">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">slider1</div>
                                    <div class="swiper-slide">slider2</div>
                                    <div class="swiper-slide">slider3</div>
                                </div>
                                {/* <div class="swiper-button-prev"></div>
                            <div class="swiper-button-next"></div> */}
                            </div>
                            <div class="materialList">
                                <div class="materialTab">
                                    <span>焦炉维修材料</span>
                                    <span>陶瓷焊补料</span>
                                    <span>半干喷补料</span>
                                    <span>空压密封料</span>
                                    <span>焦炉砌筑料</span>
                                    <span>灌浆料</span>
                                    <span>高温抹补料</span>
                                    <span>高温粘结剂</span>
                                </div>
                                <div class="materialDetail" onMouseover={changeMouseover} onMouseout={changeMouseout}>
                                    <div class="topImg">
                                        <img src={topImgSrc.value.src} alt="" />
                                        <p class="title">{topImgSrc.value.title}</p>
                                        <div class={!isShowNavigationBtn.value ? 'noneBtn' : 'navigationBtn'}>
                                            <div class="prev" onClick={changePrev}>{'<'}</div>
                                            <div class="next" onClick={changeNext}>{'>'}</div>
                                        </div>
                                    </div>
                                    <div class="bottomImg">
                                        {
                                            cokeOvenmaintenance && cokeOvenmaintenance.value.map(item => {
                                                return <img src={item.src} alt="" class={(topImgSrc.value.src === item.src) ? 'actived' : ''} onClick={() => changeImg(item)} />
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div class="banner">
                                <img src={banner} alt="" />
                                <div class="text">
                                    <b>优异品质 合理的价格 完善的售后</b>
                                    <span>√ 服务安全 &nbsp; &nbsp; √ 方案优惠 &nbsp; &nbsp; √ 管理严格 &nbsp; &nbsp; √ 施工安全</span>
                                </div>
                            </div>
                            <div class="refractoryBricksList">
                                <div class="refractoryBricksTab">
                                    <span>耐火砖Refractory bricks(1)</span>
                                    <span>耐火砖2000℃以上</span>
                                    <span>耐火砖1770℃</span>
                                    <span>耐火砖1580℃</span>
                                    <span>轻质耐火砖</span>
                                    <span>粘土耐火砖</span>
                                    <span>高铝耐火砖</span>
                                </div>
                                <div class="refractoryBricksImgs">
                                </div>
                            </div>
                        </div>
                    </div>
                </el-container>
            </el-container >
        )
    }
})