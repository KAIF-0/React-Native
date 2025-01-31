import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Search = () => {
    const {query} = useLocalSearchParams();
    console.log(query);
  return (
    <View>
      <Text>query</Text>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})