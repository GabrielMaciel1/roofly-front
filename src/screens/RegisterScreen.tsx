import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Alert, ActivityIndicator, Linking } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import Ionicons from '@expo/vector-icons/Ionicons';
import Checkbox from 'expo-checkbox';

import api from '../utils/api';
import { useTheme } from '../contexts/ThemeContext';
import { createRegisterStyles } from '../styles/RegisterScreen.styles';
import StyledTextInput from '../components/common/StyledTextInput';

type RegisterScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Register'>;
};

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const colors = useTheme();
  const styles = createRegisterStyles(colors);

  const handleRegister = async () => {
    if (!fullName || !email || !password || !confirmPassword) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    if (!agreeToTerms) {
      Alert.alert('Erro', 'Você deve concordar com os Termos de Serviço e a Política de Privacidade.');
      return;
    }

    setLoading(true);
    try {
      const response = await api.post('/api/auth/register', { name: fullName, email, password, phone });
      console.log(response)
      if (response.data.success) {
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
        navigation.navigate('Login');
      } else {
        Alert.alert('Erro', response.data.message || 'Erro ao cadastrar usuário.');
      }
    } catch (error: any) {
      console.log(error)
      const errorMessage = error.response?.data?.message || 'Erro ao cadastrar usuário. Verifique sua conexão ou tente novamente.';
      Alert.alert('Erro', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Ionicons name="person-add-outline" size={styles.avatarIcon.fontSize} color={styles.avatarIcon.color} />
      </View>
      <Text style={styles.title}>Create your account</Text>

      <StyledTextInput
        label="Full Name"
        placeholder="John Doe"
        value={fullName}
        onChangeText={setFullName}
      />
      <StyledTextInput
        label="Email"
        placeholder="example@youremail.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <StyledTextInput
        label="Password"
        placeholder="........."
        value={password}
        onChangeText={setPassword}
        isPassword
      />
      <StyledTextInput
        label="Confirm Password"
        placeholder="........."
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        isPassword
      />
      <StyledTextInput
        label="Phone"
        placeholder="+55 (11) 91234-5678"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <View style={styles.termsContainer}>
        <Checkbox
          value={agreeToTerms}
          onValueChange={setAgreeToTerms}
          color={agreeToTerms ? colors.primary : undefined}
        />
        <Text style={styles.termsText}>
          I agree to the <Text style={styles.termsLink} onPress={() => Linking.openURL('https://example.com/terms')}>Terms of Service</Text>
          and <Text style={styles.termsLink} onPress={() => Linking.openURL('https://example.com/privacy')}>Privacy Policy</Text>
        </Text>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={handleRegister} disabled={loading}>
        {loading ? (
          <ActivityIndicator color={colors.background} />
        ) : (
          <Text style={styles.buttonText}>Sign up</Text>
        )}
      </TouchableOpacity>

      <View style={styles.separatorContainer}>
        <View style={styles.separatorLine} />
        <Text style={styles.separatorText}>or continue with</Text>
        <View style={styles.separatorLine} />
      </View>

      <View style={styles.socialButtonContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="logo-facebook" size={24} color="#1877F2" />
          <Text style={styles.socialButtonText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="logo-google" size={24} color="#DB4437" />
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Already have an account? <Text style={{ fontWeight: 'bold' }}>Sign in</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;