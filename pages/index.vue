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
            <article class="my-team__members__member-card" v-for="member of members">
                <img class="my-team__members__member-card__photo" v-bind:src="member.photoUrl" alt=""/>
                <div class="my-team__members__member-card__job-title">{{ member.jobTitle }}</div>
                <h2 class="my-team__members__member-card__name">{{ member.name }}</h2>
            </article>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'MembersPage',
        data() {
            return {
                members: []
            };
        },
        async fetch() {
            this.members = await fetch(
                'https://600646b73698a80017de1556.mockapi.io/api/v1/members/'
            ).then(res => res.json())
        }
    }
</script>