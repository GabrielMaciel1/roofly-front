import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, Switch } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import db from '../database/database';
import useTheme from '../theme/useTheme';
import { createLoginStyles } from '../styles/LoginScreen.styles';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

const logoImage = require('../../assets/logo.png');

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const colors = useTheme();
  const styles = createLoginStyles(colors);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    try {
      const result = await db.getAllAsync(
        'SELECT * FROM users WHERE email = ? AND password = ?',
        [email, password]
      );

      if (result.length > 0) {
        await AsyncStorage.setItem('user', JSON.stringify(result[0]));
        navigation.replace('Home');
      } else {
        Alert.alert('Erro', 'Email ou senha incorretos');
      }
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao fazer login');
      console.error(error);
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
        <Text style={styles.label}>Email<Text style={{ color: 'red' }}>*</Text></Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={colors.description}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.label}>Senha<Text style={{ color: 'red' }}>*</Text></Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor={colors.description}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <View style={styles.rememberMeRow}>
          <Switch
            value={rememberMe}
            onValueChange={setRememberMe}
            trackColor={{ false: colors.dot, true: colors.button }}
            thumbColor={rememberMe ? colors.button : colors.dot}
            style={styles.checkbox}
          />
          <Text style={styles.rememberMeText}>Lembrar-me</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
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
