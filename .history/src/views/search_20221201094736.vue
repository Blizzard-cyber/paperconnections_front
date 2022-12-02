<template>
    <div class="contair">
        <my-topper></my-topper>
        <div id="notice">
		<el-card
			shadow="hover"
			:body-style="{ padding: '12px 0px' }"
			v-for="(news, index) in newsData"
			:key="index"
		>
			<div class="newsBox">
				<div class="newsText">
					<!-- <el-link  @click.native="deliver(news.id)">
						<p class="p1">{{ news.headline }}</p>
					</el-link> -->
					<p class="p2">{{ news.content }}</p>
				</div>
			</div>
		</el-card>
	</div>
    <my-bottom></my-bottom>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newsData: []
        }
    },
    methods: {
        getNews() {
            // this.$http.get('/api/news').then(res => {
            //     this.newsData = res.data
           // })
        }
    },
    mounted() {
        this.getNews()
    }
}