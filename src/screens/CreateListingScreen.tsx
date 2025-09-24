import React from 'react';
import { View, Text, TextInput, Switch, ScrollView } from 'react-native';

import { useCreateListingScreen } from '../hooks/useCreateListingScreen';
import { ImagePicker } from '../components/form/ImagePicker';
import { RadioButtonGroup } from '../components/form/RadioButtonGroup';
import { Select } from '../components/form/Select';
import { CurrencyInput } from '../components/form/CurrencyInput';
import { NumericInput } from '../components/form/NumericInput';
import { Stepper } from '../components/form/Stepper';
import { AutoCompleteInput } from '../components/form/AutoCompleteInput';
import { TextArea } from '../components/form/TextArea';
import { Button } from '../components/form/Button';

const CreateListingScreen: React.FC = () => {
  
  const {
    businessType, category, title, description, price, cep, streetNumber, area, bedrooms, suites, bathrooms, garageSpaces, condoFee, iptu, furnished, petsAllowed, financingAccepted, floor, elevator, position, showPhoneNumber, set, handleSubmit
  } = useCreateListingScreen();

  return (
    <ScrollView className="flex-1 bg-white p-[16px]"> {/* container */}
      <Text className="text-[24px] font-bold text-[#0F172A] mb-[24px] text-center">Criar Novo Anúncio</Text> {/* title */}

      <View className="mb-[16px]"> {/* section */}
        <Text className="text-[16px] font-bold text-[#0F172A] mb-[8px]">Fotos</Text> {/* label */}
        <ImagePicker max={20} onSelectImages={() => {}} />
      </View>

      <View className="mb-[16px]"> {/* section */}
        <Text className="text-[16px] font-bold text-[#0F172A] mb-[8px]">Título</Text> {/* label */}
        <TextInput
          className="bg-white text-[#0F172A] rounded-[8px] p-[12px] text-[16px] border border-[#E6EEF0]" // input
          placeholder="Ex: Apartamento com 3 quartos no centro"
          placeholderTextColor={colors.description} // textSecondary
          value={title}
          onChangeText={(value) => set({ title: value })}
        />
      </View>

      <View className="mb-[16px]"> {/* section */}
        <Text className="text-[16px] font-bold text-[#0F172A] mb-[8px]">Descrição/informações adicionais</Text> {/* label */}
        <TextArea
          placeholder="Ex: Apartamento espaçoso com vista para o mar..."
          rows={5}
          value={description}
          onChangeText={(value) => set({ description: value })}
        />
      </View>

      <View className="mb-[16px]"> {/* section */}
        <Text className="text-[16px] font-bold text-[#0F172A] mb-[8px]">Tipo de negócio</Text> {/* label */}
        <RadioButtonGroup
          options={["Venda", "Aluguel", "Temporada"]}
          selectedValue={businessType}
          onValueChange={(value) => set({ businessType: value as any })}
        />
      </View>

      <View className="mb-[16px]"> {/* section */}
        <Text className="text-[16px] font-bold text-[#0F172A] mb-[8px]">Preço</Text> {/* label */}
        <CurrencyInput
          placeholder="R$ 0,00"
          value={price}
          onChangeText={(value) => set({ price: value })}
        />
      </View>

      <View className="mb-[16px]"> {/* section */}
        <Text className="text-[16px] font-bold text-[#0F172A] mb-[8px]">CEP</Text> {/* label */}
        <AutoCompleteInput
          placeholder="CEP"
          mask="99999-999"
          value={cep}
          onChangeText={(value) => set({ cep: value })}
        />
      </View>

      <View className="mb-[16px]"> {/* section */}
        <Text className="text-[16px] font-bold text-[#0F172A] mb-[8px]">Rua e Número</Text> {/* label */}
        <TextInput
          className="bg-white text-[#0F172A] rounded-[8px] p-[12px] text-[16px] border border-[#E6EEF0]" // input
          placeholder="Rua, número (opcional)"
          placeholderTextColor={colors.description} // textSecondary
          value={streetNumber}
          onChangeText={(value) => set({ streetNumber: value })}
        />
      </View>

      <View className="mb-[16px]"> {/* section */}
        <Text className="text-[16px] font-bold text-[#0F172A] mb-[8px]">Área útil (m²)</Text> {/* label */}
        <NumericInput
          placeholder="Área útil"
          unit="m²"
          value={area}
          onChangeText={(value) => set({ area: value })}
        />
      </View>

      <View className="mb-[16px]"> {/* section */}
        <Text className="text-[16px] font-bold text-[#0F172A] mb-[8px]">Quartos</Text> {/* label */}
        <Stepper min={0} max={10} value={bedrooms} onValueChange={(value) => set({ bedrooms: value })} />
      </View>

      <View className="mb-[16px]"> {/* section */}
        <Text className="text-[16px] font-bold text-[#0F172A] mb-[8px]">Suítes</Text> {/* label */}
        <Stepper min={0} max={10} value={suites} onValueChange={(value) => set({ suites: value })} />
      </View>

      <View className="mb-[16px]"> {/* section */}
        <Text className="text-[16px] font-bold text-[#0F172A] mb-[8px]">Banheiros</Text> {/* label */}
        <Stepper min={0} max={10} value={bathrooms} onValueChange={(value) => set({ bathrooms: value })} />
      </View>

      <View className="mb-[16px]"> {/* section */}
        <Text className="text-[16px] font-bold text-[#0F172A] mb-[8px]">Vagas de garagem</Text> {/* label */}
        <Stepper min={0} max={10} value={garageSpaces} onValueChange={(value) => set({ garageSpaces: value })} />
      </View>

      <View className="mb-[16px]"> {/* section */}
        <Text className="text-[16px] font-bold text-[#0F172A] mb-[8px]">Condomínio (R$/mês)</Text> {/* label */}
        <CurrencyInput
          placeholder="Condomínio"
          value={condoFee}
          onChangeText={(value) => set({ condoFee: value })}
        />
      </View>

      <View className="mb-[16px]"> {/* section */}
        <Text className="text-[16px] font-bold text-[#0F172A] mb-[8px]">IPTU (R$)</Text> {/* label */}
        <CurrencyInput
          placeholder="IPTU"
          value={iptu}
          onChangeText={(value) => set({ iptu: value })}
        />
      </View>

      <View className="mb-[16px]"> {/* section */}
        <View className="flex-row justify-between items-center bg-white rounded-[8px] border border-[#E6EEF0] p-[12px]"> {/* switchContainer */}
          <Text className="text-[16px] font-bold text-[#0F172A]">Mobiliado</Text> {/* label */}
          <Switch
            trackColor={{ false: colors.border, true: colors.primary.medium }}
            thumbColor={furnished ? colors.primary.medium : colors.card}
            ios_backgroundColor={colors.border}
            onValueChange={(value) => set({ furnished: value })}
            value={furnished}
          />
        </View>
      </View>

      <View className="mb-[16px]"> {/* section */}
        <View className="flex-row justify-between items-center bg-white rounded-[8px] border border-[#E6EEF0] p-[12px]"> {/* switchContainer */}
          <Text className="text-[16px] font-bold text-[#0F172A]">Permitido animais</Text> {/* label */}
          <Switch
            trackColor={{ false: colors.border, true: colors.primary.medium }}
            thumbColor={petsAllowed ? colors.primary.medium : colors.card}
            ios_backgroundColor={colors.border}
            onValueChange={(value) => set({ petsAllowed: value })}
            value={petsAllowed}
          />
        </View>
      </View>

      <View className="mb-[16px]"> {/* section */}
        <View className="flex-row justify-between items-center bg-white rounded-[8px] border border-[#E6EEF0] p-[12px]"> {/* switchContainer */}
          <Text className="text-[16px] font-bold text-[#0F172A]">Aceita financiamento</Text> {/* label */}
          <Switch
            trackColor={{ false: colors.border, true: colors.primary.medium }}
            thumbColor={financingAccepted ? colors.primary.medium : colors.card}
            ios_backgroundColor={colors.border}
            onValueChange={(value) => set({ financingAccepted: value })}
            value={financingAccepted}
          />
        </View>
      </View>

      <View className="mb-[16px]"> {/* section */}
        <Text className="text-[16px] font-bold text-[#0F172A] mb-[8px]">Andar / Pavimentos</Text> {/* label */}
        <TextInput
          className="bg-white text-[#0F172A] rounded-[8px] p-[12px] text-[16px] border border-[#E6EEF0]" // input
          placeholder="Andar (ex: 5 de 12)"
          placeholderTextColor={colors.description} // textSecondary
          value={floor}
          onChangeText={(value) => set({ floor: value })}
        />
      </View>

      <View className="mb-[16px]"> {/* section */}
        <View className="flex-row justify-between items-center bg-white rounded-[8px] border border-[#E6EEF0] p-[12px]"> {/* switchContainer */}
          <Text className="text-[16px] font-bold text-[#0F172A]">Elevador</Text> {/* label */}
          <Switch
            trackColor={{ false: colors.border, true: colors.primary.medium }}
            thumbColor={elevator ? colors.primary.medium : colors.card}
            ios_backgroundColor={colors.border}
            onValueChange={(value) => set({ elevator: value })}
            value={elevator}
          />
        </View>
      </View>

      <View className="mb-[16px]"> {/* section */}
        <Text className="text-[16px] font-bold text-[#0F172A] mb-[8px]">Posição (frente/fundos)</Text> {/* label */}
        <Select
          placeholder="Selecione a posição"
          options={["Frente", "Fundos", "Lateral"]}
          selectedValue={position}
          onValueChange={(value) => set({ position: value })}
        />
      </View>

      <View className="mb-[16px]"> {/* section */}
        <View className="flex-row justify-between items-center bg-white rounded-[8px] border border-[#E6EEF0] p-[12px]"> {/* switchContainer */}
          <Text className="text-[16px] font-bold text-[#0F172A]">Mostrar telefone</Text> {/* label */}
          <Switch
            trackColor={{ false: colors.border, true: colors.primary.medium }}
            thumbColor={showPhoneNumber ? colors.primary.medium : colors.card}
            ios_backgroundColor={colors.border}
            onValueChange={(value) => set({ showPhoneNumber: value })}
            value={showPhoneNumber}
          />
        </View>
      </View>

      <Button title="Publicar anúncio" onPress={handleSubmit} variant="primary" />
      <View className="h-[50px]" />
    </ScrollView>
  );
};

export default CreateListingScreen;