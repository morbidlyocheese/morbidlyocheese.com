<template>
    <div class="page-container">
        <div class="content-container">
            <div class="content">
                <h1>{{ msg }}</h1>
                <a class='link' v-for="link in links" :href="link.url" target="_blank">
                    <img class='icon' :src="link.icon" :alt="link.label" width="16" height="16">{{ link.title }}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'HomePage',
            links: [
                { title: 'twitch', url: 'https://www.twitch.tv/morbidlyocheese', icon: 'https://simpleicons.org/icons/twitch.svg', description: '', label: 'twitch' },
                { title: 'twitter', url: 'https://twitter.com/morbidlyocheese', icon: 'https://simpleicons.org/icons/twitter.svg', description: '', label: 'twitter' },
                { title: 'instagram', url: 'https://www.instagram.com/morbidlyocheese/', icon: 'https://simpleicons.org/icons/instagram.svg', description: '', label: 'instagram' },
                { title: 'discord server', url: 'https://discord.com/invite/8b5dM2hE6N', icon: 'https://simpleicons.org/icons/discord.svg', description: '', label: 'discord invite' },
                // { title: '', url: '', icon: '', description: '', label: 'github' },
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
} */
.page-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.content-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.link {
    margin: 5px;
    padding: 5px;
}

</style>
