import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [
      {
        id: 1,
        area: 0,
        consumo: 509,
        corEtapaLead: null,
        dataAtualizacao: "2021-06-04T18:02:57.3755436",
        dataInclusao: "2021-06-04T09:18:38.9785894",
        descricao: null,
        enderecoLead: { id: 1801, cep: null, logradouro: null, numero: null, complemento: null, bairro: null, cidade: null },
        fluxo: ["Proposta Comercial Técnica", "PROPOSTA TÉCNICA APRESENTADA", "PROPOSTA TÉCNICA FINALIZADA"],
        etapaLead: "PROSPECÇÂO",
        imagem: null,
        imagemLead: null,
        lead: "Victória Brito",
        leadId: 1069,
        leadCelular: "41998554558",
        leadEmail: "email@email.com.br",
        nome: "TESTE 1",
        origemLead: { id: 8, nome: "Prospecção de Campo", statusLeadGatilho: null },
        prePropostaAceita: "Não",
        prePropostaAceitaId: 0,
        prePropostaAceitaPotencia: 0,
        prePropostaAceitaValor: 0,
        previsaoFechamento: "Não",
        qtdFotos: 0,
        qtdPrePropostas: 4,
        qtdVendas: 0,
        quantidadeUCs: 1,
        status: { id: 1, ativo: false, excluido: false, dataExclusao: null, nome: "INFORMAÇÕES INCOMPLETAS ", cor: null },
        statusLead: "1º Contato",
        tecnicoResponsavel: "Sem Técnico",
        tecnicoResponsavelId: 0,
        tipo: "Comercial Grupo B",
        tipoLead: "PF",
        vendasValorTotal: 0,
        vendedorResponsavel: "SafeLeads",
        vendedorResponsavelId: 1,
      },
      {
        id: 2,
        area: 0,
        consumo: 509,
        corEtapaLead: null,
        dataAtualizacao: "2021-06-04T18:02:57.3755436",
        dataInclusao: "2021-06-04T09:18:38.9785894",
        descricao: null,
        enderecoLead: { id: 1801, cep: null, logradouro: null, numero: null, complemento: null, bairro: null, cidade: null },
        fluxo: ["Proposta Comercial Técnica", "PROPOSTA TÉCNICA APRESENTADA", "PROPOSTA TÉCNICA FINALIZADA"],
        etapaLead: "PROSPECÇÂO",
        imagem: null,
        imagemLead: null,
        lead: "Victória Brito",
        leadId: 1069,
        leadCelular: "41998554558",
        leadEmail: "email@email.com.br",
        nome: "TESTE 2",
        origemLead: { id: 8, nome: "Prospecção de Campo", statusLeadGatilho: null },
        prePropostaAceita: "Não",
        prePropostaAceitaId: 0,
        prePropostaAceitaPotencia: 0,
        prePropostaAceitaValor: 0,
        previsaoFechamento: "Não",
        qtdFotos: 0,
        qtdPrePropostas: 4,
        qtdVendas: 0,
        quantidadeUCs: 1,
        status: { id: 1, ativo: false, excluido: false, dataExclusao: null, nome: "INFORMAÇÕES INCOMPLETAS ", cor: null },
        statusLead: "1º Contato",
        tecnicoResponsavel: "Sem Técnico",
        tecnicoResponsavelId: 0,
        tipo: "Comercial Grupo B",
        tipoLead: "PF",
        vendasValorTotal: 0,
        vendedorResponsavel: "SafeLeads",
        vendedorResponsavelId: 1,
      },
      {
        id: 3,
        area: 0,
        consumo: 509,
        corEtapaLead: null,
        dataAtualizacao: "2021-06-04T18:02:57.3755436",
        dataInclusao: "2021-06-04T09:18:38.9785894",
        descricao: null,
        enderecoLead: { id: 1801, cep: null, logradouro: null, numero: null, complemento: null, bairro: null, cidade: null },
        fluxo: ["Proposta Comercial Técnica", "PROPOSTA TÉCNICA APRESENTADA", "PROPOSTA TÉCNICA FINALIZADA"],
        etapaLead: "PROSPECÇÂO",
        imagem: null,
        imagemLead: null,
        lead: "Victória Brito",
        leadId: 1069,
        leadCelular: "41998554558",
        leadEmail: "email@email.com.br",
        nome: "TESTE 3",
        origemLead: { id: 8, nome: "Prospecção de Campo", statusLeadGatilho: null },
        prePropostaAceita: "Não",
        prePropostaAceitaId: 0,
        prePropostaAceitaPotencia: 0,
        prePropostaAceitaValor: 0,
        previsaoFechamento: "Não",
        qtdFotos: 0,
        qtdPrePropostas: 4,
        qtdVendas: 0,
        quantidadeUCs: 1,
        status: { id: 1, ativo: false, excluido: false, dataExclusao: null, nome: "INFORMAÇÕES INCOMPLETAS ", cor: null },
        statusLead: "1º Contato",
        tecnicoResponsavel: "Sem Técnico",
        tecnicoResponsavelId: 0,
        tipo: "Comercial Grupo B",
        tipoLead: "PF",
        vendasValorTotal: 0,
        vendedorResponsavel: "SafeLeads",
        vendedorResponsavelId: 1,
      },
      {
        id: 4,
        area: 0,
        consumo: 509,
        corEtapaLead: null,
        dataAtualizacao: "2021-06-04T18:02:57.3755436",
        dataInclusao: "2021-06-04T09:18:38.9785894",
        descricao: null,
        enderecoLead: { id: 1801, cep: null, logradouro: null, numero: null, complemento: null, bairro: null, cidade: null },
        fluxo: ["Proposta Comercial Técnica", "PROPOSTA TÉCNICA APRESENTADA", "PROPOSTA TÉCNICA FINALIZADA"],
        etapaLead: "PROSPECÇÂO",
        imagem: null,
        imagemLead: null,
        lead: "Victória Brito",
        leadId: 1069,
        leadCelular: "41998554558",
        leadEmail: "email@email.com.br",
        nome: "TESTE 4",
        origemLead: { id: 8, nome: "Prospecção de Campo", statusLeadGatilho: null },
        prePropostaAceita: "Não",
        prePropostaAceitaId: 0,
        prePropostaAceitaPotencia: 0,
        prePropostaAceitaValor: 0,
        previsaoFechamento: "Não",
        qtdFotos: 0,
        qtdPrePropostas: 4,
        qtdVendas: 0,
        quantidadeUCs: 1,
        status: { id: 1, ativo: false, excluido: false, dataExclusao: null, nome: "INFORMAÇÕES INCOMPLETAS ", cor: null },
        statusLead: "1º Contato",
        tecnicoResponsavel: "Sem Técnico",
        tecnicoResponsavelId: 0,
        tipo: "Comercial Grupo B",
        tipoLead: "PF",
        vendasValorTotal: 0,
        vendedorResponsavel: "SafeLeads",
        vendedorResponsavelId: 1,
      },
      {
        id: 5,
        area: 0,
        consumo: 509,
        corEtapaLead: null,
        dataAtualizacao: "2021-06-04T18:02:57.3755436",
        dataInclusao: "2021-06-04T09:18:38.9785894",
        descricao: null,
        enderecoLead: { id: 1801, cep: null, logradouro: null, numero: null, complemento: null, bairro: null, cidade: null },
        fluxo: ["Proposta Comercial Técnica", "PROPOSTA TÉCNICA APRESENTADA", "PROPOSTA TÉCNICA FINALIZADA"],
        etapaLead: "PROSPECÇÂO",
        imagem: null,
        imagemLead: null,
        lead: "Victória Brito",
        leadId: 1069,
        leadCelular: "41998554558",
        leadEmail: "email@email.com.br",
        nome: "TESTE 5",
        origemLead: { id: 8, nome: "Prospecção de Campo", statusLeadGatilho: null },
        prePropostaAceita: "Não",
        prePropostaAceitaId: 0,
        prePropostaAceitaPotencia: 0,
        prePropostaAceitaValor: 0,
        previsaoFechamento: "Não",
        qtdFotos: 0,
        qtdPrePropostas: 4,
        qtdVendas: 0,
        quantidadeUCs: 1,
        status: { id: 1, ativo: false, excluido: false, dataExclusao: null, nome: "INFORMAÇÕES INCOMPLETAS ", cor: null },
        statusLead: "1º Contato",
        tecnicoResponsavel: "Sem Técnico",
        tecnicoResponsavelId: 0,
        tipo: "Comercial Grupo B",
        tipoLead: "PF",
        vendasValorTotal: 0,
        vendedorResponsavel: "SafeLeads",
        vendedorResponsavelId: 1,
      },
      {
        id: 6,
        area: 0,
        consumo: 509,
        corEtapaLead: null,
        dataAtualizacao: "2021-06-04T18:02:57.3755436",
        dataInclusao: "2021-06-04T09:18:38.9785894",
        descricao: null,
        enderecoLead: { id: 1801, cep: null, logradouro: null, numero: null, complemento: null, bairro: null, cidade: null },
        fluxo: ["Proposta Comercial Técnica", "PROPOSTA TÉCNICA APRESENTADA", "PROPOSTA TÉCNICA FINALIZADA"],
        etapaLead: "PROSPECÇÂO",
        imagem: null,
        imagemLead: null,
        lead: "Victória Brito",
        leadId: 1069,
        leadCelular: "41998554558",
        leadEmail: "email@email.com.br",
        nome: "teste7",
        origemLead: { id: 8, nome: "Prospecção de Campo", statusLeadGatilho: null },
        prePropostaAceita: "Não",
        prePropostaAceitaId: 0,
        prePropostaAceitaPotencia: 0,
        prePropostaAceitaValor: 0,
        previsaoFechamento: "Não",
        qtdFotos: 0,
        qtdPrePropostas: 4,
        qtdVendas: 0,
        quantidadeUCs: 1,
        status: { id: 1, ativo: false, excluido: false, dataExclusao: null, nome: "INFORMAÇÕES INCOMPLETAS ", cor: null },
        statusLead: "1º Contato",
        tecnicoResponsavel: "Sem Técnico",
        tecnicoResponsavelId: 0,
        tipo: "Comercial Grupo B",
        tipoLead: "PF",
        vendasValorTotal: 0,
        vendedorResponsavel: "SafeLeads",
        vendedorResponsavelId: 1,
      }

    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
