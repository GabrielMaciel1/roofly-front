import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

import { useTheme } from '../contexts/ThemeContext';
import { createForgotPasswordStyles } from '../styles/ForgotPasswordScreen.styles';
import StyledTextInput from '../components/common/StyledTextInput';

type ForgotPasswordScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ForgotPassword'>;
};

const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const colors = useTheme();
  const styles = createForgotPasswordStyles(colors);

  const handleRecoverPassword = async () => {
    if (!email) {
      Alert.alert('Erro', 'Por favor, informe seu email');
      return;
    }

    // TODO: Substituir por chamada à API de recuperação de senha
    try {
      // Simulação de chamada à API
      const response = await fetch('http://your-backend-api.com/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        Alert.alert(
          'Sucesso',
          'Um email foi enviado com instruções para recuperar sua senha'
        );
        navigation.navigate('Login');
      } else {
        const errorData = await response.json();
        Alert.alert('Erro', errorData.message || 'Email não encontrado');
      }
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao processar sua solicitação');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Senha</Text>
      <Text style={styles.description}>
        Digite seu email cadastrado para receber instruções de recuperação de senha
      </Text>
      <StyledTextInput
        label="Email"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleRecoverPassword}>
        <Text style={styles.buttonText}>Recuperar Senha</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Voltar para o login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPasswordScreen;