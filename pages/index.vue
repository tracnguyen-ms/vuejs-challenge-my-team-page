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
      <MemberCard v-for="member of members" :key="member.id" :member="member" />
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
