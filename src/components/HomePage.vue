<template>
    <div class="page-container">
        <div class="content-container">
            <div class="content">
                <img alt="moc logo" src="../assets/logo_cowbert.png" width="200" >
                <h1 class='name'>{{ name }}</h1>
                <a class='link' v-for="link in links" :key='link.label' :href="link.url" target="_blank">
                    <img class='icon' :src="link.icon" :alt="link.label" width="16" height="16" color="pink"> {{ link.title }}
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
                { title: 'twitch', url: 'https://www.twitch.tv/morbidlyocheese', icon: 'https://simpleicons.org/icons/twitch.svg', description: '', label: 'twitch' },
                { title: 'ko-fi', url: 'https://ko-fi.com/morbidlyocheese', icon: 'https://simpleicons.org/icons/kofi.svg', description: '', label: 'ko-fi' },
                { title: 'instagram', url: 'https://www.instagram.com/morbidlyocheese/', icon: 'https://simpleicons.org/icons/instagram.svg', description: '', label: 'instagram' },
                { title: 'se tips', url: 'https://streamelements.com/morbidlyocheese-3cd99/tip', icon: 'https://s7.ezgif.com/tmp/ezgif-7-4946ceb84f.png', description: '', label: 'streamelements tips' },
                { title: 'amazon wishlist', url: 'https://www.amazon.com/hz/wishlist/ls/18Q2VMNYLFLK5?ref_=wl_share', icon: 'https://simpleicons.org/icons/amazon.svg', description: '', label: 'amazon wishlist' },
                { title: 'redbubble', url: 'https://morbidlyocheese.redbubble.com', icon: 'https://simpleicons.org/icons/redbubble.svg', description: '', label: 'redbubble' },
                { title: 'fourthwall', url: 'https://morbidlyocheese-shop.fourthwall.com', icon: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://fourthwall.com&size=128', description: '', label: 'fourthwall' },
                { title: 'itch.io', url: 'https://morbidlyocheese.itch.io', icon: 'https://simpleicons.org/icons/itchdotio.svg', description: '', label: 'itch.io' },
                { title: 'discord server', url: 'https://discord.gg/XkW4fWGVUu', icon: 'https://simpleicons.org/icons/discord.svg', description: '', label: 'discord invite' },
                { title: 'twitter', url: 'https://twitter.com/morbidlyocheese', icon: 'https://simpleicons.org/icons/twitter.svg', description: '', label: 'twitter' },
                { title: 'github', url: 'https://github.com/morbidlyocheese', icon: 'https://simpleicons.org/icons/github.svg', description: 'github', label: 'github' },
                { title: 'linkedin', url: 'https://www.linkedin.com/in/damienjacobson/', icon: 'https://simpleicons.org/icons/linkedin.svg', description: '', label: 'linkedin' },
                { title: 'email', url: 'emailto:morbidlyocheese@gmail.com', icon: 'https://simpleicons.org/icons/gmail.svg', description: 'email', label: 'email' },
                { title: 'resume', url: 'https://docs.google.com/document/d/e/2PACX-1vS2yMVlCtPWw2CsNfkq1JchQ0_cMFK3_OC3NvbRwm3mMCsjLseSHNCpSyjhpI_QzHeYFlpY7HjFp9c3/pub', icon: 'https://damienjacobson.netlify.app/data/social/resume-icon.png', description: '', label: 'resume' },
                { title: 'portfolio', url: 'https://damienjacobson.netlify.app/', icon: 'https://github.com/morbidlyocheese/new-portfolio/blob/primary/favicon-32x32.png?raw=true', description: '', label: 'portfolio' },
                { title: 'youtube', url: 'https://www.youtube.com/@morbidlyocheese/', icon: 'https://simpleicons.org/icons/youtube.svg', description: '', label: 'youtube' },
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
}

.icon, .link {
    filter: invert(.5) sepia(2) saturate(4) hue-rotate(370deg);
}

.icon:hover, .link:hover {
    filter: invert(.5) sepia(2) saturate(4) hue-rotate(280deg);
}

.name {
    color: #ffce00;
}
</style>
