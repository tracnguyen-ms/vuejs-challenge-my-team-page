<template>
  <div class="member-card">
    <img class="member-card__photo" :src="member.photoUrl" alt="" />
    <div class="member-card__job-title">
      {{ member.jobTitle }}
    </div>
    <h2 class="member-card__name">
      {{ member.name }}
    </h2>
  </div>
</template>
<script>
export default {
  name: 'MemberCardDetails',
  props: {
    member: {
      type: Object,
      required: true,
    },
  },
};
</script>
