<template>
    <div>
        <p-aside></p-aside>
        <div class="repository">
            <nav>
                <ul class="clearfix">
                    <li>
                        <router-link exact-active-class="select" :to="{ name: 'stars' }"><span>Stars</span><i class="num">{{num[1]}}</i></router-link>
                    </li>
                    <li>
                        <router-link exact-active-class="select" :to="{ name: 'followers' }"><span>Followers</span><i class="num">{{num[2]}}</i></router-link>
                    </li>
                    <li>
                        <router-link exact-active-class="select" :to="{ name: 'followering' }"><span>Followering</span><i class="num">{{num[3]}}</i></router-link>
                    </li>
                </ul>
            </nav>
            <router-view class="box"></router-view>
        </div>
    </div>
</template>

<script>
import aside from '../views/userponent/aside.vue';
import '../style/user.css';

export default {
    data() {
        return {
            select: 1,
            num: [6, 1, 8, 10]
        }
    },
    methods: {
        
    },
    components: {
        'p-aside': aside
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
.clearfix:after {
    content: "";
    display: block;
    clear: both;
}
li {
    list-style: none;
}
a {
    text-decoration: none;
}
body {
    font-size: 14px;
    font-family: "Microsoft YaHei";
}
button {
    outline: 0;
}
img {
    display: block;
    border: 0;
}

</style>