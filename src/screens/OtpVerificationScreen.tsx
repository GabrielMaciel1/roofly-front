import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, TextInput, ScrollView, AppState, KeyboardAvoidingView, Platform } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { useTheme } from '../contexts/ThemeContext';
import { useAuthStore } from '../store/authStore';
import api from '../utils/api';
import { createOtpVerificationStyles } from '../styles/OtpVerificationScreen.styles';
import Icon from 'react-native-vector-icons/Ionicons';

type OtpVerificationScreenProps = NativeStackScreenProps<RootStackParamList, 'OtpVerification'>;

const OtpVerificationScreen: React.FC<OtpVerificationScreenProps> = ({ route, navigation }) => {
  const { email } = route.params;
  const { login } = useAuthStore();
  const colors = useTheme();
  const styles = createOtpVerificationStyles(colors);

  const [otp, setOtp] = useState<string[]>(new Array(4).fill(''));
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(30);
  const appState = useRef(AppState.currentState);

  const inputs = useRef<TextInput[]>([]);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        setTimer(30);
      }
      appState.current = nextAppState;
    });
    return () => { subscription.remove() };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleVerifyOtp = async (code: string) => {
    setLoading(true);
    try {
      const response = await api.post('/api/auth/verify-otp', { email, otp: code });
      if (response.status === 200 && response.data.token) {
        login(response.data);
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      } else {
        Alert.alert('Erro', response.data?.message || 'Código OTP inválido ou expirado.');
        setOtp(new Array(4).fill(''));
        inputs.current[0]?.focus();
      }
    } catch (error: any) {
      const msg = error.response?.data?.message || 'Erro ao verificar OTP. Tente novamente.';
      Alert.alert('Erro', msg);
      setOtp(new Array(4).fill(''));
      inputs.current[0]?.focus();
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (timer > 0) return;
    setLoading(true);
    try {
      await api.post('/api/auth/resend-otp', { email });
      Alert.alert('Sucesso', 'Um novo código OTP foi enviado para o seu e-mail.');
      setTimer(30);
    } catch (error: any) {
      const msg = error.response?.data?.message || 'Erro ao reenviar OTP. Tente novamente.';
      Alert.alert('Erro', msg);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputs.current[index + 1]?.focus();
    }

    if (text === '' && index > 0) {
      inputs.current[index - 1]?.focus();
    }

    const otpCode = newOtp.join('');
    if (otpCode.length === 4) {
      handleVerifyOtp(otpCode);
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="chevron-back" size={20} color={colors.text} />
        </TouchableOpacity>

        <View>
          <Text style={styles.title}>
            Digite o <Text style={styles.titleColored}>código</Text>
          </Text>
          <Text style={styles.subtitle}>
            Enviamos um código de 4 dígitos para o e-mail <Text style={styles.emailText}>{email}</Text>.
          </Text>

          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={ref => inputs.current[index] = ref as TextInput}
                style={styles.otpBox}
                keyboardType="numeric"
                maxLength={1}
                onChangeText={text => handleInputChange(text, index)}
                value={digit}
                onKeyPress={({ nativeEvent }) => {
                  if (nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
                    inputs.current[index - 1]?.focus();
                  }
                }}
              />
            ))}
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.timerContainer}>
            <Icon name="time-outline" size={20} color={colors.text} />
            <Text style={styles.timerText}>00:{timer.toString().padStart(2, '0')}</Text>
          </View>

          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>Não recebeu o código? </Text>
            <TouchableOpacity onPress={handleResendOtp} disabled={timer > 0}>
              <Text style={[styles.resendLink, { opacity: timer > 0 ? 0.5 : 1 }]}>Reenviar OTP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default OtpVerificationScreen;