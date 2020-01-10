<template>
	<view class="app">
	  <view class='content'>
	    <scroll-view class='inner' scroll-y>
	      <view class="tsTitle">
	        <view class='logo'><image src="https://tool.changbaishan.gov.cn/img/icon_New_12301.png" mode="aspectFill"></image></view>
	        快捷投诉举报协议
	      </view>
	      <p>根据《中华人民共和国旅游法》、《旅游投诉处理办法》等法律法规和规章的规定，制定以下须知。</p>
	      <p>一、旅游者认为经营者违反合同约定的、因经营者的责任致使旅游者人身、财产受到损害的、因不可抗力、
	            意外事故致使旅游合同不能履行或者不能完全履行的、其他损害旅游者合法权益的，
	            且属于旅游行政管理部门职责范围内的，可通过本平台进行投诉。</p>
	      <p>二、旅游投诉应当符合下列条件：</p>
	      <p>1.	投诉人与投诉事项有直接利害关系；</p>
	      <p>2.	有明确的被投诉人、具体的投诉请求、事实和理由；</p>
	      <p>3.	属于旅游行政管理部门职责范围内的。</p>
	      <p>三、旅游投诉应当载明下列事项：</p>
	      <p>1.	投诉人的姓名、性别、联系电话及投诉日期；</p>
	      <p>2.	被投诉人的名称、所在地；</p>
	      <p>3.	投诉的要求、理由及相关的事实根据。</p>
	      <p>四、投诉单提交后，会根据投诉人选择的经营者信息，自动流转至被诉方所在地县级以上地方旅游投诉处理机构处理。</p>
	      <p>五、旅游投诉由旅游合同签订地或者被诉方所在地县级以上地方旅游投诉处理机构管辖。</p>
	      <p>六、下列情形不予受理或终止受理：</p>
	      <p>1.	人民法院、仲裁机构、其他行政管理部门或者社会调解机构已经受理或者处理的；</p>
	      <p>2.	旅游投诉处理机构已经作出处理，且没有新情况、新理由的；</p>
	      <p>3.	不属于旅游投诉处理机构职责范围或者管辖范围的；</p>
	      <p>4.	超过旅游合同结束之日90天的；</p>
	      <p>5.	不符合旅游投诉条件的；</p>
	      <p>6.	投诉人自行撤销的。</p>
	      <p>七、投诉人委托代理人进行投诉活动的，应当提交授权委托书，并载明委托权限。</p>
	      <p>八、投诉事项一事一单，请勿就同一事项重复投诉。</p>
	      <p>九、投诉人4人以上，以同一事由投诉同一被投诉人的，为共同投诉。共同投诉可以由投诉人推选1至3名代表进行投诉。
	            代表人参加旅游投诉处理机构处理投诉过程的行为，对全体投诉人发生效力，
	            但代表人变更、放弃投诉请求或者进行和解，应当经全体投诉人同意。</p>
	      <p>十、不得在本页面发表违反中华人民共和国宪法和法律的言论，不得发表造谣、诽谤他人的言论，
	      投诉人承担一切因留言行为而引起的法律责任。</p>
	      <p class="blod">特别说明：</p>
	      <p>12301是国家旅游服务热线，在旅游投诉管理办法的指导下，接收游客诉求，协助游客收集凭证、整理材料，
	            最终将合规材料上传至全国旅游投诉举报平台。</p>
	      <p>地县级以上地方旅游投诉处理机构负责在全国旅游投诉平台上处理被诉方为本地企业的相关投诉。
	      处理完成后会将处理结果通知投诉人，投诉人也可通过12301查询处理结果。</p>
	      <view class="copyright">友情提示：该页面来自12301国家旅游服务热线</view>
	    </scroll-view>
	    <view class='footer'>
	      <view class='center'>
	        <view class='accept' @click='change'>
	          <view class='inline'>
	            <radio :checked='check' color='#e75c15'></radio>
	          </view>
	        我已阅读并同意协议内容
	        </view>
	        <view class='accept1' @click='Agree'>同意</view>
	      </view>
	    </view>
	  </view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				check:true,
			}
		},
		methods: {
			 change(){
			
			     this.check=!this.check
			  
			  },
			  Agree(){
			    if (this.check){
			      // wx.redirectTo({
			      //   url: './complain-index',
			      // })
				  console.log('已经选择了')
			    }else{
			      wx.showModal({
			        title: '提示',
			        content: '请确定已经阅读完毕并勾选我已阅读并同意协议内容',
			        success: function (res) {
			          if (res.confirm) {
			            console.log('用户点击确定')
			          } else if (res.cancel) {
			            console.log('用户点击取消')
			          }
			        }
			      })
			    }
			  },
		}
	}
</script>

<style>
.app{width: 100%; height: 100%; overflow: hidden;}
.content{overflow: hidden;}
.inner{width: 100%; height: 86vh;padding: 36rpx 40rpx 96rpx; box-sizing: border-box;}
.tsTitle{text-align: center;margin-bottom: 24rpx;font-size: 36rpx; font-family: -apple-system-font,Helvetica Neue,sans-serif;}
.logo{  margin: 0 auto 10rpx;  display: inline-block;width: 60px;height: 24px; vertical-align: -11rpx; margin-right: 6px; }
.logo image{ background: none; width:100%; height: 100%; }
.inner p{font-size: 28rpx; margin-bottom: 20rpx; color: #333; line-height: 1.6; display: block;}
.blod{font-weight: 700;}
.copyright{font-size: 24rpx; color: #666; text-align: center; padding: 26rpx 0; margin-bottom: 60rpx;}
.footer{    position: fixed; bottom: 0; left: 0; right: 0;width: 100%;height: 240rpx;background: #fff;}
.center{text-align: center;}
.accept{line-height: 80rpx!important;font-size: 28rpx!important; margin-right: 10px; }
.accept1{display: block;height: 96rpx;line-height: 96rpx; width: 100%; background: #ec6b29;color: #fff; font-size: 32rpx;text-align: center;border: 1rpx solid #e75c15; margin-top: 20rpx;}
.inline{display: inline-block;}
radio{transform: scale(0.7) }

</style>
