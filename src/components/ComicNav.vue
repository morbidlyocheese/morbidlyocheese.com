<template>
    <div class="page-container">
        <div class="content-container">
            <div class="content">
                <h1>{{ msg }}</h1>
                <li class='comics' v-for="comic in comics" :key='comic.comicTitle' target="_blank">
                    <router-link :to="{ name: 'comic', params: { comicTitle: comic.name } }">
                        <img :src='comic.comicCover' :alt='comic.name'>
                    </router-link>
                    <h2 class="comic-name">{{ comic.name }}</h2>
                    <p class="comic-desc">{{ comic.comicDesc }}</p>
                </li>
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
                    comicTitle: 'Comic Name',
                    comicDesc: 'A brief description of the comic',
                    comicCover: '/path/to/comic/cover.png',
                    comicCharacters: [
                        { 
                            name: 'Character Name',
                            tbd: 'rest of character info to be displayed',
                        },
                        // rest of characters
                    ],
                    tableOfContents: [
                        {
                            pageNumber: 1,
                            pageTitle: 'Page Title',
                            pageDesc: 'A brief description of the page',
                            pageImg: '/path/to/page/img.png',
                        }
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
