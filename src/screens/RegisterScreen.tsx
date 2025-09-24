
import React, { useState } from 'react'
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Linking,
  Image
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types'
import Ionicons from '@expo/vector-icons/Ionicons'
import Checkbox from 'expo-checkbox'
import { useForm, Controller } from 'react-hook-form'
import api from '../utils/api'
import { useTheme } from '../contexts/ThemeContext'
import { createRegisterStyles } from '../styles/RegisterScreen.styles'
import StyledTextInput from '../components/common/StyledTextInput'
import { useAuthStore } from '../store/authStore';

type RegisterScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Register'>
}

type RegisterFormData = {
  fullName: string
  email: string
  password: string
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  const { login } = useAuthStore();
  const { control, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    defaultValues: { fullName: '', email: '', password: '' }
  })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const colors = useTheme()
  const styles = createRegisterStyles(colors)

  const handleRegister = async (data: RegisterFormData) => {
    setLoading(true)
    try {
      const response = await api.post('/api/auth/register', {
        fullName: data.fullName,
        email: data.email,
        password: data.password,
      }, {
        headers: { 'Content-Type': 'application/json' }
      })
      if (response.status === 200 && response.data) { // Alterado para 200, pois não criará o usuário ainda, apenas enviará o OTP
        navigation.navigate('OtpVerification', { email: data.email }); // Navegar para a tela de OTP
      } else {
        Alert.alert('Erro', response.data.message || 'Erro ao solicitar OTP.')
      }
    } catch (err: any) {
      const msg = err.response?.data?.message || 'Erro ao solicitar OTP. Verifique sua conexão.'
      Alert.alert('Erro', msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="chevron-back" size={20} color={colors.text} />
      </TouchableOpacity>

      <Text style={styles.title}>
        Crie sua <Text style={styles.titleColored}>conta</Text>
      </Text>
      <Text style={styles.subtitle}>Preencha os campos abaixo para criar sua conta.</Text>

      <Controller
        control={control}
        name="fullName"
        rules={{ required: 'Nome completo é obrigatório.' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <StyledTextInput
            iconName="account"
            placeholder="Nome Completo"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value} 
          />
        )}
      />
      {errors.fullName && <Text style={styles.error}>{errors.fullName.message}</Text>}

      <Controller
        control={control}
        name="email"
        rules={{
          required: 'Email é obrigatório.',
          pattern: { value: /\S+@\S+\.\S+/, message: 'Email inválido.' }
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <StyledTextInput
            iconName="email-outline"
            placeholder="E-mail"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        )}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      <Controller
        control={control}
        name="password"
        rules={{
          required: 'Senha é obrigatória.',
          minLength: { value: 6, message: 'Mínimo de 6 caracteres.' }
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <StyledTextInput
            iconName="lock"
            placeholder="Senha"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            isPassword
          />
        )}
      />
      {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

      <View style={styles.termsAndShowPasswordContainer}>
        <TouchableOpacity onPress={() => Linking.openURL('https://example.com/terms')}>
          <Text style={styles.termsText}>Termos de Serviço</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.showPasswordText}>
            {showPassword ? 'Ocultar senha' : 'Mostrar senha'}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={handleSubmit(handleRegister)}
        disabled={loading}
      >
        {loading
          ? <ActivityIndicator color={colors.card} />
          : <Text style={styles.buttonText}>Registrar</Text>
        }
      </TouchableOpacity>

      <View style={styles.separatorContainer}>
        <View style={styles.separatorLine} />
        <Text style={styles.separatorText}>ou continuar com</Text>
        <View style={styles.separatorLine} />
      </View>

      <View style={styles.socialLoginContainer}> {/* Usar o mesmo container da tela de login */}
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../../assets/Google-logo.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.socialButtonMargin]}>
          <Image source={require('../../assets/Facebook - normal.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.signInText}>
          Já tem uma conta? <Text style={styles.signInLink}>Entrar</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default RegisterScreen
