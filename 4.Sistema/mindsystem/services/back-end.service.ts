import { IUsuario } from 'models/usuario.model'


export class BackEndService {

  public list1: IUsuario[] = [
    {
      id: "1",
      nome: "João",
      email: "joao@gmail.com",
      senha: null,
      tpAdmin: true,
      pedidos: null
    },
    {
      id: "2",
      nome: "Pedro",
      email: "pedro@gmail.com",
      senha: null,
      tpAdmin: true,
      pedidos: null
    },
    {
      id: "3",
      nome: "Maria",
      email: "maria@gmail.com",
      senha: null,
      tpAdmin: true,
      pedidos: null
    },

  ]

  // tslint:disable-next-line: variable-name
  public list2: IUsuario[] = [
    {
        id: "101",
        nome: "Fulano de tal",
        email: "fulano@teste.com.br",
        senha: null,
        tpAdmin: false,
        pedidos: [
          {
            doutor: {
                id: "1",
                nome: "João",
                email: "joao@gmail.com",
                senha: null,
                tpAdmin: true,
                pedidos: null
                  },
            data: new Date('2020-12-09 12:00:00'),
            plano: "IPASGO",
            obs: "aceitar, por favor.",
            status: false
        },
        {
          doutor: {
              id: "2",
              nome: "Pedro",
              email: "pedro@gmail.com",
              senha: null,
              tpAdmin: true,
              pedidos: null
                },
          data: new Date('2020-12-03 09:00:00'),
          plano: "IPASGO",
          obs: "tive varias crises essa semana",
          status: true
      }
      ]
    },
    {
        id: "102",
        nome: "Ciclano da Silva",
        email: "ciclano@paciente.com.br",
        senha: null,
        tpAdmin: false,
        pedidos: [{
            doutor: {
                id: "2",
                nome: "Pedro",
                email: "pedro@gmail.com",
                senha: null,
                tpAdmin: true,
                pedidos: null
                  },
            data: new Date('2020-12-06 18:00:00'),
            plano: "Sem plano",
            obs: "estou muito ansioso",
            status: true
        }
      ]
    },
    {
        id: "103",
        nome: "Beltrano Pereira",
        email: "beltrano@gmail.com.br",
        senha: null,
        tpAdmin: false,
        pedidos: [{
            doutor: {
                id: "2",
                nome: "Pedro",
                email: "pedro@gmail.com",
                senha: null,
                tpAdmin: true,
                pedidos: null
                  },
            data: new Date('2020-12-09 09:00:00'),
            plano: "UNIMED",
            obs: "com cindrome do panico",
            status: false
        }
      ]
    },
  ];

}
