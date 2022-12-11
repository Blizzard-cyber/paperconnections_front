<template>
    <div class="contair">
       <div class="nav">
           <el-menu
                :default-active="activeIndex"
                class="nav"
                mode="horizontal"
                :ellipsis="false"
                @select="handleSelect"
            >
                <el-menu-item index="0">
                    <div id="logo"><a href="https://hao.zdsr.cn"><img alt="简洁导航" src="../assets/img/logo.jpg"> </a></div>
                </el-menu-item>
                <div class="flex-grow" />
                <!-- <el-menu-item index="1">
                    search_bar
                </el-menu-item> -->
                <el-menu-item index="1">
                    <div>
                    <el-avatar> user </el-avatar>
                    </div>
                </el-menu-item>
            </el-menu>
        </div>

  <a-list
    class="list-demo-action-layout"
    :bordered="false"
    :data="dataSource"
    :pagination-props="paginationProps"
  >
    <template #item="{ item }">
      <a-list-item class="list-demo-item" action-layout="vertical">
        <template #actions>
          <span><icon-heart />83</span>
          <span><icon-star />{{ item.index }}</span>
          <span><icon-message />Reply</span>
        </template>
        <template #extra>
          <div className="image-area">
            <img alt="arco-design" :src="item.imageSrc" />
          </div>
        </template>
        <a-list-item-meta
          :title="item.title"
          :description="item.description"
        >
          <template #avatar>
            <a-avatar shape="square">
              <img alt="avatar" :src="item.avatar" />
            </a-avatar>
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>

     <!-- <div id="notice">
		<el-card
			shadow="hover"
			:body-style="{ padding: '12px 0px' }"
			v-for="(news, index) in newsData"
			:key="index"
		>
			<div class="newsBox">
				<div class="newsText">
					<el-link  @click.native="deliver(news.id)">
						<p class="p1">{{ news.headline }}</p>
					</el-link>
					<p class="p2">{{ news.content }}</p>
				</div>
			</div>
		</el-card>
	</div> -->
    <my-bottom></my-bottom>
</div>
</template>

<script>
export default {
    data() {
        return {
           
            newsData: [
                {
                    id: 1,
                    headline: "新闻标题",
                    content: "新闻内容",
                },
                {
                    id: 2,
                    headline: "新闻标题",
                    content: "新闻内容",
                },
                {
                    id: 3,
                    headline: "新闻标题",
                    content: "新闻内容",
                },
                {
                    id: 4,
                    headline: "新闻标题",
                    content: "新闻内容",
                },
                {
                    id: 5,
                    headline: "新闻标题",
                    content: "新闻内容",
                }
                
            ]
        }
    },
    methods: {
        getNews() {
            // this.$http.get('/api/news').then(res => {
            //     this.newsData = res.data
            // })
        },
        handleSelect(key, keyPath) {
            if (key == 2) {
                this.$router.push({ path: "/user" });
            }
        }
    },
    mounted() {
        this.getNews()
    }
}
</script>


<style scoped>
#notice {
    margin-top: 120px;
    margin-left: 20%;
    margin-right: 20%;
}
#notice >>> .el-card {
	background-color: inherit;
    margin-top: 10px;
}
.el-card:hover {
	padding-left: 20px;
	padding-right: 20px;
}
.newsBox {
	display: flex;
	flex-direction: row;
}
.newsImg {
	width: 120px;
	height: 100px;
}
.newsText {
	margin-left: 20px;
	height: inherit;
}
.newsText .p1 {
	margin: 0px;
	font-weight: 500;
	font-size: 20px;
}
.newsText .p2 {
  width: 750px;
	margin-bottom: 0px;
	font-size: 14px;
	line-height: 26px;
	color: #909399;
	overflow: hidden;
	-webkit-line-clamp: 2;
	display: -webkit-box;
	-webkit-box-orient: vertical;
}
.flex-grow {
  flex-grow: 1;
}
.nav{
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: -100px;
}
</style>