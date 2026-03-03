import room1 from "@/assets/room-1.png";
import room3 from "@/assets/room-3.png";
import room4 from "@/assets/room-4.png";
import room5 from "@/assets/room-5.png";
import room6 from "@/assets/room-6.png";
import room7 from "@/assets/room-7.png";

export interface Room {
  id: string;
  image: string;
  name: string;
  desc: string;
  longDesc: string;
  features: string[];
  size: string;
  guests: number;
}

export const rooms: Room[] = [
  {
    id: "suite-executiva",
    image: room1,
    name: "Suíte Executiva",
    desc: "Elegância e funcionalidade para viajantes de negócios.",
    longDesc:
      "Concebida para o viajante de negócios exigente, a Suíte Executiva combina elegância contemporânea com funcionalidade prática. Equipada com uma ampla secretária de trabalho, internet de alta velocidade e uma cama king-size de excelência, esta suíte oferece tudo o que necessita para uma estadia produtiva e confortável à beira-mar. Os acabamentos de alta qualidade e a decoração sofisticada criam um ambiente inspirador, onde o trabalho e o descanso se fundem harmoniosamente.",
    features: [
      "Cama King-Size",
      "Vista Mar",
      "Minibar Completo",
      "Secretária de Trabalho",
      "Serviço de Quarto 24h",
      "TV Satélite 55\"",
      "Ar Condicionado",
      "Cofre Digital",
      "Wi-Fi de Alta Velocidade",
      "Casa de Banho Premium",
      "Roupão & Chinelos",
      "Produtos de Banho de Luxo",
    ],
    size: "45 m²",
    guests: 2,
  },
  {
    id: "suite-presidencial",
    image: room3,
    name: "Suíte Presidencial",
    desc: "O máximo em luxo com vistas panorâmicas sobre o mar.",
    longDesc:
      "A nossa suite mais exclusiva oferece uma experiência de luxo sem igual, com vistas panorâmicas sobre o Oceano Atlântico. Com uma ampla sala de estar, terraço privativo e jacuzzi, cada detalhe foi cuidadosamente concebido para proporcionar momentos verdadeiramente inesquecíveis. O serviço de mordomo personalizado está disponível para atender a cada necessidade, desde a chegada até à partida, garantindo que a sua estadia ultrapasse todas as expectativas.",
    features: [
      "Cama King-Size Premium",
      "Terraço Privativo",
      "Jacuzzi Privativo",
      "Sala de Estar",
      "Serviço de Mordomo",
      "Vista Panorâmica Mar",
      "Champanhe de Boas-Vindas",
      "Produtos de Banho de Luxo",
      "Serviço de Quarto 24h",
      "TV Satélite 65\"",
      "Sistema de Som Premium",
      "Cofre Digital",
    ],
    size: "95 m²",
    guests: 2,
  },
  {
    id: "quarto-luxo",
    image: room4,
    name: "Quarto Luxo",
    desc: "Conforto superior com acabamentos de alta qualidade.",
    longDesc:
      "O Quarto Luxo alia acabamentos de alta qualidade a um design sofisticado, criando um ambiente de requinte e bem-estar. Com vista para o mar e materiais de primeira escolha, cada detalhe foi pensado para elevar a sua experiência de descanso. A casa de banho premium com chuveiro de efeito chuva e produtos de banho selecionados completa uma experiência verdadeiramente luxuosa no coração de Lobito.",
    features: [
      "Cama Queen-Size",
      "Vista Mar",
      "Casa de Banho Premium",
      "Chuveiro de Efeito Chuva",
      "Minibar",
      "Roupão & Chinelos",
      "TV de Ecrã Plano 50\"",
      "Ar Condicionado",
      "Wi-Fi Gratuito",
      "Cofre Digital",
      "Serviço de Quarto",
      "Produtos de Banho Selecionados",
    ],
    size: "35 m²",
    guests: 2,
  },
  {
    id: "suite-junior",
    image: room5,
    name: "Suite Júnior",
    desc: "Sala de estar integrada com estilo e funcionalidade.",
    longDesc:
      "A Suite Júnior destaca-se pela sua sala de estar integrada, criando um espaço versátil e acolhedor, ideal para estadias prolongadas ou para quem aprecia ter uma área social privada. Combina o conforto de um quarto de luxo com a funcionalidade de uma sala de estar, onde poderá receber convidados ou simplesmente relaxar com toda a privacidade. O sofá-cama adicional garante flexibilidade para hóspedes extras.",
    features: [
      "Cama King-Size",
      "Sala de Estar",
      "Sofá-Cama",
      "Área de Jantar",
      "Vista Mar",
      "Minibar Completo",
      "TV de Ecrã Plano 55\"",
      "Wi-Fi Gratuito",
      "Ar Condicionado",
      "Casa de Banho Espaçosa",
      "Roupão & Chinelos",
      "Serviço de Quarto 24h",
    ],
    size: "55 m²",
    guests: 3,
  },
  {
    id: "quarto-familiar",
    image: room6,
    name: "Quarto Familiar",
    desc: "Espaço amplo com configuração flexível para famílias.",
    longDesc:
      "Concebido para acolher famílias com todo o conforto necessário, o Quarto Familiar dispõe de um espaço amplo e versátil com configuração flexível dos dormitórios. Com amenities dedicados às famílias e espaço suficiente para todos se moverem livremente, este quarto garante uma estadia tranquila e feliz para pais e filhos. A localização privilegiada permite que toda a família aprecie a beleza do mar.",
    features: [
      "Configuração Flexível",
      "Camas Adicionais",
      "Espaço Amplo",
      "Amenities Infantis",
      "Casa de Banho Espaçosa",
      "TV de Ecrã Plano 50\"",
      "Ar Condicionado",
      "Wi-Fi Gratuito",
      "Frigorífico",
      "Berço Disponível",
      "Cofre Digital",
      "Serviço de Quarto",
    ],
    size: "60 m²",
    guests: 4,
  },
  {
    id: "quarto-adaptado",
    image: room7,
    name: "Quarto Adaptado",
    desc: "Total acessibilidade e conforto sem compromisso.",
    longDesc:
      "O nosso Quarto Adaptado foi projetado para garantir total acessibilidade sem abrir mão do conforto e do estilo. Com um espaço generoso, casa de banho acessível com duche roll-in e equipamentos de suporte criteriosamente posicionados, este quarto proporciona independência e bem-estar a todos os nossos hóspedes. Acreditamos que o luxo deve ser acessível a todos, e este espaço é a prova disso.",
    features: [
      "Acessibilidade Total",
      "Casa de Banho Acessível",
      "Duche Roll-In",
      "Barras de Apoio",
      "Espaço de Circulação Amplo",
      "Cama Regulável em Altura",
      "Interfone de Emergência",
      "Wi-Fi Gratuito",
      "TV de Ecrã Plano",
      "Ar Condicionado",
      "Cofre Digital",
      "Serviço de Quarto 24h",
    ],
    size: "40 m²",
    guests: 2,
  },
];
