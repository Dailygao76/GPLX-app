import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

const List = ({ data, ItemComponent, column }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ItemComponent item={item} />
      )}
      numColumns={column}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 2,
    marginTop: 7,
  },
});

export default List;
