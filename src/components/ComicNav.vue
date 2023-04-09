<template>
    <div class="page-container">
        <div class="content-container">
            <div class="content">
                <h1>{{ msg }}</h1>
                <a class='link' v-for="link in links" :key='link.label' :href="link.url" target="_blank">
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
            name: 'ComicNav',
            comics: [
                { 
                    comicTitle: '',
                    comicDesc: '',
                    comicCover: '',
                    comicCharacters: [
                        
                    ],
                    comicPages: [

                    ]
                },
            ],
            links: [
                { title: 'twitch', url: 'https://www.twitch.tv/morbidlyocheese', icon: 'https://simpleicons.org/icons/twitch.svg', description: '', label: 'twitch' }
            ]
        }
    }
}
</script>

<style scoped>
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
