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
      <article v-for="member of members" :key="member" class="member-card">
        <img class="member-card__photo" :src="member.photoUrl" alt="" />
        <div class="member-card__job-title">
          {{ member.jobTitle }}
        </div>
        <h2 class="member-card__name">
          {{ member.name }}
        </h2>
      </article>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TeamPage',
  data() {
    return {
      members: [],
    };
  },
  async fetch() {
    this.members = await fetch(
      process.env.API_BASE_URL + '/members/'
    ).then((res) => res.json());
  },
  head() {
    return {
      title: 'My Team Page',
    };
  },
};
</script>
