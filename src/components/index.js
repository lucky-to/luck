const riceList = [
	{ name: '大米', num: '25', quantityOfHeat: '90' },
	{ name: '小米', num: '25', quantityOfHeat: '90' },
	{ name: '糯米', num: '25', quantityOfHeat: '90' },
	{ name: '薏米', num: '25', quantityOfHeat: '90' },
	{ name: '高粱米', num: '25', quantityOfHeat: '90' },
	{ name: '玉米碴', num: '25', quantityOfHeat: '90' },
	{ name: '面粉', num: '25', quantityOfHeat: '90' },
	{ name: '米粉', num: '25', quantityOfHeat: '90' },
	{ name: '玉米粉', num: '25', quantityOfHeat: '90' },
	{ name: '通心面', num: '25', quantityOfHeat: '90' },
	{ name: '玉米面（白）', num: '25', quantityOfHeat: '90' },
	{ name: '玉米面（黄）', num: '25', quantityOfHeat: '90' },
	{ name: '各种挂面', num: '25', quantityOfHeat: '90' },
	{ name: '龙须面', num: '25', quantityOfHeat: '90' },
	{ name: '混合面', num: '25', quantityOfHeat: '90' },
	{ name: '绿豆', num: '25', quantityOfHeat: '90' },
	{ name: '红豆', num: '25', quantityOfHeat: '90' },
	{ name: '芸豆', num: '25', quantityOfHeat: '90' },
	{ name: '干豌豆', num: '25', quantityOfHeat: '90' },
	{ name: '干粉条', num: '25', quantityOfHeat: '90' },
	{ name: '荞麦面', num: '25', quantityOfHeat: '90' },
	{ name: '苦荞面', num: '25', quantityOfHeat: '90' },
	{ name: '燕麦面', num: '25', quantityOfHeat: '90' },
	{ name: '莜麦面', num: '23', quantityOfHeat: '90' },
	{ name: '燕麦片', num: '23', quantityOfHeat: '90' },
	{ name: '烧饼', num: '35', quantityOfHeat: '90' },
	{ name: '烙饼', num: '35', quantityOfHeat: '90' },
	{ name: '馒头', num: '35', quantityOfHeat: '90' },
	{ name: '咸面包', num: '35', quantityOfHeat: '90' },
	{ name: '窝窝头', num: '35', quantityOfHeat: '90' },
	{ name: '生面条', num: '35', quantityOfHeat: '90' },
	{ name: '魔芋生面条', num: '35', quantityOfHeat: '90' },
	{ name: '苏打饼干', num: '20', quantityOfHeat: '90' },
	{ name: '椒盐饼干', num: '20', quantityOfHeat: '90' },
	{ name: '巧克力维芙饼干', num: '20', quantityOfHeat: '90' },
	{ name: '桃酥', num: '18', quantityOfHeat: '90' },
	{ name: '甜饼干', num: '18', quantityOfHeat: '90' },
	{ name: '蛋糕', num: '30', quantityOfHeat: '90' },
	{ name: '米饭', num: '75', quantityOfHeat: '90' },
	{ name: '红薯', num: '70', quantityOfHeat: '90' },
	{ name: '土豆', num: '100', quantityOfHeat: '90' },
	{ name: '湿粉皮', num: '100', quantityOfHeat: '90' },
	{ name: '面筋', num: '50', quantityOfHeat: '90' },
	{ name: '鲜玉米粒', num: '50', quantityOfHeat: '90' },
	{ name: '莲子', num: '150', quantityOfHeat: '90' },
	{ name: '山药', num: '150', quantityOfHeat: '90' },
	{ name: '炸薯片', num: '16', quantityOfHeat: '90' },
	{ name: '炸虾条', num: '16', quantityOfHeat: '90' },
	{ name: '鲜玉米（带棒心）', num: '200', quantityOfHeat: '90' },
	{ name: '栗子', num: '40', quantityOfHeat: '90' },
	{ name: '白薯', num: '40', quantityOfHeat: '90' },
	{ name: '凉薯', num: '220', quantityOfHeat: '90' },
	{ name: '芋头', num: '110', quantityOfHeat: '90' },
	{ name: '藕', num: '110', quantityOfHeat: '90' },

	{ name: '西葫芦', num: '750', quantityOfHeat: '90' },
	{ name: '红萝卜', num: '300', quantityOfHeat: '90' },
	{ name: '鲜豇豆', num: '300', quantityOfHeat: '90' },
	{ name: '荷兰豆', num: '300', quantityOfHeat: '90' },
	{ name: '扁豆', num: '300', quantityOfHeat: '90' },
	{ name: '空心菜', num: '300', quantityOfHeat: '90' },
	{ name: '蒜苔', num: '200', quantityOfHeat: '90' },
	{ name: '黄豆芽', num: '200', quantityOfHeat: '90' },

	{ name: '冬瓜', num: '800', quantityOfHeat: '90' },
	{ name: '洋葱', num: '250', quantityOfHeat: '90' },
	{ name: '胡萝卜', num: '250', quantityOfHeat: '90' },
	{ name: '蒜苗', num: '250', quantityOfHeat: '90' },
	{ name: '苋菜', num: '250', quantityOfHeat: '90' },

	{ name: '鲜菜豆', num: '340', quantityOfHeat: '90' },
	{ name: '水萝卜', num: '340', quantityOfHeat: '90' },
	{ name: '绿豆芽', num: '340', quantityOfHeat: '90' },

	{ name: '茴香菜', num: '430', quantityOfHeat: '90' },
	{ name: '柿子椒', num: '430', quantityOfHeat: '90' },
	{ name: '莴苣笋', num: '820', quantityOfHeat: '90' },

	{ name: '丝瓜', num: '500', quantityOfHeat: '90' },
	{ name: '篮菜', num: '500', quantityOfHeat: '90' },
	{ name: '龙须菜', num: '500', quantityOfHeat: '90' },
	{ name: '茼蒿', num: '500', quantityOfHeat: '90' },
	{ name: '菜苔', num: '500', quantityOfHeat: '90' },
	{ name: '西红柿', num: '500', quantityOfHeat: '90' },
	{ name: '苦瓜', num: '500', quantityOfHeat: '90' },
	{ name: '茄子', num: '500', quantityOfHeat: '90' },

	{ name: '菠菜', num: '350', quantityOfHeat: '90' },
	{ name: '油菜', num: '350', quantityOfHeat: '90' },
	{ name: '韭菜', num: '350', quantityOfHeat: '90' },
	{ name: '芣蓝', num: '350', quantityOfHeat: '90' },
	{ name: '塌棵菜', num: '350', quantityOfHeat: '90' },
	{ name: '茭白', num: '350', quantityOfHeat: '90' },

	{ name: '芹菜', num: '470', quantityOfHeat: '90' },
	{ name: '大白菜', num: '600', quantityOfHeat: '90' },
	{ name: '莴笋', num: '600', quantityOfHeat: '90' },
	{ name: '黄瓜', num: '600', quantityOfHeat: '90' },
	{ name: '水浸海带', num: '600', quantityOfHeat: '90' },
	{ name: '冬笋', num: '220', quantityOfHeat: '90' },
	{ name: '茨菇', num: '100', quantityOfHeat: '90' },
	{ name: '生菜', num: '640', quantityOfHeat: '90' },
	{ name: '蒜黄', num: '400', quantityOfHeat: '90' },
	{ name: '圆白菜', num: '400', quantityOfHeat: '90' },
	{ name: '雪里红', num: '400', quantityOfHeat: '90' },
	{ name: '鲜蘑菇', num: '390', quantityOfHeat: '90' },
	{ name: '鲜竹笋', num: '450', quantityOfHeat: '90' },

	{ name: '梨', num: '250', quantityOfHeat: '90' },
	{ name: '李子', num: '250', quantityOfHeat: '90' },
	{ name: '杏', num: '250', quantityOfHeat: '90' },
	{ name: '芒果', num: '140', quantityOfHeat: '90' },

	{ name: '桃', num: '200', quantityOfHeat: '90' },
	{ name: '苹果', num: '200', quantityOfHeat: '90' },
	{ name: '桔子', num: '200', quantityOfHeat: '90' },
	{ name: '橙', num: '200', quantityOfHeat: '90' },
	{ name: '葡萄', num: '200', quantityOfHeat: '90' },
	{ name: '猕猴桃', num: '200', quantityOfHeat: '90' },

	{ name: '红果', num: '90', quantityOfHeat: '90' },
	{ name: '鲜枣', num: '90', quantityOfHeat: '90' },

	{ name: '柿子', num: '150', quantityOfHeat: '90' },
	{ name: '鲜荔枝', num: '150', quantityOfHeat: '90' },
	{ name: '香蕉', num: '150', quantityOfHeat: '90' },

	{ name: '哈密瓜', num: '220', quantityOfHeat: '90' },
	{ name: '李子', num: '220', quantityOfHeat: '90' },
	{ name: '樱桃', num: '220', quantityOfHeat: '90' },

	{ name: '柚子', num: '160', quantityOfHeat: '90' },
	{ name: '芦柑', num: '160', quantityOfHeat: '90' },
	{ name: '菠萝', num: '160', quantityOfHeat: '90' },

	{ name: '西瓜', num: '450', quantityOfHeat: '90' },
	{ name: '甜瓜（带皮）', num: '360', quantityOfHeat: '90' },
	{ name: '草莓', num: '300', quantityOfHeat: '90' },

	{ name: '大豆', num: '25', quantityOfHeat: '90' },
	{ name: '豆腐丝', num: '50', quantityOfHeat: '90' },
	{ name: '豆腐干', num: '50', quantityOfHeat: '90' },

	{ name: '南豆腐', num: '150', quantityOfHeat: '90' },
	{ name: '豆腐脑', num: '600', quantityOfHeat: '90' },
	{ name: '青豆', num: '20', quantityOfHeat: '90' },
	{ name: '腐竹', num: '20', quantityOfHeat: '90' },

	{ name: '北豆腐', num: '100', quantityOfHeat: '90' },
	{ name: '油豆皮', num: '35', quantityOfHeat: '90' },
	{ name: '豆浆', num: '225', quantityOfHeat: '90' },
	{ name: '黄豆', num: '23', quantityOfHeat: '90' },

	{ name: '奶粉', num: '20', quantityOfHeat: '90' },
	{ name: '脱脂奶粉', num: '20', quantityOfHeat: '90' },
	{ name: '牛奶', num: '150', quantityOfHeat: '90' },
	{ name: '羊奶', num: '150', quantityOfHeat: '90' },

	{ name: '奶酪', num: '25', quantityOfHeat: '90' },
	{ name: '无糖酸奶', num: '125', quantityOfHeat: '90' },
	{ name: '熟火腿', num: '20', quantityOfHeat: '90' },
	{ name: '香肠', num: '20', quantityOfHeat: '90' },
	{ name: '板鸭', num: '20', quantityOfHeat: '90' },

	{ name: '猪肉松', num: '25', quantityOfHeat: '90' },
	{ name: '猪肾', num: '25', quantityOfHeat: '90' },
	{ name: '干贝', num: '25', quantityOfHeat: '90' },
	{ name: '鱼松', num: '25', quantityOfHeat: '90' },
	{ name: '鱿鱼（干）', num: '25', quantityOfHeat: '90' },
	{ name: '海参（干）', num: '25', quantityOfHeat: '90' },
	{ name: '肥瘦猪肉', num: '25', quantityOfHeat: '90' },

	{ name: '猪蹄', num: '30', quantityOfHeat: '90' },

	{ name: '熟叉烧肉', num: '35', quantityOfHeat: '90' },
	{ name: '酱鸡', num: '35', quantityOfHeat: '90' },
	{ name: '酱鸭', num: '35', quantityOfHeat: '90' },
	{ name: '鹅肉', num: '35', quantityOfHeat: '90' },
	{ name: '鸭肉', num: '35', quantityOfHeat: '90' },
	{ name: '午餐肉', num: '35', quantityOfHeat: '90' },
	{ name: '熟酱牛肉', num: '35', quantityOfHeat: '90' },

	{ name: '瘦猪肉', num: '50', quantityOfHeat: '90' },
	{ name: '瘦牛肉', num: '50', quantityOfHeat: '90' },
	{ name: '瘦羊肉', num: '50', quantityOfHeat: '90' },
	{ name: '鹅蛋', num: '50', quantityOfHeat: '90' },
	{ name: '鸡肉', num: '50', quantityOfHeat: '90' },
	{ name: '猪舌', num: '50', quantityOfHeat: '90' },

	{ name: '鸭掌', num: '60', quantityOfHeat: '90' },
	{ name: '鸡蛋', num: '60', quantityOfHeat: '90' },
	{ name: '鹌鹑蛋（6个）', num: '60', quantityOfHeat: '90' },
	{ name: '猪里脊肉', num: '60', quantityOfHeat: '90' },
	{ name: '鸭蛋', num: '60', quantityOfHeat: '90' },

	{ name: '红烧鸡肉', num: '65', quantityOfHeat: '90' },
	{ name: '河螃蟹', num: '65', quantityOfHeat: '90' },

	{ name: '甲鱼', num: '85', quantityOfHeat: '90' },

	{ name: '带鱼', num: '80', quantityOfHeat: '90' },
	{ name: '草鱼', num: '80', quantityOfHeat: '90' },
	{ name: '鲤鱼', num: '80', quantityOfHeat: '90' },
	{ name: '比目鱼', num: '80', quantityOfHeat: '90' },
	{ name: '兔肉', num: '80', quantityOfHeat: '90' },
	{ name: '白鲢鱼', num: '80', quantityOfHeat: '90' },

	{ name: '鲜贝', num: '100', quantityOfHeat: '90' },
	{ name: '对虾', num: '100', quantityOfHeat: '90' },
	{ name: '大黄鱼', num: '100', quantityOfHeat: '90' },
	{ name: '青虾', num: '100', quantityOfHeat: '90' },
	{ name: '鳝鱼', num: '100', quantityOfHeat: '90' },
	{ name: '黑鲢', num: '100', quantityOfHeat: '90' },

	{ name: '胖头鱼', num: '130', quantityOfHeat: '90' },
	{ name: '猪肝', num: '70', quantityOfHeat: '90' },
	{ name: '带骨排骨（小）', num: '45', quantityOfHeat: '90' },
	{ name: '驴肉', num: '110', quantityOfHeat: '90' },
	{ name: '海螃蟹', num: '110', quantityOfHeat: '90' },

	{ name: '鸡蛋白', num: '190', quantityOfHeat: '90' },
	{ name: '松花蛋', num: '55', quantityOfHeat: '90' },
	{ name: '蚶（鲜）', num: '200', quantityOfHeat: '90' },
	{ name: '鲫鱼', num: '150', quantityOfHeat: '90' },
	{ name: '墨鱼', num: '150', quantityOfHeat: '90' },
	{ name: '牡蛎', num: '150', quantityOfHeat: '90' },

	{ name: '田螺', num: '135', quantityOfHeat: '90' },

	{ name: '花生油', num: '10', quantityOfHeat: '90' },
	{ name: '香油', num: '10', quantityOfHeat: '90' },
	{ name: '玉米油', num: '10', quantityOfHeat: '90' },
	{ name: '大豆油', num: '10', quantityOfHeat: '90' },
	{ name: '菜籽油', num: '10', quantityOfHeat: '90' },
	{ name: '橄榄油', num: '10', quantityOfHeat: '90' },
	{ name: '调和油', num: '10', quantityOfHeat: '90' },
	{ name: '黄油', num: '10', quantityOfHeat: '90' },
	{ name: '猪油', num: '10', quantityOfHeat: '90' },

	{ name: '黑芝麻', num: '15', quantityOfHeat: '90' },
	{ name: '芝麻酱', num: '15', quantityOfHeat: '90' },
	{ name: '南瓜子仁', num: '15', quantityOfHeat: '90' },
	{ name: '葵花子仁', num: '15', quantityOfHeat: '90' },
	{ name: '花生米', num: '15', quantityOfHeat: '90' },
	{ name: '核桃仁', num: '15', quantityOfHeat: '90' },
	{ name: '杏仁', num: '15', quantityOfHeat: '90' },
	{ name: '开心果', num: '15', quantityOfHeat: '90' },

	{ name: '炒松子', num: '14', quantityOfHeat: '90' },
	{ name: '腰果', num: '16', quantityOfHeat: '90' },
	{ name: '西瓜子仁', num: '16', quantityOfHeat: '90' },
	{ name: '奶油', num: '45', quantityOfHeat: '90' },
]

export default riceList
