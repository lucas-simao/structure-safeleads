<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TestInformation from '@/views/dashboard/components/TestInformation.vue'
@Component({
  components: {
    TestInformation
  }
})
export default class Dashboard extends Vue {
  visible: boolean = false;
}
</script>
<template>
    <section id="dash" class="dash">
      <TestInformation :dialogVisible.sync="visible"  />
     <header>
        <h1>
        Olá, tudo bem? 
        Estamos muito felizes pelo seu interesse em fazer parte do nosso grupo de freelancers S2
      </h1>
        <p class="dash__paragraph--first">
          É imprescindível, que você veja nossa estrutura de pasta  <a href="https://gitlab.com/rogerio.costa1/structure-safeleads/-/wikis/padr%C3%A3o-do-projeto" target="_blanck">aqui</a>
        </p>
         <p>
          Para ajudar no entendimento do fluxo de operação do projeto, decidimos adotar um novo padrão de estrutura e dividir os módulos do projeto no formato DDD:
          <a href="https://gitlab.com/rogerio.costa1/structure-safeleads/-/wikis/estrutura-do-projeto" target="_blanck">veja aqui</a>
        </p>
     </header>
     <el-button type="primary" @click="visible = true">
       Informações do teste
     </el-button>
    </section>
</template>

<style lang="scss" scoped src="./styles/_index.scss"></style>