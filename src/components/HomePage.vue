<template>
    <div class="page-container">
        <div class="content-container">
            <div class="content">
                <img alt="moc logo" src="../assets/logo_cowbert.png" width="200" >
                <h1 class='name'>{{ name }}</h1>
                <a class='link' v-for="link in links" :key='link.label' :href="link.url" target="_blank">
                    <img class='icon' id='ico' :src="link.icon" :alt="link.label" width="16" height="16"> {{ link.title }}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'morbidlyocheese.com',
            links: [
                { title: 'Twitch', url: 'https://www.twitch.tv/morbidlyocheese', icon: 'https://simpleicons.org/icons/twitch.svg', description: '', label: 'twitch' },
                { title: 'Ko-fi', url: 'https://ko-fi.com/morbidlyocheese', icon: 'https://simpleicons.org/icons/kofi.svg', description: '', label: 'ko-fi' },
                { title: 'Bluesky', url: 'https://bsky.app/profile/morbidlyocheese.itch.io', icon: 'https://simpleicons.org/icons/bluesky.svg', description: '', label: 'bluesky' },
                { title: 'Straw.page', url: 'https://straw.page/draw?bio%3Dmorbidlyocheese', icon: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://straw.page/draw?bio%3Dmorbidlyocheese&size=128', description: '', label: 'straw.page' },
                { title: 'Instagram', url: 'https://www.instagram.com/morbidlyocheese/', icon: 'https://simpleicons.org/icons/instagram.svg', description: '', label: 'instagram' },
                { title: 'itch.io', url: 'https://morbidlyocheese.itch.io', icon: 'https://simpleicons.org/icons/itchdotio.svg', description: '', label: 'itch.io' },
                { title: 'Sketchfab', url: 'https://sketchfab.com/morbidlyocheese', icon: 'https://simpleicons.org/icons/sketchfab.svg', description: '', label: 'sketchfab' },
                { title: 'hashnode', url: 'https://hashnode.com/@morbidlyocheese', icon: 'https://simpleicons.org/icons/hashnode.svg', description: '', label: 'hashnode' },
                { title: 'daily.dev', url: 'https://app.daily.dev/morbidlyocheese', icon: 'https://simpleicons.org/icons/dailydotdev.svg', description: '', label: 'daily.dev' },
                { title: 'Github', url: 'https://github.com/morbidlyocheese', icon: 'https://simpleicons.org/icons/github.svg', description: 'github', label: 'github' },
                { title: 'Amazon Wishlist', url: 'https://www.amazon.com/hz/wishlist/ls/18Q2VMNYLFLK5?ref_=wl_share', icon: 'https://simpleicons.org/icons/amazon.svg', description: '', label: 'amazon wishlist' },
                { title: 'Redbubble', url: 'https://morbidlyocheese.redbubble.com', icon: 'https://simpleicons.org/icons/redbubble.svg', description: '', label: 'redbubble' },
                { title: 'Fourthwall', url: 'https://morbidlyocheese-shop.fourthwall.com', icon: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://fourthwall.com&size=128', description: '', label: 'fourthwall' },
                { title: 'Discord', url: 'https://discord.gg/XkW4fWGVUu', icon: 'https://simpleicons.org/icons/discord.svg', description: '', label: 'discord invite' },
                { title: 'Linkedin', url: 'https://www.linkedin.com/in/damienjacobson/', icon: 'https://simpleicons.org/icons/linkedin.svg', description: '', label: 'linkedin' },
                { title: 'Email', url: 'emailto:morbidlyocheese@gmail.com', icon: 'https://simpleicons.org/icons/gmail.svg', description: 'email', label: 'email' },
                { title: 'Resume', url: 'https://docs.google.com/document/d/e/2PACX-1vQ3zSfRq-B8I4vjhVYxIO-o9F6uE44kefd4a9Gu1sllp_rLo19kcK9kzLEIjAHIMaHmg7KqMwBigd33/pub', icon: 'https://dandelionjacobson.netlify.app/data/social/resume-icon.png', description: '', label: 'resume' },
                { title: 'Portfolio', url: 'https://dandelionjacobson.netlify.app/', icon: 'https://github.com/morbidlyocheese/new-portfolio/blob/primary/favicon-32x32.png?raw=true', description: '', label: 'portfolio' },
                { title: 'Youtube', url: 'https://www.youtube.com/@morbidlyocheese/', icon: 'https://simpleicons.org/icons/youtube.svg', description: '', label: 'youtube' },
                // { title: '', url: '', icon: '', description: '', label: '' },
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-container {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 30%;
}

.content-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px;
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
    text-decoration: none;
    flex-basis: 100%;
}

.name {
    margin-top: -10px;
}

.icon, .link {
    filter: brightness(0) saturate(100%) invert(42%) sepia(31%) saturate(529%) hue-rotate(161deg) brightness(94%) contrast(92%);
}

.icon:hover, .link:hover {
    filter: invert(.5) sepia(2) saturate(4) hue-rotate(280deg);
}

.name {
    color: #4B737C;
}
</style>
