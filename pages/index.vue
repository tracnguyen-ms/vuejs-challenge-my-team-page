<template>
    <div class="my-team">
        <header class="my-team__main-title">
            <h1>The Creative crew</h1>
        </header>
        <div class="my-team__description">
            <h2>Who we are</h2>
            <p>
                We are a team of creatively diverse. driven. innovative individuals
                working in various locations from the world
            </p>
        </div>
        <div class="my-team__members">
            <article class="my-team__member-card">
                <img class="my-team__member-card__photo" v-bind:src="imageBaseUrl + '/photo1.png'" alt=""/>
                <div class="my-team__member-card__job-title">Product Owner</div>
                <h2 class="my-team__member-card__name">Bill Mahoney</h2>
            </article>
            <article class="my-team__member-card">
                <img class="my-team__member-card__photo" v-bind:src="imageBaseUrl + '/photo2.png'" alt=""/>
                <h2 class="my-team__member-card__name">Bill Mahoney</h2>
                <div class="my-team__member-card__job-title">Product Owner</div>
            </article>
            <article class="my-team__member-card">
                <img class="my-team__member-card__photo" v-bind:src="imageBaseUrl + '/photo3.png'" alt=""/>
                <h2 class="my-team__member-card__name">Bill Mahoney</h2>
                <div class="my-team__member-card__job-title">Product Owner</div>
            </article>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'LandingPage',
        data() {
            return {
                imageBaseUrl: './images'
            };
        },
    }
</script>