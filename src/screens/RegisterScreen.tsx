// RegisterScreen.tsx
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

type RegisterScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Register'>
}

type RegisterFormData = {
  fullName: string
  email: string
  password: string
  confirmPassword: string
  phone: string
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    defaultValues: { fullName: '', email: '', password: '', confirmPassword: '', phone: '' }
  })
  const [avatarUri, setAvatarUri] = useState<string | null>(null)
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [loading, setLoading] = useState(false)
  const colors = useTheme()
  const styles = createRegisterStyles(colors)

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
      allowsEditing: true,
      aspect: [1, 1]
    })
    if (!result.cancelled) {
      setAvatarUri(result.uri)
    }
  }

  const handleRegister = async (data: RegisterFormData) => {
    if (data.password !== data.confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.')
      return
    }
    if (!agreeToTerms) {
      Alert.alert('Erro', 'Você deve concordar com os Termos de Serviço e a Política de Privacidade.')
      return
    }
    setLoading(true)
    try {
      const form = new FormData()
      form.append('name', data.fullName)
      form.append('email', data.email)
      form.append('password', data.password)
      form.append('phone', data.phone)
      if (avatarUri) {
        form.append('avatar', {
          uri: avatarUri,
          name: 'avatar.jpg',
          type: 'image/jpeg'
        } as any)
      }
      const response = await api.post('/api/auth/register', form, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      if (response.data.success) {
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso!')
        navigation.navigate('Login')
      } else {
        Alert.alert('Erro', response.data.message || 'Erro ao cadastrar usuário.')
      }
    } catch (err: any) {
      const msg = err.response?.data?.message || 'Erro ao cadastrar usuário. Verifique sua conexão.'
      Alert.alert('Erro', msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={pickImage} style={styles.avatarContainer}>
        {avatarUri
          ? <Image source={{ uri: avatarUri }} style={styles.avatarImage} />
          : <>
              <Ionicons name="cloud-upload-outline" style={styles.avatarIcon} />
              <Text style={styles.uploadText}>Upload Photo</Text>
            </>
        }
        
      </TouchableOpacity>
      <Text style={styles.title}>Create your account</Text>

      <Controller
        control={control}
        name="fullName"
        rules={{ required: 'Nome completo é obrigatório.' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <StyledTextInput
            label="Nome Completo"
            placeholder="John Doe"
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
            label="Email"
            placeholder="example@youremail.com"
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
            label="Senha"
            placeholder="••••••••"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            isPassword
          />
        )}
      />
      {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

      <Controller
        control={control}
        name="confirmPassword"
        rules={{ required: 'Confirmação é obrigatória.' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <StyledTextInput
            label="Confirmar Senha"
            placeholder="••••••••"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            isPassword
          />
        )}
      />
      {errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword.message}</Text>}

      <Controller
        control={control}
        name="phone"
        render={({ field: { onChange, onBlur, value } }) => (
          <StyledTextInput
            label="Telefone"
            placeholder="+55 (11) 91234-5678"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="phone-pad"
          />
        )}
      />
      {errors.phone && <Text style={styles.error}>{errors.phone.message}</Text>}

      <View style={styles.termsContainer}>
        <Checkbox
          value={agreeToTerms}
          onValueChange={setAgreeToTerms}
          color={agreeToTerms ? colors.button : undefined}
        />
        <Text style={styles.termsText}>
          I agree to the{' '}
          <Text style={styles.link} onPress={() => Linking.openURL('https://example.com/terms')}>
            Terms of Service
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={() => Linking.openURL('https://example.com/privacy')}>
            Privacy Policy
          </Text>.
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={handleSubmit(handleRegister)}
        disabled={loading}
      >
        {loading
          ? <ActivityIndicator color={colors.card} />
          : <Text style={styles.buttonText}>Create Account</Text>
        }
      </TouchableOpacity>

      <View style={styles.separatorContainer}>
        <View style={styles.separatorLine} />
        <Text style={styles.separatorText}>or continue with</Text>
        <View style={styles.separatorLine} />
      </View>

      <TouchableOpacity style={styles.socialButton}>
        <Ionicons name="logo-facebook" size={20} color="#1877F2" />
        <Text style={styles.socialButtonText}>Continue with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Ionicons name="logo-google" size={20} color="#DB4437" />
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.signInText}>
          Already have an account? <Text style={styles.signInLink}>Sign in</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default RegisterScreen
