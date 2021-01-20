<template>
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
</template>
<script>
export default {
  name: 'MyTeamMembers',
  props: {
    members: {
      type: Array,
      required: false,
    },
  },
};
</script>
