import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import Background from '../components/Background1';
import questions from '../data/questions'; // Tạo file chứa danh sách câu hỏi

const RandomTest = () => {
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(-1)); // Mảng lưu trạng thái đáp án đã chọn cho mỗi câu hỏi

  const handleAnswerPress = (questionIndex, answerIndex) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = answerIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>{item.question}</Text>
      {item.answers.map((answer, answerIndex) => (
        <TouchableOpacity
          key={answerIndex}
          style={[
            styles.answerButton,
            selectedAnswers[index] === answerIndex && styles.selectedAnswerButton // Highlight đáp án đã chọn
          ]}
          onPress={() => handleAnswerPress(index, answerIndex)}
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
      />
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
    backgroundColor: '#DC5F00', // Màu highlight khi đáp án được chọn
  },
  answerText: {
    fontSize: 16,
  },
});

export default RandomTest;
