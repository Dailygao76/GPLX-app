import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import Background from '../components/Background1';
import questions from '../data/questions'; // Tạo file chứa danh sách câu hỏi

const RandomTest = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(-1)); // Mảng lưu index của đáp án đã chọn

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleAnswerPress = (index) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = index;
    setSelectedAnswers(newSelectedAnswers);
  };

  const renderItem = ({ item }) => (
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>{item.question}</Text>
      {item.answers.map((answer, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.answerButton,
            selectedAnswers[currentQuestionIndex] === index && styles.selectedAnswerButton // Highlight đáp án đã chọn
          ]}
          onPress={() => handleAnswerPress(index)}
        >
          <Text style={styles.answerText}>{answer}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <Background>
      <FlatList
        data={questions}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / Dimensions.get('window').width);
          setCurrentQuestionIndex(index);
        }}
      />
      <TouchableOpacity style={styles.button} onPress={handleNextQuestion}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </Background>
  );
};

const styles = StyleSheet.create({
  questionContainer: {
    width: Dimensions.get('window').width,
    padding: 20,
  },
  questionText: {
    fontSize: 18,
    textAlign: 'center',
  },
  answerButton: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
  selectedAnswerButton: {
    backgroundColor: 'green', // Màu highlight khi đáp án được chọn
  },
  answerText: {
    fontSize: 16,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default RandomTest;
