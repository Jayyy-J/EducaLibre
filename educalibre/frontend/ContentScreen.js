import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';

// Importar el contenido JSON directamente
// En una app real, esto se manejaría de forma más dinámica (cargando desde un archivo)
import contentData from '../assets/C01_basico_alfabeto.json';

const ContentScreen = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular la carga de contenido
    setTimeout(() => {
      setContent(contentData);
      setLoading(false);
    }, 500); // Pequeño retraso para simular la carga
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={styles.centered} />;
  }

  if (!content) {
    return (
      <View style={styles.centered}>
        <Text>No se pudo cargar el contenido.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{content.title}</Text>
      <Text style={styles.level}>Nivel: {content.level}</Text>

      {content.content.map((item, index) => {
        if (item.type === 'paragraph') {
          return <Text key={index} style={styles.paragraph}>{item.text}</Text>;
        }
        // Aquí se podrían añadir más tipos de contenido (imágenes, etc.)
        return null;
      })}

      {content.quiz && (
        <View style={styles.quizContainer}>
          <Text style={styles.quizQuestion}>{content.quiz.question}</Text>
          {content.quiz.options.map((option, index) => (
            <Text key={index} style={styles.quizOption}>- {option}</Text>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  level: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#666',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 18,
    lineHeight: 26,
    marginBottom: 15,
  },
  quizContainer: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  quizQuestion: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  quizOption: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 5,
  },
});

export default ContentScreen;
