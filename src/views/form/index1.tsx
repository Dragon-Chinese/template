/*
 * @Author: luyao
 * @Date: 2021-10-12 15:52:05
 * @LastEditTime: 2021-10-12 15:52:05
 * @Description: 
 * @LastEditors: luyao
 * @FilePath: /vue3-tsx-vite-admin/src/views/form/index1.tsx
 */
/*
 * @Author: luyao
 * @Date: 2021-10-03 00:25:31
 * @LastEditTime: 2021-10-09 14:58:15
 * @Description: 
 * @LastEditors: luyao
 * @FilePath: /vue3-tsx-vite-admin/src/views/form/index.tsx
 */

import { defineComponent, reactive, ref } from "vue-demi";
import dayjs from "dayjs";
export default defineComponent({
    name: 'Form',
    setup() {
        const formRef = ref(null);
        const formData = reactive({
            name: '',
            region: '',
            date: '',
            delivery: false,
            type: [],
            resource: '',
            desc: '',
            date1: '',
            date2: '',
        })

        return () => (
            <el-form
                model={formData}
                ref={formRef.value}
                label-width={'100px'}
                class="demo-ruleForm"
            >
                <el-form-item label="活动名称" prop="name">
                    <el-input v-model={formData.name}></el-input>
                </el-form-item>
                <el-form-item label="活动区域" prop="region">
                    <el-select v-model={formData.region} placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="即时配送">
                    <el-switch v-model={formData.delivery}></el-switch>
                </el-form-item>
                <el-form-item label="活动性质">
                    <el-checkbox-group v-model={formData.type}>
                        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                        <el-checkbox label="地推活动" name="type"></el-checkbox>
                        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="特殊资源">
                    <el-radio-group v-model={formData.resource}>
                        <el-radio label="线上品牌商赞助"></el-radio>
                        <el-radio label="线下场地免费"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="活动形式">
                    <el-input type="textarea" v-model={formData.desc}></el-input>
                </el-form-item>

                <el-form-item label="活动时间">
                    <el-col span={11}>
                        {/* <el-date-picker type={'date'} placeholder="选择日期" v-model={formData.date1} style="width: 100%;"></el-date-picker> */}
                    </el-col>
                    <el-col class="line" span={2}>
                        -
                    </el-col>
                    <el-col span={11}>
                        {/* <el-time-picker placeholder="选择时间" v-model={formData.date2} style="width: 100%;"></el-time-picker> */}
                    </el-col>
                </el-form-item>
            </el-form >
        )
    },
})