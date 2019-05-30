<template>
  <div style="background:#eee;padding: 2px 20px">
 
    <Row style="margin-top: 10px;">
      <Col>
       
            <Collapse v-model="value1" style="background:white;">
              <Panel name="1">
                  <font size="3" class="sub-bac">报表结果</font>
                  <p slot="content" style="margin-left: 20px">
                    <ul>
                      <li v-for="item,index in warning">
                   
                        科目<span class="sub-bac">{{item.formular_name}}</span> 的
                        <span class="sub-bac" v-if="item.prop=='start'">期初金额</span>
                        <span class="sub-bac" v-if="item.prop=='end'">期末金额</span>
                        <span class="sub-bac" v-if="item.prop=='total'">累计金额</span>
                        <span class="sub-bac" v-if="item.prop=='previous'">上期金额</span>
                        <span class="sub-bac" v-if="item.prop=='current'">本期金额</span>
                        不平，报表值为：<span class="sub-bac">{{item.left_value}}</span>,
                        计算值为：<span class="sub-bac">{{item.right_value}}</span>
                      </li>
                    </ul>
                  </p>
              </Panel>
          </Collapse>
      </Col>
    </Row>
    <Row style="margin-top: 10px;">
      <Col>
        <Card :bordered="false">
          <div style="text-align: left">
            <p>请核对以下报表内容, 您可以点击相应的单元格, 修改报表数据, 以及属期和表头等信息。
              确认无误后, 请点击下面"提交报表"按钮, 保存报表。</p>
          </div>
          <!-- <div style="text-align: left;margin-top: 5px;">
            <Button type="success" @click = "returnUpdatedData">确认无误，提交报表</Button>
            <Button type="success" @click = "toNewPage">返回</Button>
          </div> -->
        </Card>
      </Col>
    </Row>
    <Row style="margin-top: 10px;">
      <Col>
        <Card :bordered="false">
          <Tabs v-model="tab1">
            <TabPane :name="item.por_key" :label="item.por_text" :key="index" v-for="(item,index) in sheetDatas.pors">
              <Tabs v-model="tab2">
                <TabPane :name="citem" :label=sheetDatas[item.por_key].stmt_type_list_chinses[cindex] :key=cindex v-for="(citem,cindex) in sheetDatas[item.por_key].stmt_type_list">
                  <fin-table :tableData=sheetDatas[item.por_key][citem] :sheetDatas="sheetDatas" :por_key="item.por_key" :stmt_type_key="citem" :stmt_type="sheetDatas[item.por_key][citem]['stmt_type']" :period="item.por,citem" :subject_list=sheetDatas.subject_list>
                   
                  </fin-table>
                  
                </TabPane>
              </Tabs>
            </TabPane>
          </Tabs>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
	export default{
		name:'sheetresult',
		data(){
			return {
			  tab1:'',
			  tab2: '',
			  value1: '111',
			  warning: 'warning',
			  listType: false,
			  listShow: false,
			  por_type_map:{
			    "year":"年报",
			    "month":"月报"
			  },
			  stmt_type_map:{
			    "bs":"资产负债表",
			    "pl": "利润表",
			    "cf": "现金流量表",
			    "0": "",
			    "1": "（母公司）",
			    "2": "（合并）"
			  },
			  sheetDatas: {}
			}
		},
		watch:{
		    tab1_tab2: {
		      handler: function(curVal,oldVal) {
		    
		        this.warning = this.sheetDatas[curVal.tab1][curVal.tab2].validation.error
		        
		      },
		      deep: true
		    }
		  },
		  computed: {
		    tab1_tab2() {
		      const { tab1, tab2 } = this
		      return {
		        tab1,
		        tab2
		      }
		    }
		  },
		created(){
			this.$ajax({
				method:'get',
				url:'/api/rest/finstate/sheet?id=cd2cbf80-7b9b-11e9-ba18-1c1b0d294a0d'		
			}).then(response=>{
				if (response) {
					this.sheetDatas = response;
					console.log(this.sheetDatas);
				  this.sheetDatas.pors.forEach((item,index)=>{
				    item.por_text = item.por + this.por_type_map[item.por_type];
				    //console.log(this.sheetDatas[item.por_key].stmt_type_list)
				    var stmt_type_list_chinses = []
				    this.sheetDatas[item.por_key].stmt_type_list = this.sheetDatas[item.por_key].stmt_type_list.sort();
				    this.sheetDatas[item.por_key].stmt_type_list.forEach((citem,cindex)=>{
				      var st = citem.split("_");
				      stmt_type_list_chinses.push(this.stmt_type_map[st[1]]+this.stmt_type_map[st[2]])
				    });
				    this.sheetDatas[item.por_key].stmt_type_list_chinses = stmt_type_list_chinses
				  });
					this.tab1 = this.sheetDatas.pors[0].por_key;
					this.tab2 = this.sheetDatas[this.tab1].stmt_type_list[0]
				// this.res = this.$store.state.showfooter
			}
			})
			}
			}
			// this.showfooter=this.$store.state.showfooter;  // 全局获取store的state中的值
</script>
<style scoped>
	* {
            padding: 0;
            margin: 0;
        }

        table {
            margin: 100px auto;
            border: 1px solid #000;
            border-collapse: collapse; /*设置表格的边框是否被合并为一个单一的边框*/
            border-spacing: 0; /*设置相邻单元格的边框间的距离*/
        }

        tr {
            width: 300px;
            height: 50px;
            line-height: 50px;
            border-bottom: 1px solid #000;
        }

        td, th {
            width: 99px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            border-right: 1px solid #000;
        }
</style>


