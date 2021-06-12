<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { mapState } from 'vuex'

@Component({
  computed: {
    ...mapState({
      projects: 'list'
    }),
  },
  data() {
    return {
      input: '000'
    }
  },
})
export default class ProjectDetails extends Vue {
  @Prop(Object) readonly projectDetails: Object | {};
  formatDate(dateFormat: string) {
    return dateFormat.slice(0, 10).split('-').reverse().join('/')
  }
}
</script>
<template>
  <section class="project">
    <div class="project__first">
      <div class="first__title">
        <img src="@/assets/images/rectangle-30.svg" alt="Image title">
        <div>
          <div>
            <span class="title">{{projectDetails.nome}}</span>
            <el-button type="text" size="mini" class="button">EDITAR</el-button>
          </div>
          <span class="subtitle">Criado: {{formatDate(projectDetails.dataInclusao)}} | Alterado: {{formatDate(projectDetails.dataAtualizacao)}}</span>
        </div>
      </div>
      <div class="first__grid">
        <div class="grid__address">
          <div class="address__grid">
            <span class="text--14-bold-black">Tipo:</span><span class="grid--normal">Residencial</span>
          </div>
          <div class="address__grid">
            <span class="text--14-bold-black">Dono:</span><span class="grid--normal">Usuário</span>
          </div>
          <div class="address__grid">
            <span class="text--14-bold-black">Loja:</span><span class="grid--normal">{{projectDetails.vendedorResponsavel}}</span>
          </div>
          <div class="address__date">
            <span class="date__title text--14-bold-black">Previsão de Fechamento:</span>
            <div class="date__select">
              Escolher Data
              <img src="@/assets/images/arrow-down.svg" alt="seta para baixo">
            </div>
          </div>
        </div>
        <div class="grid__project">
          <span class="text--14-bold-black">Fluxo de Projeto:</span>
          <p class="project__text">Este projeto não pertence a nenhuma etapa ou status. Altere abaixo:</p>
          <div class="project__flux-information">Proposta Comercial Técnica</div>
          <el-button type="text" size="mini" class="project__action">VER FLUXO COMPLETO</el-button>
        </div>
        <div class="grid__task">
          <span class="text--14-bold-black task__title">Tarefas:</span>
          <input v-model="input" type="number" name="number" class="task__input task--yellow">
          <input v-model="input" type="number" name="number" class="task__input task--green">
          <input v-model="input" type="number" name="number" class="task__input task--red">
        </div>
      </div>
    </div>
    <div class="project__line"></div>
    <div class="project__second">
      <div class="second__title">
        <img src="@/assets/images/person.svg" alt="Icone cliente">
        <div>
          <div>
            <span class="title">{{projectDetails.lead}}</span>
            <el-button type="text" size="mini" class="button">VER LEAD</el-button>
          </div>
          <span v-if="projectDetails.tipoLead === 'PF'" class="subtitle">Pessoa Física</span>
          <span v-else class="subtitle">Pessoa Jurídica</span>
        </div>
      </div>
      <div class="second__values">
        <div class="values__grid">
          <span class="text--14-bold-black">Celular:</span><span class="grid--normal">{{projectDetails.leadCelular}}</span>
          <span class="text--14-bold-black">E-mail:</span><span class="grid--normal">{{projectDetails.leadEmail}}</span>
        </div>
      </div>
      <div class="second__selects">
        <div class="selects__grid">
          <div>
            <span class="grid__title text--14-bold-black">Responsável Comercial:</span>
            <div class="grid__select">
              Escolher Usuário
              <img src="@/assets/images/arrow-down.svg" alt="seta para baixo">
            </div>
          </div>
          <div>
            <span class="grid__title text--14-bold-black">Responsável Técnico:</span>
            <div class="grid__select">
              Escolher Usuário
              <img src="@/assets/images/arrow-down.svg" alt="seta para baixo">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="project__action">
      <button>
        <img src="@/assets/images/icon-play.svg" alt="Icone play">
        <span>Vídeo Tutorial</span>
      </button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .project {
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
    background: #ffffff !important;
    border-radius: 4px;

    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 2fr max-content 1fr max-content;
      gap: 8px;
    }

    &__first {
      padding: 31px 32px;
      .first__title {
        display: grid;
        grid-template-columns: max-content 1fr;
        gap: 15px;
        place-content: center;

        .title {
          font-family: Roboto;
          font-style: normal;
          font-weight: 500;
          font-size: 22px;
          color: #1E032E;
        }
        button {
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 12px;
          line-height: 14px;
          color: #9B0B9B;
          padding-left: 10px;
          padding-bottom: 3px;
        }
        .subtitle {
          font-family: Roboto;
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 14px;
          color: #A59AAB;
        }
      }
      .first__grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
        padding-top: 20px;

        @media screen and (min-width: 768px) {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          padding-top: 48px;
        }
        
        .grid__address {
          @media screen and (min-width: 768px) {
            padding-left: 67px;
          }

          .address__grid {
            display: grid;
            grid-template-columns: 40px max-content;
            gap: 12px;

            .grid--normal {
              font-family: Roboto;
              font-style: normal;
              font-weight: normal;
              font-size: 14px;
              line-height: 18px;
              color: #000000;
              padding-bottom: 8px;
            }
          }
          .address__date {
            padding-top: 30px;

            .date__select {
              margin-top: 10px;
              font-family: Roboto;
              font-style: normal;
              font-weight: normal;
              font-size: 14px;
              line-height: 18px;
              border: 1px solid #aeaeae;
              padding: 5px 10px;
              border-radius: 8px;
              width: 118px;
              color: #606266;

              img {
                padding-left: 12px;
              }
            }
          }
        }
        .grid__project {
          .project__text {
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 14px;
            color: rgba(0, 0, 0, 0.5);
            padding: 18px 0 45px 0;
          }
          .project__flux-information {
            background: #136B13;
            border-radius: 12px;
            color: #FFFFFF;
            padding: 4px 12px;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 13px;
            width: 180px;
          }
          .project__action {
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 12px;
            line-height: 14px;
          }
        }
        .grid__task {
          display: grid;
          grid-template-columns: max-content;

          @media screen and (min-width: 768px) {
            justify-content: center;
          }


          .task__title {
            padding-bottom: 17px;
          }
          .task__input {
            width: 40px;
            height: 32px;
            border-radius: 4px;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
            margin-bottom: 8px;
            padding-left: 16px;
          }
          .task--yellow {
            border: 1px solid #FEC277;
            color: #BA7E34;
          }
          .task--green {
            border: 1px solid #35D0A9;
            color: #178267;
          }
          .task--red {
            border: 1px solid #C0333A;
            color: #85141A;
          }
        }
      }
    }
    .project__line {
      border: 2px solid #EFF1F4;
      margin: 10px 0;
    }
    .project__second {
      padding: 38px 36px;

      .second__title {
        display: grid;
        grid-template-columns: max-content 1fr;
        gap: 10px;
        place-content: center;

        img {
          width: 12px;
          height: 24px;
        }
        .title {
          font-family: Roboto;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          color: #1E032E;
        }
        button {
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 12px;
          line-height: 14px;
          color: #9B0B9B;
          padding-left: 10px;
          padding-bottom: 3px;
        }
        .subtitle {
          font-family: Roboto;
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 14px;
          color: #A59AAB;
        }
      }
      .second__values {
        padding-top: 34px;

        .values__grid {
          display: grid;
          grid-template-columns: 45px max-content;
          gap: 12px;

          .grid--normal {
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 18px;
          }
        }
      }
      .second__selects {
        .selects__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 41px;
          padding-top: 70px;

          .grid__select {
            margin-top: 10px;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 18px;
            border: 1px solid #aeaeae;
            padding: 5px 10px;
            border-radius: 8px;
            width: 130px;
            color: #606266;

            img {
              padding-left: 12px;
            }
          }
        }
      }
    }
    .project__action {
      padding: 20px 36px;

      @media screen and (min-width: 768px) {
        padding: 20px 20px 0 0;
      }
      
      button {
        display: grid;
        grid-template-columns: max-content 1fr;
        gap: 10px;
        align-items: center;
        background: #ffffff;
        color: #1763A9;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 12.4194px;
        line-height: 15px;
        border-radius: 6px;
        text-align: center;
        padding: 10px;
        border: 1px solid #1763A9;
      }
    }

    .text--14-bold-black {
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      color: #000000;
    }
    button {
      cursor: pointer;
    }
  }
</style>

