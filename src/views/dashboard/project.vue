<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProjectDetails from '@/views/dashboard/components/ProjectDetails.vue'
import { mapState } from 'vuex';

@Component({
  components: {
    ProjectDetails
  },
  data() {
    return {
      projectId: 0
    }
  },
  computed: {
    ...mapState({
      projects: 'list'
    }),
    projectSelected () {
      return this.projects.length > 0 ? this.projects.find(v => v.id === Number(this.projectId)) : {}
    }
  },
  mounted() {
    this.projectId = this.$route.params.id
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
})

export default class Dashboard extends Vue {
  
}
</script>
<template>
  <section class="project">
    <div class="project__index">
      <ProjectDetails :projectDetails="projectSelected"/>
      <button @click="back()">Voltar</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .project {
    background: #E5E5E5;
  
    &__index {
      width: 100vw;
      min-height: 100vh;

       @media screen and (min-width: 768px) {
        width: calc(100vw - 60px);
        max-width: 1366px;
        height: 100vh;
        padding: 30px;
        margin: 0 auto;
      }

      button {
        background: none;
        font-weight: 500;
        font-size: 16px;
        color: #9B0B9B;
        border: 1px solid #9B0B9B;
        border-radius: 6px;
        padding: 8px 20px;
        margin: 15px 0;
        cursor: pointer;

        @media screen and (min-width: 768px) {
          margin-top: 15px;
        }
      }
    }
  }
</style>