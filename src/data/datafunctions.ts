import AsyncStorage from '@react-native-async-storage/async-storage';

export async function generateSequentialKey(): Promise<string> {
  let sequenceCounter;

  try {
    const storedCounter = await AsyncStorage.getItem('sequenceCounter');

    sequenceCounter = storedCounter ? parseInt(storedCounter, 10) : 0;

    sequenceCounter += 1;

    await AsyncStorage.setItem('sequenceCounter', sequenceCounter.toString());

    return sequenceCounter.toString();
  } catch (error) {
    console.error('Erro ao gerar chave sequencial:', error);
    throw error;
  }
}

export async function addItem(key: string, newItem: { old?: string, typee?: string, area?: string, movie?: string }) {
  try {
    const existingItems = await AsyncStorage.getItem(key);
    const itemsObject = existingItems ? JSON.parse(existingItems) : {};

    Object.assign(itemsObject, newItem);

    await AsyncStorage.setItem(key, JSON.stringify(itemsObject));

  } catch (error) {
    console.error('Erro ao adicionar item:', error);
  }
};

export async function getItemsByKey(key: string) {
  try {
    const items = await AsyncStorage.getItem(key);

    if (items !== null) {
      return JSON.parse(items);
    }

    return {};
  } catch (error) {
    console.error('Erro ao obter itens:', error);
    return {};
  }
};

const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('Todos os dados do AsyncStorage foram removidos com sucesso.');
  } catch (error) {
    console.error('Erro ao limpar o AsyncStorage:', error);
  }
};

const fetchData = async (key?: string) => {
  try {
    if (key) {
      const items = await getItemsByKey(key);
    }
    else {
      const storedCounter = await AsyncStorage.getItem('sequenceCounter');
      const numItems = storedCounter ? parseInt(storedCounter, 10) : 0

      for (let i = numItems; i >= 1; i--) {
        const item = await getItemsByKey(i.toString())
        console.log( '-' + i + '-', item)
      }
    }

  } catch (error) {
    console.error('Erro ao obter itens:', error);
  }
};

//clearAsyncStorage();
fetchData();