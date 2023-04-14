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
                { title: 'twitter', url: 'https://twitter.com/morbidlyocheese', icon: 'https://simpleicons.org/icons/twitter.svg', description: '', label: 'twitter' },
                { title: 'instagram', url: 'https://www.instagram.com/morbidlyocheese/', icon: 'https://simpleicons.org/icons/instagram.svg', description: '', label: 'instagram' },
                { title: 'discord server', url: 'https://discord.com/invite/8b5dM2hE6N', icon: 'https://simpleicons.org/icons/discord.svg', description: '', label: 'discord invite' },
                { title: 'github', url: 'https://github.com/morbidlyocheese', icon: 'https://simpleicons.org/icons/github.svg', description: 'github', label: 'github' },
                { title: 'linkedin', url: 'https://www.linkedin.com/in/damienjacobson/', icon: 'https://simpleicons.org/icons/linkedin.svg', description: '', label: 'linkedin' },
                { title: 'email', url: 'emailto:morbidlyocheese@gmail.com', icon: 'https://simpleicons.org/icons/gmail.svg', description: 'email', label: 'email' },
                { title: 'resume', url: 'https://docs.google.com/document/d/e/2PACX-1vS2yMVlCtPWw2CsNfkq1JchQ0_cMFK3_OC3NvbRwm3mMCsjLseSHNCpSyjhpI_QzHeYFlpY7HjFp9c3/pub', icon: 'https://damienjacobson.netlify.app/data/social/resume-icon.png', description: '', label: 'resume' },
                { title: 'redbubble', url: 'https://www.redbubble.com/people/djangosolarboy/shop?asc=u&ref=account-nav-dropdown', icon: 'https://simpleicons.org/icons/redbubble.svg', description: '', label: 'redbubble' },
                { title: 'portfolio', url: 'https://damienjacobson.netlify.app/', icon: 'https://github.com/morbidlyocheese/new-portfolio/blob/primary/favicon-32x32.png?raw=true', description: '', label: 'portfolio' },
                { title: 'youtube', url: 'https://www.youtube.com/@morbidlyocheese/', icon: 'https://simpleicons.org/icons/youtube.svg', description: '', label: 'youtube' },
                // { title: '', url: '', icon: '', description: '', label: 'github' },
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
    filter: invert(.5) sepia(2) saturate(4) hue-rotate(280deg);
}

.icon:hover, .link:hover {
    filter: invert(.5) sepia(2) saturate(4) hue-rotate(370deg);
}

.name {
    color: #ffce00;
}
</style>
