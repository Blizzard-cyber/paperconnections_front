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
                },
                {
                    id: 6,
                    headline: "新闻标题",
                    content: "新闻内容",
                },
                {
                    id: 7,
                    headline: "新闻标题",
                    content: "新闻内容",
                },
                {
                    id: 8,
                    headline: "新闻标题",
                    content: "新闻内容",
                },
                {
                    id: 9,
                    headline: "新闻标题",
                    content: "新闻内容",
                },
                {
                    id: 10,
                    headline: "新闻标题",
                    content: "新闻内容",
                },
                {
                    id: 11,
                    headline: "新闻标题",
                    content: "新闻内容",
                },
                {
                    id: 12,
                    headline: "新闻标题",
                    content: "新闻内容",
                },
                {
                    id: 13,
                    headline: "新闻标题",
                    content: "新闻内容",
                },
                {
                    id: 14,
                    headline: "新闻标题",
                    content: "新闻内容",
                },
                {
                    id: 15,
                    headline: "新闻标题",
                    content: "新闻内容",
                },
                {
                    id: 16,
                    headline: "新闻标题",
                    content: "新闻内容",
                },
                {
                    id: 17,
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
        }
    },
    mounted() {
        this.getNews()
    }
}
</script>