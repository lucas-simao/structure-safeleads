<script lang="ts">
import { Component, Vue, PropSync } from "vue-property-decorator";

@Component({})
export default class TestInformation extends Vue {
  @PropSync("dialogVisible", { type: Boolean }) syncedDialogVisible!: Boolean;
}
</script>
<template>
  <el-dialog title="" :visible.sync="syncedDialogVisible" width="40%">
    <div>
      <h1>
        O que usamos?
        <a href="https://vuejs.org/" target="_blanck"
          >Vuejs e seu ecossistema
        </a>
      </h1>
      <div class="info">
        <h2>Desafio</h2>
        <p>
          Criar uma listagem de projetos da forma que desejar, ao clicar em um
          desses itens da lista, exibir detalhe de um projeto como ilustrado na
          imagem!
        </p>
        <p style="margin-top: 0.5rem">
          <strong>OBSS:</strong> listagem de projetos mock registrado no state
          da aplicação (VUEX)
        </p>
      </div>
      <p>
        <a
          href="https://github.com/kaorun343/vue-property-decorator"
          target="_blanck"
          >biblioteca de componentes baseada em Vue 2.0</a
        >
      </p>
      <p>
        <a
          href="https://github.com/kaorun343/vue-property-decorator"
          target="_blanck"
          >Decorators</a
        >
      </p>
      <p>
        <a href="https://github.com/ktsn/vuex-class" target="_blanck"
          >Auxiliares de ligação para Vuex e vue-class-component</a
        >
      </p>
      <p>
        <a
          href="https://github.com/kaorun343/vue-property-decorator"
          target="_blanck"
          >Biblioteca oficial de utilitários de teste de unidade para Vue.js.</a
        >
      </p>
      <p>
        <a href="https://sass-lang.com/" target="_blanck">Sass</a>
      </p>
      <p>
        <a href="https://www.typescriptlang.org/" target="_blanck"
          >Typescript</a
        >
      </p>
    </div>
    <div slot="footer">
      <el-button type="primary" @click="syncedDialogVisible = false"
        >OK,ENTENDI!</el-button
      >
    </div>

    <div class="image">
      <h3>
        <a
          href="https://www.figma.com/proto/VxSgckER9oJnXX7U1Uqi9V/8.0-Projeto?node-id=451%3A261&scaling=min-zoom"
          target="_blanck"
          >Base do prototipo</a
        >
      </h3>
      <p>
        <strong> OBSS: </strong> é para ser desenvolvido somente a primeira
        parte, onde trás as informações do projeto e lead, para parte de
        detalhes <strong>ilustração na imgem</strong>
      </p>
      <a
        href="https://www.figma.com/proto/VxSgckER9oJnXX7U1Uqi9V/8.0-Projeto?node-id=451%3A261&scaling=min-zoom"
        target="_blanck"
      >
        <img src="@/assets/images/base.png" alt=""
      /></a>
    </div>
  </el-dialog>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 2rem;
  margin-bottom: 3rem;
}
a {
  margin-top: 1rem;
  display: block;
  font-size: 1.1rem;
}

.image {
  p {
    margin-top: 1rem;
  }
  h3 {
    margin-top: 2rem;
  }
  img {
    width: 100%;
  }
}

.info {
  h2 {
    margin: 2rem 0px 1rem 0px;
  }
}
</style>

