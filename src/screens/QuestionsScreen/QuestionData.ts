import { data } from "../../@types/data"

export const QuestionData: { [key: string]: data } = {
    'q.1': {
        backgroundOption: '#FFE59C',
        questionText: 'Pronto para chorar?',
        options: ['Já peguei o lenço', 'Sem filme meloso'],
        buttonRoute: ['q.2', 'q.3'],
        questionImage: require('../../../assets/images/questions/question-1.png'),
    },
    'q.2': {
        backgroundOption: '#90CAF9',
        questionText: 'Qual relacionamento é mais complicado para você?',
        options: ['Família', 'Amizade'],
        buttonRoute: ['q.4', 'q.5'],
        questionImage: require('../../../assets/images/questions/question-2.png'),
    },
    'q.3': {
        backgroundOption: '#93DBA8',
        questionText: 'Que tal um bando de ricaços malucos?',
        options: ['Parece divertido', 'Parece chato'],
        buttonRoute: ['q.6', 'q.7'],
        questionImage: require('../../../assets/images/questions/question-3.png'),
    },
    'q.4': {
        backgroundOption: '#FDC6C6',
        questionText: 'Por que é complicado?',
        options: ['Tenho que resolver tudo', 'Me sinto diferente'],
        buttonRoute: ['q.8', 'q.9'],
        questionImage: require('../../../assets/images/questions/question-4.png'),
    },
    'q.5': {
        backgroundOption: '#F8ECC6',
        questionText: 'Como você sabe quem é seu melhor amigo?',
        options: ['Bebendo todos os dias', 'Situações de vida e morte'],
        buttonRoute: ['f.1', 'f.2'],
        questionImage: require('../../../assets/images/questions/question-5.png'),
    },
    'q.6': {
        backgroundOption: '#FDC6C6',
        questionText: 'E com assassinatos?',
        options: ['Não. Apenas sexo, drogas e rock’n and roll', 'Sim!'],
        buttonRoute: ['f.3', 'q.13'],
        questionImage: require('../../../assets/images/questions/question-6.png'),
    },
    'q.7': {
        backgroundOption: '#D9EDFB',
        questionText: 'Gosta de épicos?',
        options: ['Não! Prefiro histórias mais pessoais', 'Gosto de grandes produções'],
        buttonRoute: ['f.4', 'q.10'],
        questionImage: require('../../../assets/images/questions/question-7.png'),
    },
    'q.8': {
        backgroundOption: '#D4EAFD',
        questionText: 'Qual é a ameaça que você enfrenta?',
        options: ['Distância dos filhos', 'Opressão religiosa'],
        buttonRoute: ['q.11', 'f.5'],
        questionImage: require('../../../assets/images/questions/question-8.png'),
    },
    'q.9': {
        backgroundOption: '#C9F1D4',
        questionText: 'Você encontra soluções para seus desafios?',
        options: ['Não muito', 'Sim, felizmente'],
        buttonRoute: ['f.6', 'q.12'],
        questionImage: require('../../../assets/images/questions/question-9.png'),
    },
    'q.10': {
        backgroundOption: '#EBF5CC',
        questionText: 'Que tipo de emoção você quer?',
        options: ['Alto astral', 'Desespero'],
        buttonRoute: ['f.7', 'f.8'],
        questionImage: require('../../../assets/images/questions/question-10.png'),
    },
    'q.11': {
        backgroundOption: '#FFC7BF',
        questionText: 'Qual comida te faz se sentir bem?',
        options: ['Bagel de tudo', 'Pizza'],
        buttonRoute: ['f.9', 'f.10'],
        questionImage: require('../../../assets/images/questions/question-11.png'),
    },
    'q.12': {
        backgroundOption: '#E3C3E9',
        questionText: 'Gosta de animação?',
        options: ['Sim', 'Não'],
        buttonRoute: ['f.11', 'f.12'],
        questionImage: require('../../../assets/images/questions/question-12.png'),
    },
    'q.13': {
        backgroundOption: '#fff480d8',
        questionText: 'Quem você quer ridicularizar?',
        options: ['Barões da tecnologia', 'Influencers'],
        buttonRoute: ['f.13', 'f.14'],
        questionImage: require('../../../assets/images/questions/question-13.png'),
    },
};