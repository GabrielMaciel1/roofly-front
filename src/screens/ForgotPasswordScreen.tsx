import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import api from '../utils/api';
import { useTheme } from '../contexts/ThemeContext';
import { createForgotPasswordStyles } from '../styles/ForgotPasswordScreen.styles';
import StyledTextInput from '../components/common/StyledTextInput';

type ForgotPasswordScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ForgotPassword'>;
};

const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const colors = useTheme();
  const styles = createForgotPasswordStyles(colors);

  const handleRecoverPassword = async () => {
    if (!email) {
      Alert.alert('Erro', 'Por favor, informe seu email');
      return;
    }

    setLoading(true);
    try {
      const response = await api.post('/api/auth/forgot-password', { email });

      if (response.status === 200) {
        Alert.alert(
          'Sucesso',
          'Um email foi enviado com instruções para recuperar sua senha'
        );
        navigation.navigate('Login');
      } else {
        const errorData = response.data;
        Alert.alert('Erro', errorData.message || 'Email não encontrado');
      }
    } catch (error: any) {
      const message = error.response?.data?.message || 'Ocorreu um erro ao processar sua solicitação';
      Alert.alert('Erro', message);
    } finally {
      setLoading(false);
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
      <TouchableOpacity style={styles.button} onPress={handleRecoverPassword} disabled={loading}>
        {loading ? <ActivityIndicator color={colors.background} /> : <Text style={styles.buttonText}>Recuperar Senha</Text>}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Voltar para o login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPasswordScreen;
