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
import 'swiper/swiper-bundle.css';
import { ArrowLeftBold, ArrowRightBold } from '@element-plus/icons'
// import { Swiper, SwiperSlide } from 'swiper/react';
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
import nh from "@/assets/nh.png";
import gz from "@/assets/gz.png";
import nhz1 from "@/assets/nhz1.png";
import nhz2 from "@/assets/nhz2.png";
import nhz3 from "@/assets/nhz3.png";
import nhz4 from "@/assets/nhz4.png";
import nhz5 from "@/assets/nhz5.png";
import nhz6 from "@/assets/nhz6.png";
import jzl1 from "@/assets/jzl1.png";
import jzl2 from "@/assets/jzl2.png";
import jzl3 from "@/assets/jzl3.png";
import jzl4 from "@/assets/jzl4.png";
import jzl5 from "@/assets/jzl5.png";
import jzl6 from "@/assets/jzl6.png";
import search from "@/assets/search.png";
import advantage1 from "@/assets/advantage1.png";
import advantage2 from "@/assets/advantage2.png";
import advantage3 from "@/assets/advantage3.png";
import advantage4 from "@/assets/advantage4.png";
import { nextTick, onMounted } from 'vue';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper } from 'swiper';
import Long from './components/swiper_long.tsx'
Swiper.use([Autoplay, Navigation]);
// 安装 Swiper 模块

export default defineComponent({
    name: 'home',
    setup() {

        const swiperInstance = ref();

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
        // 耐火砖图片
        const refractoryBricks = ref([
            {
                src: nhz1,
                title: '耐火砖1580℃',
                id: 0
            },
            {
                src: nhz2,
                title: '耐火砖1580℃B2',
                id: 1
            },
            {
                src: nhz3,
                title: '耐火砖1770℃',
                id: 2
            },
            {
                src: nhz4,
                title: '耐火砖1770℃k2',
                id: 3
            },
            {
                src: nhz5,
                title: '耐火砖2000℃',
                id: 4
            },
            {
                src: nhz6,
                title: '耐火砖2200℃',
                id: 5
            }
        ]);
        // 浇注料图片
        const castableMaterial = ref([
            {
                src: jzl1,
                title: '建材行业用浇注料K2',
                id: 0
            },
            {
                src: jzl2,
                title: '建材行业用浇注料K3',
                id: 1
            },
            {
                src: jzl3,
                title: '石化行业用浇注料S1',
                id: 2
            },
            {
                src: jzl4,
                title: '石化行业用浇注料s2',
                id: 3
            },
            {
                src: jzl5,
                title: '冶金行业用浇注料y1',
                id: 4
            },
            {
                src: jzl6,
                title: '有色金属行业用浇注料B1',
                id: 5
            }
        ]);
        // 焦炉维修材料展示大图
        const topImgSrc = ref({
            src: tch,
            title: '陶瓷焊补料',
            id: 0
        });
        // 焦炉维修材料展示大图
        const activedImgSrc = ref({
            src: '',
            title: '',
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

        // 在组件挂载时初始化 Swiper
        onMounted(() => {
            // 这里的 swiperOptions 是 Swiper 的配置选项，根据你的需求进行配置
            const swiperOptions = {
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            };

            swiperInstance.value = new Swiper('.banner_top', swiperOptions);
        });
        // 点击切换图片
        const changeImg = (itemImg: any, type: string) => {
            if (type === '1') {
                topImgSrc.value = itemImg;
            } else {
                activedImgSrc.value = itemImg;
            }
        }
        // 左按钮向前切换图片
        const changePrev = (src: string) => {
            if (src.includes('nhz')) {
                // 耐火砖
                if (activedImgSrc.value.id <= 0) return;
                activedImgSrc.value = refractoryBricks.value[activedImgSrc.value.id - 1];
            } else if (src.includes('jzl')) {
                // 浇注料
                if (activedImgSrc.value.id <= 0) return;
                activedImgSrc.value = castableMaterial.value[activedImgSrc.value.id - 1];
            } else {
                if (topImgSrc.value.id <= 0) return;
                topImgSrc.value = cokeOvenmaintenance.value[topImgSrc.value.id - 1];
            }
        }
        // 右按钮向后切换图片
        const changeNext = (src: string) => {
            if (src.includes('nhz')) {
                // 耐火砖
                if (activedImgSrc.value.id >= refractoryBricks.value.length - 1) return;
                activedImgSrc.value = refractoryBricks.value[activedImgSrc.value.id + 1];
            } else if (src.includes('jzl')) {
                // 浇注料
                if (activedImgSrc.value.id >= castableMaterial.value.length - 1) return;
                activedImgSrc.value = castableMaterial.value[activedImgSrc.value.id + 1];
            } else {
                if (topImgSrc.value.id >= cokeOvenmaintenance.value.length - 1) return;
                topImgSrc.value = cokeOvenmaintenance.value[topImgSrc.value.id + 1];
            }
        }
        // 鼠标划入显示左右切换按钮
        const changeMouseover = () => {
            isShowNavigationBtn.value = true;
        }
        // 鼠标划出隐藏左右切换按钮
        const changeMouseout = () => {
            isShowNavigationBtn.value = false;
        }
        // 展示大图弹窗
        const showImgDialog = (item: any) => {
            activedImgSrc.value = item;
            let imgDialog = document.getElementsByClassName('imgDialog');
            let mask = document.getElementsByClassName('mask');
            imgDialog[0].setAttribute('style', 'display:block');
            mask[0].setAttribute('style', 'display:block');
        }
        // 关闭展示大图弹窗
        const hideImgDialog = () => {
            let imgDialog = document.getElementsByClassName('imgDialog');
            let mask = document.getElementsByClassName('mask');
            imgDialog[0].setAttribute('style', 'display:none');
            mask[0].setAttribute('style', 'display:none');
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
                            <div class="swiper-container banner_top">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide first">
                                        <div class={'text'}>
                                            <p>品质保证 诚信经营 专业定制</p>
                                            <img src={nh} alt="" />
                                            <p>细心服务 厂家直销 贴心售后</p>
                                        </div>
                                    </div>
                                    <div class="swiper-slide two">
                                        <div class={'text'}>
                                            <p>我们专注于研发、生产</p>
                                            <img src={gz} alt="" />
                                            <span>降低原料中的杂质含量，有利于改善荷重软化温度及高温蠕变性能</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="swiper-button-next btn_banner"></div>
                                <div class="swiper-button-prev btn_banner"></div>
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
                                            <div class="prev" onClick={() => changePrev(topImgSrc.value.src)}>{'<'}</div>
                                            <div class="next" onClick={() => changeNext(topImgSrc.value.src)}>{'>'}</div>
                                        </div>
                                    </div>
                                    <div class="bottomImg">
                                        {
                                            cokeOvenmaintenance && cokeOvenmaintenance.value.map(item => {
                                                return <img src={item.src} alt="" class={(topImgSrc.value.src === item.src) ? 'actived' : ''} onClick={() => changeImg(item, '1')} />
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
                                    {
                                        refractoryBricks && refractoryBricks.value.map(item => {
                                            return <div class="imgList">
                                                <img src={item.src} alt="" />
                                                <span>{item.title}</span>
                                                <img class="search" src={search} alt="" onClick={() => showImgDialog(item)} />
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                            <div class="castableMaterialList">
                                <div class="castableMaterialTab">
                                    <span>浇注料Castable</span>
                                    <span>建材行业用浇注料</span>
                                    <span>石化行业用浇注料</span>
                                    <span>冶金行业用浇注料</span>
                                    <span>有色金属行业用浇注料</span>
                                </div>
                                <div class="castableMaterialImgs">
                                    {
                                        castableMaterial && castableMaterial.value.map(item => {
                                            return <div class="imgList">
                                                <img src={item.src} alt="" />
                                                <span>{item.title}</span>
                                                <img class="search" src={search} alt="" onClick={() => showImgDialog(item)} />
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                            <div class="maintenance">
                                <p class="title">焦炉维修照片</p>
                                <div class="listImgs">
                                    <p>列表多图</p>
                                </div>
                                <Long />
                            </div>
                            <div class="advantage">
                                <div class="content">
                                    <p class="title">
                                        <span>选择我们的&nbsp;<span class="num">4</span>&nbsp;大优势</span>
                                    </p>
                                    <p class="advantagemsg">
                                        <span>1、我们拥有先进的理念，科学的管理</span>
                                        <span>不断地致力于质量管理、过程管理及成本管理，苦练内功，并坚持科技兴厂，以质量和信誉取胜，以不断为广大客户提供优质产品和服务为己任，提供技术指导服务！</span>
                                        <img class="advantageImg1" src={advantage1} alt="" />
                                    </p>
                                    <p class="advantagemsg">
                                        <span>2、公司实力雄厚 质量有保证</span>
                                        <span>具有丰富的生产实践经验，技术力量雄厚、生产工艺先进可根据市场调研及客户提出的技术要求进行新产品研制开发并与有关科研部门合作，承揽一些新产品开发任务。</span>
                                        <img class="advantageImg2" src={advantage2} alt="" />
                                    </p>
                                    <p class="advantagemsg">
                                        <span>3、厂家直销，快速交货，性价比高</span>
                                        <span>公司位于交通便利的城市，公司从业人员近百人，其中技术人员占25%，年生产能力可达到上万吨。</span>
                                        <img class="advantageImg3" src={advantage3} alt="" />
                                    </p>
                                    <p class="advantagemsg">
                                        <span>4、全方位服务</span>
                                        <span>本公司销售服务体系，售前、售中、售后服务都由专人来完成，及时地排除客户的后顾之忧。</span>
                                        <img class="advantageImg4" src={advantage4} alt="" />
                                    </p>
                                </div>
                            </div>
                            <div class="footer">
                                <div class="content">
                                    <div class="top">
                                        <div class="left">
                                            <p class="design"><span>Construction Material</span><span>Design</span></p>
                                            <p class="details">主营产品有焦炉维修材料、高铝砖、粘土砖、轻质保温砖、耐磨浇注料、刚玉浇注料、低水泥高强浇注料、防渗料、自流料、可塑料、及各种牌号耐火水泥的材料。</p>
                                        </div>
                                        <div class="right">
                                            <p>联系传真：020-00000000</p>
                                            <p>联系QQ：177488228&emsp;&emsp;&emsp;&emsp;&emsp;联系邮箱：xxx@.co.m</p>
                                            <p>联系电话：000-000000&emsp;&emsp;&emsp;&emsp;&emsp;联系地址：XXX省XXX市XXX县XXX路XXX号</p>
                                        </div>
                                    </div>
                                    <div class="bottom">
                                        <p>
                                            <font>技术支持：</font>
                                            <span><a class="J_supportLink" href="http://www.xmsq6.cn/" target="_blank">乔拓云建站</a></span>
                                            <span>&nbsp;|&nbsp;</span>
                                            <span>手机版</span>
                                            <span>&nbsp;|&nbsp;</span>
                                            <span>管理登录</span>
                                            <span>&nbsp;|&nbsp;</span>
                                            <span><a href="https://beian.miit.gov.cn" target="_blank" rel="nofollow">闽ICP备2022002968号-2</a></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="mask"></div>
                            <div class="imgDialog">
                                <div class="topImg">
                                    <span class="close" onClick={() => hideImgDialog()}>X</span>
                                    <img src={activedImgSrc.value.src} alt="" />
                                    <div class="imgDetail">
                                        <p class="title">{activedImgSrc.value.title}</p>
                                        <p>
                                            <span>规&emsp;&emsp;格&emsp;&nbsp;：</span>
                                            <span class="highlight">国际合格标准</span>
                                        </p>
                                        <p>
                                            <span>材&emsp;&emsp;质&emsp;&nbsp;：</span>
                                            <span class="highlight">建筑材料</span>
                                        </p>
                                        <p>
                                            <span>型&emsp;&emsp;号&emsp;&nbsp;：</span>
                                            <span class="highlight">KB1874</span>
                                        </p>
                                        <p>
                                            <span>价&emsp;&emsp;格&emsp;&nbsp;</span>
                                            <span class="highlight price">￥ 36.60</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="bottomImg">
                                    {
                                        activedImgSrc.value.src.includes('nhz') ? refractoryBricks.value.map(item => {
                                            return <img src={item.src} alt="" onClick={() => changeImg(item, '2')} />
                                        }) :
                                            castableMaterial.value.map(item => {
                                                return <img src={item.src} alt="" onClick={() => changeImg(item, '2')} />
                                            })
                                    }
                                </div>
                                <div class="navigationBtn">
                                    <div class="prev" onClick={() => changePrev(activedImgSrc.value.src)}>
                                        <el-icon><ArrowLeftBold /></el-icon>
                                    </div>
                                    <div class="next" onClick={() => changeNext(activedImgSrc.value.src)}>
                                        <el-icon><ArrowRightBold /></el-icon>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-container>
            </el-container >
        )
    }
})