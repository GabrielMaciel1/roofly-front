import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Image, Switch, ActivityIndicator } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import api from '../utils/api';
import { useTheme } from '../contexts/ThemeContext';
import { createLoginStyles } from '../styles/LoginScreen.styles';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StyledTextInput from '../components/common/StyledTextInput';

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

const logoImage = require('../../assets/logo-roofly.png');

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const colors = useTheme();
  const styles = createLoginStyles(colors);

  const handleLogin = async () => {
  if (!email || !password) {
    Alert.alert('Erro', 'Por favor, preencha todos os campos');
    return;
  }

  setLoading(true);

  try {
    const response = await api.post('/api/auth/login', { email, password });

    if (response.status === 200 && response.data) {
      if (response.data.user) {
        await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
      } else if (response.data.token) {
        await AsyncStorage.setItem('userToken', String(response.data.token));
      }
      navigation.replace('Home');
    } else {
      const errorMessage = response.data?.message || 'Resposta inesperada do servidor. Tente novamente.';
      Alert.alert('Erro', errorMessage);
    }

  } catch (error: any) {
    console.error(error);
    let errorMessage;
    if (error && error.response && error.response.data && error.response.data.message) {
      errorMessage = error.response.data.message;
    } else if (error && error.message) {
      errorMessage = error.message;
    } else {
      errorMessage = 'Ocorreu um erro desconhecido. Verifique sua conexão ou tente novamente.';
    }
    Alert.alert('Erro', errorMessage);
  } finally {
    setLoading(false);
  }
};
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logoCircle}>
          <Image 
            source={logoImage} 
            style={styles.logoImage}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <StyledTextInput
          label="Email"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <StyledTextInput
          label="Senha"
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          isPassword // Adicionado para o ícone de olho
        />
        <View style={styles.rememberMeRow}>
          <Switch
            value={rememberMe}
            onValueChange={setRememberMe}
            trackColor={{ false: colors.primary, true: colors.secondary }}
            thumbColor={rememberMe ? colors.secondary : colors.primary}
            style={styles.checkbox}
          />
          <Text style={styles.rememberMeText}>Lembrar-me</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}> 
        {loading ? (
          <ActivityIndicator color={colors.background} />
        ) : (
          <Text style={styles.buttonText}>Entrar</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>ou continue com</Text>
      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="facebook" size={20} color="#1877f3" />
          <Text style={styles.socialButtonText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="google" size={20} color="#ea4335" />
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerRow}>
        <Text style={styles.footerText}>Não tem uma conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.footerLink}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;