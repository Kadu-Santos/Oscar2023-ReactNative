import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../../components/Button";
import { Back } from "../../components/Back";

export function TermsAndServices() {

  const navigation  = useNavigation();

  return (
    <View style={styles.container}>

      <Back onPress={() => navigation.navigate('Home')}/>

      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.heading}>Termos de Serviço</Text>

        <Text style={styles.body}>
          Bem-vindo ao Oscar 2023! Ao utilizar nossos
          serviços, você concorda com os seguintes termos:
        </Text>

        <Text style={styles.sectionTitle}>1. Coleta de Dados:</Text>
        <Text style={styles.body}>
          - Solicitamos e coletamos informações sobre sua idade para compreender melhor as
          preferências de diferentes faixas etárias em relação aos filmes recomendados.
        </Text>
        <Text style={styles.body}>
          - Perguntamos se você é estudante ou servidor para entender melhor as
          preferências com base em sua função na instituição.
        </Text>

        <Text style={styles.sectionTitle}>2. Finalidade da Coleta de Dados:</Text>
        <Text style={styles.body}>
          - Os dados coletados têm como objetivo principal realizar pesquisas para
          aprimorar nossos serviços e personalizar as recomendações de filmes de acordo
          com a idade e a função na instituição.
        </Text>

        <Text style={styles.sectionTitle}>3. Confidencialidade:</Text>
        <Text style={styles.body}>
          - Garantimos a confidencialidade dos dados fornecidos. As informações coletadas
          serão tratadas com o máximo de segurança e não serão compartilhadas com
          terceiros sem seu consentimento, exceto quando exigido por lei.
        </Text>

        <Text style={styles.sectionTitle}>4. Uso Responsável:</Text>
        <Text style={styles.body}>
          - Os dados coletados serão utilizados exclusivamente para melhorar a
          experiência do usuário e a qualidade das recomendações. Não utilizaremos as
          informações para propósitos diferentes dos mencionados neste documento.
        </Text>

        <Text style={styles.sectionTitle}>5. Consentimento:</Text>
        <Text style={styles.body}>
          - Ao utilizar o aplicativo, você consente com a coleta e o uso dos dados conforme
          descrito nos termos de serviço. Caso não concorde, por favor, descontinue o uso
          dos nossos serviços.
        </Text>

        <Text style={styles.sectionTitle}>6. Alterações nos Termos:</Text>
        <Text style={styles.body}>
          - Reservamo-nos o direito de alterar os termos de serviço a qualquer momento.
          Informaremos sobre as mudanças de forma apropriada. O uso continuado do aplicativo
          após as alterações constitui aceitação dos novos termos.
        </Text>

        <Text style={styles.sectionTitle}>7. Contato:</Text>
        <Text style={styles.body}>
          - Em caso de dúvidas ou preocupações sobre nossos termos de serviço, entre em
          contato conosco através dos canais disponibilizados no aplicativo.
        </Text>

        <Text style={styles.body}>
          Agradecemos por escolher nosso aplicativo de recomendação de filmes. Esperamos
          proporcionar a você uma experiência cinematográfica personalizada e agradável!
        </Text>

      </ScrollView>
      <Button title="Voltar" color="#7eb0ea" onPress={()=> (navigation.navigate('Home'))}/>
    </View>
  );
}
