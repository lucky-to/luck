<template>
	<div>
		<div>
			<!-- 使用el-form做搜索框 -->
			<el-form
				:inline="true"
				:model="formInline"
				class="demo-form-inline"
			>
				<el-form-item label="食品">
					<el-input v-model="formInline.name"></el-input>
				</el-form-item>
				<el-form-item label="参考重量">
					<el-input v-model="formInline.num"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit">查询</el-button>
					<el-button type="primary" @click="reset">重置</el-button>
				</el-form-item>
			</el-form>
			<div></div>
		</div>
		<div style="padding: 0 35px">
			<el-table
				border
				:data="tableData"
				style="width: 100%; font-size: 25px"
				height="800px"
			>
				<el-table-column type="index" width="80" label="序号">
				</el-table-column>
				<el-table-column prop="name" label="食品" width="240">
				</el-table-column>
				<el-table-column prop="num" label="参考重量" width="180">
				</el-table-column>
				<el-table-column prop="quantityOfHeat" label="标准热量">
				</el-table-column>
				<!-- 输入实际使用重量 -->
				<el-table-column prop="actualWeight" label="实际重量">
					<template slot-scope="scope">
						<el-input
							v-model="scope.row.actualWeight"
							style="font-size: 35px"
							oninput="value=value.replace(/[^\d.]/g, '').replace(/^\./g, '').replace('.', '$#$').replace(/\./g, '').replace('$#$', '.').replace(/^0*(\d+)/g, '$1')"
						></el-input>
					</template>
				</el-table-column>
				<!-- 计算实际热量 -->
				<el-table-column prop="actualQuantityOfHeat" label="实际热量">
					<template slot-scope="scope">
						<el-input
							:disabled="true"
							style="font-size: 35px; color: red"
							class="cor"
							v-model="scope.row.actualQuantityOfHeat"
						></el-input>
					</template>
				</el-table-column>
				<!-- 操作计算 -->
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button
							type="primary"
							@click="handle(scope.$index, scope.row)"
							>计算</el-button
						>
						<!-- 清空 -->
						<el-button
							type="primary"
							@click="
								;(scope.row.actualWeight = ''),
									(scope.row.actualQuantityOfHeat = '')
							"
							>清空</el-button
						>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
import list from './index'
export default {
	components: {},
	props: {},
	data() {
		return {
			formInline: {
				name: '',
				num: '',
			},
			tableData: [],
		}
	},
	created() {
		list.forEach((item) => {
			item.actualWeight = ''
			item.actualQuantityOfHeat = ''
		}),
			// 深拷贝一份数据
			(this.tableData = JSON.parse(JSON.stringify(list)))
	},
	mounted() {},
	methods: {
		onSubmit() {
			// 从list 过滤出符合条件的数据
			this.tableData = list.filter((item) => {
				return (
					item.name.indexOf(this.formInline.name) > -1 &&
					item.num.indexOf(this.formInline.num) > -1
				)
			})
		},
		reset() {
			this.formInline.name = ''
			this.formInline.num = ''
			this.tableData = list
		},
		handle(index, row) {
			// 计算实际热量 保留一位小数并且四舍五入
			console.log((row.actualWeight * row.quantityOfHeat) / row.num)
			row.actualQuantityOfHeat = this.transformDecimal(
				(row.actualWeight * row.quantityOfHeat) / row.num,
				1
			)
		},
		/**
		 * 四舍五入，保留指定小数位数，当原始数据不满足长度时，不要补 0
		 * @param number [Number | String] 原始数据，支持字符串和数值型
		 * @param i [Number] 保留的小数个数 >= 0
		 * @returns [Number] 转换后的数据
		 */
		transformDecimal(number, i) {
			let decimalNum = null
			// 先转换为数值型
			let num = Number(number)
			// 判断是否为数值型
			if (!isNaN(num)) {
				// 切分整数与小数
				let arr = num.toString().split('.')
				// 是小数且小数位大于保留个数
				if (arr.length > 1 && arr[1].length > i) {
					// 小数部分字符串
					let decimal = arr[1].slice(i, i + 1)
					// toFixed 有 bug，四舍六入五随机
					// 当四舍五入的数为 5，给其 + 1
					if (decimal === '5') {
						// 这里可能会存在 0.1 ** 5 = 0.000010000000000000003 但不影响四舍五入
						num += Math.pow(0.1, i + 1)
					}
					decimalNum = num.toFixed(i)
				} else {
					decimalNum = num
				}
				decimalNum = Number(decimalNum)
			}
			return decimalNum
		},
	},
	computed: {},
	watch: {},
}
</script>
<style scoped>
::v-deep .cor .el-input__inner {
	color: red;
}
</style>
