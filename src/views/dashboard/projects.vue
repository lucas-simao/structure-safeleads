<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';

@Component({
  computed: {
    ...mapState({
      projects: 'list'
    }),
  }
})

export default class Projects extends Vue {
  openDetails(idProject: number) {
    this.$router.push({path: `project/${idProject}`})
  }
}
</script>
<template>
  <section class="projects">
    <div class="projects__index">
    <h1>Lista de Projetos</h1>
    <div class="projects__index__grid">
      <ul v-for="(p, index) in projects" :key="index">
        <div class="grid__card">
          <div>
            <div class="card__title">Cliente: <span>{{p.lead}}</span></div>
            <div class="card__title">Celular: <span>{{p.leadCelular}}</span></div>
            <div class="card__title">Email: <span>{{p.leadEmail}}</span></div>
          </div>
          <div class="card__actions">
              <el-button @click="openDetails(p.id)" type="primary">Detalhes</el-button>
          </div>
        </div>
      </ul>
    </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .projects {
    background: #E5E5E5;

    &__index {
      max-width: 1366px;
      height: 100vh;
      padding: 30px;
      margin: 0 auto;

      h1 {
        color: #84037E;
        font-size: 3rem;
        padding-bottom: 24px;
      }

      &__grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 8px;

        @media screen and (min-width: 768px) {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }

        .grid__card {
          display: grid;
          grid-template-columns: 1fr max-content;
          padding: 24px;
          background: #FFFFFF;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
          border-radius: 10px;

          .card__title {
            font-weight: 500;
            font-size: 14px;

            span {
              font-size: 15px;
              font-weight: 400;
            }
          }
          .card__actions {
            place-self: center;
          }
        }

      }
    }
  }
</style>