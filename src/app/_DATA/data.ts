import { Orixa } from "../types/Orixa";

import Bara from '@/app/assets/bara.jpg';
import Ogum from '@/app/assets/ogum.jpg';
import Iansa from '@/app/assets/iansa.jpg';
import Xango from '@/app/assets/xango.jpg';
import OdeOtim from '@/app/assets/odeOtim.jpg';
import Xapana from '@/app/assets/xapana.jpg';
import Ossain from '@/app/assets/ossain.jpg';
import Oba from '@/app/assets/oba.jpg';
import Oxum from '@/app/assets/oxum.jpg';
import Iemanja from '@/app/assets/iemanja.png';
import Oxala from '@/app/assets/oxala.jpg';
import ibedji from '@/app/assets/ibedji.jpeg';

export const orixas: Orixa[] = [
  {
    id: 1,
    name: 'Bará',
    avatar: Bara,
    description: 'Bará é o orixá das portas e caminhos. É o guardião das entradas e saídas, também conhecido como Exu, o mensageiro entre os humanos e os deuses.',
    greeting:"Alúpo ou Lalúpo - Dia da Semana - Segunda-feira e Sexta (Bará Agelú) - Número: 07 e seus múltiplos - Cor: Vermelho",
    song: 'Caminho de Bará, Bará, meu senhor',
    reza: 'Bará, senhor das portas, abra meus caminhos e afaste os obstáculos.',
  },
  {
    id: 2,
    name: 'Ogum',
    avatar: Ogum,
    description: 'Ogum é o orixá da guerra, da tecnologia e da força. Ele é o patrono dos ferreiros e dos guerreiros, símbolo de coragem e resistência.',
    greeting:"Ogunhê. - Dia da semana - segunda-feira para Ogum Avagãn e quinta-feira para os demais. - Número - 07 e seus múltiplos. - Cor - vermelha e verde. - Guia - vermelho e verdes escuros.",
    song: 'Ogum, Ogum, salve Ogum, guerreiro da batalha!',
    reza: 'Ogum, grande guerreiro, proteja-me com sua força e sabedoria.',
  },
  {
    id: 3,
    name: 'Iansã',
    avatar: Iansa,
    description: 'Iansã, também conhecida como Oyá, é a orixá dos ventos, tempestades e das mudanças. Ela é guerreira e protetora das mulheres e das crianças.',
    greeting:"Epaiêio. - Dia da semana - terça-feira. - Número - 07 e seus múltiplos. - Cor - vermelha e branca. - Guia - 01 conta vermelha, 01 conta branca.",
    song: 'Iansã, Iansã, senhora dos ventos!',
    reza: 'Iansã, rainha dos ventos e tempestades, que a sua força traga proteção e mudanças positivas.',
  },
  {
    id: 4,
    name: 'Xangô',
    avatar: Xango,
    description: 'Xangô é o orixá da justiça, do trovão e do fogo. Ele é o rei dos orixás, símbolo de poder, autoridade e justiça.',
    greeting:"Kawo Kabiyesi - Dia da semana - quarta-feira. - Número - 06 e seus múltiplos. - Cor - branca e vermelha. - Guia - 06 conta vermelha, 06 conta branca.",
    song: 'Xangô, Xangô, rei do trovão!',
    reza: 'Xangô, senhor da justiça e do fogo, traga equilíbrio e justiça para minha vida.',
  },
  {
    id: 5,
    name: 'Ibeji',
    avatar: ibedji,
    description: 'Ibejis são divindades gêmeas infantis, é um orixá duplo e têm seu próprio culto,obrigações e iniciação dentro do ritual.Divide-se em masculino e feminino, (gêmeos). Cultua-se como erês ligado aqualidades de xangô e oxun. Popularmente conhecido como Xangô e Oxun de Ibeji',
    greeting:"Saudação: Ieieu Oxum Ibêdje e Caô Cabecile Xangô Ibêdje - Dia da Semana: Sábado e Terça-feira - Da Comemoração: 27 de Setembro - Número: 6 e seus múltiplos (quando Xangô Ibêdje) e 8 e seus múltiplos (quandoOxum Ibêdje) - Cor: Amarelo claro (Oxum Ibêdje) e vermelho e branco (Xangô Ibêdje)",
    song: 'Ibeji, Ibeji, a alegria do mundo!',
    reza: 'Ibeji, pequenos e poderosos, que a sua alegria ilumine meu caminho.',
  },
  {
    id: 6,
    name: 'Obá',
    avatar: Oba,
    description: 'Orixá do rio Níger, terceira mulher de Xangô. Orixá, embora feminina, temida,forte,energética, considerada mais forte que muitos Orixás masculinos. Obá divindade feminina, guerreira que às vezes é também citada como caçadora. Irmã de Oyá (Iansã).',
    greeting:'Exó - Dia da Semana: Quarta-feira - Número: 07 e seus múltiplos - Cor: Rosa - Guia: toda rosa',
    song: 'Obá, Obá, senhora da força!',
    reza: 'Obá, protetora da mulher, fortaleça minha fé e coragem.',
  },
  {
    id: 7,
    name: 'Odé/Otim',
    avatar: OdeOtim,
    description: 'Orixás yorubanos da caça e do mato, no batuque,religião afro-brasileira do Rio Grande do Sul.',
    greeting:'Saudação: Oquebambo ou Oquebambo Okê Arô - Dia da Semana: Sexta-feira, pois é o dia da Iemanjá, que é mãe de Odé, para outros Segunda-feira. - Número: 07 e seus múltiplos - Cor: Azul forte e branco para Odé e Azul forte e rosa para Otim. - Guia: 01 conta azul, 01 conta branca, 01 conta azul para Odé 01 conta rosa, 01 conta azul, 01conta rosa para Otim.',
    song: 'Odé, Odé, senhor da caça!',
    reza: 'Odé, protetor da natureza, que a sua força traga fartura e equilíbrio.',
  },
  {
    id: 8,
    name: 'Ossanha',
    avatar: Ossain,
    description: 'Ossanha é o orixá da vegetação e das plantas medicinais. Ele é o guardião das ervas e cura física e espiritual.',
    greeting:"Saudação: Eu-Eu - Dia da Semana: Sexta-feira - Número: 07 e seus múltiplos - Cor: Verde e branco - Guia: 01 conta verde e 01 conta branca.",
    song: 'Ossanha, Ossanha, senhor das ervas!',
    reza: 'Ossanha, guardião das plantas e da cura, que sua sabedoria e medicina me protejam.',
  },
  {
    id: 9,
    name: 'Xapanã',
    avatar: Xapana,
    description: 'Xapanã é o orixá da doença e da cura. Ele é responsável por curar as doenças e trazer a saúde ao corpo e à alma.',
    greeting:"Saudação: Abaô - Dia da Semana: Quarta-feira. - Número: 07 e seus múltiplos - Cor: Vermelho e Preto. - Guia: uma conta vermelha e uma preta.",
    song: 'Xapanã, Xapanã, senhor da cura!',
    reza: 'Xapanã, grande curador, restaure minha saúde física e espiritual.',
  },
  {
    id: 10,
    name: 'Oxum',
    avatar: Oxum,
    description: 'Oxum é a orixá do amor, da fertilidade e da beleza. Ela é a deusa dos rios e das águas doces, trazendo harmonia e prosperidade.',
    greeting:"Saudação: Ieieu ou Orí Iê Ieô - Dia da Semana: Sábado - Número: 08 e seus múltiplos - Cor: Todos os tons de amarelo (amarelo claro: Oxum Pandá, amarelo escuro:Oxum Demum, amarelo ouro: Oxum Docô). - Guia: toda amarela de um mesmo tom, o tom varia com o Orixá (amarelo claro:Oxum Pandá, amarelo escuro: Oxum Demum, amarelo ouro: Oxum Docô).",
    song: 'Oxum, Oxum, rainha dos rios!',
    reza: 'Oxum, mãe da abundância, que sua luz traga amor e prosperidade para minha vida.',
  },
  {
    id: 11,
    name: 'Iemanjá',
    avatar: Iemanja,
    description: 'Iemanjá é a orixá do mar, das águas salgadas e das mães. Ela é a grande mãe, protetora das famílias e das mulheres.',
    greeting:"Saudação: Omio Odô. - Dia da Semana: Sexta-feira - Número: 08 e seus múltiplos - Cor: azul claro - Guia: toda azul claro ou azul claro com branco.",
    song: 'Iemanjá, Iemanjá, mãe das águas!',
    reza: 'Iemanjá, mãe das águas, cubra-me com sua proteção e sabedoria.',
  },
  {
    id: 12,
    name: 'Oxalá',
    avatar: Oxala,
    description: 'Oxalá é o orixá da criação e da paz. Ele é o pai dos orixás, símbolo da sabedoria e da serenidade.',
    greeting:"Saudação: Epaô Baba - Dia da Semana: Domingo - Número: 08 e seus múltiplos - Cor: Branco e Branco com preto para Oxalá de Oromilaia. - Guia: toda branca ou 01 branca, 01 preta, 01 branca para Oxalá de Orumiláia.",
    song: 'Oxalá, Oxalá, pai de todos os orixás!',
    reza: 'Oxalá, pai criador, traga paz e equilíbrio para minha vida.',
  }
];
