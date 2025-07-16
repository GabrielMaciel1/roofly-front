import React, { useState } from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';
import { createStyles } from './CreateListingScreen.styles';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../types';

// Placeholder components - In a real app, these would be imported from a UI library or custom-built
const ImagePicker = ({ max, onSelectImages }: { max: number, onSelectImages: (images: any[]) => void }) => {
  const colors = useTheme();
  const styles = createStyles(colors);
  return (
    <TouchableOpacity style={styles.imagePickerButton} onPress={() => Alert.alert('ImagePicker', 'Simulando seleção de imagens')}>
      <MaterialCommunityIcons name="camera-plus" size={40} color={colors.button} />
      <Text style={[styles.imagePickerText, { color: colors.button }]}>Adicione de 1 até {max} imagens do imóvel.</Text>
    </TouchableOpacity>
  );
};

const RadioButtonGroup = ({ options, selectedValue, onValueChange }: { options: string[], selectedValue: string, onValueChange: (value: string) => void }) => {
  const colors = useTheme();
  const styles = createStyles(colors);
  return (
    <View style={styles.radioGroupContainer}>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={[styles.radioButton, selectedValue === option && styles.radioButtonSelected]}
          onPress={() => onValueChange(option)}
        >
          <Text style={[styles.radioButtonText, selectedValue === option && styles.radioButtonTextSelected]}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const Select = ({ placeholder, options, selectedValue, onValueChange }: { placeholder: string, options: string[], selectedValue: string, onValueChange: (value: string) => void }) => {
  const colors = useTheme();
  const styles = createStyles(colors);
  return (
    <View style={styles.selectContainer}>
      <Text style={styles.selectPlaceholder}>{placeholder}</Text>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={[styles.selectOption, selectedValue === option && styles.selectOptionSelected]}
          onPress={() => onValueChange(option)}
        >
          <Text style={[styles.selectOptionText, selectedValue === option && styles.selectOptionTextSelected]}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const CurrencyInput = ({ placeholder, value, onChangeText }: { placeholder: string, value: string, onChangeText: (text: string) => void }) => {
  const colors = useTheme();
  const styles = createStyles(colors);
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={colors.textSecondary}
      keyboardType="numeric"
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const NumericInput = ({ placeholder, unit, value, onChangeText }: { placeholder: string, unit: string, value: string, onChangeText: (text: string) => void }) => {
  const colors = useTheme();
  const styles = createStyles(colors);
  return (
    <TextInput
      style={styles.input}
      placeholder={`${placeholder} (${unit})`}
      placeholderTextColor={colors.textSecondary}
      keyboardType="numeric"
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const Stepper = ({ min, max, value, onValueChange }: { min: number, max: number, value: number, onValueChange: (value: number) => void }) => {
  const colors = useTheme();
  const styles = createStyles(colors);
  return (
    <View style={styles.stepperContainer}>
      <TouchableOpacity style={styles.stepperButton} onPress={() => onValueChange(Math.max(min, value - 1))}>
        <Text style={styles.stepperButtonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.stepperValue}>{value}</Text>
      <TouchableOpacity style={styles.stepperButton} onPress={() => onValueChange(Math.min(max, value + 1))}>
        <Text style={styles.stepperButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const AutoCompleteInput = ({ placeholder, mask, value, onChangeText }: { placeholder: string, mask: string, value: string, onChangeText: (text: string) => void }) => {
  const colors = useTheme();
  const styles = createStyles(colors);
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={colors.textSecondary}
      keyboardType="numeric"
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const TextArea = ({ placeholder, rows, value, onChangeText }: { placeholder: string, rows: number, value: string, onChangeText: (text: string) => void }) => {
  const colors = useTheme();
  const styles = createStyles(colors);
  return (
    <TextInput
      style={[styles.input, { height: rows * 20 }]} // Approximate height based on rows
      placeholder={placeholder}
      placeholderTextColor={colors.textSecondary}
      multiline
      numberOfLines={rows}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const Button = ({ title, onPress, variant }: { title: string, onPress: () => void, variant: string }) => {
  const colors = useTheme();
  const styles = createStyles(colors);
  return (
    <TouchableOpacity style={[styles.button, variant === 'primary' && styles.primaryButton]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};


const CreateListingScreen: React.FC = () => {
  const colors = useTheme();
  const styles = createStyles(colors);
  const route = useRoute<CreateListingScreenRouteProp>();
  const { selectedCategory } = route.params || {};

  const [businessType, setBusinessType] = useState('Venda');
  const [category, setCategory] = useState(selectedCategory || '');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [cep, setCep] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [area, setArea] = useState('');
  const [bedrooms, setBedrooms] = useState(0);
  const [suites, setSuites] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [garageSpaces, setGarageSpaces] = useState(0);
  const [condoFee, setCondoFee] = useState('');
  const [iptu, setIptu] = useState('');
  const [furnished, setFurnished] = useState(false);
  const [petsAllowed, setPetsAllowed] = useState(false);
  const [financingAccepted, setFinancingAccepted] = useState(false);
  const [floor, setFloor] = useState('');
  const [elevator, setElevator] = useState(false);
  const [position, setPosition] = useState('');
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const handleSubmit = () => {
    Alert.alert('Anúncio Publicado', 'Seu anúncio foi enviado para revisão.');
    // Lógica para enviar os dados do formulário
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Criar Novo Anúncio</Text>

      <View style={styles.section}>
        <Text style={styles.label}>Fotos</Text>
        <ImagePicker max={20} onSelectImages={() => {}} />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Título</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Apartamento com 3 quartos no centro"
          placeholderTextColor={colors.textSecondary}
          value={title}
          onChangeText={setTitle}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Descrição/informações adicionais</Text>
        <TextArea
          placeholder="Ex: Apartamento espaçoso com vista para o mar..."
          rows={5}
          value={description}
          onChangeText={setDescription}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Tipo de negócio</Text>
        <RadioButtonGroup
          options={["Venda", "Aluguel", "Temporada"]}
          selectedValue={businessType}
          onValueChange={setBusinessType}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Preço</Text>
        <CurrencyInput
          placeholder="R$ 0,00"
          value={price}
          onChangeText={setPrice}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>CEP</Text>
        <AutoCompleteInput
          placeholder="CEP"
          mask="99999-999"
          value={cep}
          onChangeText={setCep}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Rua e Número</Text>
        <TextInput
          style={styles.input}
          placeholder="Rua, número (opcional)"
          placeholderTextColor={colors.textSecondary}
          value={streetNumber}
          onChangeText={setStreetNumber}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Área útil (m²)</Text>
        <NumericInput
          placeholder="Área útil"
          unit="m²"
          value={area}
          onChangeText={setArea}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Quartos</Text>
        <Stepper min={0} max={10} value={bedrooms} onValueChange={setBedrooms} />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Suítes</Text>
        <Stepper min={0} max={10} value={suites} onValueChange={setSuites} />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Banheiros</Text>
        <Stepper min={0} max={10} value={bathrooms} onValueChange={setBathrooms} />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Vagas de garagem</Text>
        <Stepper min={0} max={10} value={garageSpaces} onValueChange={setGarageSpaces} />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Condomínio (R$/mês)</Text>
        <CurrencyInput
          placeholder="Condomínio"
          value={condoFee}
          onChangeText={setCondoFee}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>IPTU (R$)</Text>
        <CurrencyInput
          placeholder="IPTU"
          value={iptu}
          onChangeText={setIptu}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.switchContainer}>
          <Text style={styles.label}>Mobiliado</Text>
          <Switch
            trackColor={{ false: colors.border, true: colors.primary }}
            thumbColor={furnished ? colors.button : colors.card}
            ios_backgroundColor={colors.border}
            onValueChange={setFurnished}
            value={furnished}
          />
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.switchContainer}>
          <Text style={styles.label}>Permitido animais</Text>
          <Switch
            trackColor={{ false: colors.border, true: colors.primary }}
            thumbColor={petsAllowed ? colors.button : colors.card}
            ios_backgroundColor={colors.border}
            onValueChange={setPetsAllowed}
            value={petsAllowed}
          />
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.switchContainer}>
          <Text style={styles.label}>Aceita financiamento</Text>
          <Switch
            trackColor={{ false: colors.border, true: colors.primary }}
            thumbColor={financingAccepted ? colors.button : colors.card}
            ios_backgroundColor={colors.border}
            onValueChange={setFinancingAccepted}
            value={financingAccepted}
          />
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Andar / Pavimentos</Text>
        <TextInput
          style={styles.input}
          placeholder="Andar (ex: 5 de 12)"
          placeholderTextColor={colors.textSecondary}
          value={floor}
          onChangeText={setFloor}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.switchContainer}>
          <Text style={styles.label}>Elevador</Text>
          <Switch
            trackColor={{ false: colors.border, true: colors.primary }}
            thumbColor={elevator ? colors.button : colors.card}
            ios_backgroundColor={colors.border}
            onValueChange={setElevator}
            value={elevator}
          />
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Posição (frente/fundos)</Text>
        <Select
          placeholder="Selecione a posição"
          options={["Frente", "Fundos", "Lateral"]}
          selectedValue={position}
          onValueChange={setPosition}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.switchContainer}>
          <Text style={styles.label}>Mostrar telefone</Text>
          <Switch
            trackColor={{ false: colors.border, true: colors.primary }}
            thumbColor={showPhoneNumber ? colors.button : colors.card}
            ios_backgroundColor={colors.border}
            onValueChange={setShowPhoneNumber}
            value={showPhoneNumber}
          />
        </Text>
      </View>

      <Button title="Publicar anúncio" onPress={handleSubmit} variant="primary" />
      <View style={{ height: 50 }} />
    </ScrollView>
  );
};

export default CreateListingScreen;
