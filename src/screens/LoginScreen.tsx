import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import api from '../utils/api';
import { useTheme } from '../contexts/ThemeContext';
import { createLoginStyles } from '../styles/LoginScreen.styles';
import StyledTextInput from '../components/common/StyledTextInput';
import { useAuthStore } from '../store/authStore';

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

const headerImage = require('../../assets/undraw_city_life_gnpr 1.png');
const googleLogo = require('../../assets/Google-logo.png');
const facebookLogo = require('../../assets/Facebook - normal.png');

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const { login } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
        const { user, token } = response.data;
        login(user, token);
        navigation.replace('Home');
      } else {
        const errorMessage = response.data?.message || 'Resposta inesperada do servidor. Tente novamente.';
        Alert.alert('Erro', errorMessage);
      }
    } catch (error: any) {
      let errorMessage;
      if (error?.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error?.message) {
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
      <Image source={headerImage} style={styles.headerImage} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          Bem-vindo(a) à <Text style={styles.titleColored}>Roofly</Text>
        </Text>
        <Text style={styles.subtitle}>Acesse sua conta para continuar e explorar as melhores opções de imóveis.</Text>

        <StyledTextInput
          iconName="email-outline" // Added iconName
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <StyledTextInput
          iconName="lock" // New icon (closed padlock)
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />

        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.showPasswordText}>
              {showPassword ? 'Ocultar senha' : 'Mostrar senha'}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin} disabled={loading}>
          {loading ? (
            <ActivityIndicator color={colors.buttonText} />
          ) : (
            <Text style={styles.loginButtonText}>Entrar</Text>
          )}
        </TouchableOpacity>

        <View style={styles.separatorContainer}>
          <View style={styles.separatorLine} />
          <Text style={styles.separatorText}>OU</Text>
          <View style={styles.separatorLine} />
        </View>

        <View style={styles.socialLoginContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={googleLogo} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, styles.socialButtonMargin]}>
            <Image source={facebookLogo} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Não tem uma conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerLink}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
