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
  <div id="notice">
		<el-card
			shadow="hover"
			:body-style="{ padding: '12px 0px' }"
			v-for="(news, index) in newsData"
			:key="index"
		>
              <template #header>
                <div class="card-header">
                    <span>{{news.title}}</span>
                    <el-button class="button" text>
                        <el-icon><Star /></el-icon>
                    </el-button>
                </div>
            </template>
            <div  class="text item">{{ news.author}}</div>
			<!-- <div class="newsBox">
				<div class="newsText"> -->
					<!-- <el-link  @click.native="deliver(news.id)">
						<p class="p1">{{ news.headline }}</p>
					</el-link> -->
<!--                 
					<span>{{ news.title }}</span>
                    <p class="p2">{{ news.author }}</p>
                    <el-icon><Star /></el-icon> -->
				<!-- </div> -->
			<!-- </div> -->
		</el-card>
	</div>
    </div>
</template>

<script>
export default {
	data() {
		return {
			newsData: [{
				title: 'Intelligent location of simultaneously active acoustic emission sources: Part I',
                author: 'T. Kosel and I. Grabec,2009-09-29',
            },
            {
                title:'Intelligent location of simultaneously active acoustic emission sources: Part II',
                author:'T. Kosel and I. Grabec,2007-05-23'
            },
             {
                title:'The Complexity of Simple Stochastic Games',
                author:'Jonas Dieckelmann,2007-05-23'
             },
             {
                title:'Euclidean Shortest Paths in Simple Cube Curves at a Glance',
                author:'Fajie Li and Reinhard Klette,2007-05-23'
             },
             {
                title:'Polynomial algorithms for protein similarity search for restricted mRNA structures',
                author:'Frank Gurski,2007-05-23'
             },
             {
                title:'Simulating spin systems on IANUS, an FPGA-based computer',
                author:''
             },
             {
                title:'',
                author:''
             }
            ],
		}
	}
}

</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
  margin-left: 20px;
}

.box-card {
  width: 480px;
}
#notice {
    margin-top: 125px;
    margin-left: 250px;
    margin-right: 250px;
}
#notice >>> .el-card {
	background-color: inherit;
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
</style>
